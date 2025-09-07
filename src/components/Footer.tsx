import { Activity, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Careers', href: '#careers' },
      { name: 'Press', href: '#press' },
    ],
    solutions: [
      { name: 'Telemedicine', href: '#solutions' },
      { name: 'AI Diagnostics', href: '#solutions' },
      { name: 'Remote Monitoring', href: '#solutions' },
      { name: 'Patient Engagement', href: '#solutions' },
    ],
    resources: [
      { name: 'Documentation', href: '#docs' },
      { name: 'Case Studies', href: '#cases' },
      { name: 'Blog', href: '#blog' },
      { name: 'Support Center', href: '#support' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'HIPAA Compliance', href: '#hipaa' },
      { name: 'Security', href: '#security' },
    ],
  };

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold">HealthTech</span>
            </div>
            
            <p className="text-white/80 mb-8 leading-relaxed max-w-md">
              Empowering healthcare providers with innovative technology solutions 
              that transform patient care and improve health outcomes worldwide.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white/60" />
                <span className="text-white/80">hello@healthtech.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white/60" />
                <span className="text-white/80">+1 (555) 123-HEALTH</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-white/60" />
                <span className="text-white/80">Medical District, CA 94102</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h4 className="font-semibold mb-4">Stay Updated</h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="bg-secondary hover:bg-secondary-dark">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="font-semibold mb-6 mt-8">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © 2024 HealthTech. All rights reserved. HIPAA Compliant Healthcare Technology.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-white/80">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>All systems operational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;