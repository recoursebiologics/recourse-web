import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { LazyImage } from "@/components/LazyImage";
import { PipelineImageSkeleton } from "@/components/Skeleton";
import { useImageLoader } from "@/hooks/useImageLoader";
import pipelineImage from "/Pipeline.png";

const Pipeline = () => {
  const { isLoaded: isPipelineImageLoaded, hasError: pipelineImageError } = useImageLoader(pipelineImage);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative flex flex-col">
      <Navigation />
      
      {/* Pipeline Section */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              Our <span className="text-teal-600">Pipeline</span>
            </h1>
          </div>
          
          <div className="mb-12">
            {!isPipelineImageLoaded && !pipelineImageError ? (
              <PipelineImageSkeleton />
            ) : pipelineImageError ? (
              <div className="w-full h-96 bg-gray-100 rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <p className="text-lg font-medium">Pipeline Image Unavailable</p>
                  <p className="text-sm">Please try refreshing the page</p>
                </div>
              </div>
            ) : (
              <LazyImage
                src={pipelineImage}
                alt="Recourse Biologics Pipeline"
                className="w-full h-auto object-contain rounded-xl shadow-lg animate-scale-in animation-delay-300"
              />
            )}
          </div>

          {/* Pipeline Explanation */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-8 mb-8 animate-fade-in-up animation-delay-450">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Our Development Pipeline
              </h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Recourse Biologics has assembled a robust pipeline of first-in-class immunotherapeutics 
                  designed to harness the body's natural tumor-killing capabilities. Our approach focuses 
                  on enhancing professional killer cell persistence, memory formation, and cytotoxicity 
                  without the systemic toxicity associated with traditional cancer treatments.
                </p>
                
                <p>
                  <strong className="text-teal-600">RB101</strong>, our lead compound, represents a 
                  breakthrough in immunotherapy design. Currently 12 months from IND filing, RB101 
                  has demonstrated remarkable ability to increase killer cell persistence and memory 
                  formation without exhaustion. This first-in-class immunotherapeutic targets tumor 
                  associated macrophages in pancreatic cancer, addressing one of the most challenging 
                  oncology indications.
                </p>
                
                <p>
                  Beyond RB101, our pipeline includes multiple programs targeting various immune cell 
                  populations across different cancer types. Our <strong className="text-teal-600">bispecific 
                  antibody platform</strong> provides an improved method of targeting and redirecting 
                  cytotoxic lymphocytes within the tumor microenvironment, offering precision therapy 
                  options for patients with limited treatment alternatives.
                </p>
                
                <p>
                  Each program in our pipeline is strategically designed to complement our core mission: 
                  delivering precision immunotherapeutics that maximize therapeutic benefit while 
                  minimizing patient burden. From discovery through clinical development, we maintain 
                  rigorous standards for safety, efficacy, and manufacturability.
                </p>
                <strong className="text-teal-600">I just made this up... rewrite</strong>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-600">
              <div className="bg-teal-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-teal-600 mb-2">5</div>
                <div className="text-sm font-medium text-gray-700">Active Programs</div>
              </div>
              
              <div className="bg-emerald-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-emerald-600 mb-2">12</div>
                <div className="text-sm font-medium text-gray-700">Months to IND</div>
              </div>
              
              <div className="bg-cyan-50 rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-cyan-600 mb-2">1st</div>
                <div className="text-sm font-medium text-gray-700">In Class</div>
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