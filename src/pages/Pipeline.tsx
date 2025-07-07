import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LazyImage } from "@/components/LazyImage";
import { PipelineImageSkeleton } from "@/components/Skeleton";
import { useImageLoader } from "@/hooks/useImageLoader";
import { useIsMobile } from "@/hooks/use-mobile";
import pipelineImage from "/Pipeline.png";

const Pipeline = () => {
  const { isLoaded: isPipelineImageLoaded, hasError: pipelineImageError } = useImageLoader(pipelineImage);
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative flex flex-col">
      <Navigation />

      {/* Pipeline Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 animate-fade-in-up">
              Our <span className="text-teal-600">Pipeline</span>
            </h1>
          </div>

          <div className="mb-8 sm:mb-12">
            {!isPipelineImageLoaded && !pipelineImageError ? (
              <PipelineImageSkeleton />
            ) : pipelineImageError ? (
              <div className="w-full h-64 sm:h-96 bg-gray-100 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center text-gray-500 px-4">
                  <p className="text-base sm:text-lg font-medium">
                    Pipeline Image Unavailable
                  </p>
                  <p className="text-sm">Please try refreshing the page</p>
                </div>
              </div>
            ) : (
              <div className={isMobile ? "w-full overflow-auto" : ""}>
                <LazyImage
                  src={pipelineImage}
                  alt="Recourse Biologics Pipeline"
                  className={isMobile 
                    ? "w-[1200px] h-auto rounded-xl shadow-lg animate-scale-in animation-delay-300"
                    : "w-full h-auto object-contain rounded-xl shadow-lg animate-scale-in animation-delay-300"
                  }
                />
              </div>
            )}
          </div>

          {/* Pipeline Explanation */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 mb-6 sm:mb-8 animate-fade-in-up animation-delay-450">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Our Development Pipeline
              </h2>

              <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Recourse Biologics has assembled a robust pipeline of
                  first-in-class therapies based on a common theme: precision
                  tumor targeting for improved tumor control and patient safety.{" "}
                </p>

                <p>
                  <strong className="text-teal-600">RB101</strong>, our lead
                  compound, represents a breakthrough in immunotherapy design.
                  Currently 12 months from IND filing, RB101 precisely
                  stimulates killer cell persistence and memory formation
                  without systemic toxicity or immune exhaustion.
                </p>

                <p>
                  In addition to RB101, our pipeline includes multiple optimized{" "}
                  <strong className="text-teal-600">
                    antibody-drug conjugates
                  </strong>{" "}
                  to novel targets expressed in large-market tumor indications
                  (lung, ovary, breast, prostate and others). We have also
                  created a{" "}
                  <strong className="text-teal-600">
                    bispecific antibody platform
                  </strong>{" "}
                  that dramatically improves redirecting cytotoxic lymphocytes
                  without non-specific cytokine release that plagues existing
                  therapies.
                </p>

                <p>
                  Each program in our pipeline reflects our core mission:
                  delivering novel, precision therapeutics that maximize
                  therapeutic benefit while minimizing toxicity.
                </p>
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

export default Pipeline;