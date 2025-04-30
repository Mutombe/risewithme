// Services Page Component
import React from 'react';
import { useState, useEffect } from 'react';
import { Calendar, Users, Heart, Mail, Phone, MapPin, Clock, ArrowRight, Menu, X, Sun, ChevronRight, MessageSquare, Award, BookOpen, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'sonner';

function ServicesPage() {
    return (
      <div>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-teal-600 to-green-500 py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
              <p className="text-xl text-white opacity-90">
                Comprehensive therapy and wellness services tailored to your unique needs.
              </p>
            </motion.div>
          </div>
        </section>
  
        {/* Services Overview */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Therapy Services</h2>
                <p className="text-gray-600 mb-8">
                  Our licensed therapists provide evidence-based therapeutic approaches tailored to your specific needs. 
                  We believe in personalized care that acknowledges your unique experiences, challenges, and goals.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: 'Individual Therapy',
                      description: 'One-on-one sessions focused on your personal growth, healing, and development.'
                    },
                    {
                      title: 'Couples Therapy',
                      description: 'Collaborative sessions to improve communication, resolve conflicts, and strengthen relationships.'
                    },
                    {
                      title: 'Family Therapy',
                      description: 'Systemic approach to enhance family functioning, connection, and resilience.'
                    },
                    {
                      title: 'Group Therapy',
                      description: 'Supportive environment to connect with others facing similar challenges and learn valuable skills.'
                    }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex"
                    >
                      <div className="mt-1 mr-4">
                        <div className="bg-teal-100 p-1 rounded-full">
                          <ChevronRight size={18} className="text-teal-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
                        <p className="text-gray-600">{service.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Wellness Programs</h2>
                <p className="text-gray-600 mb-8">
                  Complementing our therapy services, our wellness programs offer holistic approaches to mental health that
                  address the interconnection between mind, body, and spirit.
                </p>
                
                <div className="space-y-6">
                  {[
                    {
                      title: 'Mindfulness & Meditation',
                      description: 'Learn practices to reduce stress, increase present-moment awareness, and cultivate inner peace.'
                    },
                    {
                      title: 'Stress Management',
                      description: 'Develop practical skills and strategies to effectively manage life stressors and prevent burnout.'
                    },
                    {
                      title: 'Mind-Body Wellness',
                      description: 'Explore the connection between physical and mental health through integrated approaches.'
                    },
                    {
                      title: 'Holistic Healing',
                      description: 'Combine traditional therapy with complementary modalities for comprehensive wellness.'
                    }
                  ].map((program, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex"
                    >
                      <div className="mt-1 mr-4">
                        <div className="bg-green-100 p-1 rounded-full">
                          <Leaf size={18} className="text-green-600" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{program.title}</h3>
                        <p className="text-gray-600">{program.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Specialties Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Areas of Specialty</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our team has extensive experience and specialized training in addressing a wide range of concerns.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Anxiety & Depression',
                  description: 'Evidence-based approaches to manage symptoms and develop coping strategies for anxiety disorders and depression.'
                },
                {
                  title: 'Trauma Recovery',
                  description: 'Trauma-informed care using EMDR, somatic experiencing, and other modalities to process and heal from traumatic experiences.'
                },
                {
                  title: 'Relationship Issues',
                  description: 'Support for navigating relationship challenges, improving communication, and fostering healthy connections.'
                },
                {
                  title: 'Life Transitions',
                  description: 'Guidance through major life changes such as career shifts, relocation, divorce, or becoming a parent.'
                },
                {
                  title: 'Grief & Loss',
                  description: 'Compassionate support through the grieving process, honoring your unique experience of loss and healing journey.'
                },
                {
                  title: 'Self-Esteem & Identity',
                  description: 'Exploration of core beliefs, personal values, and identity development to foster authentic self-expression and confidence.'
                },
                {
                  title: 'Stress & Burnout',
                  description: 'Strategies for managing chronic stress, preventing burnout, and restoring balance and wellbeing in your life.'
                }
              ].map((specialty, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{specialty.title}</h3>
                  <p className="text-gray-600">{specialty.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Process Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What to Expect</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our therapeutic process is designed to provide you with the support and tools you need to achieve your goals.
              </p>
            </div>
  
            <div className="max-w-4xl mx-auto">
              {[
                {
                  number: '01',
                  title: 'Initial Consultation',
                  description: 'A 15-minute phone call to discuss your needs and determine if our services are a good fit for you.'
                },
                {
                  number: '02',
                  title: 'Intake Session',
                  description: 'A comprehensive assessment to understand your history, current challenges, and therapy goals.'
                },
                {
                  number: '03',
                  title: 'Treatment Planning',
                  description: 'Collaborative development of a personalized plan tailored to your specific needs and objectives.'
                },
                {
                  number: '04',
                  title: 'Regular Sessions',
                  description: 'Ongoing therapy sessions focused on implementing strategies and making progress toward your goals.'
                },
                {
                  number: '05',
                  title: 'Progress Review',
                  description: 'Periodic evaluation of your progress and adjustment of your treatment plan as needed.'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex mb-10 last:mb-0"
                >
                  <div className="mr-8">
                    <div className="bg-teal-100 text-teal-600 font-bold text-xl h-14 w-14 rounded-full flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  <div className="pt-3">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Insurance & Fees Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Insurance</h2>
                <p className="text-gray-600 mb-6">
                  We accept a variety of insurance plans and are committed to making quality mental health care accessible.
                </p>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Accepted Insurance Plans:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Blue Cross Blue Shield</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Aetna</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Cigna</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>United Healthcare</span>
                  </li>
                  <li className="flex items-center">
                    <ChevronRight size={16} className="text-teal-500 mr-2" />
                    <span>Medicare</span>
                  </li>
                </ul>
                <p className="mt-6 text-gray-600">
                  If you don't see your insurance listed, please contact us to verify coverage options.
                </p>
              </motion.div>
  
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-md"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Fees & Payment</h2>
                <p className="text-gray-600 mb-6">
                  For clients paying out-of-pocket, we offer transparent fee structures and flexible payment options.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-700">Initial Consultation (15 min)</span>
                    <span className="font-semibold">Complimentary</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-700">Individual Therapy (50 min)</span>
                    <span className="font-semibold">$150</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-700">Couples Therapy (80 min)</span>
                    <span className="font-semibold">$180</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-700">Family Therapy (80 min)</span>
                    <span className="font-semibold">$190</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-gray-100">
                    <span className="text-gray-700">Group Therapy (90 min)</span>
                    <span className="font-semibold">$60</span>
                  </div>
                </div>
                <p className="mt-6 text-gray-600">
                  We offer a limited number of sliding scale slots for clients experiencing financial hardship.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-teal-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Healing Journey Today</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              Take the first step toward growth and transformation. Contact us to schedule your initial consultation.
            </p>
            <button
              className="bg-white text-teal-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center"
              onClick={() => toast.success("Appointment request initiated!")}
            >
              <Calendar size={18} className="mr-2" />
              <span>Schedule a Consultation</span>
            </button>
          </div>
        </section>
      </div>
    );
  }
  
export default ServicesPage;