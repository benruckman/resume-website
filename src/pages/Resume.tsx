
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/lovable-uploads/Ben Ruckman.pdf';
    link.download = 'Ben Ruckman - Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container-custom py-12">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-3xl font-bold">Resume</h1>
            <p className="text-muted-foreground">View or download my professional resume</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button onClick={handleDownload} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="w-full border rounded-lg overflow-hidden shadow-lg bg-background">
            <div className="relative w-full h-[calc(100vh-300px)] min-h-[500px]">
              <iframe 
                src="/lovable-uploads/Ben Ruckman.pdf" 
                title="Ben Ruckman Resume"
                className="absolute top-0 left-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
