"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import {
  Code2,
  BarChart3,
  Megaphone,
  Palette,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Rocket,
  Users,
  TrendingUp,
  Smartphone,
  Globe,
  Search,
  Share2,
  PenTool,
  Layout,
} from "lucide-react";

// ─── Animation Variants ──────────────────────────────────────
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const services = [
  {
    id: 1,
    icon: Code2,
    title: "Web & App Development",
    tagline: "Fast, scalable, delightful",
    description:
      "Custom websites, web apps, and mobile experiences built with modern stacks — pixel-perfect and production-ready.",
    features: [
      "Custom Web Applications",
      "Mobile App Development",
      "E-commerce Solutions",
      "Progressive Web Apps (PWA)",
      "API Development & Integration",
      "CMS Development",
    ],
    technologies: ["React", "Next.js", "Node.js", "Python", "React Native", "Flutter"],
  },
  {
    id: 2,
    icon: Search,
    title: "SEO & Content",
    tagline: "Organic growth on repeat",
    description:
      "Rank for the searches that matter. Technical SEO, keyword strategy, editorial content, and authority link building.",
    features: [
      "Technical SEO Audits",
      "Keyword Research & Strategy",
      "On-Page SEO Optimization",
      "Content Strategy & Creation",
      "Link Building & Authority",
      "Local SEO",
    ],
    technologies: ["Google Analytics", "Search Console", "SEMrush", "Ahrefs", "Moz"],
  },
  {
    id: 3,
    icon: Megaphone,
    title: "Paid Ads & Social",
    tagline: "Campaigns that convert",
    description:
      "Google, Meta, LinkedIn and TikTok ads plus organic social — creative + performance under one roof.",
    features: [
      "Google Ads Campaigns",
      "Meta (Facebook/Instagram) Ads",
      "LinkedIn Advertising",
      "TikTok Advertising",
      "Social Media Management",
      "Retargeting Strategies",
    ],
    technologies: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads", "TikTok Ads"],
  },
  {
    id: 4,
    icon: Palette,
    title: "Branding & UI/UX",
    tagline: "Identity you're proud of",
    description:
      "Logos, brand systems, product design and UX research that make your brand unmistakable and easy to love.",
    features: [
      "Logo Design & Brand Identity",
      "UI/UX Design",
      "Product Design",
      "UX Research & Testing",
      "Brand Strategy",
      "Design Systems",
    ],
    technologies: ["Figma", "Adobe Creative Suite", "Sketch", "Prototyping"],
  },
];

export default function Services() {
  return (
    <>
    <Navbar/>
      {/* ─── HERO SECTION ────────────────────────────────── */}
      <section className="relative py-24 bg-gray-900 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#e21d23]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#e21d23]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-sm font-semibold uppercase tracking-[0.35em] text-[#e21d23] bg-white/5 px-6 py-3 rounded-full mb-6"
            >
              What We Do
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Digital Solutions That
              <br />
              <span className="text-[#e21d23]">Drive Real Results</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed"
            >
              From custom development to strategic marketing — we provide
              end-to-end digital solutions designed to help your business grow,
              engage, and succeed in the modern digital landscape.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="relative overflow-hidden px-8 py-4 rounded-full bg-[#e21d23] text-white font-semibold hover:bg-black transition-all duration-300 shadow-lg"
              >
                <span className="absolute top-0 left-[-120%] h-full w-[50%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                <span className="relative z-10">Get Started</span>
              </Link>
              <Link
                href="#services"
                className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── SERVICES GRID ────────────────────────────────── */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e21d23]"
            >
              Our Services
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-gray-900 mt-4"
            >
              What We <span className="text-[#e21d23]">Deliver</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-600 mt-4 text-lg leading-relaxed"
            >
              Comprehensive digital solutions designed to help your business
              grow, engage, and succeed online.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={fadeRight}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#e21d23]/10 flex items-center justify-center mb-6 group-hover:bg-[#e21d23] transition-all duration-300">
                  <service.icon className="w-7 h-7 text-[#e21d23] group-hover:text-white transition-all duration-300" />
                </div>

                {/* Title & Tagline */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                  <span className="inline-block mt-1 text-sm font-semibold text-[#e21d23]">
                    {service.tagline}
                  </span>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#e21d23] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-100">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-50 text-gray-600 rounded-full border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ────────────────────────────────── */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="text-xs font-semibold uppercase tracking-[0.35em] text-[#e21d23]"
            >
              Why Flirty Spark
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-gray-900 mt-4"
            >
              What Makes Us <span className="text-[#e21d23]">Different</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Rocket,
                title: "Fast & Scalable",
                description:
                  "We build solutions that grow with your business, delivering speed and reliability from day one.",
              },
              {
                icon: Users,
                title: "Client-Centric Approach",
                description:
                  "Your goals drive our strategy. We collaborate closely to ensure every project exceeds expectations.",
              },
              {
                icon: TrendingUp,
                title: "Data-Driven Results",
                description:
                  "Every decision is backed by data and analytics to ensure measurable growth and ROI.",
              },
              {
                icon: Sparkles,
                title: "Creative Excellence",
                description:
                  "From design to development, we combine creativity with technical expertise to deliver standout work.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#e21d23]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-[#e21d23]" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <CTA />
      <Footer />
    </>
  );
}