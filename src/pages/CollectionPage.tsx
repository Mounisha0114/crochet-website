import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Heart } from 'lucide-react';

import beddingImage from '@/assets/bedding-collection.jpg';
import garmentsImage from '@/assets/garments-collection.jpg';
import tableclothImage from '@/assets/tablecloth-collection.jpg';
import pillowcaseImage from '@/assets/pillowcase-collection.jpg';
import totebagImage from '@/assets/totebag-collection.jpg';

const collectionData = {
  bedding: {
    title: 'Bedding Collection',
    description: 'Transform your bedroom into a cozy sanctuary with our handcrafted bedding collection.',
    image: beddingImage,
    items: [
      'Handwoven Blankets', 'Crochet Bed Sheets', 'Decorative Throws', 
      'Bed Runners', 'Quilted Coverlets', 'Baby Blankets'
    ]
  },
  garments: {
    title: 'Garments Collection',
    description: 'Elegant wearable art that combines comfort with timeless style.',
    image: garmentsImage,
    items: [
      'Crochet Cardigans', 'Knit Sweaters', 'Summer Tops', 
      'Shawls & Wraps', 'Vests', 'Ponchos'
    ]
  },
  tablecloths: {
    title: 'Table Cloths Collection',
    description: 'Elevate your dining experience with our exquisite table linens.',
    image: tableclothImage,
    items: [
      'Dinner Table Cloths', 'Lace Runners', 'Placemats', 
      'Napkin Sets', 'Holiday Linens', 'Round Table Covers'
    ]
  },
  pillowcases: {
    title: 'Pillow Cases Collection',
    description: 'Rest easy with our comfortable and beautifully crafted pillow covers.',
    image: pillowcaseImage,
    items: [
      'Standard Pillow Cases', 'Decorative Cushions', 'Throw Pillow Covers', 
      'Euro Shams', 'Body Pillow Cases', 'Lumbar Supports'
    ]
  },
  totebags: {
    title: 'Tote Bags Collection',
    description: 'Functional and fashionable bags for everyday use and special occasions.',
    image: totebagImage,
    items: [
      'Market Tote Bags', 'Beach Bags', 'Shopping Bags', 
      'Laptop Bags', 'Evening Purses', 'Travel Totes'
    ]
  }
};

const CollectionPage = () => {
  const location = useLocation();
  const collection = location.pathname.substring(1); // Remove the leading slash
  const data = collection ? collectionData[collection as keyof typeof collectionData] : null;

  if (!data) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-serif text-4xl font-bold text-primary mb-4">
            Collection Not Found
          </h1>
          <p className="text-muted-foreground">
            The collection you're looking for doesn't exist.
          </p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card/80 backdrop-blur-sm shadow-soft mb-8">
                  <Heart className="h-4 w-4 text-warm-gold" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Handcrafted Collection
                  </span>
                </div>
                
                <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
                  {data.title}
                </h1>
                
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  {data.description}
                </p>
                
                <div className="text-muted-foreground">
                  <p className="mb-4">Each piece is carefully handcrafted using:</p>
                  <ul className="space-y-2">
                    <li>• Premium quality yarns and materials</li>
                    <li>• Traditional crochet techniques</li>
                    <li>• Attention to detail and finishing</li>
                    <li>• Sustainable and ethical practices</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-96 object-cover rounded-2xl shadow-warm"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Items Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                Our {data.title.replace(' Collection', '')} Items
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our carefully curated selection of handmade pieces, 
                each one unique and crafted with love.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.items.map((item, index) => (
                <Card 
                  key={item} 
                  className="group hover:shadow-warm transition-all duration-500 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-warm-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="h-8 w-8 text-warm-gold" />
                    </div>
                    
                    <h3 className="font-serif text-xl font-semibold text-primary mb-4">
                      {item}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Beautifully crafted {item.toLowerCase()} made with premium materials 
                      and traditional techniques for lasting quality and comfort.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Care Instructions */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-serif text-4xl font-bold text-primary mb-6">
                Care Instructions
              </h2>
              <p className="text-lg text-muted-foreground mb-12">
                To ensure your handcrafted pieces maintain their beauty and quality for years to come.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                  <h3 className="font-semibold text-xl text-primary mb-4">Washing</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Hand wash in cold water with mild detergent</li>
                    <li>• Avoid bleach and harsh chemicals</li>
                    <li>• Gently squeeze out excess water</li>
                    <li>• Do not wring or twist the fabric</li>
                  </ul>
                </div>
                
                <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 shadow-soft">
                  <h3 className="font-semibold text-xl text-primary mb-4">Drying & Storage</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Lay flat to dry away from direct sunlight</li>
                    <li>• Reshape while damp to maintain form</li>
                    <li>• Store in a cool, dry place</li>
                    <li>• Fold carefully to avoid creasing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CollectionPage;