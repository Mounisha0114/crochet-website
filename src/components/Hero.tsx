import { Button } from '@/components/ui/button';
import { Heart, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/80 backdrop-blur-sm shadow-soft mb-8">
          <Heart className="h-4 w-4 text-warm-gold" />
          <span className="text-sm font-medium text-muted-foreground">
            Handcrafted with Love
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-primary mb-6">
          Welcome to
          <br />
          <span className="bg-gradient-accent bg-clip-text text-transparent">
            Swarna & Co
          </span>
        </h1>

        {/* Subtitle */}
        <h2 className="font-serif text-2xl md:text-3xl text-muted-foreground mb-6">
          Crochet Collection
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          Discover our beautiful handmade crochet items, crafted with premium yarns 
          and traditional techniques passed down through generations.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            asChild
            className="font-medium"
          >
            <Link to="/bedding" className="flex items-center gap-2">
              Explore Collection
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          
          <Button 
            variant="elegant" 
            size="lg" 
            asChild
          >
            <Link to="/about">
              Learn Our Story
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-warm-gold/10 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-warm-gold/5 blur-2xl animate-pulse delay-1000" />
    </section>
  );
};

export default Hero;