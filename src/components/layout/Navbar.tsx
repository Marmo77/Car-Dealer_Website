import { useState } from "react";
import { Car, Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { company } from "@/data/company";
import { useNavigateHandler } from "@/hooks/useNavigateHandler";

import { useLocation } from "react-router-dom";
import { contact } from "@/data/contact";

// interface NavbarProps {
//   currentPage: string;
//   onPageChange: (page: string) => void;
// }
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = company[0].navigationID;

  const location = useLocation();
  const navigate = useNavigateHandler();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-lg drop-shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate(company[0].navigationID[0].id)}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Car className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {company[0].companyName}
              </h1>
              <p className="text-xs text-gray-500 hidden sm:block">
                {company[0].companyDescription}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => navigate(item.id)}
                className={`text-sm font-medium transition-colors hover:text-blue-600 cursor-pointer ${
                  location.pathname === item.id
                    ? "text-blue-600 border-b-2 border-blue-600 pb-1"
                    : "text-gray-700  hover:scale-105"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center justify-center gap-4">
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>{company[0].phoneNumber}</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="group hover:text-blue-600 duration-300"
              onClick={() => navigate(contact.getInTouch)}
            >
              {
                <Mail className="h-4 w-4 group-hover:-rotate-16 transition-transform group-hover:scale-110" />
              }
              <span className="group-hover:translate-x-1 transition-transform">
                Get in touch
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="space-y-3">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    navigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.id
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-3 border-t border-gray-100">
                <div className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>{company[0].phoneNumber}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
