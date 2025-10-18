// src/data/openDataNepal.ts
export interface DatasetResource {
    id: string;
    name: string;
    format: string;
    url: string;
    last_modified?: string;
  }
  
  export interface ClimateDataset {
    id: string;
    title: string;
    notes: string;
    organization?: string;
    resources: DatasetResource[];
    metadata_created?: string;
  }
  
  const API_URL =
    "https://admin.opendatanepal.com/api/3/action/package_search?fq=climate";
  
  /**
   * Fetches climate datasets from Open Data Nepal API.
   * @returns Promise<ClimateDataset[]>
   */
  export async function fetchClimateDatasets(): Promise<ClimateDataset[]> {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
  
      if (!data.success || !data.result) {
        throw new Error("Invalid API response");
      }
  
      const datasets: ClimateDataset[] = data.result.results.map((d: any) => ({
        id: d.id,
        title: d.title,
        notes: d.notes,
        organization: d.organization?.title || "Open Data Nepal",
        resources: d.resources?.map((r: any) => ({
          id: r.id,
          name: r.name || r.url.split("/").pop(),
          format: r.format || "N/A",
          url: r.url,
          last_modified: r.last_modified,
        })),
        metadata_created: d.metadata_created,
      }));
  
      return datasets;
    } catch (error) {
      console.error("Error fetching datasets:", error);
      return [];
    }
  }
  