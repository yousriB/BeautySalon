import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Award,
  Users,
  Calendar,
  ArrowRight,
  Sparkles,
  Heart,
} from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredServices = [
    {
      title: "Signature Facial",
      description:
        "Rejuvenating facial treatment with premium skincare products",
      price: "From $120",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
    },
    {
      title: "Hair Styling & Color",
      description:
        "Professional cuts, coloring, and styling by expert stylists",
      price: "From $85",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    },
    {
      title: "Nail Artistry",
      description: "Manicure, pedicure, and custom nail art designs",
      price: "From $45",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
    },
  ];

  const stats = [
    { icon: Users, number: "5000+", label: "Happy Clients" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: Star, number: "4.9", label: "Average Rating" },
    { icon: Calendar, number: "500+", label: "Monthly Appointments" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=1920&h=1080&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div
          className={`relative z-10 text-center text-white px-4 max-w-4xl mx-auto transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-primary/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">
              Premium Beauty Experience
            </span>
          </div>

          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Where Beauty
            <span className="block text-primary">Meets Serenity</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90 max-w-2xl mx-auto">
            Experience luxury beauty services in our tranquil salon.
            Professional treatments that enhance your natural beauty and restore
            your inner peace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/booking">
              <Button className="btn-primary text-lg px-10 py-6 group">
                Book Your Session
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/services">
              <Button className="btn-secondary text-lg px-10 py-6 bg-white/10 border-white text-white hover:bg-white hover:text-accent">
                View Services
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-playfair text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-4">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Our Specialties</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-4">
              Featured Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Indulge in our signature treatments designed to enhance your
              natural beauty and provide ultimate relaxation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <Card
                key={index}
                className="group card-hover bg-white border-0 shadow-lg overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-semibold text-accent mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <Link to="/booking">
                    <Button className="btn-secondary w-full group">
                      Book Now
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner */}
      <section className="py-16 bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container-custom">
          <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl animate-scale-in">
            <CardContent className="p-12 text-center">
              <div className="inline-flex items-center space-x-2 bg-primary/20 rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">
                  Limited Time Offer
                </span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-4">
                New Client Special
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                First-time clients receive 25% off any service package.
                Experience the Serenity difference with our welcome offer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/booking">
                  <Button className="btn-primary text-lg px-10 py-6">
                    Claim Your Discount
                  </Button>
                </Link>
                <Link to="/services">
                  <Button className="btn-secondary text-lg px-10 py-6">
                    View All Services
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-4">
              Why Choose Serenity?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing an exceptional beauty experience that
              goes beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Professionals",
                description:
                  "Our certified stylists and therapists bring years of experience and ongoing education to every service.",
                icon: Award,
              },
              {
                title: "Premium Products",
                description:
                  "We use only the finest, cruelty-free products from leading beauty brands for optimal results.",
                icon: Sparkles,
              },
              {
                title: "Relaxing Atmosphere",
                description:
                  "Our serene environment is designed to help you unwind and enjoy a peaceful escape from daily stress.",
                icon: Heart,
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="card-hover bg-white border-0 shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-accent mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <div className="animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-6">
              Ready to Experience Serenity?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Book your appointment today and discover why our clients trust us
              with their beauty and wellness journey.
            </p>
            <Link to="/booking">
              <Button className="btn-primary text-lg px-12 py-6 group">
                Book Your Appointment
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
