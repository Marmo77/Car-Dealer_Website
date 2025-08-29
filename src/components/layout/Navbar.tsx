import { useState } from "react";
import { Car, Search, Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { company } from "@/data/company";

import { useLocation, useNavigate } from "react-router-dom";

// interface NavbarProps {
//   currentPage: string;
//   onPageChange: (page: string) => void;
// }
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [quickSearchOpen, setQuickSearchOpen] = useState(false);

  const navigationItems = company[0].navigationID;

  const location = useLocation();
  const navigate = useNavigate();

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
          <div className="hidden md:flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setQuickSearchOpen(!quickSearchOpen)}
              className="text-gray-600"
            >
              <Search className="h-4 w-4 mr-2" />
              Quick Search
            </Button>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Phone className="h-4 w-4" />
                <span>{company[0].phoneNumber}</span>
              </div>
            </div>
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

        {/* Quick Search Bar */}
        {quickSearchOpen && (
          <div className="py-4 border-t border-gray-100">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by brand, model, or location..."
                className="pl-10 pr-4"
              />
            </div>
          </div>
        )}

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
