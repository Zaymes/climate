"use client";

import { UserGroupIcon, GlobeAltIcon, ChartBarIcon, AcademicCapIcon } from '@heroicons/react/24/outline';

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Dr. Climate Researcher",
      role: "Lead Climate Scientist",
      organization: "Nepal Climate Research Institute",
      expertise: "Climate Modeling, Data Analysis"
    },
    {
      name: "Dr. Data Analyst",
      role: "Data Science Lead",
      organization: "Open Knowledge Nepal",
      expertise: "Data Visualization, Machine Learning"
    },
    {
      name: "Dr. Environmental Scientist",
      role: "Environmental Impact Specialist",
      organization: "Ministry of Environment",
      expertise: "Environmental Assessment, Policy"
    },
    {
      name: "Dr. GIS Specialist",
      role: "Geospatial Analyst",
      organization: "Nepal GIS Society",
      expertise: "Geographic Information Systems, Mapping"
    }
  ];

  const dataSources = [
    {
      name: "Department of Hydrology and Meteorology",
      description: "Official weather and climate data from Nepal's meteorological department",
      url: "https://www.dhm.gov.np"
    },
    {
      name: "Ministry of Environment",
      description: "Environmental policies, reports, and climate action plans",
      url: "https://www.moenv.gov.np"
    },
    {
      name: "International Centre for Integrated Mountain Development",
      description: "Research data on mountain environments and climate change",
      url: "https://www.icimod.org"
    },
    {
      name: "World Bank Climate Data",
      description: "Global climate datasets and indicators for Nepal",
      url: "https://climateknowledgeportal.worldbank.org"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          About the Climate Knowledge Portal
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          A comprehensive platform dedicated to centralizing climate data, research, and insights 
          for Nepal, enabling informed decision-making and climate action.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Mission</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            To provide a centralized, accessible, and comprehensive platform that aggregates climate data, 
            research findings, and insights specific to Nepal. We aim to bridge the gap between scientific 
            research and practical application, enabling researchers, policymakers, educators, and citizens 
            to make informed decisions about climate change adaptation and mitigation.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-600">Centralize climate data from multiple sources</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-600">Promote data transparency and open access</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
              <span className="text-slate-600">Facilitate evidence-based climate action</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Our Vision</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            To become the leading climate knowledge hub for Nepal, where all stakeholders can access, 
            understand, and utilize climate information to build a more resilient and sustainable future. 
            We envision a Nepal where climate data drives policy, innovation, and community action.
          </p>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
              <span className="text-slate-600">Climate-resilient communities across Nepal</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
              <span className="text-slate-600">Data-driven climate policies and strategies</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
              <span className="text-slate-600">Informed public engagement in climate action</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Key Features */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ChartBarIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Data Visualization</h3>
            <p className="text-slate-600 text-sm">Interactive charts and graphs to understand climate trends</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <GlobeAltIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Interactive Maps</h3>
            <p className="text-slate-600 text-sm">Geospatial visualization of climate data across Nepal</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AcademicCapIcon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Research Insights</h3>
            <p className="text-slate-600 text-sm">Latest research findings and climate stories</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <UserGroupIcon className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-800 mb-2">Community</h3>
            <p className="text-slate-600 text-sm">Connect with researchers and climate stakeholders</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <UserGroupIcon className="w-10 h-10 text-slate-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">{member.name}</h3>
              <p className="text-blue-600 font-medium mb-2">{member.role}</p>
              <p className="text-sm text-slate-600 mb-3">{member.organization}</p>
              <p className="text-xs text-slate-500">{member.expertise}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Data Sources */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">Data Sources</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataSources.map((source, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">{source.name}</h3>
              <p className="text-slate-600 mb-4">{source.description}</p>
              <a 
                href={source.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Visit Source →
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Support */}
      <div className="bg-slate-50 rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">Get Involved</h2>
        <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
          We welcome contributions from researchers, data scientists, and climate enthusiasts. 
          Help us build a more comprehensive and useful climate knowledge portal for Nepal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Contribute Data
          </button>
          <button className="border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg hover:bg-slate-50 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
