import { useState } from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Walk', 'Eat', 'Play', 'Train', 'Care'];

  const products = [
    {
      name: "Luxury Dog Collar",
      price: "£25",
      category: "Walk",
      image: "https://www.canineneeds.com/shop/shop_collar.jpg",
      rating: 5,
      description: "Premium leather collar with gold-plated hardware."
    },
    {
      name: "Healthy Dog Treats",
      price: "£10",
      category: "Eat",
      image: "https://www.canineneeds.com/shop/shop_treats.jpg",
      rating: 5,
      description: "Natural, nutritious treats perfect for training rewards."
    },
    {
      name: "Interactive Dog Toy",
      price: "£18",
      category: "Play",
      image: "https://www.canineneeds.com/shop/shop_toy.jpg",
      rating: 4,
      description: "Mentally stimulating puzzle toy to keep dogs engaged."
    },
    {
      name: "Premium Dog Bed",
      price: "£60",
      category: "Care",
      image: "https://www.canineneeds.com/shop/shop_bed.jpg",
      rating: 5,
      description: "Orthopedic support bed with washable, luxury cover."
    },
    {
      name: "Training Clicker",
      price: "£8",
      category: "Train",
      image: "https://www.canineneeds.com/shop/shop_clicker.jpg",
      rating: 5,
      description: "Professional-grade clicker for positive reinforcement training."
    },
    {
      name: "Retractable Lead",
      price: "£22",
      category: "Walk",
      image: "https://www.canineneeds.com/shop/shop_lead.jpg",
      rating: 4,
      description: "Durable retractable lead with comfortable grip handle."
    },
    {
      name: "Grooming Kit",
      price: "£35",
      category: "Care",
      image: "https://www.canineneeds.com/shop/shop_grooming.jpg",
      rating: 5,
      description: "Complete grooming set with professional-quality tools."
    },
    {
      name: "Puzzle Feeder",
      price: "£28",
      category: "Eat",
      image: "https://www.canineneeds.com/shop/shop_feeder.jpg",
      rating: 4,
      description: "Slow-feeding bowl that promotes healthy eating habits."
    }
  ];

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-accent fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="min-h-screen pt-8 bg-background text-foreground">
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
              Our Shop
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Carefully curated products to support your dog's health, happiness, and training journey. 
              Every item is selected with the same care and expertise we bring to our training services.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-accent text-black hover:bg-accent/90'
                    : 'border-accent text-accent hover:bg-accent hover:text-black'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 bg-card border-border fade-in">
                <CardContent className="p-0">
                  <div className="relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    <Badge className="absolute top-3 right-3 bg-accent text-black">
                      {product.category}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg mb-2 text-white">{product.name}</h3>
                    <div className="flex items-center mb-3">
                      {renderStars(product.rating)}
                      <span className="ml-2 text-sm text-gray-400">({product.rating}/5)</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl text-accent">{product.price}</span>
                      <Button className="bg-accent text-black hover:bg-accent/90 rounded-full px-4 py-2">
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              Why Shop With Us?
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-card border-border hover:shadow-lg transition-shadow fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl mb-4 text-white">Expert Curated</h3>
                <p className="text-gray-300">
                  Every product is carefully selected by our professional trainers based on 
                  years of experience and proven effectiveness.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border hover:shadow-lg transition-shadow fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💝</span>
                </div>
                <h3 className="text-xl mb-4 text-white">Quality Guaranteed</h3>
                <p className="text-gray-300">
                  We only stock products that meet our high standards for safety, 
                  durability, and effectiveness in supporting your dog's wellbeing.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border hover:shadow-lg transition-shadow fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🚚</span>
                </div>
                <h3 className="text-xl mb-4 text-white">Fast Delivery</h3>
                <p className="text-gray-300">
                  Quick and reliable shipping across the UK, with tracking information 
                  provided for every order.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 luxury-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Need Training Advice?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Not sure which products are right for your dog? Get in touch for personalized 
            recommendations based on your dog's specific needs and training goals.
          </p>
          <Button className="bg-accent text-black hover:bg-accent/90 text-lg px-8 py-3 rounded-full">
            Get Expert Advice
          </Button>
        </div>
      </section>
    </div>
  );
}