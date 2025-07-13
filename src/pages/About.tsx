import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Award, Users, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/80 backdrop-blur-sm shadow-soft mb-8">
              <Heart className="h-4 w-4 text-warm-gold" />
              <span className="text-sm font-medium text-muted-foreground">
                Our Story
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
              About <span className="bg-gradient-accent bg-clip-text text-transparent">Swarna & Co</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A legacy of craftsmanship, passed down through generations, 
              creating beautiful crochet pieces that tell stories of love, 
              tradition, and artistry.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                  Our Heritage
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Founded with a passion for preserving traditional crochet techniques, 
                    Swarna & Co began as a small family workshop where recipes for 
                    beautiful handcrafted pieces were carefully guarded and lovingly shared.
                  </p>
                  <p>
                    Each piece in our collection represents hours of meticulous work, 
                    using only the finest yarns and time-honored methods that have been 
                    refined over generations. Our artisans bring decades of experience 
                    to every stitch.
                  </p>
                  <p>
                    Today, we continue this tradition while embracing contemporary design, 
                    creating pieces that honor our heritage while meeting modern needs 
                    for beauty and functionality.
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-card rounded-2xl p-8 shadow-warm">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Clock className="h-8 w-8 text-warm-gold" />
                      </div>
                      <h3 className="font-semibold text-2xl text-primary mb-2">25+</h3>
                      <p className="text-muted-foreground">Years of Experience</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-8 w-8 text-warm-gold" />
                      </div>
                      <h3 className="font-semibold text-2xl text-primary mb-2">50+</h3>
                      <p className="text-muted-foreground">Skilled Artisans</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Award className="h-8 w-8 text-warm-gold" />
                      </div>
                      <h3 className="font-semibold text-2xl text-primary mb-2">1000+</h3>
                      <p className="text-muted-foreground">Happy Customers</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Heart className="h-8 w-8 text-warm-gold" />
                      </div>
                      <h3 className="font-semibold text-2xl text-primary mb-2">∞</h3>
                      <p className="text-muted-foreground">Love & Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide every stitch, every design, and every interaction.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-warm-gold" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Crafted with Love
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every piece is made with genuine care and attention, 
                  ensuring that the love put into creation shines through in the final product.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-10 w-10 text-warm-gold" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Quality First
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We use only premium yarns and materials, combined with 
                  time-tested techniques to ensure lasting beauty and durability.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-warm-gold" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-primary mb-4">
                  Community Heritage
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Supporting local artisans and preserving traditional crafts 
                  while building meaningful connections with our customers.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;