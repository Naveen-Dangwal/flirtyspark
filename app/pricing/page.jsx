"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Check, X, Sparkles, Rocket, Crown, ArrowRight } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const pricingPlans = [
  {
    id: 1,
    name: "Starter",
    icon: Sparkles,
    price: "₹49,999",
    period: "per project",
    description: "Perfect for small businesses and startups getting started with their digital presence.",
    features: [
      { name: "Custom Website Design", included: true },
      { name: "Up to 5 Pages", included: true },
      { name: "Mobile Responsive Design", included: true },
      { name: "Basic SEO Setup", included: true },
      { name: "Social Media Integration", included: true },
      { name: "Contact Form", included: true },
      { name: "Google Analytics Setup", included: true },
      { name: "1 Month Support", included: true },
      { name: "E-commerce Functionality", included: false },
      { name: "Custom Web Applications", included: false },
      { name: "Advanced SEO Strategy", included: false },
      { name: "Brand Identity Design", included: false },
      { name: "Content Marketing", included: false },
      { name: "Paid Advertising Campaigns", included: false },
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
    popular: false,
    color: "#e21d23",
    borderColor: "border-gray-200",
  },
  {
    id: 2,
    name: "Professional",
    icon: Rocket,
    price: "₹1,49,999",
    period: "per project",
    description: "Ideal for growing businesses looking for comprehensive digital solutions.",
    features: [
      { name: "Custom Website Design", included: true },
      { name: "Up to 15 Pages", included: true },
      { name: "Mobile Responsive Design", included: true },
      { name: "Advanced SEO Strategy", included: true },
      { name: "Social Media Integration", included: true },
      { name: "Contact Form", included: true },
      { name: "Google Analytics Setup", included: true },
      { name: "3 Months Support", included: true },
      { name: "E-commerce Functionality", included: true },
      { name: "Custom Web Applications", included: true },
      { name: "Brand Identity Design", included: true },
      { name: "Content Marketing Strategy", included: true },
      { name: "Paid Advertising Campaigns", included: false },
      { name: "Advanced Analytics & Reporting", included: false },
    ],
    buttonText: "Get Started",
    buttonLink: "/contact",
    popular: true,
    color: "#e21d23",
    borderColor: "border-[#e21d23]",
  },
  {
    id: 3,
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    period: "tailored solution",
    description: "Comprehensive digital solutions for large organizations with complex requirements.",
    features: [
      { name: "Custom Website Design", included: true },
      { name: "Unlimited Pages", included: true },
      { name: "Mobile Responsive Design", included: true },
      { name: "Advanced SEO Strategy", included: true },
      { name: "Social Media Integration", included: true },
      { name: "Contact Form", included: true },
      { name: "Google Analytics Setup", included: true },
      { name: "12 Months Support", included: true },
      { name: "E-commerce Functionality", included: true },
      { name: "Custom Web Applications", included: true },
      { name: "Brand Identity Design", included: true },
      { name: "Content Marketing Strategy", included: true },
      { name: "Paid Advertising Campaigns", included: true },
      { name: "Advanced Analytics & Reporting", included: true },
    ],
    buttonText: "Contact Sales",
    buttonLink: "/contact",
    popular: false,
    color: "#1b3163",
    borderColor: "border-gray-200",
  },
];

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Navbar />

      {/* ─── HERO SECTION ────────────────────────────────── */}
      <section className="relative py-20 bg-gray-900 overflow-hidden">
        {/* <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#e21d23]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#e21d23]/5 rounded-full blur-3xl" />
        </div> */}

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
              Pricing Plans
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
            >
              Choose Your <span className="text-[#e21d23]">Plan</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed"
            >
              Flexible pricing options designed to meet your business needs.
              Whether you're just starting or scaling up, we have the perfect
              solution for you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── PRICING CARDS ────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                variants={scaleIn}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
                className={`relative bg-white rounded-3xl border-2 ${
                  plan.popular
                    ? `border-[#e21d23] shadow-2xl ${hoveredPlan === plan.id ? 'shadow-[#e21d23]/20' : ''}`
                    : `border-gray-200 ${hoveredPlan === plan.id ? 'shadow-2xl border-[#e21d23]' : 'shadow-lg'}`
                } transition-all duration-500 hover:-translate-y-3 overflow-hidden`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-[#e21d23] text-white text-xs font-bold uppercase tracking-wider px-6 py-2 rounded-bl-2xl">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 ${
                      hoveredPlan === plan.id
                        ? "bg-[#e21d23] text-white"
                        : "bg-[#e21d23]/10 text-[#e21d23]"
                    }`}
                  >
                    <plan.icon className="w-8 h-8" />
                  </div>

                  {/* Plan Name */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-gray-500 ml-2">
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-200 mb-6"></div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included
                              ? "text-gray-700"
                              : "text-gray-400"
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  {/* <Link
                    href={plan.buttonLink}
                    className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-[#e21d23] text-white hover:bg-black hover:shadow-lg hover:shadow-[#e21d23]/30"
                        : "bg-gray-100 text-gray-900 hover:bg-[#e21d23] hover:text-white hover:shadow-lg"
                    }`}
                  >
                    {plan.buttonText}
                    <ArrowRight className="w-4 h-4" />
                  </Link> */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ SECTION ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
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
              FAQ
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-gray-900 mt-4"
            >
              Frequently Asked <span className="text-[#e21d23]">Questions</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-gray-600 mt-4 text-lg leading-relaxed"
            >
              Find answers to common questions about our pricing and services.
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What is included in the website development process?",
                a: "Our website development process includes discovery and planning, design, development, testing, deployment, and post-launch support. We work closely with you to ensure your vision is brought to life.",
              },
              {
                q: "Can I upgrade my plan later?",
                a: "Absolutely! You can upgrade to a higher plan at any time. We'll help you transition smoothly and ensure you get the features you need.",
              },
              {
                q: "Do you offer custom solutions?",
                a: "Yes, our Enterprise plan offers completely customized solutions tailored to your specific business requirements. Contact our sales team to discuss your needs.",
              },
              {
                q: "What about ongoing maintenance and support?",
                a: "All our plans include dedicated support. The duration varies by plan, ranging from 1 month for Starter to 12 months for Enterprise. We also offer extended support packages.",
              },
              {
                q: "How long does it take to complete a project?",
                a: "Project timelines vary based on the scope and complexity. A typical Starter project takes 2-4 weeks, Professional takes 4-8 weeks, and Enterprise projects are custom scheduled.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#e21d23] transition-colors duration-300">
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA SECTION ────────────────────────────────── */}
      <section className="py-20 bg-gray-900 ">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Not Sure Which Plan Is Right for You?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-white/80 text-lg mb-8 max-w-2xl mx-auto"
            >
              Let's chat about your requirements and find the perfect solution
              for your business.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#e21d23] font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}