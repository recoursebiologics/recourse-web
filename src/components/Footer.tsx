
import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-green-400 mb-4">
              Recourse Biologics
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Advancing first-in-class immunotherapeutics to harness the body's 
              tumor-killing cells with precision and without systemic toxicity.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pipeline" className="text-gray-300 hover:text-green-400 transition-colors">
                  Pipeline
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex items-center space-x-4">
              <Linkedin className="w-6 h-6 text-gray-300 hover:text-green-400 transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 Recourse Biologics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
