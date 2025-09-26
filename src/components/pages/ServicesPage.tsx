import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import { Clock, MapPin, Users, Star, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onPageChange: (page: string) => void;
}

export function ServicesPage({ onPageChange }: ServicesPageProps) {
  const services = [
    {
      title: "Puppy Training",
      description: "Essential foundation training for puppies aged 8-16 weeks. Covering socialisation, basic commands, and house training.",
      duration: "6 weeks",
      location: "Group Classes",
      participants: "4-6 puppies",
      price: "£180",
      features: [
        "Basic commands (sit, stay, come)",
        "House training guidance",
        "Socialisation with other puppies",
        "Bite inhibition training",
        "Walking on lead",
        "Take-home training materials"
      ]
    },
    {
      title: "Adult Dog Training",
      description: "Comprehensive obedience training for dogs over 6 months. Perfect for new rescues or dogs needing refresher training.",
      duration: "8 weeks",
      location: "Group or Individual",
      participants: "1-4 dogs",
      price: "£240",
      features: [
        "Advanced obedience commands",
        "Loose lead walking",
        "Recall training",
        "Impulse control exercises",
        "Problem behaviour solutions",
        "Ongoing support and advice"
      ]
    },
    {
      title: "Behaviour Consultation",
      description: "One-to-one sessions for dogs with specific behavioural issues such as aggression, anxiety, or reactivity.",
      duration: "2-3 hours",
      location: "Your Home",
      participants: "Individual",
      price: "£120",
      features: [
        "Comprehensive behaviour assessment",
        "Tailored training plan",
        "Management strategies",
        "Follow-up support",
        "Resource recommendations",
        "Progress monitoring"
      ]
    },
    {
      title: "Reactive Dog Training",
      description: "Specialised program for dogs that show reactivity towards other dogs, people, or specific triggers.",
      duration: "10 weeks",
      location: "Controlled Environment",
      participants: "Small Groups",
      price: "£350",
      features: [
        "Trigger identification",
        "Desensitisation protocols",
        "Counter-conditioning techniques",
        "Management strategies",
        "Gradual exposure training",
        "Owner education and support"
      ]
    },
    {
      title: "Agility Training",
      description: "Fun and engaging agility classes to build confidence, fitness, and strengthen the bond between dog and owner.",
      duration: "6 weeks",
      location: "Agility Field",
      participants: "6-8 dogs",
      price: "£150",
      features: [
        "Basic agility equipment introduction",
        "Obstacle training",
        "Fitness and coordination",
        "Confidence building",
        "Fun competition elements",
        "Progressive skill development"
      ]
    },
    {
      title: "Home Visit Training",
      description: "Personalised training sessions in the comfort of your own home, addressing specific household challenges.",
      duration: "1.5 hours",
      location: "Your Home",
      participants: "Individual",
      price: "£80",
      features: [
        "Personalised training plan",
        "Home-specific challenges",
        "Family member involvement",
        "Environmental management",
        "Flexible scheduling",
        "Follow-up calls included"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-8 bg-background text-foreground">
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
              Our Training Services
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Professional dog training services tailored to meet the unique needs of every dog and owner. 
              From puppy basics to complex behavioural issues, we're here to help you build a stronger 
              relationship with your canine companion.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-2xl transition-all duration-300 hover:scale-105 fade-in overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 bg-gradient-to-br from-accent/10 to-accent/5">
                    <h3 className="text-2xl mb-3 text-foreground">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        <Clock className="h-3 w-3 mr-1" />
                        {service.duration}
                      </Badge>
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        {service.location}
                      </Badge>
                      <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                        <Users className="h-3 w-3 mr-1" />
                        {service.participants}
                      </Badge>
                    </div>
                    
                    <div className="text-3xl text-accent mb-6">{service.price}</div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg mb-4 text-foreground">What's Included:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      onClick={() => onPageChange('contact')}
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    >
                      Book Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Why Choose Canine Needs?
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-card border-border hover:shadow-lg transition-shadow fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl mb-4 text-foreground">Proven Methods</h3>
                <p className="text-muted-foreground">
                  Evidence-based training techniques that have helped hundreds of dogs and their families 
                  achieve lasting positive results.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border hover:shadow-lg transition-shadow fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl mb-4 text-foreground">Individual Approach</h3>
                <p className="text-muted-foreground">
                  Every dog is unique, and our training plans are tailored to meet the specific needs 
                  and personality of your canine companion.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border hover:shadow-lg transition-shadow fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl mb-4 text-foreground">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Our relationship doesn't end after training. We provide continued support and guidance 
                  to ensure long-term success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
            Ready to Start Training?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Every dog deserves the best training. Contact us today to discuss which service 
            is right for you and your canine companion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onPageChange('contact')}
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3 rounded-full"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => onPageChange('about')}
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-3 rounded-full"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}