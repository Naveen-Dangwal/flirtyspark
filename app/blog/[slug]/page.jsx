// app/blog/[slug]/page.jsx
"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  CalendarDays,
  User2,
  Clock3,
  Copy,
  Check,
  ArrowLeft,
} from "lucide-react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// BLOGS DATA
const allBlogsData = {
  
  "why-business-needs-custom-web-application": {
    id: 1,
    title: "Why Your Business Needs a Custom Web Application",

    date: "Tue Mar 17 2026",
    readTime: "6 min read",
    category: "Web Development",

    content: `
      <p id="role-of-custom-web-apps">
        In today's digital-first world, custom web applications have become essential for businesses looking to streamline operations, enhance customer engagement, and gain a competitive edge. Unlike off-the-shelf solutions, custom web apps are built specifically to address your unique business requirements and scale with your growth.
      </p>

      <br/>

       <p id="scalability-and-flexibility">
        One of the biggest advantages of custom web applications is scalability. As your business grows, your application can evolve to handle increased traffic, new features, and complex workflows. This flexibility ensures that your digital infrastructure remains aligned with your business goals without requiring complete overhauls.
      </p>

      <br/> 
      <p id="seamless-integration">
        Custom web applications seamlessly integrate with your existing systems, including CRMs, ERPs, and third-party APIs. This creates a unified digital ecosystem that eliminates data silos and improves operational efficiency across your organization.
      </p>

      <br/> 
      <p id="enhanced-user-experience">
        User experience is at the heart of successful web applications. Custom development allows you to design intuitive interfaces that align with your brand identity and deliver smooth, engaging experiences for your customers and employees.
      </p>
    `,

    image: "/blog/1.jpg",

    author: {
      name: "Arjun Mehta",
      role: "Lead Full-Stack Developer",
      bio: "Arjun specializes in building scalable web applications and digital solutions for businesses across industries.",
    },

    tags: ["#WebDevelopment", "#CustomWebApps", "#DigitalTransformation", "#ScalableSolutions", "#BusinessGrowth"],

    toc: [
      { id: "role-of-custom-web-apps", title: "Role of Custom Web Applications" },
      { id: "scalability-and-flexibility", title: "Scalability & Flexibility" },
      { id: "seamless-integration", title: "Seamless Integration" },
      { id: "enhanced-user-experience", title: "Enhanced User Experience" },
    ],
  },

  "complete-guide-to-seo-2024": {
    id: 2,
    title: "The Complete Guide to SEO in 2024",

    date: "Tue Mar 17 2026",
    readTime: "5 min read",
    category: "SEO Strategy",

    content: `
      <p id="why-seo-matters">
        Search Engine Optimization (SEO) remains one of the most effective digital marketing strategies for driving organic traffic and building brand authority. In 2024, SEO has evolved to focus more on user experience, content quality, and technical performance than ever before.
      </p>

      <br/>

      <p id="technical-seo-foundations">
Technical SEO forms the foundation of any successful optimization strategy. This includes site speed optimization, mobile responsiveness, secure HTTPS protocols, proper indexing, and structured data implementation. These technical elements ensure that search engines can effectively crawl and understand your content.      </p>

      <br/>

      <p id="content-strategy">
      Content remains king in SEO. Creating high-quality, relevant content that addresses user intent is essential for ranking well. This involves comprehensive keyword research, content planning, and producing valuable resources that answer your audience's questions.
      </p>

      <br/>

      <p id="link-building">
Quality backlinks continue to be a significant ranking factor. Building authority through guest posting, digital PR, and earning links from reputable sources helps establish your website as a trusted authority in your industry.
      </p>
    `,

    image: "/blog/2.jpg",

    author: {
      name: "Sneha Patel",
      role: "SEO Director",
      bio: "Sneha leads SEO strategies that drive sustainable organic growth for businesses across industries.",
    },

    tags: ["#SEO2024", "#TechnicalSEO", "#ContentMarketing", "#LinkBuilding", "#DigitalMarketing"],

    toc: [
      { id: "why-seo-matters", title: "Why SEO Matters" },
      { id: "technical-seo-foundations", title: "Technical SEO Foundations" },
      { id: "content-strategy", title: "Content Strategy" },
      { id: "link-building", title: "Link Building" },
    ],
  },

  "mobile-app-development-trends": {
    id: 3,
    title: "Mobile App Development Trends You Can't Ignore",

    date: "Tue Mar 17 2026",
    readTime: "4 min read",
    category: "App Development",

    content: `
      <p id="cross-platform-development">
        Cross-platform development frameworks like React Native and Flutter are revolutionizing mobile app development. These technologies allow developers to build apps for both iOS and Android using a single codebase, significantly reducing development time and costs while maintaining native-like performance.

      </p>

      <br/>

       <p id="ai-integration">
        Artificial Intelligence is transforming mobile apps with features like personalized recommendations, predictive analytics, and intelligent chatbots. AI-powered apps deliver smarter user experiences that adapt to individual user behavior and preferences.
      </p>

      <br/> <p id="cloud-native-apps">
        Cloud-native mobile applications are becoming increasingly popular, offering seamless synchronization across devices, automatic updates, and enhanced data security. This architecture ensures that users always have access to the latest features and their data remains accessible from anywhere.
      </p>

      <br/> <p id="enhanced-security">
        Security remains a top priority in mobile app development. Modern apps incorporate advanced encryption, biometric authentication, and secure data storage to protect user information and maintain trust.
      </p>
    `,

    image: "/blog/3.jpg",

    author: {
      name: "Vikram Singh",
      role: "Mobile App Specialist",
      bio: "Vikram is passionate about creating innovative mobile experiences using cutting-edge development technologies.",
    },

    tags: ["#MobileAppDevelopment", "#ReactNative", "#Flutter", "#AIApps", "#CloudNative"],

    toc: [
      { id: "cross-platform-development", title: "Cross-Platform Development" },
      { id: "ai-integration", title: "AI Integration" },
      { id: "cloud-native-apps", title: "Cloud-Native Apps" },
      { id: "enhanced-security", title: "Enhanced Security" },
    ],
  },

  "branding-drives-business-success": {
    id: 4,
    title: "How Branding Drives Business Success",

    date: "Tue Mar 17 2026",
    readTime: "5 min read",
    category: "Branding & Design",

    content: `
      <p id="power-of-branding">
        Strategic branding is more than just a logo or color palette — it's the foundation of how customers perceive and connect with your business. A strong brand identity builds trust, establishes emotional connections, and differentiates you from competitors in crowded markets.

      </p>

      <br/>
      <p id="consistent-brand-experience">
        Consistency across all touchpoints is crucial for effective branding. From your website and social media to packaging and customer service, every interaction should reflect your brand's personality, values, and promise to create a cohesive experience.
      
      </p>

      <br/>
      <p id="ux-ui-design">
        User Experience (UX) and User Interface (UI) design play a vital role in shaping brand perception. Intuitive interfaces, visually appealing designs, and seamless interactions create positive associations that strengthen brand loyalty and drive customer retention.
      
      </p>

      <br/>
      <p id="brand-storytelling">
        Storytelling helps humanize your brand and create deeper connections with your audience. Sharing your mission, values, and behind-the-scenes narratives builds authenticity and resonates with customers on an emotional level.
      
      </p>
    `,

    image: "/blog/4.jpg",

    author: {
      name: "Ananya Reddy",
      role: "Creative Director",
      bio: "Ananya is a branding expert who creates memorable brand identities that connect with audiences and drive business results.",
    },

    tags: ["#Branding", "#UIDesign", "#UXDesign", "#BrandStrategy", "#DigitalDesign"],

    toc: [
      { id: "power-of-branding", title: "Power of Branding" },
      { id: "consistent-brand-experience", title: "Consistent Brand Experience" },
      { id: "ux-ui-design", title: "UX & UI Design" },
      { id: "brand-storytelling", title: "Brand Storytelling" },
    ],
  },

  "content-marketing-strategies-that-work": {
    id: 5,
    title: "Content Marketing Strategies That Actually Work",

    date: "Tue Mar 17 2026",
    readTime: "5 min read",
    category: "Content Marketing",

    content: `
      <p id="strategy-first-approach">
        Effective content marketing begins with a well-defined strategy. Understanding your target audience, their pain points, and the content formats they prefer is essential for creating materials that engage, educate, and convert.

      </p>

      <br/>
      <p id="diverse-content-formats">
        Today's content landscape demands variety. Blog posts, videos, infographics, podcasts, whitepapers, and interactive tools all play important roles in a comprehensive content strategy. Diversifying your content formats helps reach different audience segments and preferences.
      
      </p>

      <br/>
      <p id="repurposing-content">
        Maximizing the value of your content through repurposing is a smart strategy. A single blog post can be transformed into social media snippets, email newsletters, video scripts, and downloadable resources, extending your reach across multiple channels.
      
      </p>

      <br/>
      <p id="measuring-and-optimizing">
        Data-driven optimization is key to content marketing success. Monitoring performance metrics like engagement rates, conversion rates, and traffic sources helps refine your strategy and focus on what works best for your audience.
      
      </p>
    `,

    image: "/blog/5.jpg",

    author: {
      name: "Rahul Khanna",
      role: "Content Strategist",
      bio: "Rahul develops content strategies that attract, engage, and convert audiences across digital platforms.",
    },

    tags: ["#ContentMarketing", "#ContentStrategy", "#DigitalContent", "#AudienceEngagement", "#ContentOptimization"],

    toc: [
      { id: "strategy-first-approach", title: "Strategy-First Approach" },
      { id: "diverse-content-formats", title: "Diverse Content Formats" },
      { id: "repurposing-content", title: "Repurposing Content" },
      { id: "measuring-and-optimizing", title: "Measuring & Optimizing" },
    ],
  },

  "future-of-digital-marketing": {
    id: 6,
    title: "The Future of Digital Marketing",

    date: "Tue Mar 17 2026",
    readTime: "4 min read",
    category: "Digital Marketing",

    content: `
      <p id="ai-powered-campaigns">
        Artificial Intelligence is reshaping digital marketing with smarter campaign optimization, predictive analytics, and personalized customer experiences. AI-powered tools help marketers understand customer behavior, predict trends, and deliver the right message at the right time.

      </p>

      <br/>
      <p id="voice-search-optimization">
        Voice search is rapidly growing, making voice optimization a crucial aspect of digital marketing. Optimizing content for voice search queries and conversational keywords helps capture traffic from smart speakers and virtual assistants.
      
      </p>

      <br/>
      <p id="personalization-at-scale">
        Personalization is no longer optional — it's expected. Advanced data analytics and machine learning enable businesses to deliver highly personalized experiences across all marketing channels, from email to social media to website content.
      
      </p>

      <br/>
      <p id="video-marketing-dominance">
        Video content continues to dominate digital marketing. Short-form videos, live streaming, and interactive video content are proving to be some of the most engaging formats for building brand awareness and driving conversions.
      
      </p>
    `,

    image: "/blog/6.jpg",

    author: {
      name: "Maya Krishnan",
      role: "Digital Marketing Expert",
      bio: "Maya leads digital marketing innovation at Flirty Spark, helping brands leverage cutting-edge marketing technologies.",
    },

    tags: ["#DigitalMarketing", "#AIMarketing", "#VoiceSearch", "#Personalization", "#VideoMarketing"],

    toc: [
      { id: "ai-powered-campaigns", title: "AI-Powered Campaigns" },
      { id: "voice-search-optimization", title: "Voice Search Optimization" },
      { id: "personalization-at-scale", title: "Personalization at Scale" },
      { id: "video-marketing-dominance", title: "Video Marketing Dominance" },
    ],
  },
};

const BlogDetailPage = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (slug && allBlogsData[slug]) {
      setBlog(allBlogsData[slug]);
    }

    setLoading(false);
  }, [slug]);

  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const getRelatedPosts = () => {
    if (!blog) return [];

    return Object.entries(allBlogsData)
      .filter(
        ([key, value]) => key !== slug && value.category === blog.category,
      )
      .slice(0, 3)
      .map(([key, value]) => ({
        slug: key,
        ...value,
      }));
  };

  const getTableOfContents = () => {
    if (!blog) return [];

    if (blog.toc?.length) return blog.toc;

    const headings = [];
    const matches = blog.content.matchAll(/<h2>(.*?)<\/h2>/g);

    for (const match of matches) {
      headings.push({
        id: match[1].toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title: match[1],
      });
    }

    return headings;
  };

  if (loading) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-[#dc2626] border-t-transparent rounded-full animate-spin"></div>
        </div>

        <Footer />
      </>
    );
  }

  if (!blog) {
    return (
      <>
        <Navbar />

        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Blog Not Found</h2>

            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-6 py-3 rounded-xl"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blogs
            </Link>
          </div>
        </div>

        <Footer />
      </>
    );
  }

  const relatedPosts = getRelatedPosts();
  const tableOfContents = getTableOfContents();

  return (
    <>
      <Navbar />

      <div className="bg-[#f8f8f8] min-h-screen">
        {/* HERO */}
        <section className="bg-gray-600 py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-5">
              <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm">
                {blog.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                {blog.date}
              </div>

              <div className="flex items-center gap-2">
                <Clock3 className="w-4 h-4" />
                {blog.readTime}
              </div>

              <div className="flex items-center gap-2">
                <User2 className="w-4 h-4" />
                {blog.author.name}
              </div>
            </div>
          </div>
        </section>

        {/* MAIN */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid lg:grid-cols-12 gap-10">
            {/* LEFT SIDEBAR */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-24 space-y-6">
                {/* TOC */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-5">Table of Contents</h3>

                  <ul className="space-y-3">
                    {tableOfContents.length > 0 ? (
                      tableOfContents.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="text-sm text-gray-600 hover:text-[#dc2626] transition leading-snug"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))
                    ) : (
                      <li className="text-sm text-gray-400">No sections available</li>
                    )}
                  </ul>
                </div>

                {/* SHARE */}
                {/* <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-5">Share Article</h3>

                  <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center justify-center gap-2 bg-[#dc2626] text-white py-3 rounded-xl hover:bg-[#b91c1c] transition"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Link
                      </>
                    )}
                  </button>
                </div> */}
              </div>
            </aside>

            {/* BLOG CONTENT */}
            <article className="lg:col-span-6">
              {/* IMAGE */}
              <div className="overflow-hidden rounded-3xl mb-8 shadow-sm">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-[250px] sm:h-[450px] object-cover"
                />
              </div>

              {/* CONTENT */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-[#dc2626] prose-p:text-gray-700 prose-li:text-gray-700 prose-headings:font-bold text-justify [&_p[id]]:scroll-mt-28"
                dangerouslySetInnerHTML={{
                  __html: blog.content,
                }}
              />

              {/* TAGS */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap gap-3">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#dc2626]/10 text-[#dc2626] px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>

            {/* AUTHOR */}
            <aside className="lg:col-span-3">
               {/* SHARE */}
                <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
                  <h3 className="font-bold text-lg mb-5">Share Article</h3>

                  <button
                    onClick={handleCopyLink}
                    className="w-full flex items-center justify-center gap-2 bg-[#dc2626] text-white py-3 rounded-xl hover:bg-[#b91c1c] transition"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Link
                      </>
                    )}
                  </button>
                </div>
            </aside>
          </div>
        </div>

        {/* RELATED POSTS */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#dc2626]">
                  Related Articles
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <div className="bg-[#f8f8f8] rounded-3xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">
                      <div className="overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                        </div>

                        <h3 className="text-xl font-bold text-[#dc2626] line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        {/* <section className="py-16 bg-[#dc2626]">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
              Need Expert Guidance?
            </h2>

            <p className="text-white/80 text-lg mb-8">
              Connect with our experts for industrial safety,
              compliance, and lighting solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-[#dc2626] px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition"
              >
                Contact Us
              </Link>

              <Link
                href="/services"
                className="border border-white/30 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </section> */}
      </div>

      <Footer />
    </>
  );
};

export default BlogDetailPage;