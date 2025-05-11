import React from "react";
import {
  Calendar,
  Users,
  Heart,
  Mail,
  Phone,
  MapPin,
  Clock,
  ArrowRight,
  ChevronRight,
  Shield,
  Star,
  Check,
  Home,
  Briefcase,
  Smile,
  Brain,
  ShieldPlus,
  Scale,
  Baby,
  HandHeart,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Services() {
  const [hoveredService, setHoveredService] = useState(null);
  const [hoveredSpecialty, setHoveredSpecialty] = useState(null);

  // Main services data
  const services = [
    {
      icon: <Users className="text-teal-600" size={32} />,
      title: "Individual Therapy",
      content:
        "One-on-one sessions focused on your personal healing, growth, and development. Together we will explore your challenges and build strategies for positive change.",
      backgroundImage: "/ind.jpg",
    },
    {
      icon: <Heart className="text-teal-600" size={32} />,
      title: "Couples Therapy",
      content:
        "Rediscover the joy of connection. We guide couples in rebuilding trust, navigating conflicts with clarity, and deepening their bond through compassionate communication. Together, we will create a roadmap to reignite intimacy and strengthen your partnership because every relationship deserves to thrive.",
      backgroundImage: "/coup.jpg",
    },
    {
      icon: <Home className="text-teal-600" size={32} />,
      title: "Family Therapy",
      content:
        "Every family deserves harmony. Let’s navigate challenges together by strengthening communication, resolving conflicts with compassion, and fostering understanding. We will help your family reconnect, heal, and build a home rooted in respect and peace because your bond is worth nurturing. ",
      backgroundImage: "/family.jpg",
    },
    {
      icon: <Sparkles className="text-teal-600" size={32} />,
      title: "Seniors Therapy",
      content:
        "Your golden years deserve peace, purpose, and connection. We provide compassionate support for seniors navigating life transitions, grief, health challenges, or feelings of isolation. With gentle, respectful approaches tailored to your unique life story, including reminiscence therapy and mindfulness. We will help you process loss, strengthen relationships, and rediscover joy in daily living. Whether adjusting to retirement, managing chronic pain, or simply seeking meaningful connection, we’ll work at your pace to enhance emotional well-being and celebrate the resilience you’ve built over a lifetime. Together, let’s honor your wisdom and craft a chapter filled with dignity, comfort, and hope.  ",
      backgroundImage: "/senior.jpg",
    },
    {
      icon: <Baby className="text-teal-600" size={32} />,
      title: "Child Therapy",
      content:
        "Every child deserves to feel heard, understood, and empowered.We help kids navigate big emotions, friendship challenges, school stress, and family changes through “play-based therapy”, creative activities, and age-appropriate conversations. Using art, games, and storytelling, we create a safe, judgment-free space where your child can express themselves, build confidence, and learn healthy ways to cope. Together, we’ll strengthen their resilience, communication skills, and self-esteem because growing up should feel like an adventure, not a struggle. Let’s help your child shine brighter, starting today.",
      backgroundImage: "/child.png",
    },
    {
      icon: <Smile className="text-teal-600" size={32} />,
      title: "Teen Therapy",
      content:
        "The teenage years are full of big emotions, tough choices, and pressure to “figure it all out.” We give teens a safe, nonjudgmental space to explore their thoughts, navigate social stress, school anxiety, or family conflicts, and rebuild confidence. Using relatable approaches like mindfulness, CBT, and creative expression, we focus on your goals, whether it’s managing overwhelming feelings, improving relationships, or finding your authentic self. No lectures, no labels just real talk and practical tools to help you thrive, not just survive. Let’s rewrite the script together.",
      backgroundImage: "/teen.webp",
    },
  ];

  // Specialized support data
  const specialties = [
    {
      icon: <ShieldPlus className="text-teal-600" size={28} />,
      title: "Trauma & PTSD",
      content:
        "Trauma doesn’t have to define your story. With specialized care using EMDR and other evidence-based approaches, I provide a safe, nonjudgmental space to process pain, reclaim your strength, and build lasting resilience. Together, we will help you heal and not just survive, but thrive.",
      backgroundImage: "/ptsd.jpg",
    },
    {
      icon: <Brain className="text-teal-600" size={28} />,
      title: "Anxiety & Depression",
      content:
        "Break free from anxiety and depression with proven, science-backed strategies. Through personalized care rooted in evidence-based therapies like CBT and mindfulness, we’ll equip you with practical tools to manage symptoms, reframe unhelpful patterns, and cultivate resilience. In this safe, supportive space, you will learn not just to cope but to reclaim joy and thrive, and not just survive",
      backgroundImage: "/axi.jpg",
    },
    {
      icon: <Shield className="text-teal-600" size={28} />,
      title: "Domestic Violence Support",
      content:
        "Your safety and healing matter. With specialized, trauma-informed care for survivors of domestic violence and sexual assault, we will prioritize your well-being through safety planning, emotional recovery, and rebuilding confidence. In this compassionate, judgment-free space, you will reclaim your voice, rediscover your strength, and create a life rooted in respect and peace because you deserve to thrive, free from fear.",
      backgroundImage: "/dom.png",
    },
    {
      icon: <Clock className="text-teal-600" size={28} />,
      title: "Anger Management",
      content:
        "Anger is a natural emotion, but when it feels overwhelming or out of control, it can strain relationships, work, and self-esteem. We offer, practical, judgment-free support to help teens and adults understand their triggers, develop healthy coping strategies, and communicate assertively not aggressively. Using evidence-based tools like mindfulness, CBT, and stress-reduction techniques, we’ll work together to transform anger into clarity, self-control, and empowered choices. Whether it’s explosive outbursts or simmering resentment, you’ll learn to navigate emotions constructively and rebuild trust in yourself and others. ",
    },
    {
      icon: <Star className="text-teal-600" size={28} />,
      title: "Self Esteem",
      content:
        "Nurture unshakable confidence by challenging limiting beliefs and celebrating your strengths. Live authentically and unapologetically.",
      backgroundImage: "/confidence.jpg",
    },
    {
      icon: <Scale className="text-teal-600" size={28} />,
      title: "Life Transitions",
      content:
        "Whether planned or unexpected can feel overwhelming. Whether you’re navigating a career shift, relocation, divorce, or stepping into parenthood, we’ll work together to ground you in resilience, clarity, and confidence. Through compassionate guidance and practical strategies, you’ll learn to adapt, embrace change, and rediscover stability because every transition is an opportunity to grow into a stronger, more empowered version of yourself.",
      backgroundImage: "/life.jpg",
    },
    {
      icon: <HandHeart className="text-teal-600" size={28} />,
      title: "Grief Support",
      content:
        "Grief is not a journey you have to walk alone. With gentle, compassionate support, we’ll honor your unique experience of loss whether recent or lingering and create space to process pain, cherish memories, and rediscover hope. Together, we will navigate the waves of grief at your pace, helping you rebuild meaning and find a renewed sense of peace, because healing begins when your story is heard and held with care.",
      backgroundImage: "/grief.jpg",
    },
    {
      icon: <Baby className="text-teal-600" size={28} />,
      title: "Pre/Post Natal Support",
      content:
        "Parenthood’s journey can feel overwhelming—even when it’s supposed to be ‘joyful.’ Whether you’re navigating anxiety, sadness, or emotional storms during pregnancy or postpartum, I offer a safe, judgment-free space to heal. Using trauma-informed and evidence-based approaches, we’ll untangle complex emotions, rebuild your sense of confidence, and reconnect you with hope. Together, we’ll honor your strength, nurture your well-being, and help you embrace parenthood with compassion—for yourself first, because you deserve support, not silence.",
      backgroundImage: "/prena.jpg",
    },
    {
      icon: <Heart className="text-teal-600" size={28} />,
      title: "Parenting Support",
      content:
        "Parenting is a journey of love, learning, and occasional overwhelm. Whether you’re navigating tantrums, sibling rivalry, communication breakdowns, or the pressures of raising resilient kids, we’ll work together to create calm in the chaos. Through compassionate guidance and evidence-based strategies, we’ll strengthen your confidence, improve family dynamics, and foster connection, because parenting isn’t about perfection, but about growing alongside your child with patience, understanding, and joy.",
      backgroundImage: "/pare.webp",
    },
  ];

  return (
    <div>
      {/* Hero Section with Background Image */}
      <section className="relative pt-24 py-16 md:py-24">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/hero.jpg"
            alt="Therapy Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 opacity-90"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Therapy Services
            </h1>
            <p className="text-lg md:text-xl text-white opacity-90 mb-6">
              Compassionate, evidence-based care for individuals, couples,
              families, and seniors
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:6478354998"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-teal-700 px-6 py-3 rounded-lg flex items-center transition-all"
              >
                <Phone size={18} className="mr-2" /> 647-835-4998
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all border border-gray-100 h-full"
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={service.backgroundImage}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
                  />
                </div>

                {/* Content with semi-transparent white overlay for readability */}
                <div className="absolute inset-0 bg-white opacity-90"></div>

                {/* Service content */}
                <div className="relative p-6 z-10">
                  <div className="mb-4 text-teal-600">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Support Section */}
      <section className="py-12 md:py-20 bg-teal-50 relative">
        {/* Background pattern for the section */}
        <div className="absolute inset-0 w-full h-full z-0">
          <img
            src="/life.jpg"
            alt="Section Background"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Specialized Support Areas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="relative overflow-hidden bg-white rounded-lg shadow-sm"
                onMouseEnter={() => setHoveredSpecialty(index)}
                onMouseLeave={() => setHoveredSpecialty(null)}
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={specialty.backgroundImage}
                    alt={specialty.title}
                    className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
                  />
                </div>

                {/* Content with semi-transparent white overlay */}
                <div className="absolute inset-0 bg-white opacity-85"></div>

                {/* Specialty content */}
                <div className="relative p-6 z-10">
                  <div className="mb-3 text-teal-600">{specialty.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {specialty.title}
                  </h3>
                  <p className="text-gray-600">{specialty.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Approaches & Fees */}
          <section className="py-12 md:py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Therapeutic Approaches */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                    Evidence-Based Approaches
                  </h2>
                  <div className="space-y-6">
                    {[
                      "EMDR Therapy",
                      "Cognitive Behavioral Therapy (CBT)",
                      "Play Therapy",
                      "Narrative Therapy",
                      "Solution-Focused Brief Therapy",
                      "Mindfulness-Based Stress Reduction",
                      "Gottman Method Couples Therapy",
                      "Trauma-Informed Care",
                      "Christian Counseling",
                    ].map((approach, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-teal-50 p-4 rounded-lg"
                      >
                        <Check className="text-teal-600 mr-3" size={20} />
                        <span className="text-gray-800">{approach}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fees & Locations */}
                <div className="bg-gray-50 p-8 rounded-xl">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Session Fees
                  </h2>
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Individual (50 min)</span>
                      <span className="font-semibold">$160</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Couples (50 min)</span>
                      <span className="font-semibold">$175</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                      <span className="text-gray-700">Family (50 min)</span>
                      <span className="font-semibold">$190</span>
                    </div>
                  </div>

                  <div className="bg-teal-100 p-4 rounded-lg mb-8">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Sliding Scale Available
                    </h3>
                    <p className="text-sm text-gray-600">
                      We offer reduced rates based on financial need.{" "}
                      <a
                        href="/sliding-scale"
                        className="text-teal-600 underline"
                      >
                        Apply here
                      </a>
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                      <MapPin className="text-teal-600 mr-2" size={20} />{" "}
                      Locations
                    </h3>
                    <p className="mb-2">Hamilton Office</p>
                    <p className="mb-2">Grimsby, ON L3M</p>
                    <p className="mb-2">Burlington, ON L7T</p>
                    <p className="text-sm text-teal-600 mt-2">
                      Virtual sessions available across Ontario & British
                      Columbia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 md:py-16 bg-teal-600 text-white">
            <div className="container mx-auto px-4 md:px-6 text-center">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Begin Your Healing Journey
                </h2>
                <p className="text-lg mb-8">
                  Free 15-minute consultation to discuss your needs
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a
                    href="https://raphaelapsychotherapy.janeapp.com/" target="_blank" rel="noopener noreferrer"
                    className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-teal-50 transition-colors"
                  >
                    Book Through Jane
                  </a>
                  <a
                    href="tel:6478354998"
                    className="bg-teal-700 hover:bg-teal-800 px-6 py-3 rounded-lg font-medium transition-colors"
                  >
                    <Phone className="inline mr-2" size={18} /> Call Now
                  </a>
                </div>
                <p className="text-sm mt-6 opacity-90">
                  Supervised by Bavly Kost
                </p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
