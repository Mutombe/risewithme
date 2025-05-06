// Resources Page Component
import React from 'react';
import { useState, useEffect } from 'react';
import { Calendar, Users, Heart, Mail, Phone, MapPin, Clock, ArrowRight, Menu, X, Sun, Moon, ChevronRight, MessageSquare, Award, BookOpen, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Toaster, toast } from 'sonner';

function ResourcesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Mental Health Resources</h1>
            <p className="text-xl text-white opacity-90">
              Helpful tools, articles, and information to support your mental health journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Self-Help Tools Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Self-Help Tools</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Practical resources to support your mental wellbeing between sessions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Stress Management Toolkit',
                description: 'A collection of evidence-based techniques and exercises for reducing stress and promoting relaxation.',
                icon: <Sun size={36} className="text-teal-500" />
              },
              {
                title: 'Emotional Awareness Journal',
                description: 'Guided journaling prompts to help you identify, understand, and process your emotions more effectively.',
                icon: <BookOpen size={36} className="text-teal-500" />
              },
              {
                title: 'Sleep Hygiene Guide',
                description: 'Practical tips and strategies for improving your sleep quality and establishing healthy sleep routines.',
                icon: <Moon size={36} className="text-teal-500" />
              },
              {
                title: 'Mindful Communication Worksheets',
                description: 'Tools to enhance your communication skills and build stronger, healthier relationships.',
                icon: <MessageSquare size={36} className="text-teal-500" />
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow flex"
              >
                <div className="mr-6">
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{tool.title}</h3>
                  <p className="text-gray-600 mb-4">{tool.description}</p>
                  <button 
                    className="text-teal-600 hover:text-teal-800 font-medium inline-flex items-center"
                    onClick={() => toast.success(`Downloaded: ${tool.title}`)}
                  >
                    <span>Download PDF</span>
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Additional Resources</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted organizations and hotlines for mental health support and crisis intervention.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                name: 'National Suicide Prevention Lifeline',
                description: '24/7, free and confidential support for people in distress, prevention and crisis resources.',
                contact: '1-800-273-8255',
                website: 'suicidepreventionlifeline.org'
              },
              {
                name: 'Crisis Text Line',
                description: 'Text HOME to 741741 to connect with a Crisis Counselor. Free 24/7 support.',
                contact: 'Text HOME to 741741',
                website: 'crisistextline.org'
              },
              {
                name: 'National Alliance on Mental Illness (NAMI)',
                description: 'The nation\'s largest grassroots mental health organization dedicated to building better lives for Americans affected by mental illness.',
                contact: '1-800-950-NAMI (6264)',
                website: 'nami.org'
              },
              {
                name: 'Substance Abuse and Mental Health Services Administration (SAMHSA)',
                description: 'Confidential and free support for individuals facing mental health or substance use disorders.',
                contact: '1-800-662-HELP (4357)',
                website: 'samhsa.gov'
              }
            ].map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md mb-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{resource.name}</h3>
                <p className="text-gray-600 mb-2">{resource.description}</p>
                <p className="text-gray-500 mb-2">Contact: {resource.contact}</p>
                <a href={`https://${resource.website}`} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:text-teal-800 font-medium">
                  {resource.website}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Added */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about therapy, mental health, and our services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                question: 'How do I know if I need therapy?',
                answer: 'Consider seeking therapy if youre experiencing persistent feelings of sadness or anxiety, struggling with daily tasks, facing significant life changes, or if your relationships are strained. Therapy can be beneficial even if youre not in crisis – many people use therapy as a tool for personal growth and self-awareness.'
              },
              {
                question: 'How long does therapy typically last?',
                answer: 'The duration of therapy varies widely depending on your goals, the complexity of issues being addressed, and your individual progress. Some people benefit from short-term therapy (8-12 sessions), while others find longer-term therapy more beneficial. We regularly evaluate progress together and adjust the treatment plan accordingly.'
              },
              {
                question: 'Is therapy confidential?',
                answer: 'Yes, confidentiality is a cornerstone of therapy. Information shared in sessions is protected by law, with limited exceptions related to safety concerns such as risk of harm to yourself or others, or cases of child or elder abuse that require mandatory reporting.'
              },
              {
                question: 'Do you accept insurance?',
                answer: 'We accept many major insurance plans. During your initial consultation, well verify your benefits and explain any out-of-pocket costs. For those without insurance coverage, we offer sliding scale fees based on financial need.'
              },
              {
                question: 'Whats the difference between a psychologist, psychiatrist, and therapist?',
                answer: 'Psychologists typically have doctoral degrees (PhD/PsyD) and can provide assessment and therapy. Psychiatrists are medical doctors (MD) who can prescribe medication. "Therapist" is a broader term that may include psychologists, social workers, counselors, and marriage and family therapists, all of whom provide talk therapy but with different training backgrounds.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md mb-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - Added */}
      <section className="py-16 md:py-20 bg-teal-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Get Mental Health Tips in Your Inbox</h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Sign up for our monthly newsletter for practical mental health strategies, resources, and inspiration.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-lg w-full md:w-80 focus:outline-none"
              />
              <button 
                className="bg-white text-teal-600 hover:bg-gray-100 font-medium px-6 py-3 rounded-lg transition-colors"
                onClick={() => toast.success("Thanks for subscribing!")}
              >
                Subscribe
              </button>
            </div>
            
            <p className="text-white text-sm opacity-80 mt-4">
              We respect your privacy. You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Books and Recommendations Section - Added */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Recommended Reading</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Books our therapists recommend to support your mental health journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'The Body Keeps the Score',
                author: 'Bessel van der Kolk',
                description: 'Explores the connection between trauma and physical health, offering approaches to healing.',
                image: '/api/placeholder/200/300'
              },
              {
                title: 'Atomic Habits',
                author: 'James Clear',
                description: 'A practical guide to building good habits and breaking bad ones for better mental health.',
                image: '/api/placeholder/200/300'
              },
              {
                title: 'Self-Compassion',
                author: 'Kristin Neff',
                description: 'Learn to be kinder to yourself and develop resilience through self-compassion practices.',
                image: '/api/placeholder/200/300'
              },
              {
                title: 'Daring Greatly',
                author: 'Brené Brown',
                description: 'An exploration of vulnerability and courage in personal growth and relationships.',
                image: '/api/placeholder/200/300'
              }
            ].map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{book.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">by {book.author}</p>
                  <p className="text-gray-600 text-sm">{book.description}</p>
                  <button 
                    className="mt-4 text-teal-600 hover:text-teal-800 font-medium inline-flex items-center"
                    onClick={() => toast.success(`Book: ${book.title} details viewed`)}
                  >
                    <span>Learn more</span>
                    <ChevronRight size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops and Events Section - Added */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Upcoming Workshops & Events</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our mental health professionals for these enlightening events.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                title: 'Managing Anxiety in Uncertain Times',
                date: 'May 15, 2025 • 6:00 PM - 7:30 PM',
                location: 'Online via Zoom',
                description: 'Learn practical strategies to manage anxiety and build resilience during challenging times.',
                presenter: 'Dr. Elizabeth Chen'
              },
              {
                title: 'Mindfulness for Busy Professionals',
                date: 'May 22, 2025 • 12:00 PM - 1:00 PM',
                location: 'Online via Zoom',
                description: 'A lunch-hour workshop on incorporating mindfulness into your workday to reduce stress and increase focus.',
                presenter: 'Lisa Chen, RYT'
              },
              {
                title: 'Supporting Your Teens Mental Health',
                date: 'June 5, 2025 • 7:00 PM - 8:30 PM',
                location: 'Community Center, 123 Main Street',
                description: 'For parents and caregivers: Understanding adolescent mental health and effective communication strategies.',
                presenter: 'Dr. Marcus Johnson'
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md mb-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="text-teal-600 font-medium mt-2 md:mt-0">{event.date}</p>
                </div>
                <p className="text-gray-600 mb-3">{event.description}</p>
                <p className="text-gray-500 mb-4">Location: {event.location}</p>
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <p className="text-gray-500">Presenter: {event.presenter}</p>
                  <button 
                    className="mt-4 md:mt-0 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors"
                    onClick={() => toast.success(`Registered for: ${event.title}`)}
                  >
                    Register Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Added */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto bg-teal-50 p-8 md:p-12 rounded-2xl shadow-md text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Ready to Begin Your Healing Journey?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Our compassionate therapists are here to support you. Schedule a consultation today to take the first step toward improved mental wellbeing.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                onClick={() => toast.success("Scheduling consultation!")}
              >
                Schedule a Consultation
              </button>
              <button 
                className="bg-white border border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3 rounded-lg font-medium transition-colors"
                onClick={() => toast.success("Contacting us!")}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Add Toaster component for notifications */}
      <Toaster position="bottom-right" />
    </div>
  );
}

export default ResourcesPage;