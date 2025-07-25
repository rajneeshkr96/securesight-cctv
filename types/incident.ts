export interface Incident {
  id: number;
  startTime: string;
  endTime: string;
  thumbnailUrl: string;
}

export interface Props {
  incident: Incident;
  
}