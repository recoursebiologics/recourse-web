
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FlaskConical, Target, Users } from "lucide-react";

const Pipeline = () => {
  const pipelineData = [
    {
      compound: "RB-101",
      target: "Tumor Associated Macrophages",
      indication: "Pancreatic Cancer",
      stage: "IND-Enabling",
      progress: 85,
      mechanism: "First-in-class immunotherapeutic enhancing killer cell persistence",
      status: "Active"
    },
    {
      compound: "RTX-200",
      target: "Tumor Associated Macrophages",
      indication: "Ovarian Cancer",
      stage: "Lead Optimization",
      progress: 65,
      mechanism: "Enhanced TAM targeting for ovarian malignancies",
      status: "Active"
    },
    {
      compound: "RTX-100",
      target: "Regulatory T Cells",
      indication: "Colorectal Cancer",
      stage: "Lead Optimization", 
      progress: 60,
      mechanism: "Selective Treg modulation in colorectal tumors",
      status: "Active"
    },
    {
      compound: "RB-102",
      target: "Myeloid Derived Suppressor Cells",
      indication: "Breast Cancer",
      stage: "Hit-to-Lead",
      progress: 40,
      mechanism: "MDSC targeting for enhanced immune activation",
      status: "Active"
    },
    {
      compound: "RB-BSA Platform",
      target: "Multiple Targets",
      indication: "Hematologic Malignancies", 
      stage: "Discovery",
      progress: 25,
      mechanism: "Bispecific antibody platform for cytotoxic lymphocyte targeting",
      status: "Active"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Background logo */}
      <div 
        className="fixed inset-0 opacity-5 bg-center bg-no-repeat bg-contain pointer-events-none"
        style={{
          backgroundImage: `url('/lovable-uploads/a9d8c7b6-e5f4-3c2d-1b9a-8e7f6d5c4b3a.png')`
        }}
      />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-green-600">Pipeline</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A robust portfolio of first-in-class immunotherapeutics designed to 
              revolutionize cancer treatment through precision targeting.
            </p>
          </div>
        </div>
      </section>

      {/* Pipeline Chart */}
      <section className="py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <img
              src="/lovable-uploads/f6e5d4c3-b2a1-9c8b-7f6e-5d4c3b2a1f9e.png"
              alt="Recourse Biologics Pipeline"
              className="w-full h-auto object-contain rounded-xl shadow-lg"
            />
          </div>

          {/* Pipeline Stages */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-sm text-gray-600">Target identification and validation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Hit-to-Lead</h3>
              <p className="text-sm text-gray-600">Lead compound optimization</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">IND-Enabling</h3>
              <p className="text-sm text-gray-600">Preclinical safety and efficacy</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinical Trials</h3>
              <p className="text-sm text-gray-600">Human safety and efficacy studies</p>
            </div>
          </div>

          {/* Pipeline Table */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Development Programs
            </h2>
            
            {pipelineData.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-green-600 mb-2">
                        {item.compound}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-700 mb-1">
                        {item.indication}
                      </CardDescription>
                      <p className="text-sm text-gray-500">Target: {item.target}</p>
                    </div>
                    <Badge 
                      variant={item.status === "Active" ? "default" : "secondary"}
                      className="ml-4 bg-green-600 hover:bg-green-700"
                    >
                      {item.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-600">{item.mechanism}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          Development Stage: {item.stage}
                        </span>
                        <span className="text-sm text-gray-500">
                          {item.progress}% Complete
                        </span>
                      </div>
                      <Progress value={item.progress} className="w-full" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pipeline Highlights
            </h2>
            <p className="text-lg text-gray-600">
              Our innovative approach addresses key challenges in cancer immunotherapy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Enhanced Persistence
              </h3>
              <p className="text-gray-600">
                Our lead compound RB-101 significantly increases killer cell persistence 
                without exhaustion, maintaining therapeutic activity over time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Memory Formation
              </h3>
              <p className="text-gray-600">
                Promotes robust memory T-cell formation for long-lasting immunity 
                and potential protection against tumor recurrence.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Safety Profile
              </h3>
              <p className="text-gray-600">
                Engineered to avoid systemic toxicity while maintaining potent 
                anti-tumor activity within the tumor microenvironment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pipeline;
