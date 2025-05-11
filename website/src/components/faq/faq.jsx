import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Phone, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function FAQPage() {
  // State to track which FAQ items are expanded
  const [expandedItems, setExpandedItems] = useState({});

  // Toggle FAQ item expansion
  const toggleItem = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // FAQ categories and questions
  const faqCategories = [
    {
      id: 'general',
      title: 'General Therapy Questions',
      questions: [
        {
          id: 'what-is-therapy',
          question: 'What is psychotherapy and how does it work?',
          answer: 'Psychotherapy is a collaborative treatment based on the relationship between an individual and a therapist. It provides a supportive environment to talk openly with someone objective, neutral, and nonjudgmental. Together, we identify and change thought and behavior patterns that are preventing you from feeling your best. The process helps you use your own strengths to find solutions to the issues you face, developing healthier coping mechanisms and improving your quality of life.'
        },
        {
          id: 'benefits',
          question: 'What are the benefits of therapy?',
          answer: 'Therapy can provide numerous benefits including improved communication and interpersonal skills, greater self-acceptance and self-esteem, and the ability to change self-defeating behaviors. It can help you develop coping techniques and stress management tools, gain a better understanding of yourself and your goals, and find resolution to the issues that led you to seek therapy. For many, it leads to improved relationships, better problem-solving abilities, and a more positive outlook on life.'
        },
        {
          id: 'right-for-me',
          question: 'How do I know if therapy is right for me?',
          answer: 'Therapy can benefit anyone looking to improve their mental wellbeing, not just those with diagnosed mental health conditions. Signs that therapy might be helpful include feeling overwhelmed, sad, or hopeless for an extended period; experiencing difficulties in relationships; recovering from trauma; or simply wanting personal growth. If your problems are causing significant distress or interfering with daily functioning, therapy may be particularly beneficial. The best way to determine if therapy is right for you is through a consultation, which I offer free of charge.'
        },
        {
          id: 'different-from-friend',
          question: 'How is talking to a therapist different from talking to a friend?',
          answer: 'While friends can provide valuable support, a therapist offers something different. As a professional, I bring clinical expertise, objective perspective, and evidence-based techniques to our sessions. Our relationship is confidential and focused solely on your wellbeing. Unlike with friends, where there`s a mutual exchange of support, therapy provides a space entirely dedicated to you and your needs, without the social expectations or relationship dynamics that exist in friendships.'
        }
      ]
    },
    {
      id: 'process',
      title: 'The Therapy Process',
      questions: [
        {
          id: 'first-session',
          question: 'What can I expect in my first session?',
          answer: 'Your first session will be an opportunity for us to get to know each other. I`ll ask about your background, current concerns, and what you hope to achieve through therapy. You`ll have the chance to ask questions about my approach and experience. This initial meeting helps us establish rapport and begin developing a therapeutic plan tailored to your needs. While some people might begin to feel better after just the first session, therapy is generally a process that unfolds over time.'
        },
        {
          id: 'session-frequency',
          question: 'How often will we meet and for how long?',
          answer: 'For most clients, weekly sessions provide the right balance of support and time for processing. Each session lasts 50 minutes. As you progress, we might adjust to biweekly or monthly sessions. The overall duration of therapy varies widely—some benefit from short-term therapy (8-12 sessions), while others prefer longer-term support. We`ll regularly assess your progress and adjust our approach as needed.'
        },
        {
          id: 'therapy-length',
          question: 'How long does therapy typically last?',
          answer: 'The length of therapy varies significantly based on your specific needs, goals, and the issues you`re addressing. Some clients achieve their goals in just a few months, while others benefit from longer-term support. Factors that influence the duration include the complexity of the issues, your personal history, your commitment to the process, and how quickly you implement changes. We`ll regularly review your progress and discuss whether continuing therapy would be beneficial.'
        },
        {
          id: 'between-sessions',
          question: 'What happens between sessions?',
          answer: 'The work of therapy continues between our meetings. I may suggest exercises, readings, or practices to reinforce what we discuss in sessions. Many clients find it helpful to journal about their thoughts and experiences. Implementing new skills and insights in your daily life is a crucial part of the therapeutic process. If urgent concerns arise between scheduled appointments, I`m available for brief check-ins, though extensive support may require an additional session.'
        }
      ]
    },
    {
      id: 'approach',
      title: 'My Therapeutic Approach',
      questions: [
        {
          id: 'methods',
          question: 'What therapeutic methods do you use?',
          answer: 'I integrate several evidence-based approaches, tailoring my methods to each client`s needs. My primary framework is Cognitive Behavioral Therapy (CBT), which helps identify and change unhelpful thought patterns. I also employ Trauma-Focused Therapy, Emotionally Focused Therapy (EFT), Family Systems approaches, and Solution-Focused Brief Therapy (SFBT). For clients who identify with Christianity, I offer faith-integrated counseling upon request. My approach is collaborative—we`ll work together to find the methods that best support your healing journey.'
        },
        {
          id: 'cbt',
          question: 'What is Cognitive Behavioral Therapy (CBT)?',
          answer: 'Cognitive Behavioral Therapy is a structured, goal-oriented therapy that examines how thoughts, feelings, and behaviors are connected. CBT helps you identify negative or inaccurate thinking patterns that contribute to emotional difficulties and behavioral problems. By recognizing these patterns, you can learn to reframe your thoughts in more helpful ways, leading to improved emotional regulation and more effective behavior choices. CBT is well-researched and has proven effective for many conditions including anxiety, depression, and PTSD.'
        },
        {
          id: 'trauma-approach',
          question: 'How do you approach trauma therapy?',
          answer: 'Trauma therapy in my practice emphasizes safety, stability, and gradual processing. I begin by establishing a secure therapeutic relationship and helping you develop coping skills for emotional regulation. We work at your pace, using techniques such as narrative exposure, cognitive restructuring, and mindfulness. I`m trained in trauma-specific approaches that help process difficult experiences while minimizing distress. Throughout the process, I focus on both symptom reduction and fostering post-traumatic growth—helping you not just recover but develop new strengths.'
        },
        {
          id: 'christian-counseling',
          question: 'What does Christian counseling involve?',
          answer: 'Christian counseling integrates evidence-based therapeutic techniques with biblical principles and spiritual resources. For clients who request this approach, I incorporate prayer, scripture, and faith perspectives into our work together, while maintaining professional therapeutic standards. This approach acknowledges the importance of spiritual well-being alongside emotional and psychological health. Christian counseling is entirely optional—I respect diverse belief systems and only integrate faith elements when specifically requested by clients.'
        }
      ]
    },
    {
      id: 'practical',
      title: 'Practical Matters',
      questions: [
        {
          id: 'cost',
          question: 'What are your fees and do you accept insurance?',
          answer: 'Individual sessions are $100, and couples sessions are $120. While I don\'t directly bill insurance companies, I provide receipts that you can submit to your provider for potential reimbursement. Many extended health plans cover services from Registered Psychotherapists. For clients experiencing financial hardship, I offer a limited number of sliding scale spots—please inquire about availability during our initial consultation.'
        },
        {
          id: 'cancellation',
          question: 'What is your cancellation policy?',
          answer: 'I request at least 24 hours notice for cancellations to avoid being charged the full session fee. This policy helps ensure that appointment times are available to all clients who need them. I understand that emergencies and unexpected situations arise—if you need to cancel with less notice due to circumstances beyond your control, please contact me as soon as possible, and we can discuss options.'
        },
        {
          id: 'virtual-sessions',
          question: 'How do virtual sessions work?',
          answer: 'Virtual sessions are conducted through a secure, PHIPA-compliant video platform. You\'ll receive a link before our scheduled time, and can join from any private space with a reliable internet connection. Many clients find virtual therapy just as effective as in-person sessions, with the added convenience of eliminating travel time. I provide guidance to help you set up a comfortable, private space for our meetings and troubleshoot any technical issues that might arise.'
        },
        {
          id: 'confidentiality',
          question: 'Is therapy confidential?',
          answer: 'Confidentiality is a cornerstone of therapeutic practice. What you share in our sessions remains private, with a few exceptions required by law: if there is risk of harm to yourself or others, suspected child abuse, or a court order. I follow strict privacy protocols to protect your information, and we`ll discuss these boundaries in detail during our first session. I also provide all clients with a written privacy policy that outlines how your information is protected.'
        }
      ]
    },
    {
      id: 'specific',
      title: 'Specific Concerns',
      questions: [
        {
          id: 'anxiety',
          question: 'How do you help clients with anxiety?',
          answer: 'For anxiety, I use a combination of cognitive techniques to address worry patterns, behavioral strategies to reduce avoidance, and mindfulness practices to manage physiological symptoms. We\'ll work to identify your specific anxiety triggers and develop a personalized toolkit of coping strategies. Many clients benefit from understanding the brain science behind anxiety and learning specific grounding techniques they can use in the moment. Treatment typically includes both immediate symptom management and addressing any underlying factors contributing to your anxiety.'
        },
        {
          id: 'depression',
          question: 'What is your approach to treating depression?',
          answer: 'My approach to depression combines cognitive work to address negative thought patterns, behavioral activation to gradually rebuild energy and engagement, and interpersonal strategies to strengthen support systems. We\'ll work to identify what factors are maintaining your depression and develop specific strategies to address them. I place particular emphasis on self-compassion and creating sustainable lifestyle changes that support emotional wellbeing. When appropriate, I can also coordinate with healthcare providers if medication might be beneficial alongside therapy.'
        },
        {
          id: 'couples',
          question: 'How do you approach couples therapy?',
          answer: 'In couples therapy, I focus on improving communication patterns, rebuilding connection, and developing conflict resolution skills. Drawing primarily from Emotionally Focused Therapy (EFT), I help couples identify negative interaction cycles and understand the emotions and needs underlying their conflicts. Sessions typically involve both partners together, though I occasionally meet with individuals separately. My goal is to help create a secure bond where both partners feel heard, valued, and able to express their needs effectively.'
        },
        {
          id: 'domestic-violence',
          question: 'How do you work with survivors of domestic violence?',
          answer: 'Working with domestic violence survivors begins with establishing safety, both physical and emotional. I bring extensive experience in this area, supporting clients through safety planning, trauma processing, and rebuilding self-trust. Therapy focuses on understanding the dynamics of abuse, processing trauma responses, and developing healthy boundaries. I take a strengths-based approach, recognizing and building upon the courage and resilience you`ve already shown. I also connect clients with community resources when additional support services would be beneficial.'
        }
      ]
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header Banner */}
      <div className="bg-teal-600 text-white py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">Frequently Asked Questions</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-center text-teal-50">
            Find answers to common questions about therapy, my approach, and what to expect when working together.
          </p>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="bg-teal-700 text-white py-3">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-teal-50 mb-3 md:mb-0">Have a question not answered here? Reach out directly.</p>
          <div className="flex space-x-4">
            <a href="tel:2894023685" className="flex items-center text-white hover:text-teal-200 transition-colors">
              <Phone size={16} className="mr-2" />
              <span>647 835 4998</span>
            </a>
            <a href="mailto:info@raphaelapsychotherapy.com" className="flex items-center text-white hover:text-teal-200 transition-colors">
              <Mail size={16} className="mr-2" />
              <span>Email me</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main FAQ Content */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* FAQ Quick Navigation */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Jump to a Topic:</h2>
          <div className="flex flex-wrap gap-3">
            {faqCategories.map(category => (
              <a 
                key={category.id} 
                href={`#${category.id}`}
                className="bg-white text-teal-600 hover:bg-teal-50 border border-teal-200 px-4 py-2 rounded-md transition-colors"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>

        {/* FAQ Categories and Questions */}
        {faqCategories.map(category => (
          <div key={category.id} id={category.id} className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-teal-200">
              {category.title}
            </h2>
            <div className="space-y-4">
              {category.questions.map(item => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-inset"
                  >
                    <span className="font-medium text-lg text-gray-800">{item.question}</span>
                    {expandedItems[item.id] ? (
                      <ChevronUp className="flex-shrink-0 text-teal-500" size={20} />
                    ) : (
                      <ChevronDown className="flex-shrink-0 text-teal-500" size={20} />
                    )}
                  </button>
                  {expandedItems[item.id] && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Additional Resources Section */}
        <div className="bg-teal-50 rounded-xl p-6 md:p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Additional Resources</h2>
          <p className="text-gray-600 mb-6">
            These trusted resources provide further information about mental health, therapy approaches, and common conditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Canadian Mental Health Association", url: "https://cmha.ca" },
              { name: "Anxiety Canada", url: "https://www.anxietycanada.com" },
              { name: "Centre for Addiction and Mental Health", url: "https://www.camh.ca" },
              { name: "Psychology Today", url: "https://www.psychologytoday.com" },
              { name: "Mental Health Commission of Canada", url: "https://www.mentalhealthcommission.ca" },
              { name: "Canadian Psychological Association", url: "https://cpa.ca" }
            ].map((resource, index) => (
              <a 
                key={index}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-4 rounded-lg border border-teal-100 hover:border-teal-300 transition-colors flex items-center"
              >
                <ArrowRight size={16} className="mr-3 text-teal-500" />
                <span className="text-gray-700">{resource.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-xl p-8 mt-12 shadow-md">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
              <p className="text-teal-50">
                Book a free 15-minute consultation to discuss your specific situation and needs.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="tel:2894023685"
                className="bg-white text-teal-600 hover:bg-teal-50 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center shadow-sm"
              >
                <Phone className="mr-2" size={18} />
                <span>Call Now</span>
              </a>
              <Link 
                to="/https://raphaelapsychotherapy.janeapp.com/"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-teal-600 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center"
              >
                <span>Book through Jane</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-colors"
          aria-label="Back to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default FAQPage;