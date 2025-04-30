import React from 'react';
import { useState, useEffect } from 'react';
import { Calendar, Users, Heart, Mail, Phone, MapPin, Clock, ArrowRight, Menu, X, Sun, ChevronRight, MessageSquare, Award, BookOpen, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'sonner';

function AboutPage() {
    return (
      <div>
        {/* Hero Section */}
        <section className="relative bg-teal-600 py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About Us</h1>
              <p className="text-xl text-white opacity-90">
                Our story, values, and commitment to mental health and wellness.
              </p>
            </motion.div>
          </div>
        </section>
  
        {/* Our Story Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Rise with Me Psychotherapy and Wellness was founded in 2018 with a vision to create a 
                  therapeutic space that honors the whole person—mind, body, and spirit. Our founder, 
                  Dr. Lilian Shonhiwa recognized the need for an integrative approach to mental health 
                  that combines evidence-based psychological interventions with holistic wellness practices.
                </p>
                <p className="text-gray-600">
                  What began as a small practice has grown into a thriving wellness center with a team 
                  of dedicated professionals committed to fostering healing, growth, and transformation. 
                  We believe that everyone deserves compassionate, personalized care that acknowledges 
                  their unique experiences and goals.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="bg-green-100 rounded-lg p-8 relative z-10">
                  <div className="bg-white rounded-lg shadow-xl p-6">
                    <Leaf size={40} className="text-green-500 mb-4" />
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                      To provide a safe, nurturing environment where individuals can explore their challenges, 
                      discover their strengths, and develop the skills needed to create lasting positive change 
                      in their lives and relationships.
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full -z-10 -mt-10 -mr-10"></div>
              </motion.div>
            </div>
          </div>
        </section>
  
        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide our approach to therapy and inform every interaction we have with our clients.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Heart size={32} className="text-teal-500" />,
                  title: 'Compassion',
                  description: 'We approach each client with genuine empathy, warmth, and unconditional positive regard.'
                },
                {
                  icon: <Award size={32} className="text-teal-500" />,
                  title: 'Excellence',
                  description: 'We are committed to providing the highest quality care through ongoing education and evidence-based practices.'
                },
                {
                  icon: <Users size={32} className="text-teal-500" />,
                  title: 'Inclusivity',
                  description: 'We celebrate diversity and strive to create a welcoming environment for people of all backgrounds and identities.'
                },
                {
                  icon: <Leaf size={32} className="text-teal-500" />,
                  title: 'Growth',
                  description: 'We believe in the innate capacity for healing and personal development that exists within each person.'
                },
                {
                  icon: <BookOpen size={32} className="text-teal-500" />,
                  title: 'Empowerment',
                  description: 'We aim to equip clients with the knowledge, skills, and resources to become active participants in their wellness journey.'
                },
                {
                  icon: <MessageSquare size={32} className="text-teal-500" />,
                  title: 'Collaboration',
                  description: 'We work together with our clients and with other healthcare providers to ensure comprehensive, coordinated care.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Team Intro Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Meet the experienced professionals who guide our practice and ensure we deliver exceptional care.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  name: 'Dr. Lilian Shonhiwa',
                  title: 'Founder & Clinical Director',
                  image: '/api/placeholder/400/400',
                  bio: 'Licensed Clinical Psychologist with over 15 years of experience specializing in trauma recovery and mindfulness-based therapies.'
                },
                {
                  name: 'Dr. Marcus Johnson',
                  title: 'Associate Director',
                  image: '/api/placeholder/400/400',
                  bio: 'Licensed Marriage and Family Therapist with expertise in couples therapy, family systems, and multicultural counseling approaches.'
                },
                {
                  name: 'Sarah Williams, LCSW',
                  title: 'Wellness Program Coordinator',
                  image: '/api/placeholder/400/400',
                  bio: 'Licensed Clinical Social Worker specializing in integrative approaches to anxiety, depression, and stress management.'
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-teal-600 mb-4">{member.title}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }

export default AboutPage;

