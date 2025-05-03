// Home Page Component with Enhanced Hero Section
import React from 'react';
import { useState, useEffect } from 'react';
import { Calendar, Users, Heart, Mail, Phone, MapPin, Clock, ArrowRight, Menu, X, Sun, ChevronRight, MessageSquare, Award, BookOpen, Leaf, Brain, Shield, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Toaster, toast } from 'sonner';
import { Globe } from 'lucide-react';

function HomePage() {
  // For testimonial carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      quote: "Working with Dr. Martin has been transformative. I've developed tools to manage anxiety that I never thought possible.",
      author: "Sarah K.",
      title: "Anxiety Management"
    },
    {
      quote: "The couples therapy sessions saved our marriage. We learned to communicate effectively and rebuild trust.",
      author: "Michael & Jamie",
      title: "Couples Therapy"
    },
    {
      quote: "After struggling with depression for years, the mindfulness techniques I learned here have helped me find joy again.",
      author: "Thomas L.",
      title: "Depression Recovery"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div>
      {/* Enhanced Hero Section with Clean Design - Optimized for Mobile and Desktop */}
      <section className="relative bg-white overflow-hidden">
        
        {/* Mobile View (Image First) */}
        <div className="block md:hidden">
          {/* Image section (mobile) */}
          <div className="w-full h-[60vh] relative">
            <img 
              src="/home.jpg" 
              alt="Woman enjoying a cup of tea with her child" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          </div>
          
          {/* Text content (mobile) */}
          <div className="container mx-auto px-4 py-10">
            <h4 className="text-teal-600 font-medium mb-2 uppercase tracking-wider text-sm">
              PSYCHOTHERAPY IN YORK REGION, GTA & NORTH TORONTO AREAS
            </h4>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-gray-800">
              It starts with <span className="text-teal-600">you.</span>
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              Therapy to help you feel whole, build deeper connections and live with more meaning.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center bg-teal-50 rounded-lg px-4 py-3">
                <Brain className="mr-3 text-teal-600" size={20} />
                <span className="text-teal-600 text-sm">Evidence-Based</span>
              </div>
              <div className="flex items-center bg-teal-50 rounded-lg px-4 py-3">
                <Heart className="mr-3 text-teal-600" size={20} />
                <span className="text-teal-600 text-sm">Compassionate Care</span>
              </div>
              <div className="flex items-center bg-teal-50 rounded-lg px-4 py-3">
                <Shield className="mr-3 text-teal-600" size={20} />
                <span className="text-teal-600 text-sm">Safe Space</span>
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full bg-teal-600 text-white hover:bg-teal-700 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center shadow-lg">
                <span>Book A Free Consultation</span>
              </button>
              <button className="w-full bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center">
                <Phone className="mr-2" size={18} />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop View */}
        <div className="hidden md:block min-h-screen">
          <div className="container mx-auto px-4 md:px-6 relative z-10 pt-40 lg:pt-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left content - Text */}
              <div className="lg:col-span-5 lg:pr-8">
                <h4 className="text-teal-600 font-medium mb-2 uppercase tracking-wider">
                  PSYCHOTHERAPY IN YORK REGION, GTA & NORTH TORONTO AREAS
                </h4>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-gray-800">
                  It starts with <span className="text-teal-600">you.</span>
                </h1>
                <p className="text-lg xl:text-xl mb-8 text-gray-600 max-w-lg">
                  Therapy to help you feel whole, build deeper connections and live with more meaning.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-10">
                  <div className="flex items-center bg-teal-50 rounded-lg px-4 py-3">
                    <Brain className="mr-3 text-teal-600" size={24} />
                    <span className="text-teal-600">Evidence-Based</span>
                  </div>
                  <div className="flex items-center bg-teal-50 rounded-lg px-4 py-3">
                    <Heart className="mr-3 text-teal-600" size={24} />
                    <span className="text-teal-600">Compassionate Care</span>
                  </div>
                  <div className="flex items-center bg-teal-50 rounded-lg px-4 py-3">
                    <Shield className="mr-3 text-teal-600" size={24} />
                    <span className="text-teal-600">Safe Space</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="bg-teal-600 text-white hover:bg-teal-700 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center shadow-lg">
                    <span>Book A Free Consultation</span>
                  </button>
                  <button className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center">
                    <Phone className="mr-2" size={18} />
                    <span>Contact Us</span>
                  </button>
                </div>
              </div>
              
              {/* Right content - Image */}
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/home.jpg"
                    alt="Woman enjoying a cup of tea with her child" 
                    className="w-full object-cover h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-transparent"></div>
                </div>
                
                {/* Feature boxes overlaid on image */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs border-l-4 border-teal-600">
                  <div className="flex items-center mb-2">
                    <Clock size={20} className="text-teal-600 mr-3" />
                    <h4 className="font-medium text-gray-800">Flexible Scheduling</h4>
                  </div>
                  <p className="text-sm text-gray-600">Daytime, evenings & weekend sessions available</p>
                </div>
                
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs border-l-4 border-teal-600">
                  <div className="flex items-center mb-2">
                    <Globe size={20} className="text-teal-600 mr-3" />
                    <h4 className="font-medium text-gray-800">Virtual & In-Person</h4>
                  </div>
                  <p className="text-sm text-gray-600">Sessions available to suit your needs</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service highlights with icons - desktop only */}
          <div className="absolute bottom-0 left-0 right-0 bg-white shadow-md py-8">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-3 gap-8">
                <div className="flex items-center justify-center">
                  <Clock className="text-teal-600 mr-4" size={32} />
                  <div>
                    <h3 className="font-medium text-gray-800">Flexible Hours</h3>
                    <p className="text-sm text-gray-600">Daytime, Evenings & Weekend Sessions</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="text-teal-600 mr-4" size={32} />
                  <div>
                    <h3 className="font-medium text-gray-800">Multiple Options</h3>
                    <p className="text-sm text-gray-600">In-Person & Virtual Appointments</p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Users className="text-teal-600 mr-4" size={32} />
                  <div>
                    <h3 className="font-medium text-gray-800">Inclusive Care</h3>
                    <p className="text-sm text-gray-600">Serving Diverse Populations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How We Can Help</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Professional psychotherapy services tailored to your unique journey for healing, growth, and lasting well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart size={32} className="text-teal-600" />,
                title: 'Individual Therapy',
                description: 'Personalized one-on-one sessions addressing your specific concerns and goals for growth.'
              },
              {
                icon: <Users size={32} className="text-teal-600" />,
                title: 'Couples & Family Therapy',
                description: 'Rebuild connections and develop healthier communication patterns with loved ones.'
              },
              {
                icon: <Sparkles size={32} className="text-teal-600" />,
                title: 'Specialized Programs',
                description: 'Targeted approaches for anxiety, depression, trauma, and other specific mental health needs.'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
                <button
                  className="mt-6 text-teal-600 hover:text-teal-800 font-medium inline-flex items-center"
                >
                  <span>Learn more</span>
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced with turquoise theme */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Client Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real experiences from people who have transformed their lives through therapy with us.
              </p>
            </div>
  
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <div className="mb-6 text-teal-500">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 10H10V20H16V26H10V30H20V20C20 14.48 18 10 18 10ZM32 10H24V20H30V26H24V30H34V20C34 14.48 32 10 32 10Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg">{testimonials[activeTestimonial].quote}</p>
                  <div>
                    <p className="font-semibold text-teal-600">{testimonials[activeTestimonial].author}</p>
                    <p className="text-sm text-gray-500">{testimonials[activeTestimonial].title}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Testimonial pagination dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeTestimonial ? 'bg-teal-500' : 'bg-gray-300'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section - Enhanced with turquoise */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-teal-500 to-cyan-600 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-teal-400"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-400 opacity-20 rounded-full"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-400 opacity-20 rounded-full"></div>
          
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Take the first step toward a healthier, more balanced life. Our compassionate therapists are ready to support you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-white text-teal-600 hover:bg-cyan-50 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center shadow-md"
              >
                <Phone size={18} className="mr-2" />
                <span>Contact Us</span>
              </button>
              <button
                className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center"
                onClick={() => toast.success("Appointment request initiated!")}
              >
                <Calendar size={18} className="mr-2" />
                <span>Schedule a Session</span>
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/lilian.jpeg" 
                    alt="Peaceful therapy environment" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-6 rounded-xl shadow-lg max-w-xs">
                  <h3 className="text-xl font-semibold mb-2">Safe Space for Growth</h3>
                  <p className="text-sm opacity-90">Our serene environment is designed to help you feel comfortable, secure, and ready to explore your journey.</p>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Choose Rise with Me</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We combine evidence-based practices with a compassionate, client-centered approach to provide the highest quality mental health care.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Award className="text-teal-500" size={24} />,
                      title: "Qualified Experts",
                      description: "Our team consists of licensed professionals with specialized training in various therapeutic modalities."
                    },
                    {
                      icon: <Leaf className="text-teal-500" size={24} />,
                      title: "Holistic Approach",
                      description: "We address the whole person – mind, body, and spirit – for comprehensive healing and growth."
                    },
                    {
                      icon: <MessageSquare className="text-teal-500" size={24} />,
                      title: "Personalized Care",
                      description: "Every treatment plan is tailored to your unique needs, goals, and personal circumstances."
                    },
                    {
                      icon: <BookOpen className="text-teal-500" size={24} />,
                      title: "Ongoing Education",
                      description: "We provide resources and skills you can use beyond therapy sessions for lasting change."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="mr-4 p-2 bg-teal-50 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-1 text-cyan-800">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Preview Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-teal-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our therapy services and process.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "How do I know if therapy is right for me?",
                  answer: "Therapy can benefit anyone looking to improve their mental well-being, address specific challenges, or work toward personal growth. If you're experiencing stress, anxiety, relationship difficulties, or simply want to understand yourself better, therapy may be helpful."
                },
                {
                  question: "What can I expect in my first session?",
                  answer: "Your first session will focus on getting to know each other and discussing what brings you to therapy. We'll talk about your history, current situation, and goals. This is also a time to ask questions and determine if the therapist is a good fit for your needs."
                },
                {
                  question: "How long does therapy typically last?",
                  answer: "The duration of therapy varies based on individual needs and goals. Some clients benefit from short-term therapy (8-12 sessions), while others prefer ongoing support. We'll regularly assess your progress and adjust the treatment plan accordingly."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="mb-6 bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
              
              <div className="text-center mt-8">
                <Link 
                  to="/faq"
                  className="inline-flex items-center text-teal-500 hover:text-teal-700 font-medium"
                >
                  <span>View all FAQs</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 md:py-20 bg-cyan-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
              <p className="text-lg opacity-90 mb-8">
                Join our community to receive mental health tips, resources, and updates on workshops and events.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  aria-label="Email address"
                />
                <button 
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-400 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-sm mt-4 opacity-75">
                We respect your privacy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
    </div>
  );
}

function HomePage2() {
    // For testimonial carousel
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const testimonials = [
      {
        quote: "Working with Dr. Martin has been transformative. I've developed tools to manage anxiety that I never thought possible.",
        author: "Sarah K.",
        title: "Anxiety Management"
      },
      {
        quote: "The couples therapy sessions saved our marriage. We learned to communicate effectively and rebuild trust.",
        author: "Michael & Jamie",
        title: "Couples Therapy"
      },
      {
        quote: "After struggling with depression for years, the mindfulness techniques I learned here have helped me find joy again.",
        author: "Thomas L.",
        title: "Depression Recovery"
      }
    ];

    useEffect(() => {
      const interval = setInterval(() => {
        setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 6000);
      return () => clearInterval(interval);
    }, [testimonials.length]);

    return (
      <div>
        {/* Enhanced Hero Section with Turquoise Gradient */}
        <section className="relative min-h-screen flex items-center">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal-400 via-cyan-500 to-teal-600 opacity-90"></div>
          
          {/* Decorative wave pattern */}
          <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
              <path fill="#ffffff" fillOpacity="1" d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,192C672,192,768,224,864,213.3C960,203,1056,149,1152,133.3C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
          
          {/* Decorative circles */}
          <div className="absolute top-1/4 right-10 w-32 h-32 bg-white opacity-10 rounded-full"></div>
          <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-white opacity-10 rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-white opacity-10 rounded-full"></div>
          
          <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left content - Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Find Your Path To <span className="text-cyan-100">Inner Harmony</span>
                </h1>
                <p className="text-lg md:text-xl mb-8 opacity-90 max-w-lg">
                  Professional psychotherapy and counseling services tailored to your unique journey. Discover tools for healing, growth, and lasting well-being.
                </p>
                
                <div className="flex flex-wrap gap-4 mb-10">
                  <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-3">
                    <Brain className="mr-3 text-cyan-400" size={24} />
                    <span className='text-cyan-400'>Evidence-Based Therapy</span>
                  </div>
                  <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-3">
                    <Shield className="mr-3 text-cyan-400" size={24} />
                    <span className='text-cyan-400'>Confidential Support</span>
                  </div>
                  <div className="flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-4 py-3">
                    <Sparkles className="mr-3 text-cyan-400" size={24} />
                    <span className='text-cyan-400'>Personalized Approach</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    className="bg-white text-teal-600 hover:bg-cyan-50 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center shadow-lg"
                  >
                    <Calendar className="mr-2" size={18} />
                    <span>Book Your Session</span>
                  </button>
                  <button
                    className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-teal-600 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={18} />
                    <span>Free Consultation</span>
                  </button>
                </div>
              </motion.div>
              
              {/* Right content - Image/Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hidden lg:block"
              >
                <div className="relative">
                  {/* Placeholder for illustration/image */}
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden h-96">
                    <img 
                      src="/lilian.jpeg" 
                      alt="Therapy session" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating card elements */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                    <div className="flex items-center mb-2">
                      <Users size={20} className="text-teal-500 mr-2" />
                      <h4 className="font-medium text-gray-800">Expert Therapists</h4>
                    </div>
                    <p className="text-sm text-gray-600">Licensed professionals with specialized training in multiple modalities</p>
                  </div>
                  
                  <div className="absolute -top-4 -right-4 bg-cyan-500 text-white rounded-lg shadow-lg p-4">
                    <div className="flex items-center">
                      <Heart size={20} className="mr-2" />
                      <p className="font-medium">100% Client Satisfaction</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Services Section - Updated with turquoise colors */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">How We Can Help</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                At Rise with Me, we provide evidence-based therapy approaches tailored to your unique needs and goals.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart size={32} className="text-teal-500" />,
                  title: 'Individual Therapy',
                  description: 'Personalized one-on-one sessions addressing your specific concerns and goals for growth.'
                },
                {
                  icon: <Users size={32} className="text-teal-500" />,
                  title: 'Couples & Family Therapy',
                  description: 'Rebuild connections and develop healthier communication patterns with loved ones.'
                },
                {
                  icon: <Sun size={32} className="text-teal-500" />,
                  title: 'Wellness Programs',
                  description: 'Holistic approaches combining therapy with mindfulness, nutrition, and lifestyle changes.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-teal-100"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-cyan-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <button
                    className="mt-6 text-teal-500 hover:text-teal-700 font-medium inline-flex items-center"
                  >
                    <span>Learn more</span>
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Testimonials Section - Enhanced with turquoise theme */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Client Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real experiences from people who have transformed their lives through therapy with us.
              </p>
            </div>
  
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <div className="mb-6 text-teal-500">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 10H10V20H16V26H10V30H20V20C20 14.48 18 10 18 10ZM32 10H24V20H30V26H24V30H34V20C34 14.48 32 10 32 10Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg">{testimonials[activeTestimonial].quote}</p>
                  <div>
                    <p className="font-semibold text-teal-600">{testimonials[activeTestimonial].author}</p>
                    <p className="text-sm text-gray-500">{testimonials[activeTestimonial].title}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Testimonial pagination dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === activeTestimonial ? 'bg-teal-500' : 'bg-gray-300'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section - Enhanced with turquoise */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-teal-500 to-cyan-600 text-white relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-teal-400"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-400 opacity-20 rounded-full"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-teal-400 opacity-20 rounded-full"></div>
          
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Take the first step toward a healthier, more balanced life. Our compassionate therapists are ready to support you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-white text-teal-600 hover:bg-cyan-50 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center shadow-md"
              >
                <Phone size={18} className="mr-2" />
                <span>Contact Us</span>
              </button>
              <button
                className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center"
                onClick={() => toast.success("Appointment request initiated!")}
              >
                <Calendar size={18} className="mr-2" />
                <span>Schedule a Session</span>
              </button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/lilian.jpeg" 
                    alt="Peaceful therapy environment" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-6 rounded-xl shadow-lg max-w-xs">
                  <h3 className="text-xl font-semibold mb-2">Safe Space for Growth</h3>
                  <p className="text-sm opacity-90">Our serene environment is designed to help you feel comfortable, secure, and ready to explore your journey.</p>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Why Choose Rise with Me</h2>
                <p className="text-lg text-gray-600 mb-8">
                  We combine evidence-based practices with a compassionate, client-centered approach to provide the highest quality mental health care.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      icon: <Award className="text-teal-500" size={24} />,
                      title: "Qualified Experts",
                      description: "Our team consists of licensed professionals with specialized training in various therapeutic modalities."
                    },
                    {
                      icon: <Leaf className="text-teal-500" size={24} />,
                      title: "Holistic Approach",
                      description: "We address the whole person – mind, body, and spirit – for comprehensive healing and growth."
                    },
                    {
                      icon: <MessageSquare className="text-teal-500" size={24} />,
                      title: "Personalized Care",
                      description: "Every treatment plan is tailored to your unique needs, goals, and personal circumstances."
                    },
                    {
                      icon: <BookOpen className="text-teal-500" size={24} />,
                      title: "Ongoing Education",
                      description: "We provide resources and skills you can use beyond therapy sessions for lasting change."
                    }
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="mr-4 p-2 bg-teal-50 rounded-lg">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-xl mb-1 text-cyan-800">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Preview Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-teal-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about our therapy services and process.
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "How do I know if therapy is right for me?",
                  answer: "Therapy can benefit anyone looking to improve their mental well-being, address specific challenges, or work toward personal growth. If you're experiencing stress, anxiety, relationship difficulties, or simply want to understand yourself better, therapy may be helpful."
                },
                {
                  question: "What can I expect in my first session?",
                  answer: "Your first session will focus on getting to know each other and discussing what brings you to therapy. We'll talk about your history, current situation, and goals. This is also a time to ask questions and determine if the therapist is a good fit for your needs."
                },
                {
                  question: "How long does therapy typically last?",
                  answer: "The duration of therapy varies based on individual needs and goals. Some clients benefit from short-term therapy (8-12 sessions), while others prefer ongoing support. We'll regularly assess your progress and adjust the treatment plan accordingly."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="mb-6 bg-white p-6 rounded-lg shadow-md border-l-4 border-teal-500 hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
              
              <div className="text-center mt-8">
                <Link 
                  to="/faq"
                  className="inline-flex items-center text-teal-500 hover:text-teal-700 font-medium"
                >
                  <span>View all FAQs</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Newsletter Section */}
        <section className="py-16 md:py-20 bg-cyan-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Connected</h2>
              <p className="text-lg opacity-90 mb-8">
                Join our community to receive mental health tips, resources, and updates on workshops and events.
              </p>
              
              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-grow px-4 py-3 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-300"
                  aria-label="Email address"
                />
                <button 
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-400 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
              
              <p className="text-sm mt-4 opacity-75">
                We respect your privacy. You can unsubscribe at any time.
              </p>
            </div>
          </div>
        </section>
        
        <Toaster position="bottom-right" />
      </div>
    );
  }

export default HomePage;