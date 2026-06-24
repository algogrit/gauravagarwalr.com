/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** YouTube Data API v3 key. Browser-exposed — restrict it to your domain
   *  (HTTP referrer) and to the YouTube Data API in the Google Cloud console. */
  readonly VITE_YOUTUBE_API_KEY?: string;
  /** Playlist ID for the Talks section. Falls back to the default in Talks.tsx. */
  readonly VITE_TALKS_PLAYLIST_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
