import { Button } from '@/components/ui/button';
import { Play, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/hero-healthtech.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-secondary/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" />
      <div className="absolute top-32 right-20 w-32 h-32 bg-secondary/20 rounded-full animate-float animation-delay-1000" />
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-accent/30 rounded-full animate-float animation-delay-2000" />

      {/* Content */}
      <div className="relative z-10 container-custom section-padding text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="text-sm font-medium">🚀 Trusted by 500+ Healthcare Providers</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Reimagining Healthcare
            <br />
            <span className="text-gradient-health">Through Technology</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed max-w-3xl mx-auto">
            Empowering healthcare providers with AI-driven diagnostics, seamless telemedicine, 
            and innovative patient engagement solutions that transform care delivery.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button className="btn-hero text-lg px-8 py-6 min-w-[200px]">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button className="btn-secondary-hero text-lg px-8 py-6 min-w-[200px]">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-white/80">Healthcare Providers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">2M+</div>
              <div className="text-white/80">Patients Served</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">30%</div>
              <div className="text-white/80">Faster Diagnosis</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;