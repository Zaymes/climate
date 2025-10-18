"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fetchClimateDatasets, ClimateDataset } from '@/data/openDataNepal'
import DatasetCard from '@/components/DatasetCard'
import { ArrowRightIcon, ChartBarIcon, MapIcon, BookOpenIcon } from '@heroicons/react/24/outline'

export default function HomePage() {
  const [featuredDatasets, setFeaturedDatasets] = useState<ClimateDataset[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchClimateDatasets().then((data) => {
      setFeaturedDatasets(data.slice(0, 6)) // Show first 6 datasets
      setLoading(false)
    })
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-8 mt-8 mb-32 text-slate-800">
      {/* Hero Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 drop-shadow-2xl">
            Climate Knowledge Portal
          </h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            Nepal ranks high in various climate change risk index due to its varied topography and social vulnerability. 
            There is a lack of a centralized knowledge portal that tracks climate change, its impact, and future scenarios for Nepal.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Through the Climate Knowledge Portal, we aim to centralize the datasets, resources, insights, stakeholders, and more related to climate change in Nepal.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/explore">
              <button className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                Explore Datasets
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </Link>
            <Link href="/map">
              <button className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
                <MapIcon className="w-5 h-5" />
                View Map
              </button>
            </Link>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <Image 
              src="/oneworld.jpg" 
              alt="Earth from space" 
              width={500} 
              height={500}
              className="earth-image"
              priority
            />
          </div>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <Link href="/explore" className="group">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group-hover:border-slate-300">
            <ChartBarIcon className="w-12 h-12 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Explore Data</h3>
            <p className="text-slate-600">Interactive visualization of climate datasets including rainfall, temperature, and environmental data.</p>
          </div>
        </Link>
        <Link href="/map" className="group">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group-hover:border-slate-300">
            <MapIcon className="w-12 h-12 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Interactive Map</h3>
            <p className="text-slate-600">Geospatial visualization of climate data using interactive maps and location-based insights.</p>
          </div>
        </Link>
        <Link href="/insights" className="group">
          <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200 group-hover:border-slate-300">
            <BookOpenIcon className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-800 mb-2">Insights & Stories</h3>
            <p className="text-slate-600">Climate stories, research insights, and educational resources about climate change in Nepal.</p>
          </div>
        </Link>
      </div>

      {/* Featured Datasets */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Featured Climate Datasets</h2>
          <Link href="/explore">
            <button className="text-slate-600 hover:text-slate-800 font-medium flex items-center gap-2">
              View All Datasets
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </Link>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-lg animate-pulse">
                <div className="h-4 bg-slate-200 rounded mb-4"></div>
                <div className="h-3 bg-slate-200 rounded mb-2"></div>
                <div className="h-3 bg-slate-200 rounded mb-2"></div>
                <div className="h-3 bg-slate-200 rounded w-2/3"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDatasets.map((dataset) => (
              <DatasetCard key={dataset.id} dataset={dataset} />
            ))}
          </div>
        )}
      </div>

      {/* About Section */}
      <div className="bg-slate-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-slate-800 mb-6">About This Portal</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To provide a centralized platform for climate data, research, and insights specific to Nepal, 
              enabling researchers, policymakers, and citizens to make informed decisions about climate change adaptation and mitigation.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-slate-800 mb-4">Data Sources</h3>
            <p className="text-slate-600 leading-relaxed">
              We aggregate data from various sources including government agencies, research institutions, 
              and international organizations, with a focus on open data and transparency.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
