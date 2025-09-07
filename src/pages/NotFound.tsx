import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
          <AlertCircle className="w-12 h-12 text-primary" />
        </div>
        
        <h1 className="text-6xl font-heading font-bold text-gradient mb-4">404</h1>
        
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
          Page Not Found
        </h2>
        
        <p className="text-muted-foreground mb-8 leading-relaxed">
          The page you're looking for doesn't exist or has been moved. 
          Let's get you back to safety.
        </p>
        
        <Button className="btn-hero" asChild>
          <a href="/">
            <Home className="w-4 h-4 mr-2" />
            Return Home
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
