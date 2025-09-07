import { TrendingUp, Clock, Users, Heart } from 'lucide-react';

const Impact = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: '30%',
      label: 'Faster Diagnosis',
      description: 'Average reduction in diagnostic time using our AI-powered tools'
    },
    {
      icon: Clock,
      value: '45min',
      label: 'Time Saved per Patient',
      description: 'Healthcare providers save nearly an hour per patient consultation'
    },
    {
      icon: Users,
      value: '2M+',
      label: 'Patients Served',
      description: 'Lives improved through our healthcare technology platform'
    },
    {
      icon: Heart,
      value: '98%',
      label: 'Patient Satisfaction',
      description: 'Patients report higher satisfaction with digital healthcare experiences'
    }
  ];

  const testimonials = [
    {
      quote: "HealthTech has revolutionized how we deliver care. The AI diagnostics have improved our accuracy by 25% while reducing diagnosis time significantly.",
      author: "Dr. Sarah Chen",
      role: "Chief Medical Officer",
      organization: "Metropolitan General Hospital"
    },
    {
      quote: "The telemedicine platform has been a game-changer for our rural patients. We've increased access to specialist care by 300% in underserved areas.",
      author: "Dr. Michael Rodriguez",
      role: "Director of Digital Health",
      organization: "Regional Healthcare Network"
    },
    {
      quote: "Patient engagement has never been better. Our patients love the mobile app and remote monitoring capabilities. It's transformed our care delivery model.",
      author: "Lisa Thompson, RN",
      role: "Nurse Manager",
      organization: "Community Health Center"
    }
  ];

  return (
    <section id="impact" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-sm font-medium text-accent">Our Impact</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Measurable Results in
            <span className="text-gradient-health block">Healthcare Delivery</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real outcomes from healthcare providers who trust our platform to deliver 
            exceptional patient care and operational efficiency.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <metric.icon className="w-10 h-10 text-primary" />
              </div>
              
              <div className="text-4xl font-bold text-gradient mb-2">
                {metric.value}
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3">
                {metric.label}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {metric.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-3xl font-heading font-bold text-center text-foreground mb-12">
            What Healthcare Leaders Say
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-service">
                <div className="mb-6">
                  <div className="text-4xl text-primary/20 mb-4">"</div>
                  <p className="text-muted-foreground leading-relaxed italic">
                    {testimonial.quote}
                  </p>
                </div>
                
                <div className="border-t border-border/10 pt-6">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.organization}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-3xl p-12 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Trusted by Healthcare Leaders Worldwide
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-8">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground text-sm">Healthcare Facilities</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground text-sm">Countries Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
              <div className="text-muted-foreground text-sm">Platform Uptime</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;