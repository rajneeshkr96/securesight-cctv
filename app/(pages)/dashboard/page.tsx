import React from 'react';
import IncidentPlayer from './camponents/IncidentPlayer';
import IncidentList from './camponents/IncidentList';
import { fetchIncidents } from './services/api/incidents';

const Page = async () => {
  const incidents = await fetchIncidents();
  return (
    <div className="flex justify-between px-6 flex-wrap">
      <IncidentPlayer />
      <IncidentList incidents={incidents} />
    </div>
  );
};

export default Page;