import React from 'react';
import { useState, useEffect } from 'react';
import { Calendar, Users, Heart, Mail, Phone, MapPin, Clock, ArrowRight, Menu, X, Sun, ChevronRight, MessageSquare, Award, BookOpen, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'sonner';

// Therapists Page Component
function TherapistsPage() {
    return (
      <div>
        {/* Hero Section */}
        <section className="relative bg-green-500 py-20">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Therapists</h1>
              <p className="text-xl text-white opacity-90">
                Meet our team of compassionate, skilled mental health professionals.
              </p>
            </motion.div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Clinical Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our diverse team of licensed professionals brings a wealth of experience and specialized expertise.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  name: 'Dr. Lilian Shonhiwa',
                  title: 'Clinical Psychologist',
                  image: '/api/placeholder/400/500',
                  specialties: ['Trauma Recovery', 'Mindfulness-Based Therapies', 'Anxiety Disorders'],
                  bio: 'Dr. Chen founded Rise with Me with the vision of creating a therapeutic space that honors the whole person. With over 15 years of experience, she specializes in helping clients heal from trauma and develop greater self-awareness through mindfulness practices.'
                },
                {
                  name: 'Dr. Marcus Johnson',
                  title: 'Marriage & Family Therapist',
                  image: '/api/placeholder/400/500',
                  specialties: ['Couples Therapy', 'Family Systems', 'Multicultural Counseling'],
                  bio: 'Dr. Johnson is passionate about helping couples and families strengthen their connections and navigate challenges together. His warm, collaborative approach creates a safe space for all voices to be heard and understood.'
                },
                {
                  name: 'Sarah Williams, LCSW',
                  title: 'Clinical Social Worker',
                  image: '/api/placeholder/400/500',
                  specialties: ['Anxiety & Depression', 'Stress Management', 'Mind-Body Wellness'],
                  bio: 'Sarah integrates traditional talk therapy with holistic wellness approaches to help clients manage anxiety, depression, and stress. She believes in the power of small, consistent changes to create meaningful transformation.'
                },
                {
                  name: 'Dr. Michael Torres',
                  title: 'Neuropsychologist',
                  image: '/api/placeholder/400/500',
                  specialties: ['Cognitive Assessment', 'ADHD', 'Learning Disorders'],
                  bio: 'Dr. Torres specializes in comprehensive neuropsychological assessment and intervention for adults. His expertise helps clients understand cognitive patterns and develop strategies to optimize brain health and functioning.'
                },
                {
                  name: 'Jennifer Lee, LMFT',
                  title: 'Marriage & Family Therapist',
                  image: '/api/placeholder/400/500',
                  specialties: ['Child & Adolescent Therapy', 'Parenting Support', 'Play Therapy'],
                  bio: 'Jennifer creates a nurturing environment where children and adolescents can express themselves freely. She works collaboratively with parents to foster healthy development and family relationships.'
                },
                {
                  name: 'Robert Wilson, LPC',
                  title: 'Licensed Professional Counselor',
                  image: '/api/placeholder/400/500',
                  specialties: ['Men\'s Issues', 'Life Transitions', 'Grief & Loss'],
                  bio: 'Robert specializes in supporting men through life challenges and transitions. His straightforward, compassionate approach helps clients navigate change, process grief, and develop authentic self-expression.'
                }
              ].map((therapist, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <img src={therapist.image} alt={therapist.name} className="w-full h-72 object-cover object-top" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{therapist.name}</h3>
                    <p className="text-teal-600 mb-4">{therapist.title}</p>
                    
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">SPECIALTIES</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {therapist.specialties.map((specialty, i) => (
                        <span key={i} className="bg-teal-50 text-teal-700 text-xs px-3 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 text-sm">{therapist.bio}</p>
                    
                    <button 
                      className="mt-6 text-teal-600 hover:text-teal-800 font-medium text-sm inline-flex items-center"
                      onClick={() => toast.success(`${therapist.name}'s profile details viewed`)}
                    >
                      <span>View full profile</span>
                      <ChevronRight size={16} className="ml-1" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Wellness Team Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Wellness Team</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our wellness practitioners complement our therapeutic services with holistic approaches to mental and physical wellbeing.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  name: 'Lisa Chen, RYT',
                  title: 'Mindfulness & Yoga Instructor',
                  image: '/api/placeholder/400/400',
                  specialties: ['Trauma-Informed Yoga', 'Meditation', 'Stress Reduction'],
                  bio: 'Lisa integrates mindfulness practices and gentle yoga to help clients connect with their bodies and develop greater present-moment awareness.'
                },
                {
                  name: 'David Park, MS',
                  title: 'Nutritional Therapist',
                  image: '/api/placeholder/400/400',
                  specialties: ['Nutritional Psychology', 'Gut-Brain Connection', 'Mood Support'],
                  bio: 'David educates clients on the powerful connection between nutrition and mental health, offering practical guidance for supporting mood and cognitive function through diet.'
                },
                {
                  name: 'Maya Patel, LMT',
                  title: 'Massage Therapist',
                  image: '/api/placeholder/400/400',
                  specialties: ['Therapeutic Massage', 'Somatic Release', 'Relaxation Techniques'],
                  bio: 'Maya specializes in therapeutic massage that supports stress reduction and emotional release, complementing traditional talk therapy approaches.'
                }
              ].map((practitioner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl overflow-hidden shadow-md"
                >
                  <img src={practitioner.image} alt={practitioner.name} className="w-full h-64 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800">{practitioner.name}</h3>
                    <p className="text-green-600 mb-4">{practitioner.title}</p>
                    
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">SPECIALTIES</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {practitioner.specialties.map((specialty, i) => (
                        <span key={i} className="bg-green-50 text-green-700 text-xs px-3 py-1 rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                    
                    <p className="text-gray-600 text-sm">{practitioner.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Credentials Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Credentials</h2>
              <p className="text-lg text-gray-600 mb-12">
                All of our clinical team members are licensed professionals with advanced degrees and specialized training in their areas of expertise.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { title: 'Licensed Therapists', value: '100%' },
                  { title: 'Advanced Degrees', value: 'Masters+' },
                  { title: 'Years Experience', value: '10+' },
                  { title: 'Continued Education', value: 'Annual' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-teal-50 p-6 rounded-xl"
                  >
                    <p className="text-3xl font-bold text-teal-600 mb-2">{stat.value}</p>
                    <p className="text-gray-700 text-sm">{stat.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-teal-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Find Your Therapist Match</h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
              We're happy to help you find the right therapist for your specific needs. Contact us for a free matching consultation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                className="bg-white text-teal-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center"
                onClick={() => toast.success("Therapist matching consultation initiated!")}
              >
                <Users size={18} className="mr-2" />
                <span>Find My Match</span>
              </button>
              <button
                className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center"
                onClick={() => toast.success("Schedule request initiated!")}
              >
                <Calendar size={18} className="mr-2" />
                <span>Schedule Now</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    );
  }

export default TherapistsPage;
  