import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Download, Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '@/contexts/ThemeContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const prepareAndPrint = () => {
      if (theme === 'dark') {
        toggleTheme();
      }
      window.scrollTo({left: 0, top: document.body.scrollHeight, behavior: 'smooth'});

      setTimeout(window.print, 800);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b print:hidden',
        isScrolled
          ? 'backdrop-blur-lg bg-white/80 dark:bg-black/30 border-gray-200/20'
          : 'bg-transparent border-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <Link
            to="/"
            className="text-xl font-semibold tracking-tight font-display animate-fade-in"
          >
            Gaurav Agarwal
          </Link>

          {/* Theme toggle button for desktop */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center space-x-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-primary/90 animate-fade-down',
                    'opacity-0'
                  )}
                  style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'forwards' }}
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="outline"
                size="sm"
                className="ml-4 animate-fade-down opacity-0"
                style={{ animationDelay: `${navLinks.length * 50}ms`, animationFillMode: 'forwards' }}
                onClick={prepareAndPrint}
              >
                <Download size={16} className="mr-2" />
                Resume
              </Button>
            </nav>
            <ThemeToggle className="mr-4" />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      <div
        className={cn(
          'md:hidden transition-all duration-300 ease-in-out overflow-hidden blur-backdrop',
          isMenuOpen ? 'max-h-96 border-t border-gray-200/20' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 py-3">
          <nav className="flex flex-col space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium px-2 py-2 hover:bg-secondary/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <ThemeToggle className="self-start my-2" />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
