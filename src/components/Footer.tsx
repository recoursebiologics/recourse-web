
import { Link } from "react-router-dom";
import { Linkedin, Mail } from "lucide-react";
import logoImage from "/Logo - Company name.png";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="sm:col-span-2">
            <div className="flex items-center mb-4">
              <img
                src={logoImage}
                alt="Recourse Biologics"
                className="h-6 sm:h-8 w-auto mr-3"
              />
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">
              Recourse Biologics is committed to advancing new and improved
              therapies for oncology. Each program in our pipeline reflects our
              core mission: delivering novel, precision therapeutics that
              maximize therapeutic benefit while minimizing toxicity.
            </p>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-teal-600 transition-colors text-sm sm:text-base block py-1"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/pipeline"
                  className="text-gray-600 hover:text-teal-600 transition-colors text-sm sm:text-base block py-1"
                >
                  Pipeline
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-teal-600 transition-colors text-sm sm:text-base block py-1"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:info@recoursebio.com"
                className="flex items-center text-gray-600 hover:text-teal-600 transition-colors text-sm sm:text-base py-1"
              >
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span className="break-all">info@recoursebio.com</span>
              </a>
              <a
                href="https://www.linkedin.com/company/recourse-biology"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-600 hover:text-teal-600 transition-colors text-sm sm:text-base py-1"
              >
                <Linkedin className="w-4 h-4 mr-2 flex-shrink-0" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-6 sm:mt-8 pt-6 sm:pt-8">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © 2025 Recourse Biologics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
