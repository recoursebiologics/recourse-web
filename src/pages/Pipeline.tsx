
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FlaskConical, Target, Users } from "lucide-react";

const Pipeline = () => {
  const pipelineData = [
    {
      compound: "RB101",
      indication: "Solid Tumors",
      stage: "Preclinical",
      progress: 65,
      mechanism: "First-in-class immunotherapeutic enhancing killer cell persistence",
      status: "Active"
    },
    {
      compound: "RB-BSA Platform",
      indication: "Hematologic Malignancies", 
      stage: "Research",
      progress: 35,
      mechanism: "Bispecific antibody platform for cytotoxic lymphocyte targeting",
      status: "Active"
    },
    {
      compound: "RB102",
      indication: "Brain Tumors",
      stage: "Discovery",
      progress: 20,
      mechanism: "CNS-penetrant immunotherapeutic with enhanced memory formation",
      status: "Planned"
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
              Our <span className="text-blue-600">Pipeline</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A robust portfolio of first-in-class immunotherapeutics designed to 
              revolutionize cancer treatment through precision targeting.
            </p>
          </div>
        </div>
      </section>

      {/* Pipeline Visualization */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=1200&h=400&fit=crop&crop=center"
              alt="Pipeline development stages"
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Pipeline Stages */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FlaskConical className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
              <p className="text-sm text-gray-600">Target identification and validation</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Preclinical</h3>
              <p className="text-sm text-gray-600">In vitro and in vivo studies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase I</h3>
              <p className="text-sm text-gray-600">Safety and dosing studies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Phase II/III</h3>
              <p className="text-sm text-gray-600">Efficacy and registration trials</p>
            </div>
          </div>

          {/* Pipeline Table */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Development Programs
            </h2>
            
            {pipelineData.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-600 mb-2">
                        {item.compound}
                      </CardTitle>
                      <CardDescription className="text-lg text-gray-700">
                        {item.indication}
                      </CardDescription>
                    </div>
                    <Badge 
                      variant={item.status === "Active" ? "default" : "secondary"}
                      className="ml-4"
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
      <section className="py-16 bg-gray-50">
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
                Our lead compound RB101 significantly increases killer cell persistence 
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
