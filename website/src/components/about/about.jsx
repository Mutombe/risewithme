import React from 'react';
import { 
  Heart, Mail, Phone, MapPin, 
  Calendar, Users, ArrowRight, 
  Award, BookOpen, Shield, Star, 
  MessageSquare, Check, Briefcase
} from 'lucide-react';

function AboutPage() {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-teal-600 py-16 md:py-24 pt-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">About Lilian Shonhiwa</h1>
            <p className="text-lg md:text-xl text-white opacity-90 mb-6">
              Registered Psychotherapist (Qualifying), MA Counseling Psychology, MBA, BBA, SSW
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:647 835 4998" 
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-teal-700 px-4 py-2 rounded-lg flex items-center transition-all"
              >
                <Phone size={18} className="mr-2" /> 647 835 4998
              </a>
              <a 
                href="#contact" 
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-lg flex items-center transition-all"
              >
                <Mail size={18} className="mr-2" /> Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Welcome</h2>
              <p className="text-gray-700 mb-4">
                Feeling overwhelmed due to anxiety, depression, trauma, or the effects of domestic violence? I am here to help. My desire is to make you feel safe, understood, and supported as we work towards your healing and change.
              </p>
              <p className="text-gray-700 mb-6">
                I offer a calm, compassionate space to explore emotions, develop coping strategies, and rebuild confidence. Drawing from vast years of focused experience in helping women who have faced domestic violence, I also support men experiencing domestic abuse, teens navigating adolescence, couples seeking to strengthen their relationships, families working toward harmony and those experiencing pre and post natal depression.
              </p>
              <div className="bg-teal-50 border-l-4 border-teal-500 p-4 mb-6">
                <p className="italic text-gray-700">
                  "I work with individuals navigating depression or trauma, often rooted in relationships or family dynamics. In our initial sessions, we'll take the time to understand what you're going through and begin building a personalized plan to help you heal and regain a sense of balance and control in your life. Many of my clients start to notice a shift within the first few weeks."
                </p>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Anxiety</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Depression</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Trauma</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Domestic Violence</span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm">Relationships</span>
              </div>
            </div>
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-full h-full bg-teal-200 rounded-lg"></div>
                <img 
                  src="/lilian.jpeg" 
                  alt="Lilian Shonhiwa" 
                  className="w-64 md:w-80 h-auto object-cover rounded-lg shadow-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">our Therapeutic Approach</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We specialize in CBT, Trauma, EFT and Talk therapy to help you manage and collaboratively work on your healing. I am eager to help you navigate life issues and include life coaching if needed through Solution Focused Therapy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Shield size={28} className="text-teal-500" />,
                title: "CBT Therapy",
                description: "Cognitive Behavioral Therapy (CBT) because it provides a strong foundation for understanding how your thoughts influence your emotions and experiences."
              },
              {
                icon: <Heart size={28} className="text-teal-500" />,
                title: "Trauma-Focused Care",
                description: "Trauma Focused Care because compassionate and client-centered, focusing on creating safety before processing difficult experiences."
              },
              {
                icon: <MessageSquare size={28} className="text-teal-500" />,
                title: "Talk Therapy",
                description: "Through open dialogue, we'll explore your concerns in a judgment-free environment, focusing on what matters most to you."
              },
              {
                icon: <Star size={28} className="text-teal-500" />,
                title: "Emotionally Focused Therapy",
                description: "EFT helps identify emotional patterns that affect relationships and personal wellbeing, creating new pathways to connection."
              },
              {
                icon: <Check size={28} className="text-teal-500" />,
                title: "Solution Focused",
                description: "This approach emphasizes solutions rather than problems, focusing on achievable goals and positive outcomes."
              },
              {
                icon: <BookOpen size={28} className="text-teal-500" />,
                title: "Christian Counseling",
                description: "Christian counseling for those who identify with Christianity, integrating faith perspectives when desired."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-6">
              As we work together, I commit to support you all the way. From there, we can integrate other therapeutic approaches as needed to best suit your unique journey.
            </p>
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/*}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Qualifications & Experience</h2>
              <div className="space-y-4">
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Award className="text-teal-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Education</h3>
                    <p className="text-gray-600">Masters in Counseling and Psychology, Yorkville University</p>
                    <p className="text-gray-600">Master of Business Administration (MBA)</p>
                    <p className="text-gray-600">Bachelor of Business Administration (BBA)</p>
                    <p className="text-gray-600">Social Service Worker (SSW)</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Briefcase className="text-teal-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Professional Experience</h3>
                    <p className="text-gray-600">3+ years in clinical practice</p>
                    <p className="text-gray-600">Specialized experience working with domestic violence survivors</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 mt-1">
                    <Check className="text-teal-500" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Licensing</h3>
                    <p className="text-gray-600">Registered Psychotherapist (Qualifying) with the Province of Ontario</p>
                    <p className="text-gray-600">Registration #18077</p>
                    <p className="text-gray-600">Supervised by Bavly Kost (Ontario / 004854)</p>
                  </div>
                </div>
              </div>
            </div>*/}

            <div className="bg-teal-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Supervisors</h3>
              
              <div className="bg-white p-4 rounded-lg mb-4 shadow-sm">
                <p className="text-gray-600 italic mb-3">
                  Supervised by Bavly Kost
                </p>
                <p className="text-gray-800 font-medium">— Bavly Kost, Registered Psychotherapist, BEd, MA, MPS, RP, OCT</p>
              </div>
            
            </div>
          </div>
        </div>
      </section>

      {/* Services Info */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Users size={28} className="text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Who I Work With</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Check size={16} className="text-teal-500 mr-2" />
                  <span>Individuals (adults)</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-teal-500 mr-2" />
                  <span>Couples</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-teal-500 mr-2" />
                  <span>Families</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-teal-500 mr-2" />
                  <span>Teens</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-teal-500 mr-2" />
                  <span>Elders (65+)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <Calendar size={28} className="text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Session Information</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <MapPin size={18} className="text-teal-500 mr-2 mt-1" />
                  <div>
                    <span className="font-medium">Format:</span> Virtual (video/phone), In-person (by arrangement)
                  </div>
                </li>
                <li className="flex items-start">
                  <Calendar size={18} className="text-teal-500 mr-2 mt-1" />
                  <div>
                    <span className="font-medium">Availability:</span> Weekday evenings and all day weekends
                  </div>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="text-teal-500 mr-2 mt-1" />
                  <div>
                    <span className="font-medium">Locations:</span> Grimsby (L3M) and Burlington (L7T)
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <MessageSquare size={28} className="text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Fees & Payment</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Check size={16} className="text-teal-500 mr-2" />
                  <span>Individual Sessions: $100</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-teal-500 mr-2" />
                  <span>Couple Sessions: $120</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-teal-500 mr-2" />
                  <span>Sliding scale available for eligible clients</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-teal-500 mr-2" />
                  <span>Free 15-minute consultation</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-teal-500 mr-2" />
                  <span>Visa, Mastercard, Amex, e-Transfer</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Start Your Journey Towards Healing?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            I offer a free 15-minute consultation to see if we are a good fit. Contact me today to schedule an appointment and learn more about how I can support you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:647 835 4998" 
              className="bg-white text-teal-600 hover:bg-teal-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <Phone size={18} className="mr-2" /> Call 647 835 4998
            </a>
            <a 
              href="#contact" 
              className="bg-teal-700 hover:bg-teal-800 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <Mail size={18} className="mr-2" /> Send Email
            </a>
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="py-8 bg-teal-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-700">
            <span className="font-medium">Languages:</span> English, Shona
          </p>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;