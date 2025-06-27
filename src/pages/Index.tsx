import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Calendar } from "lucide-react";
import { NewsCardSkeleton } from "@/components/Skeleton";
import { useLoadingState } from "@/hooks/useImageLoader";
import aiBiotechImage from "/ai_biotech.png";

const Index = () => {
  const isNewsLoading = useLoadingState(0);
  
  // Helper function to calculate relative time
  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInWeeks = Math.floor(diffInDays / 7);
    const diffInMonths = Math.floor(diffInDays / 30);
    
    if (diffInDays < 7) {
      return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
    } else if (diffInWeeks < 4) {
      return diffInWeeks === 1 ? "1 week ago" : `${diffInWeeks} weeks ago`;
    } else {
      return diffInMonths === 1 ? "1 month ago" : `${diffInMonths} months ago`;
    }
  };
  
  const newsItems = [
    {
      title: "Recourse Bio at Bio International Conference",
      summary: "Company will attend conference in Boston to discuss oncology approaches and preclinical assets targeting diverse tumor indications.",
      date: getRelativeTime("2025-06-11"),
      link: "https://www.linkedin.com/company/recourse-biology/"
    },
    {
      title: "RecourseBio at JP Morgan Healthcare Conference",
      summary: "Company will attend conference to discuss innovative oncology response approaches.",
      date: getRelativeTime("2025-01-15"),
      link: "https://www.linkedin.com/company/recourse-biology/"
    },
    {
      title: "RB101 Development Milestone",
      summary: "Lead compound RB101 continues to show promising results in preclinical studies, maintaining 12-month timeline to IND filing.",
      date: getRelativeTime("2024-12-15"),
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
          backgroundImage: `url(${aiBiotechImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
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
                  Primed for <span className="text-teal-600">Precision</span>
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

      {/* Company Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Recourse Biologics is committed to advancing precision
              therapeutics for oncology. Our lead molecule is{" "}
              <strong className="text-teal-600">RB101</strong>. RB101 is a
              first-in-class immunotherapeutic that increases professional
              killer cell persistence, memory formation, and cytotoxicity
              without systemic toxicity or exhaustion. RB101 is 12 months from
              IND.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              In addition to RB101, Recourse Biologics has created a pipeline of
              compelling, first-in-class candidates. This includes validated
              ADCs directed at novel tumor-selective targets, and an improved
              method of targeting and redirecting cytotoxic lymphocytes within
              the tumor microenvironment using our{" "}
              <strong className="text-teal-600">
                bispecific antibody platform.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Latest <span className="text-teal-600">News</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-150">
              Stay updated with our latest developments, conferences, and
              milestones
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-300">
            {isNewsLoading
              ? // Show skeleton loaders while content is loading
                Array.from({ length: 3 }).map((_, index) => (
                  <NewsCardSkeleton key={`skeleton-${index}`} />
                ))
              : // Show actual news cards once loaded
                newsItems.map((item, index) => (
                  <Card
                    key={index}
                    className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-teal-100"
                  >
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
                ))}
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