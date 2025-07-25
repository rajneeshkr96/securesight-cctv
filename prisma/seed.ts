import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Step 1: Seed Camera Data
  const cameraData = [
    { name: "Entrance Cam A1", location: "Main Entrance - Building A" },
    { name: "Lobby Cam B3", location: "Lobby - Building B" },
    { name: "nono", location: "Parking Lot - North Section" },
    { name: "Hallway Cam D4", location: "Floor 2 - West Hallway" },
  ];

  const createdCameras = await Promise.all(
    cameraData.map((camera) => prisma.camera.create({ data: camera }))
  );

  console.log("✅ Cameras seeded");

  const incidentData = [
    {
      tsStart: "2025-07-23T08:00:00Z",
      tsEnd: "2025-07-23T08:10:00Z",
      thumbnailUrl: "https://images.unsplash.com/photo-1635677988821-123eb3c2be27?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      resolved: false,
      cameraId: createdCameras[0].id,
    },
    {
      tsStart: "2025-07-24T09:30:00Z",
      tsEnd: "2025-07-24T09:45:00Z",
      thumbnailUrl: "https://plus.unsplash.com/premium_photo-1681377835632-fe537691f5f3?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      resolved: true,
      cameraId: createdCameras[0].id, 
    },
    {
      tsStart: "2025-07-22T18:00:00Z",
      tsEnd: null,
      thumbnailUrl: "https://plus.unsplash.com/premium_photo-1698417311052-4b8c1d28b39a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      resolved: false,
      cameraId: createdCameras[1].id, 
    },
    {
      tsStart: "2025-07-25T12:00:00Z",
      tsEnd: "2025-07-25T12:05:00Z",
      thumbnailUrl: "https://images.unsplash.com/photo-1636071659269-b796a1b56b9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      resolved: true,
      cameraId: createdCameras[3].id, 
    },
        {
      tsStart: "2025-07-23T08:00:00Z",
      tsEnd: "2025-07-23T08:10:00Z",
      thumbnailUrl: "https://images.unsplash.com/photo-1635677988821-123eb3c2be27?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      resolved: false,
      cameraId: createdCameras[0].id,
    },
    {
      tsStart: "2025-07-24T09:30:00Z",
      tsEnd: "2025-07-24T09:45:00Z",
      thumbnailUrl: "https://plus.unsplash.com/premium_photo-1681377835632-fe537691f5f3?q=80&w=2086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      resolved: true,
      cameraId: createdCameras[0].id, 
    },
    {
      tsStart: "2025-07-22T18:00:00Z",
      tsEnd: null,
      thumbnailUrl: "https://plus.unsplash.com/premium_photo-1698417311052-4b8c1d28b39a?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      resolved: false,
      cameraId: createdCameras[1].id, 
    },
    {
      tsStart: "2025-07-25T12:00:00Z",
      tsEnd: "2025-07-25T12:05:00Z",
      thumbnailUrl: "https://images.unsplash.com/photo-1636071659269-b796a1b56b9d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      resolved: true,
      cameraId: createdCameras[3].id, 
    },
  ];

  await Promise.all(
    incidentData.map((incident) => prisma.incident.create({ data: incident }))
  );

  console.log("✅ Incidents seeded");
}

main()
  .catch((e) => {
    console.error("❌ Error while seeding", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
