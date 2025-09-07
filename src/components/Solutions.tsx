import { 
  Video, 
  Brain, 
  Heart, 
  Smartphone, 
  Shield, 
  BarChart3,
  Users,
  Clock,
  ArrowRight 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Solutions = () => {
  const solutions = [
    {
      icon: Video,
      title: 'Telemedicine Platform',
      description: 'Secure video consultations with integrated patient records, prescriptions, and follow-up scheduling.',
      features: ['HD Video Calls', 'Digital Prescriptions', 'Automated Scheduling'],
      color: 'from-primary to-primary-light'
    },
    {
      icon: Brain,
      title: 'AI Diagnostics',
      description: 'Advanced machine learning algorithms for medical imaging analysis and diagnostic assistance.',
      features: ['Medical Imaging AI', 'Diagnostic Support', 'Pattern Recognition'],
      color: 'from-secondary to-secondary-light'
    },
    {
      icon: Heart,
      title: 'Remote Monitoring',
      description: 'Continuous patient monitoring through wearable devices and IoT health sensors.',
      features: ['Wearable Integration', 'Real-time Alerts', '24/7 Monitoring'],
      color: 'from-accent to-accent-light'
    },
    {
      icon: Smartphone,
      title: 'Patient Engagement',
      description: 'Mobile applications that keep patients connected with their care teams and health data.',
      features: ['Mobile App', 'Health Tracking', 'Care Plans'],
      color: 'from-primary to-secondary'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with HIPAA compliance and advanced data protection.',
      features: ['HIPAA Compliant', 'Data Encryption', 'Audit Trails'],
      color: 'from-secondary to-accent'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights and reporting tools for healthcare administrators and providers.',
      features: ['Real-time Analytics', 'Custom Reports', 'Performance Metrics'],
      color: 'from-accent to-primary'
    }
  ];

  return (
    <section id="solutions" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
            <span className="text-sm font-medium text-primary">Our Solutions</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Comprehensive Healthcare
            <span className="text-gradient block">Technology Solutions</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From telemedicine to AI diagnostics, our integrated platform provides everything 
            healthcare providers need to deliver exceptional patient care.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div 
              key={index} 
              className="card-service group cursor-pointer"
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                {solution.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Learn More */}
              <div className="flex items-center text-primary font-medium text-sm group-hover:text-secondary transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-heading font-semibold text-foreground mb-4">
            Ready to Transform Your Healthcare Practice?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare providers who are already using our platform 
            to deliver better patient outcomes and streamline their operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button className="btn-hero">
              Schedule Demo
            </Button>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              View All Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;