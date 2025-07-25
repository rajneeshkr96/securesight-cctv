export const dynamic = 'force-dynamic';

import React from 'react';
import IncidentPlayer from './camponents/IncidentPlayer';
import IncidentList from './camponents/IncidentList';
import { fetchIncidents } from './services/api/incidents';

const Page = async () => {
  let incidents = null;

  try {
    incidents = await fetchIncidents();
  } catch (error) {
    
    console.error("Dashboard data fetch failed:", error);
  }

  if (!incidents) {
    return (
      <div className="flex items-center justify-center h-screen text-red-500">
        Failed to load incidents. Please try again later.
      </div>
    );
  }

  return (
    <div className="flex justify-between px-6 flex-wrap">
      <IncidentPlayer />
      <IncidentList incidents={incidents} />
    </div>
  );
};

export default Page;
