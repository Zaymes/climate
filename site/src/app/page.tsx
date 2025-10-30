"use client";

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { fetchClimateDatasets, ClimateDataset } from '@/data/openDataNepal'
import DatasetCard from '@/components/DatasetCard'
import { ArrowRightIcon, ChartBarIcon, MapIcon, BookOpenIcon } from '@heroicons/react/24/outline'
import ClimateIndicatorsSidebar from '@/components/ClimateIndicatorsSidebar'

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
      {/* Hero Section - Interactive */}
      <InteractiveHero />

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

function InteractiveHero() {
  const quotes = [
    { text: 'The climate crisis is a crisis of solidarity—of listening and acting together.', author: 'UN Secretary-General' },
    { text: 'We don’t have to choose between a healthy economy and a healthy planet.', author: 'Unknown' },
    { text: 'What we do in the next few years will determine the next few thousand.', author: 'David Attenborough' },
  ]

  const [quoteIndex, setQuoteIndex] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const id = setInterval(() => setQuoteIndex((i) => (i + 1) % quotes.length), 5000)
    return () => clearInterval(id)
  }, [quotes.length])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
      <div className="space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-medium">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
          Live climate data hub
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold text-slate-800 drop-shadow-2xl">
          Climate Knowledge Portal
        </h1>
        <p className="text-lg text-slate-600 leading-relaxed">
          Nepal ranks high in climate risk due to diverse topography and social vulnerability. This portal centralizes data, insights, and tools to understand change and act.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/explore">
            <button className="bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
              Explore Datasets
              <ArrowRightIcon className="w-5 h-5" />
            </button>
          </Link>
          <Link href="/map">
            <button className="border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center gap-2">
              <MapIcon className="w-5 h-5" />
              Interactive Map
            </button>
          </Link>
          <Link href="/insights">
            <button className="border-2 border-slate-300 text-slate-700 hover:border-slate-800 hover:text-slate-900 font-medium py-3 px-6 rounded-lg transition-colors">
              Read Insights
            </button>
          </Link>
        </div>
        <div className="relative p-4 rounded-xl bg-white/70 backdrop-blur-md border border-slate-200 shadow-md hero-glass">
          <p className="text-slate-700 italic transition-opacity duration-500 ease-in-out">
            “{quotes[quoteIndex].text}”
          </p>
          <p className="text-slate-500 text-sm mt-2">— {quotes[quoteIndex].author}</p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Stat label="Datasets" value="120+" />
          <Stat label="Districts" value="77" />
          <Stat label="Years of data" value="> 30" />
        </div>
      </div>
      <div className="relative">
        {/* <IndicatorsViz /> */}
        <ClimateIndicatorsSidebar />
      </div>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
      <div className="text-2xl font-bold text-slate-800">{value}</div>
      <div className="text-slate-500 text-sm">{label}</div>
    </div>
  )
}

function FloatingChip({ label, color, x, y, delay }: { label: string; color: string; x: number; y: number; delay: string }) {
  return (
    <div
      className={`absolute px-3 py-1 rounded-full text-xs font-medium border shadow-sm floaty ${color}`}
      style={{ transform: `translate(${x}px, ${y}px)`, animationDelay: delay }}
    >
      {label}
    </div>
  )
}

function IndicatorsViz() {
  type Point = { x: number; y: number }
  const [t, setT] = useState(0)
  const [series, setSeries] = useState<{ [k: string]: Point[] }>({
    temp: [],
    co2: [],
    rain: [],
    glacier: [],
  })

  useEffect(() => {
    const id = setInterval(() => setT((v) => v + 1), 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const nextPoint = (i: number, base: number, amp: number, drift: number) => base + Math.sin((t + i) / 6) * amp + (t / 200) * drift
    const build = (len: number, base: number, amp: number, drift: number) =>
      Array.from({ length: len }).map((_, i) => ({ x: i, y: nextPoint(i, base, amp, drift) }))
    setSeries({
      temp: build(40, 0.6, 0.25, 0.4), // 0..1 scale
      co2: build(40, 0.7, 0.18, 0.6),
      rain: build(40, 0.5, 0.3, -0.2),
      glacier: build(40, 0.8, 0.12, -0.7),
    })
  }, [t])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <IndicatorCard
        title="Global Temp Anomaly"
        value={`+${(series.temp.at(-1)?.y ?? 0).toFixed(2)}°C`}
        color="text-amber-600"
      >
        <Gauge percent={series.temp.at(-1)?.y ?? 0} hue={35} />
        <Sparkline points={series.temp} stroke="#f59e0b" />
      </IndicatorCard>
      <IndicatorCard
        title="CO₂ Concentration"
        value={`${(410 + ((series.co2.at(-1)?.y ?? 0) * 80)).toFixed(0)} ppm`}
        color="text-rose-600"
      >
        <Gauge percent={series.co2.at(-1)?.y ?? 0} hue={350} />
        <Sparkline points={series.co2} stroke="#e11d48" />
      </IndicatorCard>
      <IndicatorCard
        title="Rainfall Variability"
        value={`${(((series.rain.at(-1)?.y ?? 0) - 0.5) * 40).toFixed(1)}%`}
        color="text-blue-600"
      >
        <Gauge percent={series.rain.at(-1)?.y ?? 0} hue={205} />
        <Sparkline points={series.rain} stroke="#3b82f6" />
      </IndicatorCard>
      <IndicatorCard
        title="Glacier Mass Balance"
        value={`${(-((series.glacier.at(-1)?.y ?? 0) - 0.5) * 20).toFixed(1)} m w.e.`}
        color="text-emerald-600"
      >
        <Gauge percent={1 - (series.glacier.at(-1)?.y ?? 0)} hue={160} />
        <Sparkline points={series.glacier} stroke="#10b981" />
      </IndicatorCard>
    </div>
  )
}

function IndicatorCard({ title, value, color, children }: { title: string; value: string; color: string; children: React.ReactNode }) {
  return (
    <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-baseline justify-between mb-3">
        <h4 className="text-slate-700 font-semibold">{title}</h4>
        <div className={`text-lg font-bold ${color}`}>{value}</div>
      </div>
      <div className="flex items-center gap-4">
        {children}
      </div>
    </div>
  )
}

function Gauge({ percent, hue }: { percent: number; hue: number }) {
  const p = Math.max(0, Math.min(1, percent))
  const r = 26
  const circ = 2 * Math.PI * r
  const dash = Math.max(0.0001, p * circ)
  const gap = circ - dash
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" className="shrink-0">
      <circle cx="36" cy="36" r={r} fill="none" stroke="#e5e7eb" strokeWidth="8" />
      <circle
        cx="36"
        cy="36"
        r={r}
        fill="none"
        stroke={`hsl(${hue} 90% 50%)`}
        strokeWidth="8"
        strokeDasharray={`${dash} ${gap}`}
        strokeLinecap="round"
        transform="rotate(-90 36 36)"
      />
    </svg>
  )
}

function Sparkline({ points, stroke }: { points: { x: number; y: number }[]; stroke: string }) {
  const width = 160
  const height = 60
  const maxX = Math.max(1, points.length - 1)
  const path = points
    .map((p, i) => {
      const x = (i / maxX) * width
      const y = height - p.y * height
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`
    })
    .join(' ')
  const last = points.at(-1)
  const lastX = ((points.length - 1) / maxX) * width
  const lastY = last ? height - last.y * height : height / 2
  return (
    <svg width={width} height={height} className="flex-1">
      <defs>
        <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity="0.6" />
          <stop offset="100%" stopColor={stroke} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path d={`${path}`} fill="none" stroke={stroke} strokeWidth="2" />
      <path d={`${path} L ${width},${height} L 0,${height} Z`} fill="url(#grad)" opacity="0.3" />
      <circle cx={lastX} cy={lastY} r="3.5" fill={stroke} />
    </svg>
  )
}
