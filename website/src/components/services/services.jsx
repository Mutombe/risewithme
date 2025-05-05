import React from 'react';
import { 
  Calendar, Users, Heart, Mail, Phone, 
  MapPin, Clock, ArrowRight, ChevronRight, 
  MessageSquare, Award, BookOpen, 
  Shield, Star, Check, Home, Briefcase
} from 'lucide-react';

function ServicesPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-500 py-16 md:py-24 pt-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Services</h1>
            <p className="text-lg md:text-xl text-white opacity-90 mb-6">
              Professional therapy services tailored to your unique needs and journey
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:2894023685" 
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-teal-700 px-4 py-2 rounded-lg flex items-center transition-all"
              >
                <Phone size={18} className="mr-2" /> (289) 402-3685
              </a>
              <a 
                href="#consultation" 
                className="bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-lg flex items-center transition-all"
              >
                <Calendar size={18} className="mr-2" /> Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">My Therapeutic Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              I offer a variety of evidence-based therapeutic approaches tailored to your specific needs.
              My practice is built on creating a safe, compassionate space where you can explore challenges
              and work towards healing and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Individual Therapy',
                icon: <Users size={28} className="text-teal-500" />,
                description: 'One-on-one sessions focused on your personal healing, growth, and development. Together we`ll explore your challenges and build strategies for positive change.'
              },
              {
                title: 'Couples Therapy',
                icon: <Heart size={28} className="text-teal-500" />,
                description: 'Rebuild connection and improve communication with your partner. I help couples navigate conflicts, restore trust, and strengthen their relationship bonds.'
              },
              {
                title: 'Family Therapy',
                icon: <Home size={28} className="text-teal-500" />,
                description: 'Address challenges affecting your family system. We`ll work together to improve communication, resolve conflicts, and create a more harmonious home environment.'
              },
              {
                title: 'Trauma Recovery',
                icon: <Shield size={28} className="text-teal-500" />,
                description: 'Specialized support for healing from traumatic experiences. I create a safe space to process difficult emotions and develop resilience.'
              },
              {
                title: 'Anxiety & Depression',
                icon: <Star size={28} className="text-teal-500" />,
                description: 'Evidence-based approaches to manage symptoms and develop effective coping strategies for anxiety disorders and depression.'
              },
              {
                title: 'Domestic Violence Support',
                icon: <Heart size={28} className="text-teal-500" />,
                description: 'Specialized support for those who have experienced domestic violence, focusing on safety, healing, and rebuilding confidence.'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Areas of Specialty</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              With years of specialized training and experience, I provide expert support for a wide range of concerns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Anxiety',
                description: 'Personalized strategies to manage anxiety symptoms and build resilience against stress and worry.'
              },
              {
                title: 'Depression',
                description: 'Compassionate support to navigate depression and develop tools for improving mood and outlook.'
              },
              {
                title: 'Trauma and PTSD',
                description: 'Trauma-informed approaches to process difficult experiences and reclaim your sense of safety.'
              },
              {
                title: 'Domestic Abuse',
                description: 'Specialized support for survivors of domestic violence, focusing on safety, healing, and empowerment.'
              },
              {
                title: 'Relationship Issues',
                description: 'Tools to strengthen connections, improve communication, and build healthier relationships.'
              },
              {
                title: 'Self-Esteem',
                description: 'Exploration of core beliefs and development of a stronger, more confident sense of self.'
              },
              {
                title: 'Life Transitions',
                description: 'Support through major life changes like career shifts, relocation, divorce, or becoming a parent.'
              },
              {
                title: 'Grief & Loss',
                description: 'Compassionate guidance through the grieving process, honoring your unique experience of loss.'
              },
              {
                title: 'Pre & Post Natal Depression',
                description: 'Specialized support for navigating the emotional challenges of pregnancy and early parenthood.'
              }
            ].map((specialty, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-teal-400">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{specialty.title}</h3>
                <p className="text-gray-600">{specialty.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Approaches */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">My Therapeutic Approaches</h2>
              <p className="text-gray-600 mb-8">
                I draw from multiple evidence-based therapeutic modalities, integrating approaches 
                based on your unique needs and goals. My primary approaches include:
              </p>
              
              <div className="space-y-6">
                {[
                  {
                    title: 'Cognitive Behavioral Therapy (CBT)',
                    description: 'I start with CBT because it provides a strong foundation for understanding how your thoughts influence your emotions and experiences. CBT helps you identify and change unhelpful thought patterns.'
                  },
                  {
                    title: 'Trauma-Focused Therapy',
                    description: 'Specialized techniques to help process traumatic experiences in a safe, supportive environment, allowing for healing and integration.'
                  },
                  {
                    title: 'Emotionally Focused Therapy (EFT)',
                    description: 'Helps identify emotional patterns that affect relationships and personal wellbeing, creating new pathways to connection.'
                  },
                  {
                    title: 'Solution-Focused Brief Therapy',
                    description: 'A goal-directed approach that focuses on solutions rather than problems, helping you achieve meaningful change efficiently.'
                  },
                  {
                    title: 'Talk Therapy',
                    description: 'Through open dialogue, we`ll explore your concerns in a judgment-free environment, focusing on what matters most to you.'
                  }
                ].map((approach, index) => (
                  <div key={index} className="flex">
                    <div className="mt-1 mr-4">
                      <div className="bg-teal-100 p-1 rounded-full">
                        <ChevronRight size={18} className="text-teal-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{approach.title}</h3>
                      <p className="text-gray-600">{approach.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Specialized Services</h2>

              <div className="space-y-6">
                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <BookOpen size={22} className="text-teal-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">Christian Counseling</h3>
                  </div>
                  <p className="text-gray-600">
                    For those who identify with Christianity, I offer faith-integrated counseling that honors your spiritual beliefs while addressing your mental health needs.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Briefcase size={22} className="text-teal-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">Life Coaching</h3>
                  </div>
                  <p className="text-gray-600">
                    Goal-oriented support to help you navigate life transitions, achieve personal objectives, and create positive change in your life.
                  </p>
                </div>

                <div className="bg-white p-5 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Users size={22} className="text-teal-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-800">Culturally Sensitive Therapy</h3>
                  </div>
                  <p className="text-gray-600">
                    Therapy that respects and integrates your cultural background, values, and experiences as essential aspects of your identity and healing journey.
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-teal-100 p-5 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Languages</h3>
                <p className="text-gray-700">
                  Services available in English and Shona
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">What to Expect</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Understanding the therapy process can help you feel more comfortable and prepared for our work together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                number: '01',
                title: 'Free Initial Consultation',
                description: "A 15-minute phone call to discuss your needs and determine if were a good fit for working together."
              },
              {
                number: '02',
                title: 'First Session',
                description: 'We`ll discuss what brought you to therapy, your history, current challenges, and establish initial goals.'
              },
              {
                number: '03',
                title: 'Personalized Treatment Plan',
                description: 'Together, we`ll develop a plan tailored to your specific needs, preferences, and therapy goals.'
              },
              {
                number: '04',
                title: 'Regular Sessions',
                description: 'Ongoing 50-minute sessions (typically weekly) focused on implementing strategies and making progress.'
              },
              {
                number: '05',
                title: 'Progress Review',
                description: 'Periodic evaluation of your progress and adjustment of your treatment plan as needed.'
              }
            ].map((step, index) => (
              <div key={index} className="flex mb-10 last:mb-0">
                <div className="mr-6">
                  <div className="bg-teal-100 text-teal-600 font-bold text-xl h-12 w-12 rounded-full flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <div className="pt-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Session Fees</h2>
              <p className="text-gray-600 mb-6">
                I believe in transparent pricing and providing accessible mental health care.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-700">Initial Consultation (15 min)</span>
                  <span className="font-semibold text-teal-600">Free</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-700">Individual Session (50 min)</span>
                  <span className="font-semibold">$100</span>
                </div>
                <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                  <span className="text-gray-700">Couples Session (50 min)</span>
                  <span className="font-semibold">$120</span>
                </div>
              </div>
              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Sliding Scale</h3>
                <p className="text-gray-600 text-sm">
                  I offer a limited number of sliding scale slots for clients experiencing financial hardship. 
                  Please inquire during our consultation if you believe you may qualify.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Payment Information</h2>
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Accepted Payment Methods</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center">
                    <Check size={16} className="text-teal-500 mr-2" />
                    <span className="text-gray-600">Visa</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-teal-500 mr-2" />
                    <span className="text-gray-600">Mastercard</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-teal-500 mr-2" />
                    <span className="text-gray-600">American Express</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-teal-500 mr-2" />
                    <span className="text-gray-600">e-Transfer</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Scheduling</h3>
                <div className="flex items-start mb-2">
                  <Clock size={18} className="text-teal-500 mr-2 mt-1" />
                  <div>
                    <span className="font-medium">Availability:</span> Weekday evenings and all day weekends
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar size={18} className="text-teal-500 mr-2 mt-1" />
                  <div>
                    <span className="font-medium">Session Format:</span> Virtual (video/phone) or in-person by arrangement
                  </div>
                </div>
              </div>
              
              <div className="bg-teal-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Locations</h3>
                <div className="flex items-start mb-2">
                  <MapPin size={18} className="text-teal-500 mr-2 mt-1" />
                  <div>Grimsby, ON L3M</div>
                </div>
                <div className="flex items-start">
                  <MapPin size={18} className="text-teal-500 mr-2 mt-1" />
                  <div>Burlington, ON L7T</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section id="consultation" className="py-12 md:py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Begin Your Healing Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I offer a free 15-minute consultation to discuss your needs and see if we're a good fit to work together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:2894023685" 
              className="bg-white text-teal-600 hover:bg-teal-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <Phone size={18} className="mr-2" /> Call (289) 402-3685
            </a>
            <a 
              href="mailto:contact@email.com" 
              className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <Mail size={18} className="mr-2" /> Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;