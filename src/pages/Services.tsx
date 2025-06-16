import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Clock,
  Star,
  ArrowRight,
  Scissors,
  Sparkles,
  Heart,
  Palette,
} from "lucide-react";

const Services = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Services", icon: Sparkles },
    { id: "hair", name: "Hair Services", icon: Scissors },
    { id: "facial", name: "Facial Treatments", icon: Heart },
    { id: "nails", name: "Nail Services", icon: Palette },
    { id: "spa", name: "Spa & Massage", icon: Star },
  ];

  const services = [
    {
      category: "hair",
      title: "Signature Cut & Style",
      description:
        "Professional haircut with personalized styling consultation and finish",
      duration: "90 min",
      price: "$85",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      features: ["Consultation", "Wash & Cut", "Style & Finish"],
    },
    {
      category: "hair",
      title: "Color & Highlights",
      description:
        "Full color service with highlights, lowlights, or complete color transformation",
      duration: "2-3 hours",
      price: "$150",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      features: ["Color Consultation", "Color Application", "Style & Finish"],
    },
    {
      category: "facial",
      title: "Signature Rejuvenating Facial",
      description:
        "Deep cleansing facial with exfoliation, extractions, and hydrating mask",
      duration: "75 min",
      price: "$120",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      features: ["Deep Cleansing", "Extractions", "Hydrating Mask"],
    },
    {
      category: "facial",
      title: "Anti-Aging Treatment",
      description:
        "Advanced anti-aging facial with peptides and collagen boosting ingredients",
      duration: "90 min",
      price: "$180",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      features: ["Peptide Infusion", "LED Light Therapy", "Collagen Mask"],
    },
    {
      category: "nails",
      title: "Signature Manicure",
      description:
        "Complete nail care with cuticle treatment, shaping, and premium polish",
      duration: "45 min",
      price: "$45",
      rating: 4.7,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      features: ["Cuticle Care", "Nail Shaping", "Polish Application"],
    },
    {
      category: "nails",
      title: "Gel Manicure with Art",
      description: "Long-lasting gel manicure with custom nail art design",
      duration: "75 min",
      price: "$75",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      features: ["Gel Polish", "Custom Art Design", "2-Week Guarantee"],
    },
    {
      category: "spa",
      title: "Relaxation Massage",
      description:
        "Full body Swedish massage for ultimate relaxation and stress relief",
      duration: "60 min",
      price: "$110",
      rating: 4.8,
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      features: ["Full Body Massage", "Aromatherapy", "Hot Towel Treatment"],
    },
    {
      category: "spa",
      title: "Hot Stone Therapy",
      description:
        "Therapeutic massage using heated stones to relieve tension and promote healing",
      duration: "90 min",
      price: "$150",
      rating: 4.9,
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      features: ["Hot Stone Treatment", "Deep Tissue Massage", "Stress Relief"],
    },
  ];

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((service) => service.category === activeCategory);

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container-custom text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center space-x-2 bg-primary/20 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Our Services</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-accent mb-6">
              Beauty & Wellness Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of beauty and wellness services,
              each designed to enhance your natural beauty and provide a
              relaxing escape from everyday stress.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-white text-accent border-2 border-gray-200 hover:border-primary hover:text-primary"
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <Card
                key={index}
                className="group card-hover bg-white border-0 shadow-lg overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {service.price}
                  </div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-accent">
                      {service.rating}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm text-gray-600">
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="font-playfair text-xl font-semibold text-accent mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-medium text-accent mb-2">Includes:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/booking">
                    <Button className="btn-primary w-full group">
                      Book This Service
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-4">
              Signature Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Save more with our curated service packages designed for the
              ultimate beauty experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Bridal Beauty Package",
                description: "Complete bridal preparation with trial sessions",
                services: [
                  "Bridal Trial",
                  "Wedding Day Hair",
                  "Wedding Day Makeup",
                  "Nail Services",
                ],
                originalPrice: "$450",
                packagePrice: "$380",
                savings: "$70",
              },
              {
                title: "Spa Day Retreat",
                description: "Full day of relaxation and pampering",
                services: [
                  "90min Massage",
                  "Signature Facial",
                  "Manicure & Pedicure",
                  "Light Refreshments",
                ],
                originalPrice: "$320",
                packagePrice: "$265",
                savings: "$55",
              },
              {
                title: "Monthly Maintenance",
                description: "Regular beauty maintenance package",
                services: [
                  "Cut & Style",
                  "Facial Treatment",
                  "Manicure",
                  "Eyebrow Shaping",
                ],
                originalPrice: "$280",
                packagePrice: "$230",
                savings: "$50",
              },
            ].map((pkg, index) => (
              <Card
                key={index}
                className="card-hover bg-white border-0 shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="font-playfair text-2xl font-semibold text-accent mb-3">
                      {pkg.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{pkg.description}</p>
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-3xl font-playfair font-bold text-accent">
                        {pkg.packagePrice}
                      </span>
                      <div className="text-sm">
                        <div className="line-through text-gray-600">
                          {pkg.originalPrice}
                        </div>
                        <div className="text-primary font-semibold">
                          Save {pkg.savings}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium text-accent mb-3">
                      Package Includes:
                    </h4>
                    <ul className="space-y-2">
                      {pkg.services.map((service, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-gray-600 flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{service}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/booking">
                    <Button className="btn-primary w-full">Book Package</Button>
                  </Link>
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
              Ready to Book Your Service?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the difference at Serenity Beauty Salon. Our expert
              team is ready to help you look and feel your best.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button className="btn-primary text-lg px-10 py-6">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button className="btn-secondary text-lg px-10 py-6">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
