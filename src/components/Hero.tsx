
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const opacity = 1 - scrollPosition / 700;
      const transform = `translateY(${scrollPosition * 0.4}px)`;
      
      if (opacity > 0) {
        heroRef.current.style.opacity = opacity.toString();
        heroRef.current.style.transform = transform;
      }
    };

    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"
        aria-hidden="true"
      />
      
      <div
        ref={heroRef}
        className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 text-center"
      >
        <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80 mb-6 animate-fade-down opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
          Full Stack Developer
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight animate-fade-down opacity-0 text-balance" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          Building digital experiences<br className="hidden sm:block" /> with precision & purpose
        </h1>
        
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-down opacity-0 text-balance" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
          I'm John Doe, a passionate developer focused on creating intuitive and
          impactful web applications that solve real-world problems with elegant solutions.
        </p>
        
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
          <Button size="lg" className="min-w-[160px]">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          <Button variant="outline" size="lg" className="min-w-[160px]">
            View My Work
          </Button>
        </div>
        
        <div className="mt-12 flex justify-center space-x-6 animate-fade-up opacity-0" style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
      
      <a 
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-sm font-medium animate-bounce"
        aria-label="Scroll down"
      >
        <span className="mb-2 text-muted-foreground">Scroll</span>
        <ArrowDown className="h-5 w-5 text-muted-foreground" />
      </a>
    </section>
  );
};

export default Hero;
