import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function CertificatesPage() {
  const certificates = [
    {
      src: "src/assets/certificate image/WhatsApp Image 2025-09-26 at 7.08.17 PM.jpeg",
      alt: "Certificate 1 - Canine Behaviour"
    },
    {
      src: "src/assets/certificate image/WhatsApp Image 2025-09-26 at 7.08.04 PM.jpeg",
      alt: "Certificate 2 - Advanced Training"
    },
    {
      src: "src/assets/certificate image/WhatsApp Image 2025-09-26 at 7.07.52 PM.jpeg",
      alt: "Certificate 3 - Puppy Socialisation"
    },
    {
      src: "src/assets/certificate image/WhatsApp Image 2025-09-26 at 7.07.42 PM.jpeg",
      alt: "Certificate 4 - Behaviour Consultation"
    },
    {
      src: "src/assets/certificate image/WhatsApp Image 2025-09-26 at 7.07.28 PM.jpeg",
      alt: "Certificate 5 - Accredited Trainer"
    },
    // Example for local image:
   
  ];

  return (
    <div className="min-h-screen pt-8 bg-background text-foreground">
      {/* Header Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8 text-foreground">
              Our Certificates & Accreditations
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We maintain the highest professional standards through continuous education, 
              formal qualifications, and industry-recognized certifications from leading 
              canine behaviour institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Certificates Gallery */}
      <section className="py-20 bg-muted/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 fade-in bg-card border-border">
                <CardContent className="p-0">
                  <ImageWithFallback
                    src={cert.src}
                    alt={cert.alt}
                    className="w-full h-80 object-cover cursor-pointer"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl mb-6 text-foreground">Professional Qualifications</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Our team holds certifications from some of the most respected institutions 
                  in canine behaviour and training, including qualifications from the Northern 
                  Centre for Canine Behaviour under John Rogerson.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p>Certified Professional Dog Trainer (CPDT)</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p>Canine Behaviour Specialist Certification</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p>Northern Centre for Canine Behaviour Graduate</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-3 flex-shrink-0"></div>
                    <p>Continuing Professional Development (CPD) Certified</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="fade-in">
              <h2 className="text-3xl md:text-4xl mb-6 text-foreground">Ongoing Education</h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  We believe in lifelong learning and regularly attend workshops, seminars, 
                  and courses to stay current with the latest developments in canine behaviour 
                  science and training methodologies.
                </p>
                <div className="bg-accent/10 p-6 rounded-lg">
                  <h3 className="text-xl mb-3 text-foreground">Recent Training Includes:</h3>
                  <div className="space-y-2">
                    <p className="text-accent">• Advanced Behaviour Modification Techniques</p>
                    <p className="text-accent">• Canine Nutrition and Health Certification</p>
                    <p className="text-accent">• Aggressive Dog Rehabilitation Workshop</p>
                    <p className="text-accent">• Puppy Development and Socialisation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 luxury-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
            Trust in Our Expertise
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            When you choose Canine Needs, you're choosing proven expertise backed by 
            professional qualifications and years of hands-on experience.
          </p>
          <div className="bg-accent/10 inline-block px-8 py-4 rounded-lg">
            <p className="text-accent text-lg">
              "Professional training with a personal touch - that's the Canine Needs difference."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}