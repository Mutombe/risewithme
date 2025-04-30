// Home Page Component
import React from 'react';
import { useState, useEffect } from 'react';
import { Calendar, Users, Heart, Mail, Phone, MapPin, Clock, ArrowRight, Menu, X, Sun, ChevronRight, MessageSquare, Award, BookOpen, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'sonner';

function HomePage() {
    return (
      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-teal-500 to-green-500 py-20 md:py-28">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Your Journey to Wellness Begins Here
                </h1>
                <p className="text-lg md:text-xl text-white opacity-90 mb-8">
                  Compassionate therapy and personalized wellness solutions to help you rise and thrive.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button
                    className="bg-white text-teal-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                  <button
                    className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-teal-600 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                  >
                    <span>Learn More</span>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
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
                  className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <button
                    className="mt-6 text-teal-600 hover:text-teal-800 font-medium inline-flex items-center"
                  >
                    <span>Learn more</span>
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Client Stories</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real experiences from people who have transformed their lives through therapy with us.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  quote: "Working with Dr. Martin has been transformative. I've developed tools to manage anxiety that I never thought possible.",
                  author: "Sarah K.",
                  title: "Anxiety Management"
                },
                {
                  quote: "The couples therapy sessions saved our marriage. We learned to communicate effectively and rebuild trust.",
                  author: "Michael & Jamie",
                  title: "Couples Therapy"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-xl shadow-md"
                >
                  <div className="mb-6 text-teal-500">
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 10H10V20H16V26H10V30H20V20C20 14.48 18 10 18 10ZM32 10H24V20H30V26H24V30H34V20C34 14.48 32 10 32 10Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-teal-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Begin Your Journey?</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Take the first step toward a healthier, more balanced life. Our compassionate therapists are ready to support you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-white text-teal-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center"
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
      </div>
    );
  }

export default HomePage;