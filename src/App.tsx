import React from 'react';
import { ChevronDown, Clock, Zap, TrendingUp, Star, Check, ExternalLink } from 'lucide-react';

function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const tools = [
    {
      name: "Jasper AI",
      subtitle: "For Writing Scripts & Blogs",
      description: "Write YouTube scripts, blogs, and captions in minutes",
      features: ["Trained on marketing best practices", "Easy for beginners", "Multiple content types"],
      price: "From $39/mo",
      trial: "Yes",
      ctaText: "Try Jasper AI",
      link: "#jasper-affiliate"
    },
    {
      name: "Descript",
      subtitle: "For Editing Videos & Podcasts", 
      description: "Edit videos by editing text",
      features: ["Auto-remove filler words & background noise", "Screen recording & captions included", "Revolutionary text-based editing"],
      price: "From $15/mo",
      trial: "Yes", 
      ctaText: "Get Descript",
      link: "#descript-affiliate"
    },
    {
      name: "Pictory",
      subtitle: "Turn Text into Videos",
      description: "Turn scripts into short-form videos automatically",
      features: ["Perfect for YouTube Shorts, TikTok, and Reels", "AI-powered scene selection", "Automatic voiceovers available"],
      price: "From $19/mo",
      trial: "Yes",
      ctaText: "Start with Pictory", 
      link: "#pictory-affiliate"
    },
    {
      name: "Canva Pro",
      subtitle: "Design Like a Pro",
      description: "AI-powered design suggestions",
      features: ["Social media templates for everything", "Brand kit management", "Magic resize for all platforms"],
      price: "From $12/mo",
      trial: "Yes",
      ctaText: "Get Canva Pro",
      link: "#canva-affiliate"
    },
    {
      name: "TubeBuddy", 
      subtitle: "Grow Your YouTube Channel",
      description: "Keyword research & video SEO tools",
      features: ["Increase views with AI-driven recommendations", "Thumbnail A/B testing", "Advanced analytics dashboard"],
      price: "From $9/mo",
      trial: "Yes",
      ctaText: "Try TubeBuddy",
      link: "#tubebuddy-affiliate"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Create Better Content in 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500"> Less Time</span> with These AI Tools
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
            We've curated the best AI tools that help YouTubers, bloggers, and social media creators save hours, create stunning visuals, and boost engagement.
          </p>
          <button 
            onClick={() => scrollToSection('tools')}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Get Started Now
            <ChevronDown className="ml-2 h-5 w-5 animate-bounce" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Why Content Creators Need AI in 2025
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">AI saves time on editing, writing, and designing</h3>
              <p className="text-gray-600">Automate repetitive tasks and focus on what you do best - creating amazing content.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Helps you stay consistent on all platforms</h3>
              <p className="text-gray-600">Maintain your brand voice and visual style across YouTube, Instagram, TikTok, and more.</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Increases creativity while reducing workload</h3>
              <p className="text-gray-600">Get inspired with AI suggestions and spend more time on strategy and storytelling.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section id="tools" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
            Featured AI Tools
          </h2>
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {tools.map((tool, index) => (
              <div key={tool.name} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group">
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                      <p className="text-lg text-blue-600 font-medium">{tool.subtitle}</p>
                    </div>
                    <div className="flex items-center text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg mb-6">{tool.description}</p>
                  <ul className="space-y-3 mb-8">
                    {tool.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-600">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-gray-900">{tool.price}</span>
                    <a 
                      href={tool.link}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {tool.ctaText}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Quick Comparison
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Tool</th>
                    <th className="px-6 py-4 text-left font-semibold">Best For</th>
                    <th className="px-6 py-4 text-left font-semibold">Price</th>
                    <th className="px-6 py-4 text-left font-semibold">Free Trial?</th>
                    <th className="px-6 py-4 text-center font-semibold">Get Started</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {tools.map((tool, index) => (
                    <tr key={tool.name} className="hover:bg-gray-50 transition-colors duration-200">
                      <td className="px-6 py-4 font-semibold text-gray-900">{tool.name}</td>
                      <td className="px-6 py-4 text-gray-700">{tool.subtitle.replace('For ', '')}</td>
                      <td className="px-6 py-4 text-gray-700">{tool.price}</td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                          <Check className="h-4 w-4 mr-1" />
                          {tool.trial}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <a 
                          href={tool.link}
                          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
                        >
                          Try Now
                          <ExternalLink className="ml-1 h-3 w-3" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Supercharge Your Content Creation?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Try these AI tools today and start creating professional content with ease!
          </p>
          <button 
            onClick={() => scrollToSection('tools')}
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg rounded-full hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
          >
            Get Started with the Best AI Tools
            <TrendingUp className="ml-3 h-6 w-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>&copy; 2025 AI Tools for Content Creators. All rights reserved.</p>
          <p className="mt-2 text-sm">Affiliate links help support our content creation at no extra cost to you.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;