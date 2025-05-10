import React from "react";
import { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  Heart,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  Menu,
  X,
  Sun,
  ChevronRight,
  MessageSquare,
  Award,
  BookOpen,
  Leaf,
  Brain,
  Shield,
  Sparkles,
  User,
  Baby,
  PersonStanding,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Toaster, toast } from "sonner";
import { Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";
function ServicesSection() {
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();

  const services = [
    {
      icon: <User className="text-teal-600" size={32} />,
      title: "Individual Therapy",
      description:
        "One-on-one sessions focused on personal healing, growth, and development. Explore challenges and build strategies for positive change.",
      backgroundImage: "/ind.jpg",
    },
    {
      icon: <Heart className="text-teal-600" size={32} />,
      title: "Couples Therapy",
      description:
        "Rebuild trust, navigate conflicts, and deepen bonds through compassionate communication. Reignite intimacy and strengthen partnership.",
      backgroundImage: "/coup.jpg",
    },
    {
      icon: <Users className="text-teal-600" size={32} />,
      title: "Family Therapy",
      description:
        "Strengthen communication, resolve conflicts, and foster understanding to rebuild family harmony and connection.",
      backgroundImage: "/family.jpg",
    },
    {
      icon: <User className="text-teal-600" size={32} />,
      title: "Seniors Therapy",
      description:
        "Compassionate support for life transitions, grief, and health challenges using reminiscence therapy and mindfulness.",
      backgroundImage: "/senior.jpg",
    },
    {
      icon: <Baby className="text-teal-600" size={32} />,
      title: "Child Therapy",
      description:
        "Play-based therapy helping kids navigate emotions and build confidence through creative expression.",
      backgroundImage: "/child.png",
    },
    {
      icon: <PersonStanding className="text-teal-600" size={32} />,
      title: "Teen Therapy",
      description:
        "Safe space for teens to navigate social stress and anxiety using mindfulness and creative expression.",
      backgroundImage: "/teen.webp",
    },
  ];

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How I Can Help
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional psychotherapy services tailored to your unique journey
            for healing, growth, and lasting well-being.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100 h-64 group"
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={service.backgroundImage}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-30 transition-opacity duration-300"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white/70"></div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between z-10 pb-12">
                <div>
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <button
                  className="mt-6 text-teal-600 hover:text-teal-800 font-medium inline-flex items-center"
                  onClick={() => navigate("/services")}
                >
                  <span>Learn more</span>
                  <ChevronRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  // For testimonial carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = [
    {
      quote:
        "Working with Lilian has been transformative. I've developed tools to manage anxiety that I never thought possible.",
      author: "Sarah K.",
      title: "Anxiety Management",
    },
    {
      quote:
        "The couples therapy sessions saved our marriage. We learned to communicate effectively and rebuild trust.",
      author: "Michael & Jamie",
      title: "Couples Therapy",
    },
    {
      quote:
        "After struggling with depression for years, the mindfulness techniques I learned here have helped me find joy again.",
      author: "Thomas L.",
      title: "Depression Recovery",
    },
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
              alt="Lilian Shonhiwa, Registered Psychotherapist"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
          </div>

          {/* Text content (mobile) */}
          <div className="container mx-auto px-4 py-10">
            <h4 className="text-teal-600 font-medium mb-2 uppercase tracking-wider text-sm">
              PSYCHOTHERAPY IN GRIMSBY, <strong>HAMILTON</strong>, BURLINGTON &
              SURROUNDING AREAS
            </h4>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight text-gray-800">
              It starts with <span className="text-teal-600">you.</span>
            </h1>
            <p className="text-lg mb-8 text-gray-600">
              Fostering Your Path to Mind-Body Harmony
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center bg-teal-50 rounded-lg px-4 py-3">
                <Brain className="mr-3 text-teal-600" size={20} />
                <span className="text-teal-600 text-sm">Evidence-Based</span>
              </div>
              <div className="flex items-center bg-teal-50 rounded-lg px-4 py-3">
                <Heart className="mr-3 text-teal-600" size={20} />
                <span className="text-teal-600 text-sm">
                  Compassionate Care
                </span>
              </div>
              <div className="flex items-center bg-teal-50 rounded-lg px-4 py-3">
                <Shield className="mr-3 text-teal-600" size={20} />
                <span className="text-teal-600 text-sm">Safe Space</span>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href="tel:647 835 4998"
                className="w-full bg-teal-600 text-white hover:bg-teal-700 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center shadow-lg"
              >
                <span>Book A Free Consultation</span>
              </a>
              <a
                href="tel:647 835 4998"
                className="w-full bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2" size={18} />
                <span>Contact Us</span>
              </a>
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
                  PSYCHOTHERAPY IN GRIMSBY, <strong>HAMILTON</strong>, BURLINGTON & SURROUNDING AREAS
                </h4>
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-gray-800">
                  Let the journey <span className="text-teal-600">begin.</span>
                </h1>
                <p className="text-lg xl:text-xl mb-8 text-gray-600 max-w-lg">
                  Therapy to help you feel whole, build deeper connections and
                  live with more meaning.
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
                  <a
                    href="tel:647 835 4998"
                    className="bg-teal-600 text-white hover:bg-teal-700 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center shadow-lg"
                  >
                    <span>Book A Free Consultation</span>
                  </a>
                  <a
                    href="tel:647 835 4998"
                    className="bg-white text-teal-600 border-2 border-teal-600 hover:bg-teal-50 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                  >
                    <Phone className="mr-2" size={18} />
                    <span>Contact Us</span>
                  </a>
                </div>
              </div>

              {/* Right content - Image */}
              <div className="lg:col-span-7 relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src="/home.jpg"
                    alt="Lilian Shonhiwa, Registered Psychotherapist"
                    className="w-full object-cover h-[500px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-teal-600/30 to-transparent"></div>
                </div>

                {/* Feature boxes overlaid on image */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs border-l-4 border-teal-600">
                  <div className="flex items-center mb-2">
                    <Clock size={20} className="text-teal-600 mr-3" />
                    <h4 className="font-medium text-gray-800">
                      Flexible Scheduling
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Weekday evenings & weekend sessions available
                  </p>
                </div>

                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs border-l-4 border-teal-600">
                  <div className="flex items-center mb-2">
                    <Globe size={20} className="text-teal-600 mr-3" />
                    <h4 className="font-medium text-gray-800">
                      Virtual & In-Person
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600">
                    Sessions available to suit your needs
                  </p>
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
                    <h3 className="font-medium text-gray-800">
                      Flexible Hours
                    </h3>
                    <p className="text-sm text-gray-600">
                      Weekday Evenings & Weekend Sessions
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <MapPin className="text-teal-600 mr-4" size={32} />
                  <div>
                    <h3 className="font-medium text-gray-800">
                      Multiple Options
                    </h3>
                    <p className="text-sm text-gray-600">
                      In-Person & Virtual Appointments
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Users className="text-teal-600 mr-4" size={32} />
                  <div>
                    <h3 className="font-medium text-gray-800">
                      Inclusive Care
                    </h3>
                    <p className="text-sm text-gray-600">
                      Serving Diverse Populations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Lilian Section */}
      <section className="py-16 md:py-24 bg-teal-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/lilian.jpeg"
                  alt="Lilian Shonhiwa, Registered Psychotherapist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-500 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <h3 className="text-xl font-semibold mb-2">Lilian Shonhiwa</h3>
                <p className="text-sm opacity-90">
                  Registered Psychotherapist (Qualifying), MACP, MBA, BBA, SSW
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Meet Your Therapist
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Feeling overwhelmed due to anxiety, depression, trauma, or the
                effects of domestic violence? I am here to help. My desire is to
                make you feel safe, understood, and supported as we work towards
                your healing and change.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I offer a calm, compassionate space to explore emotions, develop
                coping strategies, and rebuild confidence. Drawing from vast
                years of focused experience in helping women who have faced
                domestic violence, I also support men experiencing domestic
                abuse, teens navigating adolescence, couples seeking to
                strengthen their relationships, families working toward harmony
                and those experiencing pre and post natal depression.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                I specialize in CBT, Trauma, EFT and Talk therapy to help you
                manage and collaboratively work on your healing. I am eager to
                help you navigate life issues and include life coaching if
                needed through Solution Focused Therapy. I also offer Christian
                counseling for those who identify with Christianity. Wanting to
                identify with your culture, I am here for you.
              </p>

              <a
                href="tel:647 835 4998"
                className="bg-teal-600 text-white hover:bg-teal-700 font-medium py-3 px-6 rounded-md transition-colors inline-flex items-center shadow-lg"
              >
                <Phone className="mr-2" size={18} />
                <span>Call for a free 15-minute consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection />

      {/* Specialties & Expertise Section */}
      <section className="py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Specialties & Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized therapeutic approaches for a wide range of mental
              health concerns.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Trauma and PTSD",
              "Anxiety and Depression",
              "Domestic Violence Support",
              "Sexual Assault Recovery",
              "Self Esteem",
              "Anger Management",
              "Life Transitions",
              "Grief",
              "Pre/Post Natal",
              "Parenting Support",
              "Addiction",
              "BPD",
              "Childhood Trauma",
              "Body Dysmorphia",
              "Neurodiversity",
              "Seniors Care",
            ].map((specialty, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <p className="text-teal-600 font-medium text-center">
                  {specialty}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Enhanced with turquoise theme */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Client Stories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real experiences from people who have transformed their lives
              through therapy with us.
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
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 10H10V20H16V26H10V30H20V20C20 14.48 18 10 18 10ZM32 10H24V20H30V26H24V30H34V20C34 14.48 32 10 32 10Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <p className="text-gray-700 mb-6 italic text-lg">
                  {testimonials[activeTestimonial].quote}
                </p>
                <div>
                  <p className="font-semibold text-teal-600">
                    {testimonials[activeTestimonial].author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonials[activeTestimonial].title}
                  </p>
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
                    index === activeTestimonial ? "bg-teal-500" : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Endorsements Section */}
      {/* Endorsements Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-4xl mx-auto">
            <div className="bg-teal-50 p-6 rounded-xl shadow-sm">
              <p className="text-gray-700 mb-4 italic">
                "Lilian is an extremely insightful clinician..."
              </p>
              <div>
                <p className="font-semibold text-teal-600">Bavly Kost</p>
                <p className="text-sm text-gray-500">
                  Registered Psychotherapist, BEd, MA, MPS, RP, OCT
                </p>
              </div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Take the first step toward a healthier, more balanced life. I'm
            ready to support you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="tel:647 835 4998"
              className="bg-white text-teal-600 hover:bg-cyan-50 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center shadow-md"
            >
              <Phone size={18} className="mr-2" />
              <span>647 835 4998</span>
            </a>
            <a
              href="mailto:info@raphaelapsychotherapy.ca"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 font-medium py-3 px-8 rounded-md transition-colors inline-flex items-center justify-center"
            >
              <Mail size={18} className="mr-2" />
              <span>Email Me</span>
            </a>
          </div>
        </div>
      </section>

      {/* Therapy Approach Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                My Therapeutic Approach
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                "I work with individuals navigating depression or trauma, often
                rooted in relationships or family dynamics. In our initial
                sessions, we'll take the time to understand what you're going
                through and begin building a personalized plan to help you heal
                and regain a sense of balance and control in your life. Many of
                my clients start to notice a shift within the first few weeks."
              </p>
              <p className="text-lg text-gray-600 mb-6">
                "I start with Cognitive Behavioral Therapy (CBT) because it
                provides a strong foundation for understanding how your thoughts
                influence your emotions and experiences. CBT is a powerful tool
                for helping you reframe unhelpful thought patterns. From there,
                we can integrate other therapeutic approaches as needed to best
                suit your unique journey. As we work together, I commit to
                support you all the way."
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Cognitive Behavioural (CBT)",
                  "Dialectical Behavior (DBT)",
                  "Emotionally Focused",
                  "Family Systems",
                  "Trauma Focused",
                  "Solution Focused Brief (SFBT)",
                  "Talk Therapy",
                ].map((approach, index) => (
                  <span
                    key={index}
                    className="bg-teal-50 text-teal-600 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {approach}
                  </span>
                ))}
              </div>
            </div>

            {/* Right side - Content */}
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/home.jpg"
                  alt="Therapy session"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-teal-500 text-white p-6 rounded-xl shadow-lg max-w-xs">
                <h3 className="text-xl font-semibold mb-2">
                  Personalized Care
                </h3>
                <p className="text-sm opacity-90">
                  Every treatment plan is tailored to your unique needs, goals,
                  and personal circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Information Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Practice Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about scheduling and fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-500">
              <div className="flex items-center mb-4">
                <Clock className="text-teal-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">
                  Sessions
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                I offer therapy sessions mainly virtually by video or phone,
                (in-person by arrangement).
              </p>
              <p className="text-gray-600">
                Available weekday evenings and all day weekends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-500">
              <div className="flex items-center mb-4">
                <MapPin className="text-teal-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">
                  Locations
                </h3>
              </div>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Hamilton:</span> Virtual &
                In-Person
              </p>
              <p className="text-gray-600 mb-2">
                <span className="font-medium">Grimsby:</span> ON L3M
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Burlington:</span> ON L7T
              </p>
              <p className="text-gray-600 mt-4 text-sm">
                Virtual sessions available across Ontario & BC
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-teal-500">
              <div className="flex items-center mb-4">
                <Heart className="text-teal-500 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">Fees</h3>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700">
                  <span className="font-medium">Individual:</span> $160/session
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Couples:</span> $175/session
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Family:</span> $190/session
                </p>
                <p className="text-gray-600 mt-4 text-sm">
                  Sliding scale available -{" "}
                  <a href="/sliding-scale" className="text-teal-600 underline">
                    Learn more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-20 bg-teal-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Answers to common questions about therapy and my practice.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                q: "What can I expect in my first session?",
                a: "Your first session will focus on getting to know each other. I'll ask about your background, concerns, and goals. This helps me understand your unique situation and develop a personalized approach to therapy.",
              },
              {
                q: "How long does therapy typically last?",
                a: "The length of therapy varies based on your specific needs and goals. Some clients benefit from short-term therapy (8-12 sessions), while others may prefer longer-term support. We'll regularly assess your progress and adjust as needed.",
              },
              {
                q: "Do you accept insurance?",
                a: "While I don't directly bill insurance companies, I provide receipts that you can submit to your insurance provider for reimbursement. Many extended health plans cover services from Registered Psychotherapists.",
              },
              {
                q: "Is therapy confidential?",
                a: "Yes, confidentiality is a cornerstone of therapy. What you share remains private, with limited exceptions required by law (risk of harm to yourself or others, suspected child abuse, or court orders).",
              },
              {
                q: "Can I switch from virtual to in-person sessions?",
                a: "Yes, flexibility is important. We can discuss transitioning between virtual and in-person sessions based on your preferences and circumstances.",
              },
              {
                q: "What's your cancellation policy?",
                a: "I request 24 hours notice for cancellations to avoid the full session fee. I understand emergencies happen and am willing to discuss special circumstances.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-lg font-semibold text-teal-600 mb-3">
                  {faq.q}
                </h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Content - Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Ready to take the first step? Reach out for a free 15-minute
                consultation to see if we're a good fit.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="text-teal-600 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">647 835 4998</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="text-teal-600 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">
                      info@raphaelapsychotherapy.ca
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="text-teal-600 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">
                      Locations
                    </h3>
                    <p className="text-gray-600">Grimsby: ON L3M</p>
                    <p className="text-gray-600">Burlington: ON L7T</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="text-teal-600 mt-1 mr-4" size={20} />
                  <div>
                    <h3 className="font-medium text-gray-800 mb-1">Hours</h3>
                    <p className="text-gray-600">
                      Weekday Evenings & All Day Weekends
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="font-semibold text-gray-800 mb-4">
                  Follow me on Social Media
                </h3>
                <div className="flex space-x-4">
                  {/* Social icons could go here */}
                  <a
                    href="#"
                    className="bg-teal-100 text-teal-600 p-2 rounded-full hover:bg-teal-200 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-teal-100 text-teal-600 p-2 rounded-full hover:bg-teal-200 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-teal-100 text-teal-600 p-2 rounded-full hover:bg-teal-200 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-teal-100 text-teal-600 p-2 rounded-full hover:bg-teal-200 transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Send me a Message
              </h3>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    placeholder="(000) 000-0000"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
                    placeholder="Tell me a bit about what brings you to therapy..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-600 text-white hover:bg-teal-700 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center shadow-md"
                >
                  <span>Send Message</span>
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Lilian Shonhiwa</h3>
              <p className="text-gray-300 mb-4">
                Registered Psychotherapist (Qualifying), MACP, MBA, BBA, SSW
              </p>
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2" />
                <span>647 835 4998</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-teal-300 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300 transition-colors">
                    About Me
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300 transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300 transition-colors">
                    Approach
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-teal-300 transition-colors">
                    Individual Therapy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300 transition-colors">
                    Couples Therapy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300 transition-colors">
                    Family Therapy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-300 transition-colors">
                    Life Coaching
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Locations</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <span>Grimsby, ON L3M</span>
                </li>
                <li className="flex items-start">
                  <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                  <span>Burlington, ON L7T</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Lilian Shonhiwa Psychotherapy.
                All rights reserved.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-300 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-300 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-teal-300 transition-colors"
                >
                  Accessibility
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Toaster position="bottom-right" />
    </div>
  );
}

export default HomePage;
