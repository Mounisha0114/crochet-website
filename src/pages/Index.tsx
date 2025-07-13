import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CollectionGrid from '@/components/CollectionGrid';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CollectionGrid />
      <Footer />
    </div>
  );
};

export default Index;
