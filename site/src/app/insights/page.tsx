"use client";

import { BookOpenIcon, DocumentTextIcon, AcademicCapIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function InsightsPage() {
  const insights = [
    {
      id: 1,
      title: "Climate Change Impact on Agriculture in Nepal",
      excerpt: "A comprehensive analysis of how changing weather patterns affect crop yields and farming practices across different regions of Nepal.",
      category: "Research",
      date: "2024-01-15",
      readTime: "8 min read",
      icon: AcademicCapIcon,
    },
    {
      id: 2,
      title: "Himalayan Glaciers: Melting Trends and Future Projections",
      excerpt: "Latest research on glacier retreat in the Himalayas and its implications for water resources and downstream communities.",
      category: "Environment",
      date: "2024-01-10",
      readTime: "12 min read",
      icon: ChartBarIcon,
    },
    {
      id: 3,
      title: "Urban Heat Islands in Kathmandu Valley",
      excerpt: "Study of temperature variations in urban areas compared to surrounding rural regions and potential mitigation strategies.",
      category: "Urban Planning",
      date: "2024-01-05",
      readTime: "6 min read",
      icon: DocumentTextIcon,
    },
    {
      id: 4,
      title: "Monsoon Patterns and Flood Risk Assessment",
      excerpt: "Analysis of changing monsoon patterns and their impact on flood frequency and intensity in Nepal's river basins.",
      category: "Disaster Risk",
      date: "2023-12-28",
      readTime: "10 min read",
      icon: BookOpenIcon,
    },
    {
      id: 5,
      title: "Renewable Energy Potential in Nepal",
      excerpt: "Assessment of solar, wind, and hydroelectric potential in Nepal and its role in climate change mitigation.",
      category: "Energy",
      date: "2023-12-20",
      readTime: "15 min read",
      icon: ChartBarIcon,
    },
    {
      id: 6,
      title: "Biodiversity Conservation in Climate Change Context",
      excerpt: "Impact of climate change on Nepal's unique biodiversity and conservation strategies for vulnerable species.",
      category: "Biodiversity",
      date: "2023-12-15",
      readTime: "9 min read",
      icon: AcademicCapIcon,
    },
  ];

  const categories = ["All", "Research", "Environment", "Urban Planning", "Disaster Risk", "Energy", "Biodiversity"];

  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Climate Insights & Stories
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl">
          Discover research findings, climate stories, and educational resources that help understand 
          climate change impacts and solutions in Nepal.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              category === "All"
                ? "bg-blue-600 text-white"
                : "bg-white text-slate-600 border border-slate-300 hover:bg-slate-50"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Featured Article */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-12 text-white">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">Featured</span>
            <span className="text-blue-100">Research</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Climate Change and Water Security in Nepal
          </h2>
          <p className="text-blue-100 text-lg mb-6">
            A comprehensive study examining the impact of climate change on water resources, 
            glacier dynamics, and water security across Nepal&apos;s diverse geographical regions.
          </p>
          <div className="flex items-center gap-4 text-sm text-blue-100">
            <span>Published: January 20, 2024</span>
            <span>•</span>
            <span>15 min read</span>
            <span>•</span>
            <span>By: Dr. Climate Researcher</span>
          </div>
        </div>
      </div>

      {/* Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {insights.map((insight) => {
          const IconComponent = insight.icon;
          return (
            <article key={insight.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <IconComponent className="w-6 h-6 text-blue-600" />
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {insight.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3 line-clamp-2">
                  {insight.title}
                </h3>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>{insight.date}</span>
                  <span>{insight.readTime}</span>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="w-full bg-slate-800 text-white py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors">
                  Read More
                </button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Resources Section */}
      <div className="bg-slate-50 rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">Additional Resources</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Climate Data Portal</h4>
            <p className="text-slate-600 mb-4">Access raw climate data and datasets for research and analysis.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Explore Data →</button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Research Publications</h4>
            <p className="text-slate-600 mb-4">Browse academic papers and research reports on climate change in Nepal.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">View Publications →</button>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h4 className="text-lg font-semibold text-slate-800 mb-3">Educational Materials</h4>
            <p className="text-slate-600 mb-4">Learn about climate change through interactive tutorials and guides.</p>
            <button className="text-blue-600 hover:text-blue-700 font-medium">Start Learning →</button>
          </div>
        </div>
      </div>
    </div>
  );
}
