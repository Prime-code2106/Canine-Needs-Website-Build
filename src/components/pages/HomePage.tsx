import { ArrowRight, Award, Heart, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import heroBackground from 'figma:asset/e4a29a77a441bde98b6431589389899495bc458e.png';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export function HomePage({ onPageChange }: HomePageProps) {
  const certificates = [
    "https://www.canineneeds.com/certificate1.jpg",
    "https://www.canineneeds.com/certificate2.jpg",
    "https://www.canineneeds.com/certificate3.jpg"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center parallax-bg">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${heroBackground})`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 fade-in">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight drop-shadow-lg">
            Helping Dogs Live Happier, Healthier Lives
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-100 drop-shadow-md max-w-2xl mx-auto">
            Accredited training, trusted advice, and carefully selected products.
          </p>
          <Button
            onClick={() => onPageChange('about')}
            className="bg-accent text-black hover:bg-accent/90 text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Services
            <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </Button>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Welcome to Canine Needs
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert training and care, backed by accreditations and years of experience. 
              Everything we do is inspired by our love for dogs.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card className="text-center p-8 bg-card border-border hover:shadow-lg transition-shadow fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl mb-4 text-foreground">Accredited Training</h3>
                <p className="text-muted-foreground">
                  Professional qualifications and certifications from leading canine behaviour institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border hover:shadow-lg transition-shadow fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl mb-4 text-foreground">Passionate Care</h3>
                <p className="text-muted-foreground">
                  Years of hands-on experience with dogs of all breeds, temperaments, and backgrounds.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border hover:shadow-lg transition-shadow fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl mb-4 text-foreground">Trusted Results</h3>
                <p className="text-muted-foreground">
                  Proven methods that create lasting positive changes in dogs and their relationships with owners.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certificates Preview Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Our Credentials
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We maintain the highest professional standards through continuous education and certification.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in">
            {certificates.map((cert, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-card border-border">
                <CardContent className="p-0">
                  <ImageWithFallback
                    src="src/assets/certificate image/WhatsApp Image 2025-09-26 at 7.07.42 PM.jpeg"
                    alt={`Certificate ${index + 1}`}
                    className="w-full h-64 object-cover"
                  />
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onPageChange('certificates')}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-3 rounded-full"
            >
              View All Certificates
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 luxury-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Transform Your Dog's Life?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Get in touch today to discuss how we can help you and your canine companion 
            build a stronger, happier relationship.
          </p>
          <Button
            onClick={() => onPageChange('contact')}
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3 rounded-full"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}