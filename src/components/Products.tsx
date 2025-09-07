import { Monitor, Smartphone, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import productImage from '@/assets/product-dashboard.jpg';

const Products = () => {
  const features = [
    {
      icon: Monitor,
      title: 'Unified Dashboard',
      description: 'Comprehensive view of patient data, analytics, and system performance in one centralized platform.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Responsive design that works seamlessly across all devices for healthcare providers on the go.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and HIPAA compliance ensure patient data is always protected.'
    },
    {
      icon: Zap,
      title: 'Real-Time Updates',
      description: 'Instant notifications and live data synchronization across all connected devices and systems.'
    }
  ];

  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-secondary">Our Platform</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Powerful Healthcare Platform
            <span className="text-gradient-health block">Built for Modern Care</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the future of healthcare technology with our comprehensive platform 
            designed to streamline operations and enhance patient care.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={productImage} 
                alt="Healthcare Platform Dashboard" 
                className="w-full rounded-2xl shadow-hero"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-secondary rounded-full opacity-20 animate-pulse-slow" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-accent rounded-full opacity-30 animate-float" />
            
            {/* Stats Overlay */}
            <div className="absolute top-8 -left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-card">
              <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            
            <div className="absolute bottom-8 -right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-card">
              <div className="text-2xl font-bold text-secondary mb-1">&lt;2s</div>
              <div className="text-sm text-muted-foreground">Load Time</div>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-3xl font-heading font-bold text-foreground mb-8">
              Everything You Need in One Platform
            </h3>
            
            <div className="space-y-8 mb-12">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Benefits */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-8">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Why Healthcare Providers Choose Our Platform
              </h4>
              <ul className="space-y-3">
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Seamless integration with existing healthcare systems
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  24/7 technical support and healthcare expertise
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Scalable solution that grows with your organization
                </li>
                <li className="flex items-center text-muted-foreground">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                  Continuous updates and feature improvements
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                Start Free Trial
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                Request Demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;