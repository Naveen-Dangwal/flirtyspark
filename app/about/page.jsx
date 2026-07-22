"use client";
// app/about/page.jsx or components/About.jsx
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";

import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { X } from "lucide-react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");
  const [hoveredValue, setHoveredValue] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const [counter, setCounter] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    experts: 0,
  });

  useEffect(() => {
    setIsVisible(true);

    // Counter animation
    const counters = {
      years: 150,
      projects: 500,
      clients: 200,
      experts: 25,
    };

    const duration = 2000;
    const stepTime = 20;
    const steps = duration / stepTime;

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCounter({
          years: Math.min(
            Math.floor((counters.years * currentStep) / steps),
            counters.years,
          ),
          projects: Math.min(
            Math.floor((counters.projects * currentStep) / steps),
            counters.projects,
          ),
          clients: Math.min(
            Math.floor((counters.clients * currentStep) / steps),
            counters.clients,
          ),
          experts: Math.min(
            Math.floor((counters.experts * currentStep) / steps),
            counters.experts,
          ),
        });
      } else {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, []);

  // Updated milestones for IT company
  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description:
        "Flirty Spark was established with a vision to deliver innovative digital solutions that help businesses thrive in the modern digital landscape.",
    },
    {
      year: "2020",
      title: "First Client Acquisition",
      description:
        "Secured our first client for web development services, marking the beginning of our journey in building digital experiences.",
    },
    {
      year: "2021",
      title: "Service Expansion",
      description:
        "Expanded our service offerings to include SEO, content marketing, and digital branding services to provide comprehensive digital solutions.",
    },
    {
      year: "2022",
      title: "Team Growth",
      description:
        "Grew our team of developers, designers, and digital marketers to deliver high-quality solutions across multiple industries.",
    },
    {
      year: "2023",
      title: "100+ Projects Delivered",
      description:
        "Successfully delivered over 100 projects for clients across web development, mobile apps, SEO, and digital marketing.",
    },
    {
      year: "2024",
      title: "Industry Recognition",
      description:
        "Recognized as a trusted digital partner for businesses seeking innovative, scalable, and results-driven online solutions.",
    },
    {
      year: "2025",
      title: "Global Reach",
      description:
        "Expanded our client base to serve businesses across India and international markets with comprehensive digital services.",
    },
    {
      year: "2026",
      title: "Future-Focused Growth",
      description:
        "Continuing to innovate and evolve with emerging technologies to deliver cutting-edge digital solutions for tomorrow's challenges.",
    },
  ];

  // Updated company values for IT company
  const companyValues = [
    {
      title: "Innovation First",
      description:
        "Continuously exploring new technologies to deliver cutting-edge solutions.",
      color: "#e21d23",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
    },
    {
      title: "Quality Excellence",
      description:
        "Delivering pixel-perfect, production-ready solutions that exceed expectations.",
      color: "#0891b2",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Data-Driven",
      description:
        "Every decision backed by analytics to ensure measurable growth and ROI.",
      color: "#7c3aed",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20h-5m5 0v-2a3 3 0 00-5.356-1.857M7 17h5m0-3a3 3 0 11-6 0 3 3 0 016 0zm9-3a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: "Client-Centric",
      description:
        "Building lasting relationships through trust, transparency, and results.",
      color: "#ea580c",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
    },
    {
      title: "Creative Excellence",
      description:
        "Combining creativity with technical expertise to deliver standout work.",
      color: "#d946ef",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "Agile Delivery",
      description:
        "Rapid, iterative development with continuous feedback and collaboration.",
      color: "#0f766e",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  // Updated certification data
  const certifications = [
    {
      id: 1,
      name: "Google Partner",
      issuer: "Google",
      description: "Certified Google Ads Partner",
      image: "/certificates/1.jpg",
      date: "2024",
      validUntil: "2026",
      status: "Active",
    },
    {
      id: 2,
      name: "Meta Business Partner",
      issuer: "Meta",
      description: "Certified Meta Ads Specialist",
      image: "/certificates/2.jpg",
      date: "2023",
      validUntil: "2025",
      status: "Active",
    },
    {
      id: 3,
      name: "HubSpot Certified",
      issuer: "HubSpot",
      description: "Certified Inbound Marketing Professional",
      image: "/certificates/3.jpg",
      date: "2023",
      validUntil: "2026",
      status: "Active",
    },
    {
      id: 4,
      name: "Microsoft Certified",
      issuer: "Microsoft",
      description: "Azure Cloud Solutions Certified",
      image: "/certificates/4.jpg",
      date: "2024",
      validUntil: "2027",
      status: "Active",
    },
    {
      id: 5,
      name: "AWS Partner",
      issuer: "Amazon Web Services",
      description: "AWS Cloud Solutions Provider",
      image: "/certificates/5.jpg",
      date: "2023",
      validUntil: "2026",
      status: "Active",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="sm:h-[65vh] md:h-[75vh] lg:h-[90vh]">
        <div className="text-sm text-center">
          <div className="mx-auto w-full overflow-hidden">
            <img
              src="/about/banner.png"
              alt="About Flirty Spark"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Company Overview Section */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2 className="text-4xl lg:text-4xl font-medium text-[#1b3163] leading-tight relative">
                  Company <span className="text-red-600">Overview</span>
                </h2>

                <div className="mt-4 flex items-center gap-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 80 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1 }}
                    className="h-1 bg-red-600 rounded-full"
                  />

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 32 }}
                    viewport={{ once: false }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-1 bg-yellow-400 rounded-full"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="bg-white border border-gray-200 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="text-gray-700 leading-relaxed mb-2"
                >
                  <span className="font-medium text-red-600 text-2xl">
                    Flirty Spark
                  </span>
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="text-gray-700 text-justify leading-relaxed mb-6"
                >
                  Is a forward-thinking digital solutions provider specializing
                  in web and app development, SEO, content marketing, paid
                  advertising, and branding. We help businesses build powerful
                  online presence and achieve sustainable growth through
                  innovative digital strategies.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="text-gray-700 text-justify leading-relaxed mb-6"
                >
                  With a focus on quality, creativity, and measurable results,
                  we deliver pixel-perfect websites, high-converting campaigns,
                  and unforgettable brand experiences that help our clients
                  thrive in the digital landscape.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.7 }}
                  className="text-gray-700 text-justify leading-relaxed"
                >
                  We specialize in building fast, scalable digital solutions — custom websites, web applications, and mobile experiences engineered with modern technology stacks for exceptional performance and user delight.

                </motion.p>



              </motion.div>
            </motion.div>

            {/* Right Column */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative mt-2 sm:mt-24"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1 }}
                className="relative h-[363px] w-full overflow-hidden rounded-[24px]"
              >
                <img
                  src="/about/about.png"
                  alt="Flirty Spark Team"
                  className="object-cover object-top w-full hover:scale-105 transition-transform duration-700"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Mission, Vision & Core Values */}
        <section className="relative overflow-hidden bg-gray-100 py-12 lg:py-12">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              className="mb-8 text-center"
            >
              <h2 className="mx-auto max-w-4xl text-3xl font-medium leading-tight text-gray-900 md:text-4xl">
                Mission, Vision &
                <span className="text-red-600"> Core Values</span>
              </h2>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-7 text-gray-600 md:text-base"
              >
                Driven by innovation, quality, and a commitment to delivering
                exceptional digital solutions that drive business growth.
              </motion.p>

              <div className="mt-5 flex items-center justify-center">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 64 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1 }}
                  className="h-[3px] rounded-full bg-red-600"
                ></motion.div>
              </div>
            </motion.div>

            {/* Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="mb-10 flex justify-center"
            >
              <div className="inline-flex rounded-2xl border border-gray-200 bg-white p-2 shadow-lg">
                {[
                  { id: "mission", label: "Our Mission" },
                  { id: "vision", label: "Our Vision" },
                  { id: "values", label: "Our Values" },
                ].map((tab) => (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative rounded-xl px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-all duration-300 md:px-6 md:text-sm ${activeTab === tab.id
                      ? "scale-[1.02] bg-red-600 text-white shadow-md"
                      : "text-gray-600 hover:text-black"
                      }`}
                  >
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Content Card */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 1 }}
              className="overflow-hidden rounded-[28px] border border-gray-100 bg-white shadow-xl"
            >
              <div className="p-6 md:p-10 lg:p-12">
                {/* Mission */}
                {activeTab === "mission" && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="grid items-center gap-10 lg:grid-cols-2"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="mb-4 text-2xl font-medium text-gray-900 md:text-3xl">
                        Our <span className="text-red-600">Mission</span>
                      </h3>

                      <p className="text-sm font-medium leading-8 text-gray-600 md:text-base text-justify">
                        To empower businesses with innovative digital solutions
                        that drive growth, enhance engagement, and deliver
                        measurable results. We combine technical excellence with
                        creative strategy to build digital experiences that make
                        a lasting impact.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      whileHover={{ y: -8 }}
                      className="rounded-[28px] border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg"
                    >
                      <h4 className="mb-4 text-2xl font-medium text-gray-900">
                        Digital Excellence Commitment
                      </h4>

                      <p className="text-sm font-medium leading-7 text-gray-600 md:text-base text-justify">
                        We are committed to delivering pixel-perfect, scalable,
                        and production-ready digital solutions that help
                        businesses stand out and succeed in the modern digital
                        landscape.
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                {/* Vision */}
                {activeTab === "vision" && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="grid items-center gap-10 lg:grid-cols-2"
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h3 className="mb-4 text-2xl font-medium text-gray-900 md:text-3xl">
                        Our <span className="text-red-600">Vision</span>
                      </h3>

                      <p className="text-sm font-medium leading-8 text-gray-600 md:text-base text-justify">
                        To become the most trusted digital partner for
                        businesses worldwide, recognized for innovation,
                        quality, and the ability to deliver transformative
                        digital experiences that drive sustainable growth.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                      whileHover={{ y: -8 }}
                      className="rounded-[28px] border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-8 shadow-lg"
                    >
                      <h4 className="mb-4 text-2xl font-medium text-gray-900">
                        Future-Ready Approach
                      </h4>

                      <p className="text-sm font-medium leading-7 text-gray-600 md:text-base text-justify">
                        We continuously evolve with emerging technologies and
                        industry trends to deliver cutting-edge solutions that
                        prepare our clients for the future of digital business.
                      </p>
                    </motion.div>
                  </motion.div>
                )}

                {/* Values */}
                {activeTab === "values" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7 }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7 }}
                      className="mb-10 text-center"
                    >
                      <h3 className="text-3xl font-medium text-gray-900">
                        Our Core <span className="text-red-600">Values</span>
                      </h3>
                    </motion.div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-6">
                      {companyValues.map((value, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 50 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false }}
                          transition={{
                            duration: 0.7,
                            delay: index * 0.12,
                          }}
                          whileHover={{
                            y: -10,
                            scale: 1.03,
                          }}
                          className="group relative overflow-hidden rounded-[24px] border border-gray-100 bg-white p-6 text-center shadow-sm transition-all duration-500 hover:shadow-xl"
                          onMouseEnter={() => setHoveredValue(index)}
                          onMouseLeave={() => setHoveredValue(null)}
                        >
                          <div
                            className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
                            style={{
                              background: `linear-gradient(135deg, ${value.color}08, transparent)`,
                            }}
                          ></div>

                          <h4 className="relative mb-3 text-lg font-bold text-gray-900 transition duration-300 group-hover:text-red-600">
                            {value.title}
                          </h4>

                          <p className="relative text-sm font-medium leading-7 text-gray-600">
                            {value.description}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-12 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
                Why <span className="text-red-600">Choose Us</span>
              </h2>

              <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                Delivering exceptional digital solutions with a commitment to
                quality, innovation, and measurable business results.
              </p>

              <div className="w-20 h-1 bg-red-600 mx-auto mt-5 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {[
                "Custom web and app development with modern technologies.",
                "Data-driven SEO strategies for sustainable organic growth.",
                "High-converting paid advertising campaigns across all platforms.",
                "Creative branding and UI/UX design that stands out.",
                "Performance-optimized, production-ready solutions.",
                "Client-centric approach with transparent communication.",
                "Agile development with continuous feedback and iteration.",
                "Proven track record of delivering measurable business results."
              ].map((item, index) => (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300">
                      <svg
                        className="w-6 h-6 text-red-600 group-hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {item}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Statistics Counter Section */}
        <section className="py-12 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-medium mb-4">
                Delivering Digital{" "}
                <span style={{ color: "#e21d23" }}>Excellence</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Building digital experiences that drive growth, engagement, and
                measurable results for businesses worldwide.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ color: "#e21d23" }}
                >
                  {counter.years}+
                </div>
                <div className="text-gray-300">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ color: "#e21d23" }}
                >
                  {counter.projects}+
                </div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ color: "#e21d23" }}
                >
                  {counter.clients}+
                </div>
                <div className="text-gray-300">Services Offered</div>
              </div>
              <div className="text-center">
                <div
                  className="text-5xl font-bold mb-2"
                  style={{ color: "#e21d23" }}
                >
                  {counter.experts}+
                </div>
                <div className="text-gray-300">Team Experts</div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Journey Timeline */}
        <section className="py-12 bg-white overflow-y-hidden">
          <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-center mb-12 border-gray-200 pb-6">
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-3xl md:text-4xl font-medium text-gray-900 mt-2 leading-tight text-center"
                >
                  Company{" "}
                  <span className="text-[#e21d23] inline-block">
                    Milestones
                  </span>
                </motion.h2>
                <div
                  className="w-20 h-1 mx-auto mt-4"
                  style={{ backgroundColor: "#e21d23" }}
                ></div>
                <p className="text-gray-600 mt-4 max-w-4xl mx-auto">
                  Growing with innovation, creativity, and a commitment to
                  delivering exceptional digital solutions.
                </p>
              </div>
            </div>

            <div className="relative">
              <Marquee
                pauseOnHover={true}
                speed={50}
                gradient={true}
                gradientColor="#f9fafb"
                gradientWidth={80}
                className="py-4"
                style={{ overflowY: "hidden" }}
              >
                {milestones.map((milestone, index) => (
                  <div
                    key={`${milestone.year}-${index}`}
                    className="flex-none w-[280px] sm:w-[320px] md:w-[360px] mx-3 group"
                  >
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between h-[200px] group-hover:-translate-y-2">
                      <div className="relative z-10">
                        <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-md bg-[#e21d23]/10 text-[#e21d23] mb-4">
                          {milestone.year}
                        </span>
                        <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-[#e21d23] transition-colors duration-200">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
                          {milestone.description}
                        </p>
                      </div>

                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#e21d23] group-hover:w-full transition-all duration-300" />
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
         {/* <section className="relative overflow-x-hidden overflow-y-hidden py-12 bg-white">
          <div className="relative max-w-9xl mx-auto overflow-y-hidden">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              className="text-center mb-14 px-4"
            >
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight"
              >
                Certifications &{" "}
                <motion.span
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-red-600 inline-block"
                >
                  Industry Recognition
                </motion.span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mx-auto mt-4 max-w-xl text-sm md:text-base font-medium leading-relaxed text-gray-600"
              >
                Committed to delivering exceptional digital solutions with
                industry-recognized certifications and partnerships.
              </motion.p>

              <div className="mt-6 flex justify-center">
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 80, opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 1, delay: 0.6 }}
                  className="h-1 rounded-full bg-red-600"
                />
              </div>
            </motion.div>

            
            <div className="relative overflow-x-hidden overflow-y-hidden">
              <Marquee
                pauseOnHover
                speed={45}
                autoFill
                gradient
                gradientColor="#ffffff"
                gradientWidth={96}
                className="py-2 overflow-y-hidden"
                style={{ overflowY: "hidden" }}
              >
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className="group mx-4 flex w-[250px] shrink-0 cursor-pointer flex-col overflow-hidden rounded-[20px] border border-gray-100 bg-white shadow-md transition-all duration-500 hover:shadow-2xl"
                    onClick={() => setSelectedImage(cert)}
                  >
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50 p-3">
                      <Image
                        src={cert.image}
                        alt={cert.name}
                        fill
                        loading="eager"
                        className="object-contain transition duration-500 group-hover:scale-105"
                        sizes="250px"
                        quality={90}
                      />

                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
                    </div>

                    <div className="p-5 text-center">
                      <h3 className="text-[15px] font-bold uppercase tracking-wide text-gray-900 transition-colors duration-300 group-hover:text-red-600 line-clamp-1">
                        {cert.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </Marquee>
            </div>
          </div>

          
          {selectedImage && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4">
            
              <button
                onClick={() => setSelectedImage(null)}
                className="fixed top-4 right-7 md:top-5 md:right-[600px] z-[10000] flex h-12 w-12 items-center justify-center rounded-full bg-white text-black shadow-2xl transition hover:scale-110"
              >
                <X className="h-6 w-6" />
              </button>

              
              <div className="relative flex w-full max-w-xl flex-col overflow-hidden rounded-3xl bg-gray-100 shadow-2xl">
                <div className="relative mx-auto h-[75vh] w-full">
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.name}
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 100vw, 768px"
                    quality={100}
                    priority
                  />
                </div>

                <div className="border-t border-gray-100 p-6 text-center">
                  <h3 className="text-2xl font-black text-gray-900">
                    {selectedImage.name}
                  </h3>

                  <p className="mt-2 text-sm font-semibold uppercase text-red-600">
                    {selectedImage.issuer}
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>  */}

        {/* CTA Section */}
        <section className="relative overflow-hidden py-12 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.9 }}
              className="text-3xl md:text-4xl font-medium text-white mb-4"
            >
              Ready to Build Something{" "}
              <span className="text-[#e21d23]">Amazing?</span>
            </motion.h2>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg text-gray-300 mb-8"
            >
              Let's create digital experiences that drive growth, engage
              audiences, and deliver measurable results for your business.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {/* Contact Button */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/contact-us"
                  className="group relative overflow-hidden inline-flex items-center justify-center px-8 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
                  style={{ backgroundColor: "#e21d23" }}
                >
                  {/* Shine Effect */}
                  <span className="absolute top-0 left-[-120%] h-full w-[40%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

                  <span className="relative z-10">Let's Talk</span>
                </Link>
              </motion.div>

              {/* Services Button */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  y: -3,
                }}
                whileTap={{ scale: 0.96 }}
              >
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  Explore Services
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}