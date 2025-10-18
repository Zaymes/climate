"use client";

import { useEffect, useState } from 'react';
import { MapPinIcon, CloudIcon, SunIcon } from '@heroicons/react/24/outline';

export default function MapPage() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Simulate map loading
    const timer = setTimeout(() => setMapLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Interactive Climate Map
        </h1>
        <p className="text-lg text-slate-600">
          Explore climate data across Nepal with interactive visualizations and location-based insights.
        </p>
      </div>

      {/* Map Controls */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Data Layer:</span>
            <select className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>Temperature</option>
              <option>Rainfall</option>
              <option>Humidity</option>
              <option>Wind Speed</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-700">Time Period:</span>
            <select className="px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
              <option>2020</option>
            </select>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Update Map
          </button>
        </div>
      </div>

      {/* Map Container */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
        <div className="h-96 bg-slate-100 flex items-center justify-center">
          {mapLoaded ? (
            <div className="text-center">
              <MapPinIcon className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 mb-2">Interactive Map</h3>
              <p className="text-slate-500">
                Map visualization would be implemented here using MapLibre or Leaflet
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> This is a placeholder. In a full implementation, 
                  you would integrate MapLibre GL JS or Leaflet for interactive mapping.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-slate-500">Loading map...</p>
            </div>
          )}
        </div>
      </div>

      {/* Climate Indicators */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <SunIcon className="w-8 h-8 text-yellow-500" />
            <h3 className="text-lg font-semibold text-slate-800">Temperature</h3>
          </div>
          <p className="text-3xl font-bold text-slate-800">24.5°C</p>
          <p className="text-sm text-slate-500">Average for Nepal</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <CloudIcon className="w-8 h-8 text-blue-500" />
            <h3 className="text-lg font-semibold text-slate-800">Rainfall</h3>
          </div>
          <p className="text-3xl font-bold text-slate-800">1,500mm</p>
          <p className="text-sm text-slate-500">Annual average</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <CloudIcon className="w-8 h-8 text-gray-500" />
            <h3 className="text-lg font-semibold text-slate-800">Humidity</h3>
          </div>
          <p className="text-3xl font-bold text-slate-800">65%</p>
          <p className="text-sm text-slate-500">Relative humidity</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-3">
            <MapPinIcon className="w-8 h-8 text-green-500" />
            <h3 className="text-lg font-semibold text-slate-800">Stations</h3>
          </div>
          <p className="text-3xl font-bold text-slate-800">47</p>
          <p className="text-sm text-slate-500">Weather stations</p>
        </div>
      </div>

      {/* Regional Data */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Regional Climate Data</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Region</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Temperature</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Rainfall</th>
                <th className="text-left py-3 px-4 font-semibold text-slate-700">Humidity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4 text-slate-700">Kathmandu Valley</td>
                <td className="py-3 px-4 text-slate-600">18.5°C</td>
                <td className="py-3 px-4 text-slate-600">1,400mm</td>
                <td className="py-3 px-4 text-slate-600">70%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4 text-slate-700">Terai Region</td>
                <td className="py-3 px-4 text-slate-600">28.2°C</td>
                <td className="py-3 px-4 text-slate-600">1,800mm</td>
                <td className="py-3 px-4 text-slate-600">75%</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-3 px-4 text-slate-700">Hill Region</td>
                <td className="py-3 px-4 text-slate-600">22.1°C</td>
                <td className="py-3 px-4 text-slate-600">1,600mm</td>
                <td className="py-3 px-4 text-slate-600">68%</td>
              </tr>
              <tr>
                <td className="py-3 px-4 text-slate-700">Mountain Region</td>
                <td className="py-3 px-4 text-slate-600">12.8°C</td>
                <td className="py-3 px-4 text-slate-600">800mm</td>
                <td className="py-3 px-4 text-slate-600">55%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
