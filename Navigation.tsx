import { Button } from "@/components/ui/button";
import { 
  Menu, 
  X, 
  Droplets, 
  ExternalLink,
  Home
} from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#", icon: Home, action: scrollToTop },
    { name: "Features", href: "#features" },
    { name: "Technology", href: "#tech-stack" },
    { name: "Demo", href: "#demo" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-water-primary to-water-secondary rounded-lg flex items-center justify-center">
              <Droplets className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg text-foreground">AquaWise</div>
              <div className="text-xs text-water-primary font-medium">Guardians</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                onClick={item.action || (() => {})}
                className="text-foreground hover:text-water-primary transition-colors font-medium flex items-center gap-1"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.name}
              </a>
            ))}
          </nav>
          
          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost">
              <ExternalLink className="mr-2 h-4 w-4" />
              Documentation
            </Button>
            <Button variant="hero">
              Request Demo
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    item.action?.();
                    setIsMenuOpen(false);
                  }}
                  className="block text-foreground hover:text-water-primary transition-colors font-medium flex items-center gap-2 px-4 py-2"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3 px-4">
                <Button variant="outline" className="w-full">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Documentation
                </Button>
                <Button variant="hero" className="w-full">
                  Request Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;