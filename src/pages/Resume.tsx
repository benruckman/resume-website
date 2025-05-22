
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, FileText } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";
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

          <div className="w-full border rounded-lg overflow-hidden shadow-lg bg-background mb-8">
            <ScrollArea className="w-full" style={{ height: isMobile ? "calc(100vh - 300px)" : "calc(100vh - 250px)" }}>
              <iframe 
                src={`${pdfUrl}#view=FitH`}
                title="Ben Ruckman Resume"
                className="w-full h-full"
                style={{ 
                  border: 'none', 
                  height: isMobile ? '150vh' : '180vh', 
                  minHeight: isMobile ? '800px' : '1000px',
                  overflow: 'hidden'
                }}
              />
            </ScrollArea>
          </div>
          
          <div className="text-center text-sm text-muted-foreground mb-8">
            All pages are displayed in continuous scroll view
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
