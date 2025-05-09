
import React, { useEffect, useRef } from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Simple intersection observer to trigger animations when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const animatedElements = target.querySelectorAll('.should-animate');

            animatedElements.forEach(element => {
              element.classList.add('is-visible');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Clean up
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl should-animate animate-fade-up print:hidden"
              style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            About Me
          </h2>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl should-animate animate-fade-up hidden print:block"
              style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Gaurav Agarwal
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary/20 mx-auto rounded-full print:hidden"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 should-animate animate-fade-right"
               style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary" className="text-sm">Problem Solver</Badge>
                <Badge variant="secondary" className="text-sm">Detail-Oriented</Badge>
                <Badge variant="secondary" className="text-sm">Adaptable</Badge>
                <Badge variant="secondary" className="text-sm">Team Player</Badge>
                <Badge variant="secondary" className="text-sm">Fast Learner</Badge>
              </div>

              <p className="text-lg text-balance leading-relaxed">
                I am a generalist software engineer who has worked across the stack and is equally comfortable with scaling up services as well as creating beautiful 2D and 3D visualizations.
              </p>

              <p className="text-lg text-balance leading-relaxed">
                I'm a full-stack developer who started his career in 2012 gaining experience building robust web applications and digital experiences that prioritize user needs and business objectives.
              </p>

              <p className="text-lg text-balance leading-relaxed">
                My approach to development is centered around creating clean, maintainable code that scales well and provides intuitive user experiences. I believe in the power of simplicity and the importance of attention to detail.
              </p>

              <p className="text-lg text-balance leading-relaxed print:hidden">
                When I'm not coding, you'll find me hiking in nature, exploring music, or diving into a good book about technology and innovation.
              </p>

              <div className="pt-4">
                <h3 className="font-medium text-lg mb-3">What drives me</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Building products that make a positive impact</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Solving complex problems with elegant solutions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                    <span>Continuous learning and sharing knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 should-animate animate-fade-left print:hidden"
               style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative overflow-hidden rounded-2xl border">
                <AspectRatio ratio={4/5} className="bg-muted">
                  <img
                    src="/Gaurav.jpeg"
                    alt="Professional portrait"
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
