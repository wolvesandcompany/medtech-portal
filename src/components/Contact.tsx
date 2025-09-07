import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    
    // Reset form
    setFormData({ name: '', email: '', organization: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Headquarters',
      details: ['123 Healthcare Blvd', 'Medical District, CA 94102', 'United States']
    },
    {
      icon: Phone,
      title: 'Phone',
      details: ['+1 (555) 123-HEALTH', '+1 (555) 123-4325']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@healthtech.com', 'support@healthtech.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 8:00 AM - 6:00 PM PST', 'Emergency Support: 24/7']
    }
  ];

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Get in Touch</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Ready to Transform
            <span className="text-gradient block">Your Healthcare Practice?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss how our healthcare technology solutions can help you deliver 
            better patient outcomes and streamline your operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="card-service">
            <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Dr. John Smith"
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@hospital.com"
                    className="w-full"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                  Organization
                </label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  value={formData.organization}
                  onChange={handleInputChange}
                  placeholder="General Hospital"
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your healthcare technology needs..."
                  rows={5}
                  className="w-full"
                  required
                />
              </div>
              
              <Button type="submit" className="btn-hero w-full">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-8">
                Get in touch with our healthcare technology experts. We're here to help 
                you find the right solutions for your organization.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-hero rounded-2xl p-8 text-white">
              <h4 className="text-xl font-semibold mb-3">
                Need Immediate Assistance?
              </h4>
              <p className="text-white/90 mb-6">
                Our healthcare technology experts are available for emergency support 
                and urgent consultations.
              </p>
              <Button className="bg-white text-primary hover:bg-white/90">
                Call Emergency Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;