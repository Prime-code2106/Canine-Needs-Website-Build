import { useState, useRef } from 'react';
import { Play, Calendar, Clock, Tag, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';

export function PodcastPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const categories = ['All', 'Health & Safety', 'Legislation', 'Training', 'Behaviour', 'Industry News'];

  const podcastEpisodes = [
    {
      title: "Crufts 'Poisoning' Incident: What Dog Owners Need to Know",
      description: "Following reports of dogs becoming ill at Crufts, we discuss the importance of venue safety, what signs to watch for, and how to protect your dog at events. We cover the investigation findings and practical safety measures every dog owner should know.",
      // duration: "28 minutes",
      // date: "March 2024",
      category: "Health & Safety",
      videoUrl: "src/assets/podcastvideos/cufts.mp4", // Demo video - replace with your actual video
      tags: ["Crufts", "Dog Safety", "Event Preparation", "Health Alert"],
      summary: "A comprehensive look at the Crufts incident, covering health symptoms, preventive measures, and expert advice on keeping your dog safe at large events and dog shows."
    },
    {
      title: "Microchipping Now Compulsory: New UK Law Explained",
      description: "The new legislation making microchipping compulsory for all dogs in England, Scotland and Wales is now in force. We break down what this means for dog owners, the penalties for non-compliance, and how to ensure your dog's details are up to date.",
      // duration: "35 minutes",
      // date: "April 2024",
      category: "Legislation",
      videoUrl: "src/assets/podcastvideos/VID-20250506-WA0076.mp4", // Demo video - replace with your actual video
      tags: ["Microchipping", "UK Law", "Dog Registration", "Legal Requirements"],
      summary: "Everything you need to know about the new microchipping law, including exemptions, registration process, updating details, and what happens if you don't comply."
    },
    {
      title: "Mail Order Puppies: Risks and Responsible Buying",
      description: "Mail order puppies may seem convenient, but this practice often involves risks such as poor breeding conditions, lack of health guarantees, and limited transparency.",
      // duration: "42 minutes",
      // date: "February 2024",
      category: "Training",
      videoUrl: "src/assets/podcastvideos/mail other dogs.mp4", // Demo video - replace with your actual video
      tags: ["Puppy Training", "Socialisation", "Early Development", "Behaviour Prevention"],
      summary: "Responsible buying means researching breeders, meeting puppies in person, and ensuring ethical standards to protect animal welfare and avoid supporting puppy mills."
    },
    {
      title: "Dog Founding",
      description: "Dog founding, or adopting stray and abandoned dogs, is a compassionate choice that gives animals a second chance at life. ",
      // duration: "38 minutes",
      // date: "January 2024",
      category: "Behaviour",
      videoUrl: "src/assets/podcastvideos/Dog founding.mp4", // Demo video - replace with your actual video
      tags: ["Separation Anxiety", "Behaviour Modification", "Post-Pandemic", "Dog Psychology"],
      summary: "Responsible founding involves proper vet care, training, and providing a loving, safe environment for the dog to thrive."
    },
    // {
    //   title: "Dangerous Dogs Act Updates: What's Changed in 2024",
    //   description: "Recent updates to the Dangerous Dogs Act and how they affect dog owners. We discuss breed-specific legislation, public safety measures, and responsible ownership requirements under current UK law.",
    //   duration: "31 minutes",
    //   date: "May 2024",
    //   category: "Legislation",
    //   videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", // Demo video - replace with your actual video
    //   tags: ["Dangerous Dogs Act", "Breed Legislation", "Public Safety", "Dog Law"],
    //   summary: "Analysis of recent changes to dangerous dog legislation, covering breed restrictions, public safety requirements, and guidance for responsible dog ownership."
    // },
    // {
    //   title: "Raw Feeding Controversy: Examining the Evidence",
    //   description: "The ongoing debate around raw feeding for dogs. We examine scientific evidence, potential benefits and risks, and provide balanced guidance for owners considering this feeding approach.",
    //   duration: "45 minutes",
    //   date: "December 2023",
    //   category: "Health & Safety",
    //   videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", // Demo video - replace with your actual video
    //   tags: ["Raw Feeding", "Dog Nutrition", "Health Debate", "Evidence-Based"],
    //   summary: "An objective examination of raw feeding practices, covering nutritional science, safety considerations, and expert recommendations for dog nutrition."
    // },
    // {
    //   title: "Reactive Dog Training: Modern Approaches That Work",
    //   description: "Latest developments in reactive dog training, including new techniques for helping dogs overcome fear-based and aggressive responses. We share success stories and practical implementation strategies.",
    //   duration: "52 minutes",
    //   date: "November 2023",
    //   category: "Training",
    //   videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4", // Demo video - replace with your actual video
    //   tags: ["Reactive Dogs", "Behaviour Modification", "Training Techniques", "Success Stories"],
    //   summary: "Advanced training strategies for reactive dogs, featuring case studies, step-by-step protocols, and expert insights from behavioural specialists."
    // },
    // {
    //   title: "The Rise of Designer Dog Breeds: Health and Ethical Concerns",
    //   description: "Examining the popularity of crossbreed 'designer' dogs, health implications of unregulated breeding, and what potential owners should know before choosing a designer breed puppy.",
    //   duration: "29 minutes",
    //   date: "October 2023",
    //   category: "Industry News",
    //   videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", // Demo video - replace with your actual video
    //   tags: ["Designer Breeds", "Dog Breeding", "Health Issues", "Puppy Mills"],
    //   summary: "Critical analysis of the designer dog trend, covering health screening, ethical breeding practices, and red flags to watch for when choosing a breeder."
    // }
  ];

  const filteredEpisodes = selectedCategory === 'All' 
    ? podcastEpisodes 
    : podcastEpisodes.filter(episode => episode.category === selectedCategory);

  const handlePlayVideo = (index: number) => {
    // Pause any currently playing video
    if (playingVideo !== null && videoRefs.current[playingVideo]) {
      videoRefs.current[playingVideo]?.pause();
    }
    
    // Play the selected video
    if (videoRefs.current[index]) {
      videoRefs.current[index]?.play();
      setPlayingVideo(index);
    }
  };

  const handleVideoEnded = () => {
    setPlayingVideo(null);
  };

  return (
    <div className="min-h-screen pt-8 bg-background text-foreground">
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
              Canine Needs Podcast
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay informed with expert insights on dog training, behaviour, health, and the latest 
              developments in canine welfare. Our podcast brings you evidence-based discussions and 
              practical advice from qualified professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground hover:bg-accent/90'
                    : 'border-accent text-accent hover:bg-accent hover:text-accent-foreground'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEpisodes.map((episode, index) => (
              <Card key={index} className="bg-card border-border hover:shadow-2xl transition-all duration-300 hover:scale-105 fade-in overflow-hidden">
                <CardContent className="p-0">
                  {/* Video Player */}
                  <div className="relative aspect-video bg-muted group">
                    <video
                      ref={(ref) => {
                        videoRefs.current[index] = ref;
                      }}
                      className="w-full h-full object-cover"
                      poster={`https://images.unsplash.com/photo-1552053831-71594a27632d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2clMjB0cmFpbmluZ3xlbnwxfHx8fDE3NTg4OTgyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral`}
                      controls={playingVideo === index}
                      onEnded={handleVideoEnded}
                      preload="metadata"
                    >
                      <source src={episode.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    
                    {playingVideo !== index && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                        <div 
                          className="absolute inset-0 flex items-center justify-center z-20 cursor-pointer"
                          onClick={() => handlePlayVideo(index)}
                        >
                          <div className="w-16 h-16 bg-accent/90 rounded-full flex items-center justify-center group-hover:bg-accent transition-colors">
                            <Play className="h-8 w-8 text-accent-foreground ml-1" />
                          </div>
                        </div>
                      </>
                    )}
                    
                    <Badge className="absolute top-3 right-3 bg-accent text-accent-foreground z-30">
                      {episode.category}
                    </Badge>
                  </div>
                  
                  {/* Episode Info */}
                  <div className="p-6">
                    <h3 className="text-xl mb-3 text-foreground leading-tight">
                      {episode.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-3 mb-4">
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4 mr-1" />
                        {episode.date}
                      </div>
                      <div className="flex items-center text-muted-foreground text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {episode.duration}
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {episode.description}
                    </p>
                    
                    <div className="bg-muted/20 p-4 rounded-lg mb-4">
                      <h4 className="text-sm text-foreground mb-2">Episode Summary:</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {episode.summary}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {episode.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="text-xs bg-secondary/50">
                          <Tag className="h-3 w-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                      onClick={() => handlePlayVideo(index)}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {playingVideo === index ? 'Playing...' : 'Watch Episode'}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Info */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl mb-6 text-foreground">About Our Podcast</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  The Canine Needs Podcast brings you expert insights and practical advice from 
                  qualified dog trainers, behaviourists, and veterinary professionals. Each episode 
                  is designed to help dog owners make informed decisions about their pet's health, 
                  training, and wellbeing.
                </p>
                <p>
                  We cover current issues affecting the dog world, from legislative changes to 
                  health concerns, always providing evidence-based information you can trust. 
                  Our goal is to educate and empower dog owners to provide the best possible 
                  care for their canine companions.
                </p>
              </div>
            </div>
            
            <div className="fade-in">
              <Card className="p-8 bg-card border-border">
                <h3 className="text-2xl mb-4 text-foreground">Subscribe & Stay Updated</h3>
                <p className="text-muted-foreground mb-6">
                  Never miss an episode! Subscribe to our podcast on your favourite platform 
                  and get notified when new episodes are released.
                </p>
                <div className="space-y-3">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Subscribe on YouTube
                  </Button>
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Listen on Spotify
                  </Button>
                  <Button variant="outline" className="w-full border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Apple Podcasts
                  </Button>
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
            Have a Topic Suggestion?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            We'd love to hear what topics you'd like us to cover in future episodes. 
            Send us your suggestions or questions about dog training and behaviour.
          </p>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 text-lg px-8 py-3 rounded-full">
            Contact Us
          </Button>
        </div>
      </section>
    </div>
  );
}