"use client";

import { useEffect, useState } from "react";
import { fetchClimateDatasets, ClimateDataset } from "@/data/openDataNepal";
import DatasetCard from "@/components/DatasetCard";
import { MagnifyingGlassIcon, FunnelIcon } from "@heroicons/react/24/outline";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

// Sample data for charts
const temperatureData = [
  { month: 'Jan', temp: 12.5, rainfall: 15 },
  { month: 'Feb', temp: 15.2, rainfall: 25 },
  { month: 'Mar', temp: 20.1, rainfall: 45 },
  { month: 'Apr', temp: 25.3, rainfall: 80 },
  { month: 'May', temp: 28.7, rainfall: 120 },
  { month: 'Jun', temp: 29.5, rainfall: 200 },
  { month: 'Jul', temp: 28.9, rainfall: 300 },
  { month: 'Aug', temp: 28.2, rainfall: 280 },
  { month: 'Sep', temp: 26.8, rainfall: 180 },
  { month: 'Oct', temp: 23.1, rainfall: 60 },
  { month: 'Nov', temp: 18.5, rainfall: 20 },
  { month: 'Dec', temp: 14.2, rainfall: 10 },
];

export default function ExplorePage() {
  const [datasets, setDatasets] = useState<ClimateDataset[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredDatasets, setFilteredDatasets] = useState<ClimateDataset[]>([]);

  useEffect(() => {
    fetchClimateDatasets().then((data) => {
      setDatasets(data);
      setFilteredDatasets(data);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    const filtered = datasets.filter(dataset =>
      dataset.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dataset.notes.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDatasets(filtered);
  }, [searchTerm, datasets]);

  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Explore Climate Datasets
        </h1>
        <p className="text-lg text-slate-600">
          Discover and analyze climate data from Nepal. Browse datasets, visualize trends, and download resources.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search datasets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors">
            <FunnelIcon className="w-5 h-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Temperature Trends</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temp" stroke="#3b82f6" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">Rainfall Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={temperatureData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="rainfall" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Datasets Grid */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-800">
            Available Datasets ({filteredDatasets.length})
          </h2>
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
        ) : filteredDatasets.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No datasets found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDatasets.map((dataset) => (
              <DatasetCard key={dataset.id} dataset={dataset} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
