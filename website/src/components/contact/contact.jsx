import React, { useState } from "react";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  ArrowRight,
  Check,
  MessageSquare,
  Send,
  AlertTriangle
} from "lucide-react";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    preferredContact: "email"
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for reaching out! We'll get back to you soon."
    });
    // In a real implementation, you would send the form data to your backend
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative bg-teal-600 py-16 md:py-24 pt-24">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white opacity-90 mb-6">
              Ready to start your journey towards healing and growth?
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:289-402-3685"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-teal-700 px-4 py-2 rounded-lg flex items-center transition-all"
              >
                <Phone size={18} className="mr-2" /> 647 835 4998
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below to schedule your free 15-minute consultation or inquire about our services.
              </p>

              {formStatus.submitted ? (
                <div className={`p-4 rounded-lg ${formStatus.error ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"} mb-6`}>
                  <p className="flex items-center">
                    {formStatus.error ? (
                      <AlertTriangle size={20} className="mr-2" />
                    ) : (
                      <Check size={20} className="mr-2" />
                    )}
                    {formStatus.message}
                  </p>
                </div>
              ) : null}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Preferred Contact Method
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === "email"}
                        onChange={handleChange}
                        className="mr-2 accent-teal-500"
                      />
                      Email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === "phone"}
                        onChange={handleChange}
                        className="mr-2 accent-teal-500"
                      />
                      Phone
                    </label>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center transition-all"
                >
                  <Send size={18} className="mr-2" /> Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <div className="bg-teal-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone size={22} className="text-teal-500 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Phone</p>
                      <p className="text-gray-600">647 835 4998</p>
                      <p className="text-gray-500 text-sm mt-1">Call for a free 15-minute consultation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={22} className="text-teal-500 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Email</p>
                      <p className="text-gray-600">info@raphaelatherapy.com</p>
                      <p className="text-gray-500 text-sm mt-1">We'll respond within 24-48 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <MapPin size={22} className="text-teal-500 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Locations</p>
                      <p className="text-gray-600">Grimsby, ON L3M</p>
                        <p className="text-gray-600">Hamilton, ON L8P</p>
                      <p className="text-gray-600">Burlington, ON L7T</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={22} className="text-teal-500 mr-4 mt-1" />
                    <div>
                      <p className="font-medium text-gray-800">Hours</p>
                      <p className="text-gray-600">Weekday evenings</p>
                      <p className="text-gray-600">All day weekends</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Session Information
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Check size={18} className="text-teal-500 mr-3" />
                    <span className="text-gray-600">
                      Individual Session: $120
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-teal-500 mr-3" />
                    <span className="text-gray-600">
                      Couple Session: $150
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-teal-500 mr-3" />
                    <span className="text-gray-600">
                      Family Session: $180
                    </span>
                    </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-teal-500 mr-3" />
                    <span className="text-gray-600">
                      Virtual and in-person options available
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-teal-500 mr-3" />
                    <span className="text-gray-600">
                      Sliding scale available for eligible clients
                    </span>
                  </li>
                  <li className="flex items-center">
                    <Check size={18} className="text-teal-500 mr-3" />
                    <span className="text-gray-600">
                      Free 15-minute consultation
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Crisis Resources
            </h2>
            <p className="text-gray-600 text-center mb-8">
              If you're experiencing a crisis or emergency situation, please contact one of these resources for immediate help:
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-teal-600 mb-3">24-Hour Crisis Lines:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Phone size={16} className="text-teal-500 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">National Suicide Prevention</p>
                        <p>1-800-273-8255</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone size={16} className="text-teal-500 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Crisis Services Canada</p>
                        <p>1-833-456-4566</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone size={16} className="text-teal-500 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Mental Health Helpline</p>
                        <p>1-866-531-2600</p>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-teal-600 mb-3">Local Support Services:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Phone size={16} className="text-teal-500 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">COAST</p>
                        <p>905-972-8338</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone size={16} className="text-teal-500 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Barrett Centre Crisis Support</p>
                        <p>1-844-777-3571</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone size={16} className="text-teal-500 mr-2 mt-1" />
                      <div>
                        <p className="font-medium">Emergency Services</p>
                        <p>911</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                <p className="text-gray-700 text-center">
                  <strong>Note:</strong> If you are in immediate danger or experiencing a life-threatening emergency, please call 911 or go to your nearest emergency room.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Begin Your Healing Journey Today
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            At Raphaela Psychotherapy and Wellness, we're committed to providing a safe, compassionate space for your healing journey. Reach out today to schedule your free consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="tel:289-402-3685"
              className="bg-white text-teal-600 hover:bg-teal-100 px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors"
            >
              <Phone size={18} className="mr-2" /> Call 647 835 4998
            </a>
            <a
              href="#contact-form"
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

export default ContactPage;