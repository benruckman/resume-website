
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container-custom">
        <h2 className="section-heading">Education</h2>
        
        <Card className="border border-border/60">
          <CardHeader className="space-y-1">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div className="flex items-center gap-3">
                <div className="bg-secondary p-2 rounded">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">University of Utah</h3>
                  <div className="text-lg text-primary">BS, Computer Science</div>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="mr-1 h-4 w-4" />
                <span>8/2019 – 12/2023</span>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                <span>Salt Lake City, UT</span>
              </div>
              <div className="flex items-center text-sm">
                <Award className="mr-1 h-4 w-4 text-amber-500" />
                <span>Dean's List: 3.2/4.0 GPA</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Education;
