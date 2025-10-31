"use client";

import React, { useState } from "react";
import { Text } from "rizzui/typography";
import { Button } from "rizzui/button";
import { Send, MapPin, Mail, Linkedin, Github } from "lucide-react";
import Container from "@/components/ui/Container";
import emailjs from "@emailjs/browser";
import Link from "next/link";

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!);

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const now = new Date();
  const date = now.toLocaleDateString();
  const time = now.toLocaleTimeString();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "bekalusisay2010@gmail.com",
          date: date,
          time: time,
        }
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Contact Form Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200">
            <div className="mb-4 sm:mb-6">
              <div className="relative inline-block mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 relative z-10">
                  Contact
                </h2>
                <div className="absolute -bottom-1 left-0 w-12 h-1 bg-primary/20 rounded-full"></div>
              </div>
              <Text className="text-gray-600 text-sm sm:text-base">
                Open to freelance, contract, and collaborations.
              </Text>
            </div>

            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                <Text className="text-green-800 text-sm">
                  Thank you! Your message has been sent successfully. I'll get
                  back to you soon.
                </Text>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <Text className="text-red-800 text-sm">
                  Sorry, there was an error sending your message. Please try
                  again or email me directly at bekalusisay2010@gmail.com
                </Text>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="Your name"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200"
                  placeholder="Email address"
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Tell me about your project...
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 resize-none"
                  placeholder="Tell me about your project..."
                  required
                  disabled={isLoading}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:from-primary/90 hover:to-primary/70 transition-all duration-300 flex items-center justify-center gap-2 py-3 shadow-lg hover:shadow-xl hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform duration-300" />
                    Send message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Info Card */}
          <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-sm border border-gray-200">
            <div className="mb-4 sm:mb-6">
              <div className="relative inline-block mb-2">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 relative z-10">
                  Info
                </h2>
                <div className="absolute -bottom-1 left-0 w-8 h-1 bg-primary/20 rounded-full"></div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
              {/* Location */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                </div>
                <div className="min-w-0">
                  <Text className="font-medium text-gray-900 text-sm sm:text-base">
                    Location
                  </Text>
                  <Text className="text-gray-600 text-xs sm:text-sm">
                    Remote · GMT+3
                  </Text>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {/* Email */}
                <Link
                  href="mailto:bekalusisay2010@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </div>
                  <div className="min-w-0">
                    <Text className="font-medium text-gray-900 text-sm sm:text-base">
                      Email
                    </Text>
                    <Text className="text-gray-600 text-xs sm:text-sm">
                      bekalusisay2010@gmail.com
                    </Text>
                  </div>
                </Link>

                {/* LinkedIn */}
                <Link
                  href="https://linkedin.com/in/bekalusisay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </div>
                  <div className="min-w-0">
                    <Text className="font-medium text-gray-900 text-sm sm:text-base">
                      LinkedIn
                    </Text>
                    <Text className="text-gray-600 text-xs sm:text-sm">
                      linkedin.com/in/bekalusisay
                    </Text>
                  </div>
                </Link>

                {/* GitHub */}
                <Link
                  href="https://github.com/bekalu73"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Github className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  </div>
                  <div className="min-w-0">
                    <Text className="font-medium text-gray-900 text-sm sm:text-base">
                      GitHub
                    </Text>
                    <Text className="text-gray-600 text-xs sm:text-sm">
                      github.com/bekalu73
                    </Text>
                  </div>
                </Link>
              </div>
            </div>

            {/* Map Placeholder */}
            {/* <div className="text-center">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mx-auto mb-2" />
                <Text className="text-gray-500 text-xs sm:text-sm">
                  Interactive Map
                </Text>
                <Text className="text-gray-400 text-xs">
                  Addis Ababa, Ethiopia
                </Text>
              </div> */}
            <div className="w-full h-[450px] rounded-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.4737482122146!2d38.79753734032941!3d9.020474466117989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b855cd643a691%3A0x5ce3922436b4f99a!2sMegenagna!5e0!3m2!1sen!2set!4v1761471406293!5m2!1sen!2set"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
