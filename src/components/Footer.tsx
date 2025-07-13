import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="h-6 w-6 text-warm-gold" />
              <span className="font-serif text-xl font-semibold">
                Swarna & Co
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Crafting beautiful crochet pieces with love and tradition. 
              Each item tells a story of heritage and artistry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Collections</h3>
            <nav className="space-y-3">
              <Link 
                to="/bedding" 
                className="block text-primary-foreground/80 hover:text-warm-gold transition-colors"
              >
                Bedding
              </Link>
              <Link 
                to="/garments" 
                className="block text-primary-foreground/80 hover:text-warm-gold transition-colors"
              >
                Garments
              </Link>
              <Link 
                to="/tablecloths" 
                className="block text-primary-foreground/80 hover:text-warm-gold transition-colors"
              >
                Table Cloths
              </Link>
              <Link 
                to="/pillowcases" 
                className="block text-primary-foreground/80 hover:text-warm-gold transition-colors"
              >
                Pillow Cases
              </Link>
              <Link 
                to="/totebags" 
                className="block text-primary-foreground/80 hover:text-warm-gold transition-colors"
              >
                Tote Bags
              </Link>
            </nav>
          </div>

          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-6">About</h3>
            <nav className="space-y-3">
              <Link 
                to="/about" 
                className="block text-primary-foreground/80 hover:text-warm-gold transition-colors"
              >
                Our Story
              </Link>
              <Link 
                to="/about" 
                className="block text-primary-foreground/80 hover:text-warm-gold transition-colors"
              >
                Craftsmanship
              </Link>
              <Link 
                to="/about" 
                className="block text-primary-foreground/80 hover:text-warm-gold transition-colors"
              >
                Heritage
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Mail className="h-4 w-4 text-warm-gold" />
                <span>hello@swarnaandco.com</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="h-4 w-4 text-warm-gold" />
                <span>+91 9848159639</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <MapPin className="h-4 w-4 text-warm-gold" />
                <span>Sitaramapuram, Narsapur Mandal, W.G. Distt. Andhra Pradesh - 534280</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Swarna & Co. All rights reserved. Handcrafted with 
            <Heart className="inline h-4 w-4 mx-1 text-warm-gold" />
            and tradition.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;