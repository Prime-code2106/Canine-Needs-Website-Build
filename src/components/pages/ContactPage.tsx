import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! We\'ll get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-8 bg-background">
      {/* Header Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 text-white">
              Get in Touch
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
              Ready to start your dog's training journey? Have questions about our services? 
              We'd love to hear from you and discuss how we can help you and your canine companion.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Details */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <Card className="fade-in bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl mb-6 text-white">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-input-background border-accent/30 focus:border-accent text-white placeholder:text-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-input-background border-accent/30 focus:border-accent text-white placeholder:text-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-input-background border-accent/30 focus:border-accent resize-none text-white placeholder:text-gray-400"
                      placeholder="Tell us about your dog and what you'd like help with..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-accent text-black hover:bg-accent/90 text-base sm:text-lg py-3"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <div className="space-y-6 sm:space-y-8 fade-in">
              <Card className="bg-card border-border">
                <CardContent className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl mb-6 text-white">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg text-white mb-1">Phone</h4>
                        <p className="text-gray-300">+44 7973 320 413</p>
                        <p className="text-sm text-gray-400">Available Mon-Fri, 9am-6pm</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg text-white mb-1">Email</h4>
                        <p className="text-gray-300">info@canineneeds.com</p>
                        <p className="text-sm text-gray-400">We aim to respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg text-white mb-1">Location</h4>
                        <p className="text-gray-300">United Kingdom</p>
                        <p className="text-sm text-gray-400">Serving nationwide</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="text-base sm:text-lg text-white mb-1">Business Hours</h4>
                        <div className="text-gray-300 space-y-1 text-sm sm:text-base">
                          <p>Monday - Friday: 9:00am - 6:00pm</p>
                          <p>Saturday: 10:00am - 4:00pm</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border-border">
                <CardContent className="p-6 sm:p-8 bg-accent/5">
                  <h3 className="text-xl sm:text-2xl mb-4 text-white">Emergency Support</h3>
                  <p className="text-gray-300 mb-4 text-sm sm:text-base">
                    For urgent behavioural concerns or training emergencies, 
                    please call our emergency line:
                  </p>
                  <p className="text-lg sm:text-xl text-accent">+44 7973 320 413</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Available 24/7 for existing clients
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-white">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <Card className="fade-in bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl mb-4 text-white">How long does training take?</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Training duration varies depending on your dog's age, temperament, and the specific 
                  goals you want to achieve. Most basic obedience programs show results within 4-6 weeks, 
                  while more complex behavioural issues may require 3-6 months of consistent work.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl mb-4 text-white">Do you offer puppy training?</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  Yes! We offer comprehensive puppy training programs covering socialisation, 
                  basic commands, house training, and preventing common behavioural issues. 
                  Early training is crucial for developing well-adjusted adult dogs.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl mb-4 text-white">Can you help with aggressive dogs?</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  We have extensive experience with reactive and aggressive dogs. Our qualified 
                  behaviourists can assess your dog's specific triggers and develop a safe, 
                  effective rehabilitation program tailored to their needs.
                </p>
              </CardContent>
            </Card>

            <Card className="fade-in bg-card border-border">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl mb-4 text-white">What areas do you cover?</h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  We provide services across the United Kingdom. For in-person training, 
                  we serve local areas directly. We also offer virtual consultations and 
                  training sessions for clients nationwide.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20 luxury-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Every dog deserves the best start in life. Contact us today to discuss how 
            we can help you and your dog build a stronger, happier relationship together.
          </p>
          <div className="bg-accent/10 inline-block px-6 sm:px-8 py-4 rounded-lg">
            <p className="text-accent text-base sm:text-lg">
              "The journey to a well-trained dog starts with a single step - let's take it together."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}