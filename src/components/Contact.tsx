import React from 'react';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <section id="contact" className="py-24 sm:py-32 print:hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Get In Touch
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up opacity-0 text-balance" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you.
          </p>
        </div>

        <div className='flex mb-20'>
          <Button size="lg" className="mx-auto min-w-[160px]" onClick={() => {window.location.href = "mailto:algogrit@gmail.com?subject=Let's work together"}}>
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </div>

        <iframe title="Talks" className="mx-auto" width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL7qtxrxCQ5DBhg0p9p8nDx58FvFR2GVe2" allowFullScreen></iframe>

      </div>
    </section>
  );
};

export default Contact;
