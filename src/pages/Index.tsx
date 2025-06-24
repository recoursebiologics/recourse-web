import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Calendar } from "lucide-react";
import { NewsCardSkeleton } from "@/components/Skeleton";
import { useLoadingState } from "@/hooks/useImageLoader";

const Index = () => {
  const isNewsLoading = useLoadingState(0);
  
  const newsItems = [
    {
      title: "Recourse Bio at Bio International Conference",
      summary: "Company will attend conference in Boston to discuss oncology approaches and preclinical assets targeting diverse tumor indications.",
      date: "2 weeks ago",
      link: "https://www.linkedin.com/company/recourse-biology/"
    },
    {
      title: "RecourseBio at JP Morgan Healthcare Conference",
      summary: "Company will attend conference to discuss innovative oncology response approaches.",
      date: "5 months ago",
      link: "https://www.linkedin.com/company/recourse-biology/"
    },
    {
      title: "RB101 Development Milestone",
      summary: "Lead compound RB101 continues to show promising results in preclinical studies, maintaining 12-month timeline to IND filing.",
      date: "6 months ago",
      link: "https://www.linkedin.com/company/recourse-biology/"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 h-[70vh] lg:h-[90vh] flex items-center"
        style={{
          backgroundImage: `url('/ai_biotech.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Gradient overlays for text readability and top/bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/100 via-white/90 to-transparent via-30%" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent via-20% to-white/30" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="flex justify-start">
            <div className="max-w-lg">
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight animate-fade-in-up">
                  Primed for{" "}
                  <span className="text-teal-600">Precision</span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-700 leading-relaxed animate-fade-in-up animation-delay-300">
                  Harnessing the body's tumor-killing cells with first-in-class 
                  immunotherapeutics
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gradient Separator */}
      <div className="h-24 bg-gradient-to-b from-transparent via-teal-50 to-white" />

      {/* News Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Latest <span className="text-teal-600">News</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-150">
              Stay updated with our latest developments, conferences, and milestones
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-300">
            {isNewsLoading ? (
              // Show skeleton loaders while content is loading
              Array.from({ length: 3 }).map((_, index) => (
                <NewsCardSkeleton key={`skeleton-${index}`} />
              ))
            ) : (
              // Show actual news cards once loaded
              newsItems.map((item, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-teal-100">
                  <CardHeader className="pb-3">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <CardTitle className="text-lg font-semibold text-gray-900 leading-tight">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {item.summary}
                    </p>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 text-sm font-medium transition-colors"
                    >
                      Read on LinkedIn
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
          
          <div className="text-center mt-12">
            <a
              href="https://www.linkedin.com/company/recourse-biology/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-lg transition-colors"
            >
              Follow us on LinkedIn
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      <div className="flex-grow" />
      <Footer />
    </div>
  );
};

export default Index;