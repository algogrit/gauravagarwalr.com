
import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" aria-hidden="true" />
      
      <div className="animate-fade-down opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
        <h1 className="text-7xl md:text-9xl font-bold">404</h1>
      </div>
      
      <div className="mt-4 mb-8 animate-fade-down opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
        <h2 className="text-2xl md:text-3xl font-medium">Page not found</h2>
        <p className="mt-4 text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
      </div>
      
      <div className="animate-fade-up opacity-0" style={{ animationDelay: '500ms', animationFillMode: 'forwards' }}>
        <Link to="/">
          <Button size="lg" className="gap-2">
            <Home size={18} />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
