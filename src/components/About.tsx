import { Shield, Users, Zap, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'HIPAA Compliant',
      description: 'Enterprise-grade security with full HIPAA compliance and data encryption.'
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description: 'Designed with patients and providers in mind for seamless care experiences.'
    },
    {
      icon: Zap,
      title: 'AI-Powered',
      description: 'Advanced machine learning algorithms for accurate diagnostics and insights.'
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized by healthcare leaders for innovation and excellence.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="text-sm font-medium text-primary">About HealthTech</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Leading the Future of
              <span className="text-gradient block">Digital Healthcare</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At HealthTech, we're on a mission to transform healthcare through innovative 
              technology solutions. Our platform combines artificial intelligence, telemedicine, 
              and remote monitoring to create comprehensive healthcare experiences that put 
              patients first.
            </p>
            
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Founded by healthcare professionals and technology experts, we understand the 
              challenges facing modern healthcare and are committed to building solutions 
              that make quality care accessible, efficient, and personalized.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gradient mb-2">10+</div>
                  <div className="text-muted-foreground">Years of Innovation</div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-secondary mb-2">150+</div>
                    <div className="text-sm text-muted-foreground">Integrations</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold text-accent mb-2">$50M+</div>
                  <div className="text-muted-foreground">Healthcare Savings Generated</div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-secondary rounded-full opacity-20 animate-pulse-slow" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-accent rounded-full opacity-30 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;