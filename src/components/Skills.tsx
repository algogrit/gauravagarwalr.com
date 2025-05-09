import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { skillCategories } from '@/data/skillsData';

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Skills & Expertise
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div ref={skillsRef} className="max-w-5xl mx-auto animate-fade-up opacity-0" style={{ animationDelay: '300ms', animationFillMode: 'forwards' }}>
          <div className="space-y-4">
            {skillCategories.map((category) => (
              <div key={category.name} className="border rounded-lg overflow-hidden print:border-none print:break-inside-avoid">
                <div className="px-4 py-3 bg-muted/30 flex items-center gap-2 font-medium">
                  {category.icon}
                  <span>{category.name}</span>
                </div>
                <Card>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 print:grid-cols-6">
                      {category.skills.map((skill, index) => (
                        <div
                          key={skill.name}
                          className={`bg-muted/50 rounded-lg p-3 flex flex-col items-center text-center transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                          style={{ transitionDelay: `${index * 50}ms` }}
                        >
                          <div className="mb-2 inline-flex items-center justify-center">
                            <skill.type label={skill.label} filetype={skill.filetype} tooltip={skill.name}/>
                          </div>
                          <h3 className="font-medium text-sm mb-1">{skill.name}</h3>
                          <p className="text-xs text-muted-foreground print:hidden">{skill.description}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
