import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Download, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Resume = () => {
  const pdfUrl = '/lovable-uploads/ben-ruckman.pdf';
  const pdfFileName = 'Ben_Ruckman_Resume.pdf';
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Total of 3 pages in the resume
  const isMobile = useIsMobile();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success("Download started");
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      
      // Always force iframe reload when changing pages for more reliable page navigation
      const iframe = iframeRef.current;
      if (iframe) {
        // Use src attribute directly to force a reload with the new page
        iframe.src = `${pdfUrl}#page=${page}`;
        
        // For some browsers, we need to reload the iframe to ensure the page change
        setTimeout(() => {
          const currentSrc = iframe.src;
          iframe.src = '';
          setTimeout(() => {
            iframe.src = currentSrc;
          }, 50);
        }, 100);
      }
      
      // Scroll back to top when changing pages
      window.scrollTo(0, 0);
    }
  };

  // Effect to ensure PDF loads at the correct page
  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      // Small delay to ensure the iframe is ready
      setTimeout(() => {
        iframe.src = `${pdfUrl}#page=${currentPage}`;
      }, 100);
    }
  }, [currentPage, pdfUrl]);

  // Create a unique src for the iframe based on page to force reload
  const getIframeSrc = () => {
    // Add a timestamp to the src to force a reload
    return `${pdfUrl}#page=${currentPage}&t=${Date.now()}`;
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

          {/* Move pagination above the PDF on mobile for better usability */}
          {isMobile && (
            <Pagination className="mb-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}

          <div className="w-full border rounded-lg overflow-hidden shadow-lg bg-background mb-8">
            <ScrollArea className="w-full" style={{ height: isMobile ? "calc(100vh - 400px)" : "calc(100vh - 300px)" }}>
              {/* Key prop forces React to recreate the iframe when currentPage changes */}
              <iframe 
                key={`pdf-page-${currentPage}`}
                src={getIframeSrc()}
                title={`Ben Ruckman Resume - Page ${currentPage}`}
                className="w-full h-full"
                style={{ border: 'none', minHeight: isMobile ? '70vh' : '80vh' }}
              />
            </ScrollArea>
          </div>

          {/* Keep pagination below the PDF on desktop */}
          {!isMobile && (
            <Pagination className="mb-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(currentPage - 1)}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      isActive={currentPage === page}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => handlePageChange(currentPage + 1)}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}

          {/* Add a simple page indicator for mobile */}
          {isMobile && (
            <div className="text-center text-sm text-muted-foreground mb-8">
              Page {currentPage} of {totalPages}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
