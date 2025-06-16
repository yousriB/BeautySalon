import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-primary/5 to-primary/10 pt-32">
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="animate-fade-up">
          <div className="text-9xl md:text-[12rem] font-playfair font-bold text-primary/20 mb-4">
            404
          </div>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-accent mb-6">
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Oops! The page you're looking for seems to have disappeared. Don't
            worry, even the best stylists sometimes take a wrong turn.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="btn-primary text-lg px-8 py-4 group">
                <Home className="w-5 h-5 mr-2" />
                Go Home
              </Button>
            </Link>
            <Button
              onClick={() => window.history.back()}
              className="btn-secondary text-lg px-8 py-4 group"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Go Back
            </Button>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Need help finding what you're looking for?
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/services" className="text-primary hover:underline">
                Our Services
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/booking" className="text-primary hover:underline">
                Book Appointment
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/portfolio" className="text-primary hover:underline">
                View Portfolio
              </Link>
              <span className="text-gray-600">•</span>
              <Link to="/about" className="text-primary hover:underline">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
