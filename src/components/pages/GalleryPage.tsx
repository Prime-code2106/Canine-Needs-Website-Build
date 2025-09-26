import { useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      src: "https://www.canineneeds.com/MAIN.jpg",
      alt: "Professional dog training session",
      category: "Training"
    },
    {
      src: "https://www.canineneeds.com/WOODS.jpg",
      alt: "Dogs enjoying nature walk",
      category: "Outdoor"
    },
    {
      src: "https://www.canineneeds.com/HANNAH%20THUMB.jpg",
      alt: "Hannah with training dogs",
      category: "Team"
    },
    {
      src: "https://www.canineneeds.com/SORCH%20THUMB.jpg",
      alt: "Sorcha with behaviour training",
      category: "Team"
    },
    {
      src: "https://www.canineneeds.com/shop/shop_collar.jpg",
      alt: "Premium dog accessories",
      category: "Products"
    },
    {
      src: "https://www.canineneeds.com/shop/shop_treats.jpg",
      alt: "Healthy dog treats",
      category: "Products"
    },
    {
      src: "https://www.canineneeds.com/shop/shop_toy.jpg",
      alt: "Interactive dog toys",
      category: "Products"
    },
    {
      src: "https://www.canineneeds.com/shop/shop_bed.jpg",
      alt: "Luxury dog bed",
      category: "Products"
    }
  ];

  return (
    <div className="min-h-screen pt-8 bg-background">
      {/* Header Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 text-white">
              Our Work in Pictures
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Take a look at some of our favourite moments from training sessions, 
              outdoor adventures, and the wonderful dogs we've had the pleasure to work with.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {galleryImages.map((image, index) => (
              <Card 
                key={index} 
                className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer fade-in bg-card border-border"
                onClick={() => setSelectedImage(image.src)}
              >
                <CardContent className="p-0 relative group">
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <span className="bg-accent text-black px-3 py-1 rounded-full text-sm">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl max-h-full">
            <ImageWithFallback
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}

      {/* Behind the Scenes */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-2xl sm:text-3xl md:text-4xl mb-6 text-white">Behind the Scenes</h2>
              <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>
                  Every successful training session is built on patience, understanding, and positive 
                  reinforcement. Our gallery captures the joy and progress that comes from building 
                  trust between dogs and their families.
                </p>
                <p>
                  From the first tentative steps of a rescue dog learning to trust again, to the 
                  proud moment when a puppy masters their first command, these images tell the 
                  story of transformation and growth.
                </p>
                <p>
                  We believe that training should be enjoyable for both dogs and their owners, 
                  and these pictures reflect the fun, engaging approach that makes our methods so effective.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 fade-in">
              <Card className="overflow-hidden bg-card border-border">
                <CardContent className="p-0">
                  <ImageWithFallback
                    src="src/assets/IMG-20250506-WA0046.jpg"
                    alt="Training session"
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="overflow-hidden mt-4 sm:mt-8 bg-card border-border">
                <CardContent className="p-0">
                  <ImageWithFallback
                    src="src/assets/IMG-20250506-WA0060.jpg"
                    alt="Outdoor training"
                    className="w-full h-40 sm:h-48 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20 luxury-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
              Our Journey in Numbers
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div className="fade-in">
              <div className="text-3xl sm:text-4xl md:text-5xl text-accent mb-4">13+</div>
              <p className="text-base sm:text-xl">Years of Experience</p>
            </div>
            <div className="fade-in">
              <div className="text-3xl sm:text-4xl md:text-5xl text-accent mb-4">500+</div>
              <p className="text-base sm:text-xl">Dogs Trained</p>
            </div>
            <div className="fade-in">
              <div className="text-3xl sm:text-4xl md:text-5xl text-accent mb-4">100+</div>
              <p className="text-base sm:text-xl">Happy Families</p>
            </div>
            <div className="fade-in">
              <div className="text-3xl sm:text-4xl md:text-5xl text-accent mb-4">50+</div>
              <p className="text-base sm:text-xl">Breeds Worked With</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}