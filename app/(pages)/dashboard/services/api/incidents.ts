"use server"
import api from "@/lib/axios";

export const resolveIncident = async (id: number) => {
  const response = await api.patch(`/incidents/${id}/resolve`);
  return response.data;
};

export const fetchIncidents = async () => {
  const response = await api.get("/incidents?resolved=false");
  return response.data;
};