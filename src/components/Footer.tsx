
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import logoImage from "/Logo - Company name.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src={logoImage} 
                alt="Recourse Biologics"
                className="h-8 w-auto mr-3"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Recourse Biologics is committed to advancing new and improved therapies 
              for oncology. Our lead molecule is RB101, a first-in-class immunotherapeutic 
              that increases professional killer cell persistence, memory formation, and 
              cytotoxicity without systemic toxicity or exhaustion.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/pipeline" className="text-gray-600 hover:text-teal-600 transition-colors">
                  Pipeline
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-teal-600 transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <a 
                href="mailto:info@recoursebiologics.com"
                className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                info@recoursebiologics.com
              </a>
              <a 
                href="https://www.linkedin.com/company/recourse-biologics"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-teal-600 transition-colors"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © 2025 Recourse Biologics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
