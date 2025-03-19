
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} John Doe. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center text-sm text-muted-foreground">
            <span>Crafted with</span>
            <Heart className="h-4 w-4 mx-1 text-red-500" />
            <span>and precision</span>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sitemap</a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
