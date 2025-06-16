import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Heart, Eye, Camera, Sparkles } from "lucide-react";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", name: "All Work" },
    { id: "hair", name: "Hair Styling" },
    { id: "color", name: "Hair Color" },
    { id: "facial", name: "Facial Results" },
    { id: "nails", name: "Nail Art" },
    { id: "bridal", name: "Bridal" },
  ];

  const portfolioItems = [
    {
      id: 1,
      category: "hair",
      title: "Layered Bob with Highlights",
      description: "Modern layered bob with subtle blonde highlights",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop",
      likes: 142,
      stylist: "Sarah Johnson",
    },
    {
      id: 2,
      category: "color",
      title: "Balayage Transformation",
      description: "Brunette to blonde balayage with face-framing highlights",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop",
      likes: 89,
      stylist: "Maria Rodriguez",
    },
    {
      id: 3,
      category: "facial",
      title: "Glowing Skin Treatment",
      description: "Before and after hydrating facial treatment",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop",
      likes: 156,
      stylist: "Emily Chen",
    },
    {
      id: 4,
      category: "nails",
      title: "Marble Nail Art",
      description: "Elegant marble design with gold accents",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop",
      likes: 98,
      stylist: "Jessica Lee",
    },
    {
      id: 5,
      category: "bridal",
      title: "Romantic Bridal Updo",
      description: "Soft romantic updo with delicate accessories",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop",
      likes: 203,
      stylist: "Sarah Johnson",
    },
    {
      id: 6,
      category: "hair",
      title: "Pixie Cut Transformation",
      description: "Bold pixie cut with textured styling",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop",
      likes: 124,
      stylist: "Maria Rodriguez",
    },
    {
      id: 7,
      category: "color",
      title: "Rainbow Ombre",
      description: "Creative rainbow ombre color technique",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop",
      likes: 187,
      stylist: "Alex Thompson",
    },
    {
      id: 8,
      category: "nails",
      title: "French Manicure Modern",
      description: "Contemporary take on classic French manicure",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=600&fit=crop",
      likes: 76,
      stylist: "Jessica Lee",
    },
    {
      id: 9,
      category: "facial",
      title: "Anti-Aging Results",
      description: "Dramatic results from our signature anti-aging facial",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=500&h=600&fit=crop",
      likes: 145,
      stylist: "Emily Chen",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container-custom text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center space-x-2 bg-primary/20 rounded-full px-6 py-2 mb-6">
              <Camera className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Our Work</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-accent mb-6">
              Portfolio Gallery
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our stunning transformations and see why our clients love
              their results. Each image tells a story of beauty, confidence, and
              artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white sticky top-32 z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-secondary text-accent hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card
                key={item.id}
                className="group card-hover bg-white border-0 shadow-lg overflow-hidden animate-fade-up cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
                      <Eye className="w-8 h-8 mx-auto mb-2" />
                      <span className="text-sm font-medium">
                        View Full Size
                      </span>
                    </div>
                  </div>

                  {/* Likes */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                    <span className="text-sm font-medium text-accent">
                      {item.likes}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-accent mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">
                      By {item.stylist}
                    </span>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Instagram className="w-4 h-4" />
                      <span className="text-xs">Share</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Portfolio item"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/20 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="section-padding bg-secondary">
        <div className="container-custom text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center space-x-2 bg-primary/20 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">
                Ready for Your Transformation?
              </span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-6">
              Book Your Appointment Today
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our gallery of satisfied clients. Let our expert team create
              your perfect look and capture your transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary text-lg px-10 py-6">
                Book Your Session
              </Button>
              <Button className="btn-secondary text-lg px-10 py-6">
                Consultation Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h3 className="font-playfair text-3xl font-bold text-accent mb-4">
              Follow Us for Daily Inspiration
            </h3>
            <p className="text-gray-600">
              Stay updated with our latest work and beauty tips on social media
            </p>
          </div>

          <div className="flex justify-center">
            <Button className="btn-secondary flex items-center space-x-2">
              <Instagram className="w-5 h-5" />
              <span>@SerenitySalon</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
