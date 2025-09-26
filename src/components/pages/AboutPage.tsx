import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  const teamMembers = [
    {
      name: "Hannah Greeno",
      role: "Accredited Dog Trainer",
      bio: "Hannah grew up with Border Collies and has studied behaviour with John Rogerson at the Northern Centre for Canine Behaviour.",
      image: "src/assets/hanna and pertner/HANNAH+THUMB.webp"
    },
    {
      name: "Sorcha Beeson",
      role: "Behaviour Specialist",
      bio: "Sorcha trained over 50 Siberian Huskies in the Arctic and studied canine behaviour with John Rogerson in India.",
      image: "src/assets/hanna and pertner/SORCH+THUMB.webp"
    }
  ];

  return (
    <div className="min-h-screen pt-8 bg-background text-foreground">
      {/* About Header Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
              About Canine Needs
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Founded in 2011 by Hannah Greeno, Canine Needs is run by accredited trainers and 
              behaviour specialists dedicated to supporting dog owners with expertise in training, 
              behaviour, and nutrition.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl mb-6 text-foreground">Our Story</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Canine Needs was born from a passion for understanding dogs and helping them live 
                  their best lives alongside their human families. Since 2011, we've been committed 
                  to evidence-based training methods and compassionate care.
                </p>
                <p>
                  Our approach combines traditional training techniques with modern behavioural science, 
                  ensuring that every dog receives the individual attention they deserve. We believe 
                  that a well-trained dog is a happy dog, and a happy dog makes for a happy family.
                </p>
                <p>
                  Over the years, we've helped hundreds of dogs and their owners build stronger bonds 
                  through positive reinforcement, clear communication, and mutual respect.
                </p>
              </div>
            </div>
            <div className="fade-in">
              <ImageWithFallback
                src="src/assets/hanna and pertner/1743088321941.jpg"
                alt="Dogs in the woods"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-foreground">
              Meet the Team
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our dedicated team of professionals brings together years of experience, 
              formal qualifications, and genuine love for dogs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow fade-in bg-card border-border">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="md:order-1">
                      <ImageWithFallback
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-8 md:order-2 flex flex-col justify-center">
                      <h3 className="text-2xl mb-2 text-foreground">{member.name}</h3>
                      <p className="text-accent mb-4">{member.role}</p>
                      <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Philosophy Section */}
      <section className="py-20 luxury-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-8">
              Our Philosophy
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              We believe that every dog is unique, and our training methods reflect this understanding. 
              Through positive reinforcement, patience, and expertise, we help dogs and their families 
              achieve harmony.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-accent">🎯</span>
                </div>
                <h3 className="text-xl mb-3">Individual Approach</h3>
                <p className="text-gray-300">Tailored training programs for each dog's unique needs and personality.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-accent">💝</span>
                </div>
                <h3 className="text-xl mb-3">Positive Methods</h3>
                <p className="text-gray-300">Evidence-based techniques that build confidence and trust.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-accent">🏆</span>
                </div>
                <h3 className="text-xl mb-3">Lasting Results</h3>
                <p className="text-gray-300">Training that creates long-term positive changes for the whole family.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}