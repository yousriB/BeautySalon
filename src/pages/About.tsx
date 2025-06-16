import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  Award,
  Users,
  Sparkles,
  Star,
  Instagram,
  Facebook,
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      position: "Salon Owner & Master Stylist",
      specialties: ["Hair Cutting", "Color Correction", "Bridal Styling"],
      experience: "15+ years",
      bio: "Sarah founded Serenity Beauty Salon with a vision to create a peaceful sanctuary where clients can relax and enhance their natural beauty. Her expertise in color correction and bridal styling has made her a sought-after stylist.",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop",
      instagram: "@sarahjohnson_hair",
    },
    {
      name: "Maria Rodriguez",
      position: "Color Specialist",
      specialties: ["Balayage", "Ombre", "Creative Color"],
      experience: "12+ years",
      bio: "Maria is our color expert, known for her artistic approach to hair color. She specializes in natural-looking highlights and creative color transformations that complement each client's unique style.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop",
      instagram: "@maria_colorartist",
    },
    {
      name: "Emily Chen",
      position: "Skincare Specialist",
      specialties: ["Anti-Aging Treatments", "Acne Care", "Hydrating Facials"],
      experience: "10+ years",
      bio: "Emily brings extensive knowledge in skincare and facial treatments. Her gentle approach and expertise in anti-aging treatments have helped countless clients achieve healthy, glowing skin.",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop",
      instagram: "@emily_skincare",
    },
    {
      name: "Jessica Lee",
      position: "Nail Artist",
      specialties: ["Nail Art", "Gel Extensions", "Pedicures"],
      experience: "8+ years",
      bio: "Jessica is our talented nail artist who creates stunning nail designs from classic French manicures to intricate nail art. Her attention to detail and creative flair make every manicure a work of art.",
      image:
        "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=400&fit=crop",
      instagram: "@jessica_nailart",
    },
    {
      name: "Alex Thompson",
      position: "Creative Stylist",
      specialties: ["Modern Cuts", "Texture Work", "Men's Styling"],
      experience: "7+ years",
      bio: "Alex is known for their innovative cutting techniques and ability to create modern, edgy styles. They excel at working with all hair textures and creating looks that are both contemporary and wearable.",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=400&fit=crop",
      instagram: "@alex_stylist",
    },
    {
      name: "Michelle Wang",
      position: "Massage Therapist",
      specialties: ["Swedish Massage", "Hot Stone Therapy", "Aromatherapy"],
      experience: "9+ years",
      bio: "Michelle is our licensed massage therapist who specializes in relaxation and therapeutic massage. Her healing touch and knowledge of aromatherapy create the ultimate spa experience.",
      image:
        "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop",
      instagram: "@michelle_massage",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Client-Centered Care",
      description:
        "Every decision we make is with our clients' satisfaction and comfort in mind. We listen, understand, and deliver personalized experiences.",
    },
    {
      icon: Award,
      title: "Excellence in Service",
      description:
        "We maintain the highest standards in all our services, using premium products and staying current with the latest techniques and trends.",
    },
    {
      icon: Users,
      title: "Community & Connection",
      description:
        "We believe in building lasting relationships with our clients and contributing positively to our local community.",
    },
    {
      icon: Sparkles,
      title: "Innovation & Growth",
      description:
        "We continuously evolve our skills and services, embracing new technologies and techniques to better serve our clients.",
    },
  ];

  const achievements = [
    { number: "5000+", label: "Happy Clients" },
    { number: "15+", label: "Years in Business" },
    { number: "50+", label: "Awards & Recognitions" },
    { number: "4.9/5", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container-custom text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center space-x-2 bg-primary/20 rounded-full px-6 py-2 mb-6">
              <Heart className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Our Story</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-accent mb-6">
              About Serenity Beauty Salon
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              For over 15 years, we've been dedicated to providing exceptional
              beauty services in a serene, welcoming environment where every
              client feels valued and beautiful.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-up">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-6">
                Our Story
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Serenity Beauty Salon was born from a simple yet powerful
                  vision: to create a sanctuary where beauty meets tranquility.
                  Founded in 2009 by master stylist Sarah Johnson, our salon has
                  grown from a small neighborhood gem to a premier destination
                  for luxury beauty services.
                </p>
                <p>
                  What started as Sarah's dream to provide personalized,
                  high-quality beauty treatments in a relaxing environment has
                  evolved into a full-service salon that serves over 5,000
                  clients annually. Our team of skilled professionals shares a
                  passion for helping clients look and feel their absolute best.
                </p>
                <p>
                  Today, Serenity Beauty Salon stands as a testament to the
                  power of dedicated craftsmanship, continuous learning, and
                  genuine care for our clients. We're not just a salon – we're a
                  place where transformations happen, confidence is built, and
                  lasting relationships are formed.
                </p>
              </div>
            </div>

            <div
              className="animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=600&h=500&fit=crop"
                alt="Salon interior"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-4xl font-bold text-accent mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that reflect our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Serenity Beauty
              Salon
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="card-hover bg-white border-0 shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <value.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-playfair text-xl font-semibold text-accent mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our talented professionals bring years of experience and passion
              to every service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group card-hover bg-white border-0 shadow-lg overflow-hidden animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center space-x-2">
                      <Instagram className="w-5 h-5" />
                      <span className="text-sm">{member.instagram}</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-accent mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 mb-4">
                    {member.experience} experience
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-accent mb-2">
                      Specialties:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it – hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emma Thompson",
                service: "Signature Facial",
                review:
                  "Absolutely amazing experience! The facial left my skin glowing and I felt so relaxed. The team at Serenity truly knows how to make you feel pampered.",
                rating: 5,
              },
              {
                name: "Michael Chen",
                service: "Hair Cut & Style",
                review:
                  "Best haircut I've ever had! Sarah understood exactly what I wanted and delivered beyond my expectations. The salon has such a peaceful atmosphere.",
                rating: 5,
              },
              {
                name: "Lisa Rodriguez",
                service: "Bridal Package",
                review:
                  "The bridal package was perfect for my wedding day. Every detail was taken care of and I felt absolutely beautiful. Thank you for making my day so special!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="card-hover bg-white border-0 shadow-lg animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed italic">
                    "{testimonial.review}"
                  </p>
                  <div>
                    <h4 className="font-semibold text-accent">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-primary">
                      {testimonial.service}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary/10 to-primary/5">
        <div className="container-custom text-center">
          <div className="animate-fade-up">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-accent mb-6">
              Ready to Experience Serenity?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join our family of satisfied clients and discover why Serenity
              Beauty Salon is the premier choice for luxury beauty services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/booking">
                <Button className="btn-primary text-lg px-10 py-6">
                  Book Your Appointment
                </Button>
              </Link>
              <Link to="/services">
                <Button className="btn-secondary text-lg px-10 py-6">
                  Explore Our Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
