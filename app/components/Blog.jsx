"use client";
// components/Blog.jsx

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock3, Sparkles } from "lucide-react";

export default function Blog() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const blogs = [
    {
      id: 1,
      title: "Why Your Business Needs a Custom Web Application",
      excerpt:
        "Discover how custom web applications can transform your business operations, improve customer engagement, and give you a competitive edge in the digital marketplace.",
      category: "Web Development",
      readTime: "5 min read",
      date: "May 15, 2024",
      image: "/blog/1.jpg",
      author: "Arjun Mehta",
      authorRole: "Lead Full-Stack Developer",
      slug: "why-business-needs-custom-web-application",
      featured: true,
    },
    {
      id: 2,
      title: "The Complete Guide to SEO in 2024",
      excerpt:
        "A comprehensive guide to mastering technical SEO, content strategy, keyword research, and link building for sustainable organic growth.",
      category: "SEO Strategy",
      readTime: "7 min read",
      date: "May 10, 2024",
      image: "/blog/2.jpg",
      author: "Sneha Patel",
      authorRole: "SEO Director",
      slug: "complete-guide-to-seo-2024",
      featured: false,
    },
    {
      id: 3,
      title: "Mobile App Development Trends You Can't Ignore",
      excerpt:
        "Learn about the latest trends in mobile app development, including AI integration, cross-platform solutions, and enhanced user experiences.",
      category: "App Development",
      readTime: "4 min read",
      date: "May 5, 2024",
      image: "/blog/3.jpg",
      author: "Vikram Singh",
      authorRole: "Mobile App Specialist",
      slug: "mobile-app-development-trends",
      featured: false,
    },
    {
      id: 4,
      title: "How Branding Drives Business Success",
      excerpt:
        "Understand how strategic branding and UI/UX design create memorable experiences that build customer loyalty and drive business growth.",
      category: "Branding & Design",
      readTime: "6 min read",
      date: "April 28, 2024",
      image: "/blog/4.jpg",
      author: "Ananya Reddy",
      authorRole: "Creative Director",
      slug: "branding-drives-business-success",
      featured: false,
    },
    {
      id: 5,
      title: "Content Marketing Strategies That Actually Work",
      excerpt:
        "Learn proven content marketing strategies that attract, engage, and convert your target audience into loyal customers.",
      category: "Content Marketing",
      readTime: "5 min read",
      date: "April 20, 2024",
      image: "/blog/5.jpg",
      author: "Rahul Khanna",
      authorRole: "Content Strategist",
      slug: "content-marketing-strategies-that-work",
      featured: false,
    },
    {
      id: 6,
      title: "The Future of Digital Marketing",
      excerpt:
        "Explore emerging digital marketing trends including AI-powered campaigns, voice search optimization, and personalization at scale.",
      category: "Digital Marketing",
      readTime: "4 min read",
      date: "April 15, 2024",
      image: "/blog/6.jpg",
      author: "Maya Krishnan",
      authorRole: "Digital Marketing Expert",
      slug: "future-of-digital-marketing",
      featured: false,
    },
  ];

  const featuredBlog = blogs.find((blog) => blog.featured);
  const recentBlogs = blogs.filter((blog) => !blog.featured);

  const getCategoryColor = (category) => {
    const colors = {
      "Web Development": "#e21d23",
      "SEO Strategy": "#0f766e",
      "App Development": "#7c3aed",
      "Branding & Design": "#ca8a04",
      "Content Marketing": "#2563eb",
      "Digital Marketing": "#d946ef",
    };

    return colors[category] || "#e21d23";
  };

  return (
    <section className="relative py-8 lg:py-12 bg-white overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-56 h-56 bg-red-50 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-56 h-56 bg-red-100 rounded-full blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-block text-sm font-semibold uppercase tracking-wider text-[#e21d23] bg-red-50 px-4 py-2 rounded-full mb-3">
            Our Blog
          </span>

          <h2 className="text-3xl md:text-4xl font-medium text-gray-900 leading-tight">
            Latest <span className="text-[#e21d23]">Insights</span> & Articles
          </h2>

          <p className="mt-3 text-gray-600 text-base leading-relaxed">
            Explore expert resources on web development, digital marketing, SEO strategies, branding, and mobile app solutions to grow your business.
          </p>
        </div>

        {/* Featured + Side Blogs */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Featured Blog */}
          <div className="lg:col-span-2 group bg-white rounded-xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500">
            <div className="grid md:grid-cols-2 h-full">
              {/* Image */}
              <div className="relative h-[260px] md:h-full overflow-hidden">
                <img
                  src={featuredBlog.image}
                  alt={featuredBlog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute top-4 left-4">
                  <span className="bg-[#e21d23] text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md">
                    Featured
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
                  <span className="text-[#e21d23] font-semibold">
                    {featuredBlog.category}
                  </span>

                  <span>•</span>

                  <span>{featuredBlog.readTime}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 leading-snug mb-4 hover:text-[#e21d23] transition-colors duration-300">
                  {featuredBlog.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6 line-clamp-3">
                  {featuredBlog.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 text-sm">
                      {featuredBlog.author}
                    </p>
                    <p className="text-xs text-gray-400">
                      {featuredBlog.authorRole}
                    </p>
                  </div>

                  <Link
                    href={`/blog/${featuredBlog.slug}`}
                    className="group relative overflow-hidden flex items-center gap-2 bg-[#e21d23] hover:bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
                  >
                    {/* Shine Effect */}
                    <span className="absolute top-0 left-[-120%] h-full w-[40%] animate-shine bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />

                    <span className="relative z-10 flex items-center gap-2">
                      Read More
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
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
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Small Blogs */}
          <div className="space-y-6">
            {recentBlogs.slice(0, 3).map((blog) => (
              <div
                key={blog.id}
                className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="flex gap-4 p-4">
                  {/* Thumbnail */}
                  <div className="w-28 h-28 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <span className="text-xs font-semibold text-[#e21d23] uppercase tracking-wide">
                      {blog.category}
                    </span>

                    <h4 className="text-base font-bold text-gray-900 mt-2 mb-2 leading-snug line-clamp-2 group-hover:text-[#e21d23] transition-colors duration-300">
                      {blog.title}
                    </h4>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-gray-400">
                        {blog.readTime}
                      </span>

                      <Link
                        href={`/blog/${blog.slug}`}
                        className="text-sm font-semibold text-[#e21d23] hover:translate-x-1 transition-all duration-300 inline-block"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Line Clamp */}
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}