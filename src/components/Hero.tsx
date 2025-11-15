import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import companyLogo from "@/assets/company-logo.jpeg";

const Hero = () => {
  const handleCall = () => {
    window.location.href = "tel:+14699274674";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/14699274674", "_blank");
  };

  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-background via-section-bg to-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center space-y-10 animate-fade-in">
          
          <div className="flex items-center justify-center mb-4">
            <img 
              src={companyLogo} 
              alt="2 Guys Home Repair LLC" 
              className="h-40 w-auto md:h-48 object-contain"
            />
          </div>
          
          <div className="space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Professional Home Repair Services in <span className="text-primary">Cedar Hill, TX</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              Quality commercial and residential repairs you can trust. Licensed, insured, and committed to excellence since day one.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
            <Button 
              size="lg" 
              onClick={handleCall}
              className="text-lg px-10 py-7 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call: 469-927-4674
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={handleWhatsApp}
              className="text-lg px-10 py-7 border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get Free Estimate
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl pt-8">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="font-semibold text-foreground">Licensed & Insured</span>
              <span className="text-sm text-muted-foreground">Full coverage protection</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <svg className="h-7 w-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="font-semibold text-foreground">Free Estimates</span>
              <span className="text-sm text-muted-foreground">No obligation quotes</span>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-all duration-300">
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse"></div>
              </div>
              <span className="font-semibold text-foreground">Commercial & Residential</span>
              <span className="text-sm text-muted-foreground">All project types</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
