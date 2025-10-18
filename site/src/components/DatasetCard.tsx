import React from "react";
import { ClimateDataset } from "@/data/openDataNepal";
import { DocumentArrowDownIcon, CalendarIcon, BuildingOfficeIcon } from "@heroicons/react/24/outline";

export default function DatasetCard({ dataset }: { dataset: ClimateDataset }) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getFormatColor = (format: string) => {
    const formatLower = format.toLowerCase();
    if (formatLower.includes('csv')) return 'bg-green-100 text-green-800';
    if (formatLower.includes('json')) return 'bg-blue-100 text-blue-800';
    if (formatLower.includes('xlsx') || formatLower.includes('excel')) return 'bg-purple-100 text-purple-800';
    if (formatLower.includes('pdf')) return 'bg-red-100 text-red-800';
    if (formatLower.includes('zip')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-slate-100 text-slate-800';
  };

  return (
    <div className="dataset-card bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-semibold mb-3 text-slate-800 line-clamp-2">
          {dataset.title}
        </h3>
        
        <p className="text-sm text-slate-600 line-clamp-3 mb-4">
          {dataset.notes || "No description provided."}
        </p>

        {/* Resources */}
        {dataset.resources && dataset.resources.length > 0 && (
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              {dataset.resources.slice(0, 3).map((resource) => (
                <a
                  key={resource.id}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full font-medium hover:opacity-80 transition-opacity ${getFormatColor(resource.format)}`}
                >
                  <DocumentArrowDownIcon className="w-3 h-3" />
                  {resource.format || "Data"}
                </a>
              ))}
              {dataset.resources.length > 3 && (
                <span className="text-xs text-slate-500 px-2 py-1">
                  +{dataset.resources.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}

        {/* Metadata */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-4">
            {dataset.organization && (
              <div className="flex items-center gap-1">
                <BuildingOfficeIcon className="w-3 h-3" />
                <span className="truncate max-w-24">{dataset.organization}</span>
              </div>
            )}
            {dataset.metadata_created && (
              <div className="flex items-center gap-1">
                <CalendarIcon className="w-3 h-3" />
                <span>{formatDate(dataset.metadata_created)}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="px-6 pb-6">
        <button className="w-full bg-slate-800 text-white py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium">
          View Dataset
        </button>
      </div>
    </div>
  );
}
