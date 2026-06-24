import React, { useEffect, useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const PLAYLIST_ID =
  import.meta.env.VITE_TALKS_PLAYLIST_ID || 'PL7qtxrxCQ5DBhg0p9p8nDx58FvFR2GVe2';
const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
const PLAYLIST_URL = `https://www.youtube.com/playlist?list=${PLAYLIST_ID}`;

// How many talks to feature before linking out to the full playlist. We fetch 4
// (clean 2x2 on tablet, 4 stacked on mobile) and hide the 4th on large screens
// so desktop's 3-column grid stays a single tidy row.
const MAX_TALKS = 4;

interface Talk {
  videoId: string;
  title: string;
  thumbnail: string;
}

type Status = 'loading' | 'ready' | 'error';

// Titles YouTube returns for videos that can't be played/listed.
const UNAVAILABLE = new Set(['Private video', 'Deleted video']);

const watchUrl = (videoId: string) =>
  `https://www.youtube.com/watch?v=${videoId}&list=${PLAYLIST_ID}`;

const Talks = () => {
  const [talks, setTalks] = useState<Talk[]>([]);
  const [hasMore, setHasMore] = useState(false);
  // Without a key we can't list videos — degrade straight to the playlist link.
  const [status, setStatus] = useState<Status>(API_KEY ? 'loading' : 'error');

  useEffect(() => {
    if (!API_KEY) return;

    const controller = new AbortController();

    const load = async () => {
      try {
        const url = new URL('https://www.googleapis.com/youtube/v3/playlistItems');
        url.searchParams.set('part', 'snippet');
        // Fetch a few extra so filtered-out private/deleted videos don't leave
        // us short of the MAX_TALKS we want to feature.
        url.searchParams.set('maxResults', String(MAX_TALKS + 3));
        url.searchParams.set('playlistId', PLAYLIST_ID);
        url.searchParams.set('key', API_KEY);

        const res = await fetch(url.toString(), { signal: controller.signal });
        if (!res.ok) throw new Error(`YouTube API ${res.status}`);
        const data = await res.json();

        const collected: Talk[] = [];
        for (const item of data.items ?? []) {
          const snippet = item.snippet ?? {};
          const videoId = snippet.resourceId?.videoId;
          const title = snippet.title ?? '';
          const thumb =
            snippet.thumbnails?.medium?.url ?? snippet.thumbnails?.default?.url;
          if (!videoId || !thumb || UNAVAILABLE.has(title)) continue;
          collected.push({ videoId, title, thumbnail: thumb });
        }

        const featured = collected.slice(0, MAX_TALKS);
        const total = data.pageInfo?.totalResults ?? collected.length;
        setTalks(featured);
        setHasMore(total > featured.length);
        setStatus(featured.length ? 'ready' : 'error');
      } catch (err) {
        if ((err as Error).name !== 'AbortError') setStatus('error');
      }
    };

    load();
    return () => controller.abort();
  }, []);

  return (
    <section id="talks" className="py-16 sm:py-24 print:hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Talks
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0 text-balance" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Conference talks and meetups I've spoken at.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {status === 'loading' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="aspect-video w-full rounded-lg" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
              ))}
            </div>
          )}

          {status === 'ready' && (
            <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {talks.map((talk, index) => (
                <a
                  key={talk.videoId}
                  href={watchUrl(talk.videoId)}
                  target="_blank"
                  rel="noopener noreferrer"
                  // 4th talk shows on mobile/tablet, hidden on desktop's 3-col grid.
                  className={`group block ${index === 3 ? 'lg:hidden' : ''}`}
                >
                  <Card className="overflow-hidden h-full transition-shadow hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden bg-muted">
                      <img
                        src={talk.thumbnail}
                        alt={talk.title}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                          <Play className="h-5 w-5 translate-x-0.5 text-black" fill="currentColor" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="line-clamp-2 text-sm font-medium group-hover:text-primary">
                        {talk.title}
                      </h3>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
            {hasMore && (
              <div className="mt-10 text-center">
                <a
                  href={PLAYLIST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  Watch more on YouTube
                </a>
              </div>
            )}
            </>
          )}

          {status === 'error' && (
            <div className="text-center">
              <a
                href={PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <ExternalLink className="h-4 w-4" />
                Watch the talks playlist on YouTube
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Talks;
