import { Brain, Calendar, FileText, Target, ArrowRight, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface BehaviourConsultationPageProps {
  onPageChange?: (page: string) => void;
}

export function BehaviourConsultationPage({ onPageChange }: BehaviourConsultationPageProps) {
  const behaviourIssues = [
    {
      title: "Aggression",
      description: "Towards people, other dogs, or resource guarding",
      severity: "High Priority",
      color: "destructive"
    },
    {
      title: "Separation Anxiety",
      description: "Destructive behaviour when left alone",
      severity: "High Priority", 
      color: "destructive"
    },
    {
      title: "Reactivity",
      description: "Overreaction to triggers like other dogs, cars, or strangers",
      severity: "Medium Priority",
      color: "accent"
    },
    {
      title: "Excessive Barking",
      description: "Persistent barking that disrupts the household",
      severity: "Medium Priority",
      color: "accent"
    },
    {
      title: "Pulling on Lead",
      description: "Strong pulling making walks unpleasant",
      severity: "Low Priority",
      color: "muted"
    },
    {
      title: "Jumping Up",
      description: "Inappropriate greeting behaviour",
      severity: "Low Priority",
      color: "muted"
    }
  ];

  const consultationProcess = [
    {
      step: "1",
      title: "Initial Contact",
      description: "Phone or email consultation to understand your dog's issues and determine if a behaviour consultation is appropriate.",
      duration: "15-30 minutes",
      cost: "Free"
    },
    {
      step: "2", 
      title: "Pre-Consultation Questionnaire",
      description: "Detailed questionnaire about your dog's history, behaviour patterns, and family circumstances.",
      duration: "30-60 minutes",
      cost: "Included"
    },
    {
      step: "3",
      title: "Home Consultation",
      description: "Comprehensive assessment in your home environment, including observation of your dog's behaviour and interaction with family members.",
      duration: "2-3 hours",
      cost: "£120"
    },
    {
      step: "4",
      title: "Behaviour Modification Plan",
      description: "Detailed written plan with step-by-step instructions, management strategies, and training protocols.",
      duration: "Delivered within 7 days",
      cost: "Included"
    },
    {
      step: "5",
      title: "Follow-Up Support",
      description: "Phone/email support and optional follow-up visits to monitor progress and adjust the plan as needed.",
      duration: "4 weeks included",
      cost: "Initial support included"
    }
  ];

  const successStories = [
    {
      name: "Max - German Shepherd",
      issue: "Severe separation anxiety and destructive behaviour",
      outcome: "Now comfortably stays alone for 6+ hours without issues",
      duration: "8 weeks",
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXJtYW4lMjBzaGVwaGVyZHxlbnwxfHx8fDE3NTg4OTgyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Bella - Rescue Mix",
      issue: "Fear-based aggression towards strangers",
      outcome: "Confidently interacts with new people and enjoys walks",
      duration: "12 weeks",
      image: "https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNjdWUlMjBkb2d8ZW58MXx8fHwxNzU4ODk4MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Charlie - Border Collie",
      issue: "Obsessive herding behaviour and reactivity",
      outcome: "Learned impulse control and appropriate outlets for energy",
      duration: "10 weeks",
      image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3JkZXIlMjBjb2xsaWV8ZW58MXx8fHwxNzU4ODk4MjE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <div className="min-h-screen pt-8 bg-background text-foreground">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-r from-background via-muted/20 to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
              Behaviour Consultation
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert help for complex behavioural issues. Our qualified behaviourist will work 
              with you to understand your dog's behaviour and create a tailored modification plan 
              to address the root causes of problematic behaviours.
            </p>
          </div>
        </div>
      </section>

      {/* When You Need a Consultation */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
              When Do You Need a Behaviour Consultation?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Some behaviours require specialist intervention beyond basic training. 
              Here are common issues we address:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {behaviourIssues.map((issue, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow fade-in">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-semibold text-foreground">{issue.title}</h3>
                    <Badge 
                      variant={issue.color as any}
                      className={`text-xs ${
                        issue.color === 'destructive' ? 'bg-destructive text-destructive-foreground' :
                        issue.color === 'accent' ? 'bg-accent text-accent-foreground' :
                        'bg-muted text-muted-foreground'
                      }`}
                    >
                      {issue.severity}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground text-sm">{issue.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 fade-in">
            <div className="bg-muted/20 rounded-lg p-6 max-w-3xl mx-auto">
              <AlertTriangle className="h-8 w-8 text-accent mx-auto mb-4" />
              <p className="text-muted-foreground">
                <strong className="text-foreground">Important:</strong> Aggressive behaviour 
                should be addressed immediately by a qualified professional. Never attempt to 
                'punish' aggressive behaviour as this can make it worse.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
              Our Consultation Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to understanding and modifying your dog's behaviour
            </p>
          </div>

          <div className="space-y-8">
            {consultationProcess.map((step, index) => (
              <Card key={index} className="bg-card border-border fade-in">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-accent-foreground text-xl font-bold">{step.step}</span>
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl mb-3 text-foreground">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
                      
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" />
                          {step.duration}
                        </div>
                        <div className="flex items-center text-sm">
                          <Badge variant="outline" className="border-accent text-accent">
                            {step.cost}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl mb-6 text-foreground">
              Success Stories
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Real transformations from dogs and families we've helped
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow fade-in overflow-hidden">
                <CardContent className="p-0">
                  <div className="h-48 overflow-hidden">
                    <ImageWithFallback
                      src={story.image}
                      alt={story.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl mb-2 text-foreground">{story.name}</h3>
                    <div className="text-sm text-muted-foreground mb-3">
                      <strong>Issue:</strong> {story.issue}
                    </div>
                    <div className="text-sm text-accent mb-3">
                      <CheckCircle2 className="h-4 w-4 inline mr-1" />
                      <strong>Outcome:</strong> {story.outcome}
                    </div>
                    <Badge variant="outline" className="border-accent text-accent">
                      {story.duration} program
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl mb-6 text-foreground">What Makes Us Different</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Brain className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-2 text-foreground">Science-Based Approach</h3>
                    <p className="text-muted-foreground">
                      We use evidence-based methods rooted in animal behaviour science, 
                      not outdated dominance theories.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Target className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-2 text-foreground">Individualised Plans</h3>
                    <p className="text-muted-foreground">
                      Every dog is unique. We create tailored modification plans based on 
                      your dog's specific triggers, history, and environment.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg mb-2 text-foreground">Comprehensive Documentation</h3>
                    <p className="text-muted-foreground">
                      Detailed written plans with clear instructions, progress tracking, 
                      and ongoing support materials.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-in">
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl mb-4 text-foreground">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6">
                  Book your free initial consultation to discuss your dog's behaviour 
                  and determine if a full consultation is right for you.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Free Initial Consultation
                  </Button>
                  {onPageChange && (
                    <Button 
                      variant="outline" 
                      className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                      onClick={() => onPageChange('contact')}
                    >
                      Contact Us for Questions
                    </Button>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 luxury-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
            Don't Wait - Behaviour Issues Don't Improve on Their Own
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            The sooner we address behavioural problems, the faster we can help you and 
            your dog live happily together. Contact us today for your free initial consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3 rounded-full">
              Get Help Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3 rounded-full"
            >
              Call: +44 7973 320 413
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}