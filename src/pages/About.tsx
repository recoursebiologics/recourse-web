import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, ExternalLink } from "lucide-react";
import { TeamCardSkeleton } from "@/components/Skeleton";
import { useLoadingState } from "@/hooks/useImageLoader";
import { LazyImage } from "@/components/LazyImage";

// Import team member headshots
import westwickHeadshot from "/headshots/westwick.jpg";
import krupnickHeadshot from "/headshots/krupnick.jpg";
import lazearHeadshot from "/headshots/lazear.png";
import mooneyHeadshot from "/headshots/mooney.jpg";
import watkinsHeadshot from "/headshots/watkins.png";

// Import company logos
import celgeneLogo from "/logos/celgene.png";
import ucsdLogo from "/logos/ucsd_som.png";
import courierLogo from "/logos/courier.png";
import michiganLogo from "/logos/michigan_som.png";
import upennLogo from "/logos/upenn.png";
import dnatrixLogo from "/logos/dnatrix.png";
import mercuryLogo from "/logos/mercury.png";
import cmuLogo from "/logos/cmu.png";

const About = () => {
  
  const isTeamLoading = useLoadingState(0);
  
  const teamMembers = [
    {
      name: "John Westwick",
      title: "PhD | Co-founder and CEO",
      linkedin: "https://www.linkedin.com/in/john-westwick-aa3a471",
      headshot: westwickHeadshot,
      logos: [celgeneLogo, ucsdLogo],
      bio: "Senior R&D leader and CEO of multiple biotech firms, including Courier and Resonant Therapeutics. Led Courier's exit for $500M in cash and milestones."
    },
    {
      name: "Sasha Krupnick",
      title: "MD | Co-founder and President", 
      linkedin: "https://www.linkedin.com/in/alexander-krupnick-9370bb124",
      headshot: krupnickHeadshot,
      logos: [courierLogo, michiganLogo],
      bio: "Professor of Surgery, University of Maryland, 20+ years of NIH funded translational research. Pioneered novel therapies to enhance immune response against tumors. Founder of Courier Therapeutics and aSKY Therapeutics, focused on precision therapies and immune modulation."
    },
    {
      name: "Eric Lazear",
      title: "PhD | Co-founder and CSO",
      linkedin: "https://www.linkedin.com/in/elazear/",
      headshot: lazearHeadshot,
      logos: [courierLogo, upennLogo],
      bio: "Designed RB101 and has led its development. Founder and VP of Research at Courier Therapeutics, acquired by Valo Health. Published over 30 papers and patents."
    },
    {
      name: "Brian Mooney",
      title: "MBA | Acting CFO",
      linkedin: "https://www.linkedin.com/in/brian-mooney-18541aa",
      headshot: mooneyHeadshot,
      logos: [dnatrixLogo],
      bio: "Over 30 years of senior management experience in life sciences, medical device and software industries as a CFO and COO; Managing Partner of a venture lending fund and a boutique merchant bank. Previously CFO at DNAtrix, CFO & COO at Crossflo System, Board member at multiple companies including Mira Oncology, Verras Medical, Cobalt Medical and Crossflo Systems."
    },
    {
      name: "Dan Watkins",
      title: "PhD | Co-founder and BOD Member",
      linkedin: "https://www.linkedin.com/in/dan-watkins-2880141",
      headshot: watkinsHeadshot,
      logos: [mercuryLogo, cmuLogo],
      bio: "Venture Partner and co-founder, Mercury Fund. Founded multiple companies in biotech and AI. Initial investor and CEO of Courier Therapeutics. Current CEO of Pelagos Pharmaceuticals."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              About <span className="text-teal-600">Recourse Biologics</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed animate-fade-in-up animation-delay-300">
            <p>
              Recourse Biologics is committed to advancing new and improved therapies 
              for oncology. Our lead molecule is <strong className="text-teal-600">RB101</strong>. 
              RB101 is a first-in-class immunotherapeutic that increases professional killer cell 
              persistence, memory formation, and cytotoxicity without systemic toxicity 
              or exhaustion.
            </p>
            <p>
              In addition to RB101, Recourse Biologics has created an improved method 
              of targeting and redirecting cytotoxic lymphocytes within the tumor 
              microenvironment using our <strong className="text-teal-600">bispecific 
              antibody platform</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up animation-delay-450">
              Leadership Team
            </h2>
          </div>
          
          <div className="animate-fade-in-up animation-delay-600">
            {/* First row - 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {isTeamLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <TeamCardSkeleton key={`skeleton-top-${index}`} />
                ))
              ) : (
                teamMembers.slice(0, 3).map((member, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow flex flex-col">
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <div className="text-center flex-grow flex flex-col">
                      <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-teal-100 relative">
                        <LazyImage
                          src={member.headshot}
                          alt={member.name}
                          className="w-full h-full"
                        />
                      </div>
                      
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {member.name}
                      </h3>
                      
                      <p className="text-teal-600 font-medium mb-3">
                        {member.title}
                      </p>
                      
                      <p className="text-sm text-gray-600 mb-4 flex-grow">
                        {member.bio}
                      </p>
                      
                      <div className="flex justify-center items-center space-x-4 mb-4">
                        {member.logos.map((logo, logoIndex) => (
                          <div key={logoIndex} className="h-16 w-20 flex items-center justify-center">
                            <LazyImage
                              src={logo}
                              alt="Company logo"
                              className="max-h-16 max-w-20 w-auto h-auto opacity-70 object-contain"
                            />
                          </div>
                        ))}
                      </div>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="w-full mt-auto"
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
              ))
              )}
            </div>
            
            {/* Second row - 2 cards centered */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl">
                {isTeamLoading ? (
                  Array.from({ length: 2 }).map((_, index) => (
                    <TeamCardSkeleton key={`skeleton-bottom-${index}`} />
                  ))
                ) : (
                  teamMembers.slice(3, 5).map((member, index) => (
                  <Card key={index + 3} className="hover:shadow-lg transition-shadow flex flex-col">
                    <CardContent className="p-6 flex flex-col flex-grow">
                      <div className="text-center flex-grow flex flex-col">
                        <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full border-4 border-teal-100 relative">
                          <LazyImage
                            src={member.headshot}
                            alt={member.name}
                            className="w-full h-full"
                          />
                        </div>
                        
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {member.name}
                        </h3>
                        
                        <p className="text-teal-600 font-medium mb-3">
                          {member.title}
                        </p>
                        
                        <p className="text-sm text-gray-600 mb-4 flex-grow">
                          {member.bio}
                        </p>
                        
                        <div className="flex justify-center items-center space-x-4 mb-4">
                          {member.logos.map((logo, logoIndex) => (
                            <div key={logoIndex} className="h-16 w-20 flex items-center justify-center">
                              <LazyImage
                                src={logo}
                                alt="Company logo"
                                className="max-h-16 max-w-20 w-auto h-auto opacity-70 object-contain"
                              />
                            </div>
                          ))}
                        </div>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="w-full mt-auto"
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
                ))
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="flex-grow" />
      <Footer />
    </div>
  );
};

export default About;