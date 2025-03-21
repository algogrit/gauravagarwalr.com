
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils';

type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  description: string;
  achievements?: string[];
};

const educationData: EducationItem[] = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "Anna University, Chennai",
    period: "2008 - 2012",
    description: "Specialized in Data Warehousing, Mining and Computer Networking",
    achievements: [
      "GPA: 7.71",
      "Won Intra department Paper Presentation Competitions"
    ]
  },
  {
    degree: "State Board",
    institution: "Doveton Matriculation Higher Secondary School",
    period: "2006 - 2008",
    description: "Physics, Chemistry, Maths and Computer Science",
    achievements: [
      "Marks: 934",
      "Taken part in Endurance Running"
    ]
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 sm:py-32 bg-secondary/30 print:break-inside-avoid">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl animate-fade-up opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            Education & Certifications
          </h2>
          <div className="mt-2 h-1 w-20 bg-primary/20 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {educationData.map((item, index) => (
              <Card key={item.degree} className={cn(
                "overflow-hidden animate-fade-up opacity-0",
                "border-0 shadow-md shadow-primary/5 print:shadow-none"
              )} style={{ animationDelay: `${300 + index * 200}ms`, animationFillMode: 'forwards' }}>
                <div className="h-2 bg-primary/80" />
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-secondary">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                  <p className="text-muted-foreground mb-4">{item.institution}</p>

                  <p className="mb-4 text-balance">{item.description}</p>

                  {item.achievements && (
                    <div>
                      <h4 className="text-sm uppercase tracking-wider text-muted-foreground font-medium mb-2">Highlights</h4>
                      <ul className="space-y-1.5">
                        {item.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary mt-2 mr-2"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
