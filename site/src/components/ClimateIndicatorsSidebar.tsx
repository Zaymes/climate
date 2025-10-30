import React, { useState } from "react";
import { TrendingUp, Droplets, Wind, AlertTriangle, ThermometerSun, Cloud } from "lucide-react";

export default function ClimateInsightsWidget() {
  const [selectedMetric, setSelectedMetric] = useState(0);

  const metrics = [
    {
      id: 0,
      name: "Temperature Rise",
      icon: ThermometerSun,
      color: "#ef4444",
      bgGradient: "from-red-50 to-orange-50",
      value: "+0.8°C",
      subtitle: "Since 1980s",
      data: [0.2, 0.3, 0.35, 0.45, 0.55, 0.68, 0.8],
      years: ["1980", "1990", "2000", "2010", "2015", "2020", "2024"],
      insight: "Nepal warming faster than global average",
      trend: "+0.04°C/decade"
    },
    {
      id: 1,
      name: "Extreme Events",
      icon: AlertTriangle,
      color: "#f59e0b",
      bgGradient: "from-amber-50 to-yellow-50",
      value: "42",
      subtitle: "Events in 2023",
      data: [12, 18, 24, 28, 35, 38, 42],
      years: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
      insight: "Floods & landslides increasing",
      trend: "+250% since 2017"
    },
    {
      id: 2,
      name: "Air Quality (PM2.5)",
      icon: Wind,
      color: "#8b5cf6",
      bgGradient: "from-purple-50 to-violet-50",
      value: "68 μg/m³",
      subtitle: "Kathmandu avg.",
      data: [45, 52, 58, 65, 72, 68, 63],
      years: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
      insight: "6.8x above WHO guidelines",
      trend: "Unhealthy levels"
    },
    {
      id: 3,
      name: "Monsoon Rainfall",
      icon: Droplets,
      color: "#3b82f6",
      bgGradient: "from-blue-50 to-cyan-50",
      value: "1820mm",
      subtitle: "Annual avg.",
      data: [1650, 1720, 1580, 1890, 1750, 1920, 1820],
      years: ["2017", "2018", "2019", "2020", "2021", "2022", "2023"],
      insight: "High year-to-year variability",
      trend: "±15% variation"
    },
    {
      id: 4,
      name: "RCP Projections",
      icon: TrendingUp,
      color: "#dc2626",
      bgGradient: "from-rose-50 to-red-50",
      value: "+1.4°C",
      subtitle: "By 2050 (RCP 4.5)",
      data: [0, 0.3, 0.6, 0.9, 1.2, 1.4, 1.8],
      years: ["2020", "2025", "2030", "2035", "2040", "2045", "2050"],
      insight: "RCP 8.5: +2.2°C by 2050",
      trend: "Action needed now"
    },
    {
      id: 5,
      name: "Glacier Retreat",
      icon: Cloud,
      color: "#06b6d4",
      bgGradient: "from-cyan-50 to-sky-50",
      value: "-23%",
      subtitle: "Ice mass lost",
      data: [100, 96, 91, 86, 82, 79, 77],
      years: ["1990", "2000", "2005", "2010", "2015", "2020", "2023"],
      insight: "Himalayas losing ice rapidly",
      trend: "-0.8%/year"
    }
  ];

  const selected = metrics[selectedMetric];
  const Icon = selected.icon;
  
  const maxVal = Math.max(...selected.data);
  const minVal = Math.min(...selected.data);
  const range = maxVal - minVal || 1;

  return (
    <aside className="flex flex-col gap-4 bg-white/50 backdrop-blur-xl rounded-3xl p-5 border border-white/60 shadow-lg">
      <div className="flex items-center justify-between mb-1">
        <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">Climate Insights</h3>
        <span className="text-xs text-gray-500 bg-white/60 px-2 py-1 rounded-full">Nepal</span>
      </div>

      {/* Metric Selector Pills */}
      <div className="grid grid-cols-3 gap-2">
        {metrics.map((metric) => {
          const MetricIcon = metric.icon;
          return (
            <button
              key={metric.id}
              onClick={() => setSelectedMetric(metric.id)}
              className={`flex flex-col items-center justify-center p-2.5 rounded-xl transition-all duration-300 ${
                selectedMetric === metric.id
                  ? `bg-gradient-to-br ${metric.bgGradient} border-2 shadow-md scale-105`
                  : "bg-white/40 border border-gray-200 hover:bg-white/60 hover:scale-102"
              }`}
              style={{ borderColor: selectedMetric === metric.id ? metric.color : undefined }}
            >
              <MetricIcon 
                size={20} 
                style={{ color: selectedMetric === metric.id ? metric.color : '#9ca3af' }}
                strokeWidth={2.5}
              />
              <span className={`text-[10px] mt-1 font-medium text-center leading-tight ${
                selectedMetric === metric.id ? 'text-gray-800' : 'text-gray-500'
              }`}>
                {metric.name.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Visualization Panel */}
      <div className={`bg-gradient-to-br ${selected.bgGradient} rounded-2xl p-4 border-2 transition-all duration-500`}
           style={{ borderColor: selected.color }}>
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="text-lg font-bold text-gray-800">{selected.name}</h4>
            <p className="text-xs text-gray-600">{selected.subtitle}</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold" style={{ color: selected.color }}>
              {selected.value}
            </div>
            <div className="text-xs text-gray-600 mt-0.5">{selected.trend}</div>
          </div>
        </div>

        {/* Line Chart */}
        <div className="relative h-28 mb-3">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Grid lines */}
            {[0, 25, 50, 75, 100].map((y) => (
              <line
                key={y}
                x1="0"
                y1={y}
                x2="100"
                y2={y}
                stroke="#e5e7eb"
                strokeWidth="0.3"
                opacity="0.5"
              />
            ))}
            
            {/* Area fill */}
            <path
              d={`M 0,100 ${selected.data.map((val, idx) => {
                const x = (idx / (selected.data.length - 1)) * 100;
                const y = 100 - ((val - minVal) / range) * 80;
                return `L ${x},${y}`;
              }).join(' ')} L 100,100 Z`}
              fill={selected.color}
              opacity="0.15"
            />
            
            {/* Line */}
            <polyline
              points={selected.data.map((val, idx) => {
                const x = (idx / (selected.data.length - 1)) * 100;
                const y = 100 - ((val - minVal) / range) * 80;
                return `${x},${y}`;
              }).join(' ')}
              stroke={selected.color}
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            
            {/* Points */}
            {selected.data.map((val, idx) => {
              const x = (idx / (selected.data.length - 1)) * 100;
              const y = 100 - ((val - minVal) / range) * 80;
              return (
                <circle
                  key={idx}
                  cx={x}
                  cy={y}
                  r="2"
                  fill={selected.color}
                  stroke="white"
                  strokeWidth="1.5"
                />
              );
            })}
          </svg>
          
          {/* Year labels */}
          <div className="flex justify-between text-[9px] text-gray-500 mt-1 px-1">
            <span>{selected.years[0]}</span>
            <span>{selected.years[Math.floor(selected.years.length / 2)]}</span>
            <span>{selected.years[selected.years.length - 1]}</span>
          </div>
        </div>

        {/* Insight Badge */}
        <div className="bg-white/70 rounded-lg px-3 py-2 flex items-center gap-2">
          <Icon size={14} style={{ color: selected.color }} />
          <p className="text-xs font-medium text-gray-700">{selected.insight}</p>
        </div>
      </div>

      <p className="text-[10px] text-gray-400 text-center uppercase tracking-wider">
        Live Climate Data • Updated 2024
      </p>
    </aside>
  );
}