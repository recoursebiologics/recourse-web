
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pipeline", path: "/pipeline" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center">
            <img 
              src="/Logo - Company name.png" 
              alt="Recourse Biologics"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-3 text-base font-medium transition-all duration-300 group ${
                  isActive(item.path)
                    ? "text-teal-600"
                    : "text-gray-700 hover:text-teal-600 hover:scale-105"
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-600 transition-all duration-300 ${
                  isActive(item.path) 
                    ? "scale-x-100" 
                    : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`relative block px-4 py-3 text-lg font-medium transition-all duration-300 group ${
                    isActive(item.path)
                      ? "text-teal-600 bg-teal-50 border-l-4 border-teal-600"
                      : "text-gray-700 hover:text-teal-600 hover:bg-teal-50 hover:translate-x-2"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
