import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import beddingImage from '@/assets/bedding-collection.jpg';
import garmentsImage from '@/assets/garments-collection.jpg';
import tableclothImage from '@/assets/tablecloth-collection.jpg';
import pillowcaseImage from '@/assets/pillowcase-collection.jpg';
import totebagImage from '@/assets/totebag-collection.jpg';

const collections = [
  {
    title: 'Bedding',
    description: 'Luxurious handcrafted bed linens, blankets, and throws',
    image: beddingImage,
    href: '/bedding',
  },
  {
    title: 'Garments',
    description: 'Beautiful wearable pieces from cardigans to tops',
    image: garmentsImage,
    href: '/garments',
  },
  {
    title: 'Table Cloths',
    description: 'Elegant table linens for special occasions',
    image: tableclothImage,
    href: '/tablecloths',
  },
  {
    title: 'Pillow Cases',
    description: 'Comfortable and stylish pillow covers',
    image: pillowcaseImage,
    href: '/pillowcases',
  },
  {
    title: 'Tote Bags',
    description: 'Functional and fashionable handmade bags',
    image: totebagImage,
    href: '/totebags',
  },
];

const CollectionGrid = () => {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-6">
            Our Collections
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections of handmade crochet items, 
            each piece telling its own story of craftsmanship and love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={collection.title} 
              className="group hover:shadow-warm transition-all duration-500 transform hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-semibold text-primary mb-3">
                    {collection.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {collection.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    asChild 
                    className="group/btn p-0 h-auto font-medium text-warm-gold hover:text-warm-gold/80"
                  >
                    <Link to={collection.href} className="flex items-center gap-2">
                      View Collection
                      <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionGrid;