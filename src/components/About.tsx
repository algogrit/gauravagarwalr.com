
import React from 'react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Badge } from '@/components/ui/badge';

const About = () => {
  return (
    <section id="about" className="py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            About Me
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-right opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="secondary" className="text-sm">Problem Solver</Badge>
                <Badge variant="secondary" className="text-sm">Detail-Oriented</Badge>
                <Badge variant="secondary" className="text-sm">Adaptable</Badge>
                <Badge variant="secondary" className="text-sm">Team Player</Badge>
                <Badge variant="secondary" className="text-sm">Fast Learner</Badge>
              </div>
              
              <p className="text-lg text-balance leading-relaxed">
                I'm a full-stack developer with over 5 years of experience building robust web applications and digital experiences that prioritize user needs and business objectives.
              </p>
              
              <p className="text-lg text-balance leading-relaxed">
                My approach to development is centered around creating clean, maintainable code that scales well and provides intuitive user experiences. I believe in the power of simplicity and the importance of attention to detail.
              </p>
              
              <p className="text-lg text-balance leading-relaxed">
                When I'm not coding, you'll find me hiking in nature, exploring photography, or diving into a good book about technology and innovation.
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
          
          <div className="order-1 lg:order-2 animate-fade-left opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-70"></div>
              <div className="relative overflow-hidden rounded-2xl border">
                <AspectRatio ratio={4/5} className="bg-muted">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
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
