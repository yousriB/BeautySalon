import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    stylist: "",
    date: "",
    time: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    { value: "signature-cut", label: "Signature Cut & Style - $85" },
    { value: "color-highlights", label: "Color & Highlights - $150" },
    { value: "signature-facial", label: "Signature Facial - $120" },
    { value: "anti-aging", label: "Anti-Aging Treatment - $180" },
    { value: "manicure", label: "Signature Manicure - $45" },
    { value: "gel-manicure", label: "Gel Manicure with Art - $75" },
    { value: "massage", label: "Relaxation Massage - $110" },
    { value: "hot-stone", label: "Hot Stone Therapy - $150" },
    { value: "bridal-package", label: "Bridal Beauty Package - $380" },
    { value: "spa-day", label: "Spa Day Retreat - $265" },
  ];

  const stylists = [
    { value: "sarah-johnson", label: "Sarah Johnson - Hair Specialist" },
    { value: "maria-rodriguez", label: "Maria Rodriguez - Color Expert" },
    { value: "emily-chen", label: "Emily Chen - Skincare Specialist" },
    { value: "jessica-lee", label: "Jessica Lee - Nail Artist" },
    { value: "alex-thompson", label: "Alex Thompson - Creative Stylist" },
    { value: "any", label: "Any Available Stylist" },
  ];

  const timeSlots = [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM",
    "5:00 PM",
    "5:30 PM",
    "6:00 PM",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Appointment Booked Successfully!",
      description:
        "We'll send you a confirmation email shortly. Thank you for choosing Serenity Beauty Salon!",
    });

    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      stylist: "",
      date: "",
      time: "",
      notes: "",
    });

    setIsSubmitting(false);
  };

  const isFormValid =
    formData.firstName &&
    formData.lastName &&
    formData.email &&
    formData.phone &&
    formData.service &&
    formData.date &&
    formData.time;

  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <div className="animate-fade-up">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-6 py-2 mb-6">
              <Calendar className="w-5 h-5 text-primary" />
              <span className="text-primary font-medium">Book Online</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Schedule Your Appointment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Book your beauty appointment online and get ready to experience
              the ultimate in relaxation and professional care at Serenity
              Beauty Salon.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white border border-gray-200 shadow-lg animate-fade-up">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="font-playfair text-3xl font-bold text-gray-900">
                    Book Your Appointment
                  </CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll confirm your appointment
                    within 24 hours
                  </p>
                </CardHeader>

                <CardContent className="p-8 bg-white">
                  <form onSubmit={handleSubmit} className="space-y-6 bg-white">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="font-playfair text-xl font-semibold text-gray-900 flex items-center">
                        <User className="w-5 h-5 mr-2 text-primary" />
                        Personal Information
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="firstName"
                            className="text-gray-900 font-medium"
                          >
                            First Name *
                          </Label>
                          <Input
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) =>
                              handleInputChange("firstName", e.target.value)
                            }
                            className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="lastName"
                            className="text-gray-900 font-medium"
                          >
                            Last Name *
                          </Label>
                          <Input
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) =>
                              handleInputChange("lastName", e.target.value)
                            }
                            className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="email"
                            className="text-gray-900 font-medium flex items-center"
                          >
                            <Mail className="w-4 h-4 mr-1" />
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              handleInputChange("email", e.target.value)
                            }
                            className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                            required
                          />
                        </div>
                        <div>
                          <Label
                            htmlFor="phone"
                            className="text-gray-900 font-medium flex items-center"
                          >
                            <Phone className="w-4 h-4 mr-1" />
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              handleInputChange("phone", e.target.value)
                            }
                            className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="space-y-4">
                      <h3 className="font-playfair text-xl font-semibold text-gray-900 flex items-center">
                        <Sparkles className="w-5 h-5 mr-2 text-primary" />
                        Service Selection
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="service"
                            className="text-gray-900 font-medium"
                          >
                            Choose Service *
                          </Label>
                          <select
                            id="service"
                            value={formData.service}
                            onChange={(e) =>
                              handleInputChange("service", e.target.value)
                            }
                            className="mt-1 w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-primary focus:ring-primary"
                            required
                          >
                            <option value="">Select a service</option>
                            {services.map((service) => (
                              <option key={service.value} value={service.value}>
                                {service.label}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div>
                          <Label
                            htmlFor="stylist"
                            className="text-gray-900 font-medium"
                          >
                            Preferred Stylist
                          </Label>
                          <select
                            id="stylist"
                            value={formData.stylist}
                            onChange={(e) =>
                              handleInputChange("stylist", e.target.value)
                            }
                            className="mt-1 w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-primary focus:ring-primary"
                          >
                            <option value="">Select a stylist</option>
                            {stylists.map((stylist) => (
                              <option key={stylist.value} value={stylist.value}>
                                {stylist.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Date & Time */}
                    <div className="space-y-4">
                      <h3 className="font-playfair text-xl font-semibold text-gray-900 flex items-center">
                        <Clock className="w-5 h-5 mr-2 text-primary" />
                        Date & Time
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label
                            htmlFor="date"
                            className="text-gray-900 font-medium"
                          >
                            Preferred Date *
                          </Label>
                          <Input
                            id="date"
                            type="date"
                            value={formData.date}
                            onChange={(e) =>
                              handleInputChange("date", e.target.value)
                            }
                            className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                            min={new Date().toISOString().split("T")[0]}
                            required
                          />
                        </div>

                        <div>
                          <Label
                            htmlFor="time"
                            className="text-gray-900 font-medium"
                          >
                            Preferred Time *
                          </Label>
                          <select
                            id="time"
                            value={formData.time}
                            onChange={(e) =>
                              handleInputChange("time", e.target.value)
                            }
                            className="mt-1 w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 focus:border-primary focus:ring-primary"
                            required
                          >
                            <option value="">Select time</option>
                            {timeSlots.map((time) => (
                              <option key={time} value={time}>
                                {time}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Additional Notes */}
                    <div className="space-y-4">
                      <h3 className="font-playfair text-xl font-semibold text-gray-900 flex items-center">
                        <MessageSquare className="w-5 h-5 mr-2 text-primary" />
                        Additional Information
                      </h3>

                      <div>
                        <Label
                          htmlFor="notes"
                          className="text-gray-900 font-medium"
                        >
                          Special Requests or Notes
                        </Label>
                        <Textarea
                          id="notes"
                          value={formData.notes}
                          onChange={(e) =>
                            handleInputChange("notes", e.target.value)
                          }
                          className="mt-1 border-gray-300 focus:border-primary focus:ring-primary"
                          rows={4}
                          placeholder="Any special requests, allergies, or additional information..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button
                        type="submit"
                        className="btn-primary w-full text-lg py-6"
                        disabled={!isFormValid || isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center space-x-2">
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Booking Appointment...</span>
                          </div>
                        ) : (
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="w-5 h-5" />
                            <span>Book Appointment</span>
                          </div>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-8">
              {/* Salon Information */}
              <Card
                className="bg-white border border-gray-200 shadow-lg animate-fade-up"
                style={{ animationDelay: "200ms" }}
              >
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                    Salon Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Business Hours
                        </h4>
                        <div className="text-gray-600 text-sm space-y-1">
                          <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                          <p>Sunday: 10:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Call Us</h4>
                        <p className="text-gray-600 text-sm">(555) 123-4567</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600 text-sm">
                          info@serenitysalon.com
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Booking Policies */}
              <Card
                className="bg-white border border-gray-200 shadow-lg animate-fade-up"
                style={{ animationDelay: "400ms" }}
              >
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-6">
                    Booking Policies
                  </h3>

                  <div className="space-y-4 text-sm text-gray-600">
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Cancellation Policy
                      </h4>
                      <p>
                        Please provide 24 hours notice for cancellations to
                        avoid charges.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Late Arrivals
                      </h4>
                      <p>
                        Arriving 15+ minutes late may result in service
                        adjustment or rescheduling.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">
                        First-Time Clients
                      </h4>
                      <p>
                        Please arrive 15 minutes early to complete consultation
                        forms.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900">Payment</h4>
                      <p>
                        We accept cash, cards, and digital payments. Gratuity is
                        appreciated.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Special Offers */}
              <Card
                className="bg-white border border-gray-200 shadow-lg animate-fade-up"
                style={{ animationDelay: "600ms" }}
              >
                <CardContent className="p-8">
                  <h3 className="font-playfair text-2xl font-bold text-gray-900 mb-4">
                    New Client Offer
                  </h3>
                  <p className="text-gray-600 mb-4">
                    First-time clients receive 25% off any service. Mention this
                    offer when booking!
                  </p>
                  <div className="text-center">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Save 25%
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
