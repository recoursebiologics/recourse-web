
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, ExternalLink } from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "John Westwick",
      title: "Chief Executive Officer",
      linkedin: "https://www.linkedin.com/in/john-westwick-aa3a471",
      expertise: "Biotech leadership, drug development, strategic partnerships"
    },
    {
      name: "Sasha Krupnick",
      title: "Chief Technology Officer", 
      linkedin: "https://www.linkedin.com/in/alexander-krupnick-9370bb124",
      expertise: "Immunotherapy, translational research, platform development"
    },
    {
      name: "Eric Lazear",
      title: "Chief Scientific Officer",
      linkedin: "https://www.linkedin.com/in/elazear/",
      expertise: "Immunology, viral immunotherapy, academic research"
    },
    {
      name: "Brian Mooney",
      title: "Chief Business Officer",
      linkedin: "https://www.linkedin.com/in/brian-mooney-18541aa",
      expertise: "Business development, partnerships, market strategy"
    },
    {
      name: "Dan Watkins",
      title: "Chief Medical Officer",
      linkedin: "https://www.linkedin.com/in/dan-watkins-2880141",
      expertise: "Clinical development, regulatory affairs, oncology"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Recourse Biologics</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Pioneering the next generation of precision immunotherapeutics 
              to transform cancer treatment.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&crop=center"
                alt="Research scientist in laboratory"
                className="w-full h-80 object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Recourse Biologics is committed to advancing new and improved therapies 
                  for oncology. Our lead molecule is <strong className="text-blue-600">RB101</strong>, 
                  a first-in-class immunotherapeutic that increases professional killer cell 
                  persistence, memory formation, and cytotoxicity without systemic toxicity 
                  or exhaustion.
                </p>
                <p>
                  In addition to RB101, Recourse Biologics has created an improved method 
                  of targeting and redirecting cytotoxic lymphocytes within the tumor 
                  microenvironment using our <strong className="text-blue-600">bispecific 
                  antibody platform</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              To harness the full potential of the immune system in fighting cancer, 
              developing therapies that are both highly effective and remarkably safe.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Pioneering first-in-class immunotherapeutics that address unmet medical needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Safety</h3>
              <p className="text-gray-600">
                Developing therapies that maximize efficacy while minimizing systemic toxicity.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Impact</h3>
              <p className="text-gray-600">
                Transforming patient outcomes through precision medicine approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              World-class expertise in immunotherapy, drug development, and biotechnology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    
                    <p className="text-blue-600 font-medium mb-3">
                      {member.title}
                    </p>
                    
                    <p className="text-sm text-gray-600 mb-4">
                      {member.expertise}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="w-full"
                    >
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        <Linkedin className="w-4 h-4 mr-2" />
                        LinkedIn Profile
                        <ExternalLink className="w-3 h-3 ml-2" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Cutting-Edge Technology
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Our proprietary platforms represent breakthrough innovations in 
              immunotherapy design and delivery.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  RB101 Platform
                </h3>
                <p className="text-blue-100">
                  First-in-class immunotherapeutic designed to enhance killer cell 
                  persistence and memory formation without exhaustion.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Bispecific Antibody Platform
                </h3>
                <p className="text-blue-100">
                  Advanced targeting system for redirecting cytotoxic lymphocytes 
                  within the tumor microenvironment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
