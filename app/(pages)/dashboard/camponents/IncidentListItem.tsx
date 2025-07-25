"use client";

import { FC, useState } from "react";
import { Bold, Camera, Clock, DoorOpen } from "lucide-react";
import { Props } from "@/types/incident";
import { resolveIncident } from "../services/api/incidents";
import { toast } from "sonner";



const IncidentListItem: FC<Props> = ({ incident }) => {
  const [isResolved, setIsResolved] = useState(false);

  const handleResolve = async (id:number) => {
    setIsResolved(true);
    try {
        await resolveIncident(id)
        toast("Resolve successfully")
    } catch (error) {
        console.log(error)
    }
    
  };

  return (
    <div
      className={`flex items-start gap-3 p-3 rounded-lg bg-zinc-900 text-white transition-opacity duration-500 ${
        isResolved ? "opacity-0" : "opacity-100"
      }`}
    >
      <img
        src={incident.thumbnailUrl}
        alt="Incident"
        className="w-20 h-14 rounded object-cover"
      />

      <div className="flex-1 text-white">
        <div className="flex items-center gap-1 font-semibold text-sm mb-3">
          <DoorOpen size={16} fontWeight={"Bold"} color="#F97316"/>
          <span>Unauthorised Access</span>
        </div>

        <div className="flex items-center text-xs mt-1">
          <Camera className="w-3 h-3 mr-1" />
          Shop Floor Camera A
        </div>

        <div className="flex items-center text-xs mt-1">
          <Clock className="w-3 h-3 mr-1" />
          <span>
            {incident.startTime} – {incident.endTime} on{" "}
            <strong>14:35 - 14:37 on 7-Jul-2025</strong>
          </span>
        </div>
      </div>

      <button
        onClick={()=>handleResolve(incident.id)}
        className="text-yellow-400 text-sm font-semibold hover:underline my-auto"
      >
        Resolve →
      </button>
    </div>
  );
};

export default IncidentListItem;
