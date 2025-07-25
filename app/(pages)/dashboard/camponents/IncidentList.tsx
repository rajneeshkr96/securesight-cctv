
import { IconAlertTriangle } from '@tabler/icons-react';
import { CheckCheck, DoorOpen, Plus, UserSearch } from 'lucide-react';
import React, { FC } from 'react';
import IncidentListItem from './IncidentListItem';
import { Incident } from '@/types/incident';

interface Props {
  incidents: Incident[];
}

const StackedIconButtons = () => (
  <div className="flex items-center gap-0 px-6 py-4 bg-black">
    <button className="z-10 -mr-3 w-10 h-10 rounded-full bg-orange-950 text-orange-500 flex items-center justify-center border-2 border-black">
      <DoorOpen className="w-5 h-5" />
    </button>
    <button className="z-20 -mr-3 w-10 h-10 rounded-full bg-red-950 text-red-500 flex items-center justify-center border-2 border-black">
      <Plus className="w-5 h-5" />
    </button>
    <button className="z-30 w-10 h-10 rounded-full bg-blue-950 text-blue-400 flex items-center justify-center border-2 border-black">
      <UserSearch className="w-5 h-5" />
    </button>
  </div>
);

const IncidentList: FC<Props> = ({ incidents }) => {
  return (
    <div className="w-2/5">
      <div className="flex justify-between">
        <div className="flex gap-x-2 items-center">
          <div className="p-2 rounded-full w-8 h-8 bg-[#7F1D1D] border-2 border-[#450A0A] flex justify-center items-center">
            <IconAlertTriangle size={14} color="#F87171" />
          </div>
          <h4 className="text-xl font-medium">
            {incidents.length} Unresolved Incidents
          </h4>
        </div>
        <div className="flex items-center">
          <StackedIconButtons />
          <div className="flex -ml-3 justify-between items-center px-2 rounded-full border-[0.30px] border-white">
            <CheckCheck size={14} color="#22C55E" />
            <span className="ml-1">4 resolved incidents</span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        {incidents.map((incident) => (
          <IncidentListItem key={incident.id} incident={incident} />
        ))}
      </div>
    </div>
  );
};

export default IncidentList;
