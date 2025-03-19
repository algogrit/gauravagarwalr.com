
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Send, 
  MapPin, 
  Mail, 
  Phone, 
  Linkedin, 
  Github, 
  Twitter,
  CheckCircle2
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
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
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          <div className="animate-fade-right opacity-0" style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}>
            <Card className="overflow-hidden border-0 shadow-lg shadow-primary/10">
              <CardContent className="p-8">
                <div className="text-2xl font-bold mb-6">Send me a message</div>
                
                {submitted ? (
                  <div className="h-80 flex flex-col items-center justify-center text-center space-y-4">
                    <div className="h-20 w-20 rounded-full bg-green-50 flex items-center justify-center mb-4">
                      <CheckCircle2 className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold">Thank You!</h3>
                    <p className="text-muted-foreground max-w-sm">
                      Your message has been received. I'll get back to you as soon as possible.
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setSubmitted(false)}
                      className="mt-4"
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="text-sm font-medium block mb-1.5">
                          Name
                        </label>
                        <Input 
                          id="name" 
                          placeholder="Your name" 
                          required 
                          className="bg-secondary/30"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="text-sm font-medium block mb-1.5">
                          Email
                        </label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="Your email" 
                          required
                          className="bg-secondary/30"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="text-sm font-medium block mb-1.5">
                        Subject
                      </label>
                      <Input 
                        id="subject" 
                        placeholder="Subject of your message" 
                        required
                        className="bg-secondary/30"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="text-sm font-medium block mb-1.5">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Your message" 
                        required 
                        rows={5}
                        className="resize-none bg-secondary/30"
                      />
                    </div>
                    
                    <div>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
          
          <div className="animate-fade-left opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary/90 p-3 rounded-lg mr-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">San Francisco, California</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/90 p-3 rounded-lg mr-4">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:john.doe@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    john.doe@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/90 p-3 rounded-lg mr-4">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+14155551234" className="text-muted-foreground hover:text-primary transition-colors">
                    +1 (415) 555-1234
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Connect with me</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-secondary/90 p-3 rounded-lg hover:bg-primary hover:text-white transition-all">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="bg-secondary/90 p-3 rounded-lg hover:bg-primary hover:text-white transition-all">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="bg-secondary/90 p-3 rounded-lg hover:bg-primary hover:text-white transition-all">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="bg-secondary/90 p-3 rounded-lg hover:bg-primary hover:text-white transition-all">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Availability</h3>
              <p className="text-balance text-muted-foreground">
                I'm currently available for freelance work, contract positions, or 
                discussing full-time opportunities. Feel free to reach out to discuss 
                how we can work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
