
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Menu, Moon, Sun } from 'lucide-react';
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { useIsMobile } from '@/hooks/use-mobile';

const Header = () => {
  const isMobile = useIsMobile();
  // Set dark mode as default
  const [darkMode, setDarkMode] = React.useState(true);

  React.useEffect(() => {
    // Apply dark mode on initial load
    document.documentElement.classList.add('dark');
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  const MobileMenu = () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-lg font-medium px-2 py-1 rounded hover:bg-secondary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="font-mono font-bold text-xl">
          <a href="#" className="flex items-center gap-2">
            <span className="text-primary">&lt;</span>
            <span>Ben.dev</span>
            <span className="text-primary">/&gt;</span>
          </a>
        </div>
        
        {!isMobile ? (
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <a href="https://github.com/benruckman" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </a>
              <a href="https://linkedin.com/in/ben-ruckman" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </a>
              <a href="mailto:benjamin.ruckman@outlook.com">
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </a>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleDarkMode}
                className="ml-1"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
                <span className="sr-only">Toggle dark mode</span>
              </Button>
            </div>
          </nav>
        ) : (
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleDarkMode}
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
              <span className="sr-only">Toggle dark mode</span>
            </Button>
            <MobileMenu />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
