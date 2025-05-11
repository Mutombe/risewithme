import { useState, useEffect } from 'react';
import React from 'react';
import { Calendar, Users, Heart, Mail, Phone, MapPin, Clock, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

// Logo Component with new turquoise color scheme
const Logo = () => (
  <div className="flex items-center">
    <img src="/rlogo.jpeg" alt="Logo" className="h-10 w-16" />
    <span className=" text-xl font-semibold md:inline-block">
      <span className="text-teal-500">Raphaela</span>
      <span className="text-cyan-800"> Psychotherapy</span>
    </span>
  </div>
);

// Appointment Button Component with updated turquoise
const AppointmentButton = ({ fullWidth = false }) => (
  <button
    className={`bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md transition-colors 
                flex items-center justify-center text-sm font-medium shadow-md ${fullWidth ? 'w-full' : ''}`}
    aria-label="Book an appointment"
  >
    <Calendar size={16} className="mr-2" />
    Book Appointment
  </button>
);

// Dropdown Menu Component
const DropdownMenu = ({ title, items, isActive, currentPage, setCurrentPage, closeMobileMenu }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (path) => {
    setCurrentPage(path);
    setIsOpen(false);
    if (closeMobileMenu) closeMobileMenu();
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className={`flex items-center text-sm font-medium transition-colors hover:text-teal-500 focus:outline-none
                   ${isActive ? 'text-teal-500' : 'text-gray-700'}`}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {title}
        <ChevronDown size={16} className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {items.map((item) => (
              <Link
                key={item.path}
                to={`/${item.path}`}
                onClick={() => handleItemClick(item.path)}
                className={`block px-4 py-2 text-sm hover:bg-teal-50 ${
                  currentPage === item.path ? 'text-teal-500 bg-teal-50' : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update current page based on URL path
  useEffect(() => {
    const path = location.pathname.replace('/', '');
    setCurrentPage(path || 'home');
  }, [location]);

  // Handle scroll event for navbar transparency
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  // Handle window resize
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    if (window.innerWidth >= 768) {
      setIsMenuOpen(false); // Close mobile menu on desktop size
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Navigation links
  const mainNavLinks = [
    { name: 'Home', path: 'home' },
    { name: 'Meet the Therapist', path: 'about' },
    { name: 'Services', path: 'services' },
  ];

  // Dropdown menu items
  const resourcesDropdown = [
    { name: 'Articles', path: 'resources/' },
    { name: 'Workshops', path: 'resources/' },
    { name: 'Self-Help Tools', path: 'resources/' }
  ];


  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 
                ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white shadow-md py-2'}
                ${!isScrolled && currentPage === 'home' ? 'text-white' : 'text-gray-800'}`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link to="/" onClick={() => setCurrentPage('home')} className="flex-shrink-0">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={`/${link.path === 'home' ? '' : link.path}`}
                onClick={() => setCurrentPage(link.path)}
                className={`text-sm font-medium transition-colors hover:text-teal-500 ${
                  currentPage === link.path ? 'text-teal-500' : 
                  (!isScrolled && currentPage === 'home' ? 'text-gray-700' : 'text-gray-700')
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Resource Dropdown */}
            <DropdownMenu 
              title="Resources" 
              items={resourcesDropdown} 
              isActive={currentPage.startsWith('resources')}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
            
            {/* Therapists Dropdown */}

            
            <Link
              to="/contact"
              onClick={() => setCurrentPage('contact')}
              className={`text-sm font-medium transition-colors hover:text-teal-500 ${
                currentPage === 'contact' ? 'text-teal-500' : 
                (!isScrolled && currentPage === 'home' ? 'text-gray-700' : 'text-gray-700')
              }`}
            >
              Contact
            </Link>
            
            <Link
              to="/faq"
              onClick={() => setCurrentPage('faq')}
              className={`text-sm font-medium transition-colors hover:text-teal-500 ${
                currentPage === 'faq' ? 'text-teal-500' : 
                (!isScrolled && currentPage === 'home' ? 'text-gray-700' : 'text-gray-700')
              }`}
            >
              FAQ
            </Link>
            
            <AppointmentButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={24} className={!isScrolled && currentPage === 'home' ? 'text-gray-700' : 'text-gray-700'} />
            ) : (
              <Menu size={24} className={!isScrolled && currentPage === 'home' ? 'text-gray-700' : 'text-gray-700'} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={closeMobileMenu}
        ></div>
      )}

      {/* Mobile Menu Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto md:hidden
                  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4 border-b border-teal-100">
          <Logo />
          <button 
            onClick={closeMobileMenu}
            className="text-gray-700 hover:text-teal-500 focus:outline-none"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4">
          <div className="flex flex-col space-y-4">
            {mainNavLinks.map((link) => (
              <Link
                key={link.path}
                to={`/${link.path === 'home' ? '' : link.path}`}
                onClick={() => {
                  setCurrentPage(link.path);
                  closeMobileMenu();
                }}
                className={`py-2 text-base font-medium ${
                  currentPage === link.path ? 'text-teal-500' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Dropdowns - Expanded for mobile */}
            <div className="py-2">
              <p className="text-base font-medium text-gray-700 mb-2">Resources</p>
              <div className="pl-4 space-y-2">
                {resourcesDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={`/${item.path}`}
                    onClick={() => {
                      setCurrentPage(item.path);
                      closeMobileMenu();
                    }}
                    className={`block text-sm ${
                      currentPage === item.path ? 'text-teal-500' : 'text-gray-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="py-2">
              <p className="text-base font-medium text-gray-700 mb-2">Therapists</p>
              <div className="pl-4 space-y-2">
                {therapistsDropdown.map((item) => (
                  <Link
                    key={item.path}
                    to={`/${item.path}`}
                    onClick={() => {
                      setCurrentPage(item.path);
                      closeMobileMenu();
                    }}
                    className={`block text-sm ${
                      currentPage === item.path ? 'text-teal-500' : 'text-gray-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Link
              to="/contact"
              onClick={() => {
                setCurrentPage('contact');
                closeMobileMenu();
              }}
              className={`py-2 text-base font-medium ${
                currentPage === 'contact' ? 'text-teal-500' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
            
            <Link
              to="/faq"
              onClick={() => {
                setCurrentPage('faq');
                closeMobileMenu();
              }}
              className={`py-2 text-base font-medium ${
                currentPage === 'faq' ? 'text-teal-500' : 'text-gray-700'
              }`}
            >
              FAQ
            </Link>
            
            <div className="pt-4">
              <AppointmentButton fullWidth />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;