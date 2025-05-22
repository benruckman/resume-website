
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from "sonner";
import { useIsMobile } from '@/hooks/use-mobile';

const Resume = () => {
  const pdfUrl = '/lovable-uploads/ben-ruckman.pdf';
  const pdfFileName = 'Ben_Ruckman_Resume.pdf';
  const isMobile = useIsMobile();

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Download started");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full overflow-hidden pb-16">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col items-center mb-4">
            <h1 className="text-3xl font-bold">Resume</h1>
            <p className="text-muted-foreground">View or download my professional resume</p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center mb-4">
            <Button onClick={handleDownload} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            <Button 
              variant="outline" 
              onClick={() => window.open(pdfUrl, '_blank')}
              className="flex items-center gap-2"
            >
              <FileText className="h-4 w-4" />
              Open in New Tab
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
