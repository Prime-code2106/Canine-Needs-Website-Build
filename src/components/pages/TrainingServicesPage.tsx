import { CheckCircle, Clock, Users, Trophy, ArrowRight, Star } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface TrainingServicesPageProps {
  onPageChange?: (page: string) => void;
}

export function TrainingServicesPage({ onPageChange }: TrainingServicesPageProps) {
  const trainingServices = [
    {
      title: "Puppy Foundation Training",
      duration: "6 weeks",
      groupSize: "Max 6 puppies",
      price: "£180",
      description: "Essential early training for puppies aged 8-16 weeks, covering socialisation, basic commands, and house training.",
      includes: [
        "Basic obedience commands (sit, stay, come)",
        "Socialisation with other puppies and people",
        "House training guidance",
        "Bite inhibition training",
        "Walking on lead introduction",
        "Take-home training materials"
      ],
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwdXBweSUyMHRyYWluaW5nfGVufDF8fHx8MTc1ODg5ODIxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: true
    },
    {
      title: "Adult Dog Obedience",
      duration: "8 weeks",
      groupSize: "Max 8 dogs",
      price: "£220",
      description: "Comprehensive training for adult dogs focusing on obedience, impulse control, and good manners.",
      includes: [
        "Advanced obedience commands",
        "Impulse control exercises",
        "Loose lead walking",
        "Recall training",
        "Stay and wait commands",
        "Problem behaviour modification"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmFpbmluZ3xlbnwxfHx8fDE3NTg4OTgyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      title: "One-to-One Training Sessions",
      duration: "1 hour per session",
      groupSize: "Individual",
      price: "£60/session",
      description: "Personalised training tailored to your dog's specific needs and your lifestyle.",
      includes: [
        "Customised training plan",
        "Individual attention",
        "Home environment training",
        "Specific problem solving",
        "Flexible scheduling",
        "Ongoing support"
      ],
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmUlMjB0byUyMG9uZSUyMGRvZyUyMHRyYWluaW5nfGVufDF8fHx8MTc1ODg5ODIxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      title: "Reactive Dog Rehabilitation",
      duration: "10 weeks",
      groupSize: "Max 4 dogs",
      price: "£320",
      description: "Specialised program for dogs with reactive behaviours, focusing on confidence building and controlled exposure.",
      includes: [
        "Behaviour assessment",
        "Desensitisation protocols",
        "Confidence building exercises",
        "Controlled socialisation",
        "Owner education",
        "Progress monitoring"
      ],
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFjdGl2ZSUyMGRvZ3xlbnwxfHx8fDE3NTg4OTgyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      title: "Agility Training",
      duration: "8 weeks",
      groupSize: "Max 6 dogs",
      price: "£200",
      description: "Fun and engaging agility training to build confidence, improve fitness, and strengthen the human-dog bond.",
      includes: [
        "Introduction to agility equipment",
        "Basic agility techniques",
        "Confidence building",
        "Physical fitness improvement",
        "Mental stimulation",
        "Competition preparation (optional)"
      ],
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjBhZ2lsaXR5fGVufDF8fHx8MTc1ODg5ODIxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    },
    {
      title: "Gundog Training",
      duration: "12 weeks",
      groupSize: "Max 6 dogs",
      price: "£280",
      description: "Specialised training for working gundogs, covering retrieving, marking, and field work skills.",
      includes: [
        "Basic retrieving skills",
        "Marking and memory",
        "Whistle commands",
        "Steadiness training",
        "Water work introduction",
        "Field work preparation"
      ],
      image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndW5kb2clMjB0cmFpbmluZ3xlbnwxfHx8fDE3NTg4OTgyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen pt-8 bg-background text-foreground">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
              Professional Training Services
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From puppy foundations to advanced behavioural work, our training programs are designed 
              to build strong, positive relationships between dogs and their owners through proven, 
              science-based methods.
            </p>
          </div>
        </div>
      </section>

      {/* Training Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {trainingServices.map((service, index) => (
              <Card key={index} className={`bg-card border-border hover:shadow-2xl transition-all duration-300 hover:scale-105 fade-in overflow-hidden ${service.popular ? 'ring-2 ring-accent' : ''}`}>
                {service.popular && (
                  <div className="bg-accent text-accent-foreground text-center py-2">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}
                <CardContent className="p-0">
                  {/* Service Image */}
                  <div className="relative h-48 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-accent text-accent-foreground">
                        {service.price}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Service Details */}
                  <div className="p-6">
                    <h3 className="text-2xl mb-3 text-foreground">
                      {service.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Users className="h-4 w-4 mr-1" />
                        {service.groupSize}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="text-foreground mb-3">What's Included:</h4>
                      <div className="grid grid-cols-1 gap-2">
                        {service.includes.map((item, itemIndex) => (
                          <div key={itemIndex} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-accent mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                        Book This Service
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                      {onPageChange && (
                        <Button 
                          variant="outline" 
                          className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                          onClick={() => onPageChange('contact')}
                        >
                          Get More Information
                        </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Why Choose Our Training?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our approach combines proven training methods with compassionate care, 
              ensuring positive outcomes for both dogs and their families.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-card border-border hover:shadow-lg transition-shadow fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Trophy className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl mb-4 text-foreground">Qualified Professionals</h3>
                <p className="text-muted-foreground">
                  All our trainers hold professional qualifications and continue their education 
                  to stay current with the latest training methodologies.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border hover:shadow-lg transition-shadow fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl mb-4 text-foreground">Positive Methods</h3>
                <p className="text-muted-foreground">
                  We use reward-based, science-backed training methods that build confidence 
                  and strengthen the bond between you and your dog.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card border-border hover:shadow-lg transition-shadow fade-in">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl mb-4 text-foreground">Ongoing Support</h3>
                <p className="text-muted-foreground">
                  Our relationship doesn't end when the course does. We provide ongoing 
                  support and advice to help you maintain your dog's progress.
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
            Choose the right training program for your dog and take the first step 
            towards a happier, more harmonious relationship.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3 rounded-full">
              Book a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {onPageChange && (
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3 rounded-full"
                onClick={() => onPageChange('contact')}
              >
                Contact Us
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}