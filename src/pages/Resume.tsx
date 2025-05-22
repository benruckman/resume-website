
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Download, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from "sonner";
import { ScrollArea } from "@/components/ui/scroll-area";
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
  const totalPages = 2; // Set this to the actual number of pages in your PDF

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
      // Scroll back to top when changing pages
      window.scrollTo(0, 0);
    }
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
            <ScrollArea className="w-full" style={{ height: "calc(100vh - 300px)" }}>
              <iframe 
                src={`${pdfUrl}#page=${currentPage}`}
                title="Ben Ruckman Resume"
                className="w-full h-full"
                style={{ border: 'none', minHeight: '80vh' }}
              />
            </ScrollArea>
          </div>

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
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Resume;
