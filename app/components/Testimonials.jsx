"use client";
// components/Testimonials.jsx
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

// ─── Animation Variants ──────────────────────────────────────
const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const lineVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "5rem", // matches the original width (w-20 = 5rem)
    opacity: 1,
    transition: { delay: 0.3, duration: 0.8 },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6 },
  },
};

export default function Testimonials() {
  // ─── Intersection Observer ──────────────────────────────────
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "0px" });

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  // Autoplay controls
  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  const stopAutoplay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetAutoplay = () => {
    startAutoplay();
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "Amit Verma",
      position: "CTO",
      company: "TechCorp Solutions",
      industry: "SaaS",
      rating: 5,
      content:
        "Flirty Spark delivered a custom web application that transformed our operations. The team's expertise in full-stack development is outstanding.",
      image: "/testimonials/1.jpg",
      date: "March 2024",
    },
    {
      id: 2,
      name: "Rohit Malhotra",
      position: "Head of Digital Marketing",
      company: "GrowthX Agency",
      industry: "Digital Marketing",
      rating: 5,
      content:
        "Our SEO rankings have improved significantly since working with Flirty Spark. Their strategic approach to content and technical SEO is unmatched.",
      image: "/testimonials/2.jpg",
      date: "January 2024",
    },
    {
      id: 3,
      name: "Sanjay Kulkarni",
      position: "Product Manager",
      company: "FinTech Innovations",
      industry: "FinTech",
      rating: 5,
      content:
        "The mobile app developed by Flirty Spark has been a game-changer for our business. Intuitive design, seamless performance, and exceptional user experience.",
      image: "/testimonials/3.jpg",
      date: "December 2023",
    },
    {
      id: 4,
      name: "Neha Arora",
      position: "Brand Director",
      company: "Creative House",
      industry: "Branding",
      rating: 4,
      content:
        "Flirty Spark helped us completely rebrand our identity. From logo design to brand strategy, they delivered work we're truly proud of.",
      image: "/testimonials/4.jpeg",
      date: "November 2023",
    },
    {
      id: 5,
      name: "Vikas Sharma",
      position: "Content Strategist",
      company: "MediaWorks",
      industry: "Media",
      rating: 5,
      content:
        "The content marketing strategy developed by Flirty Spark has dramatically increased our organic traffic and lead generation.",
      image: "/testimonials/5.jpg",
      date: "October 2023",
    },
    {
      id: 6,
      name: "Anil Kapoor",
      position: "Marketing Director",
      company: "Global Brands Ltd.",
      industry: "E-commerce",
      rating: 5,
      content:
        "Flirty Spark's digital marketing expertise has helped us achieve remarkable growth. Their data-driven approach delivers measurable results.",
      image: "/testimonials/6.jpg",
      date: "September 2023",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    resetAutoplay();
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    resetAutoplay();
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    resetAutoplay();
  };

  // Get visible testimonials (3 at a time for desktop)
  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  const renderStars = (rating) => {
    return (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section ref={sectionRef} className="py-8 sm:py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop: Two‑column layout */}
        <div className="lg:flex lg:flex-row lg:gap-8">
          {/* Left Side – Text Content (30%) with animations */}
          <div className="lg:w-[30%] mb-8 lg:mb-0">
            <motion.h2
              variants={headingVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-3xl md:text-5xl font-medium text-gray-900 mt-20 mb-4"
            >
              What Our <span style={{ color: "#e21d23" }}>Clients Say</span>
            </motion.h2>

            {/* Animated Underline */}
            <motion.div
              variants={lineVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="h-1 rounded-full bg-gradient-to-r from-[#e21d23] to-[#e21d23] mb-6"
              style={{ backgroundColor: "#e21d23" }} // fallback if gradient not applied
            />

            <motion.p
              variants={subtitleVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Trusted by businesses across industries – real feedback from our
              partners in SaaS, digital marketing, fintech, branding, and e-commerce.
            </motion.p>
          </div>

          {/* Right Side – Carousel (70%) with hover pause */}
          <div
            className="lg:w-[70%]"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
          >
            {/* Desktop View - 3 Cards */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6">
              {getVisibleTestimonials().map((testimonial, idx) => (
                <div
                  key={testimonial.id}
                  className={`bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 ${
                    isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${idx * 100}ms` }}
                >
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <svg
                      className="w-10 h-10"
                      style={{ color: "#e21d23", opacity: 0.3 }}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <p className="text-gray-600 leading-relaxed mb-6 min-h-[100px] text-sm">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  {renderStars(testimonial.rating)}

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-100 my-4"></div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                      <p className="text-xs" style={{ color: "#e21d23" }}>
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile View - Single Card Carousel */}
            <div className="lg:hidden relative">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                {/* Quote Icon */}
                <div className="mb-4">
                  <svg
                    className="w-10 h-10"
                    style={{ color: "#e21d23", opacity: 0.3 }}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  "{testimonials[currentIndex].content}"
                </p>

                {renderStars(testimonials[currentIndex].rating)}

                <div className="w-full h-px bg-gray-100 my-4"></div>

                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                    style={{ backgroundColor: "#e21d23" }}
                  >
                    {testimonials[currentIndex].name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonials[currentIndex].position}
                    </p>
                    <p className="text-xs" style={{ color: "#e21d23" }}>
                      {testimonials[currentIndex].company}
                    </p>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows (Mobile) */}
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Navigation Dots */}
            <div className="hidden lg:flex justify-center gap-2 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-6" : ""
                  }`}
                  style={{
                    backgroundColor:
                      index === currentIndex ? "#e21d23" : "#e5e7eb",
                    width: index === currentIndex ? "24px" : "8px",
                  }}
                ></button>
              ))}
            </div>

            {/* Desktop Navigation Arrows */}
            <div className="hidden lg:flex justify-center gap-4 mt-6">
              <button
                onClick={prevSlide}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:shadow-lg transition-all"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}