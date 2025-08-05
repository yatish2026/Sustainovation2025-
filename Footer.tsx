import { Button } from "@/components/ui/button";
import {
  Droplets,
  Mail,
  Phone,
  MapPin,
  LinkedinIcon,
  TwitterIcon,
  ExternalLink,
  Heart
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-water-primary text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Droplets className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg">AquaWise</div>
                <div className="text-xs text-water-light font-medium">Guardians</div>
              </div>
            </div>
            <p className="text-water-light leading-relaxed">
              Revolutionizing water conservation in educational and senior care facilities
              through intelligent IoT monitoring and AI-powered solutions.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <LinkedinIcon className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <TwitterIcon className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/10">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Solutions</h3>
            <div className="space-y-2">
              <a href="#" className="block text-water-light hover:text-white transition-colors">Real-Time Monitoring</a>
              <a href="#" className="block text-water-light hover:text-white transition-colors">Greywater Recycling</a>
              <a href="#" className="block text-water-light hover:text-white transition-colors">HydroBot AI Assistant</a>
              <a href="#" className="block text-water-light hover:text-white transition-colors">Leak Detection</a>
              <a href="#" className="block text-water-light hover:text-white transition-colors">AquaCoin Rewards</a>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Resources</h3>
            <div className="space-y-2">
              <a href="#" className="block text-water-light hover:text-white transition-colors">Documentation</a>
              <a href="#" className="block text-water-light hover:text-white transition-colors">API Reference</a>
              <a href="#" className="block text-water-light hover:text-white transition-colors">Case Studies</a>
              <a href="#" className="block text-water-light hover:text-white transition-colors">White Papers</a>
              <a href="#" className="block text-water-light hover:text-white transition-colors">Support Center</a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-water-light" />
                <span className="text-water-light">hello@aquawiseguardians.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-water-light" />
                <span className="text-water-light">+1 (555) 123-AQUA</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-water-light mt-0.5" />
                <span className="text-water-light">
                  svcet<br />
                  <br />
                  CA 94305
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6 text-sm text-water-light">
              <span>© 2025 team_onyx. All rights reserved.</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>

            <div className="flex items-center gap-2 text-sm text-water-light">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>by Team Onyx </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;