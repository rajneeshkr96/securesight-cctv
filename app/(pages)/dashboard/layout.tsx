import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "./camponents/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative w-full" >
        <div style={{background:"rgba(208, 167, 4, 0.35)"}} className="absolute inset-0 -top-15 filter blur-3xl w-1/2 mx-auto h-[125px] rounded-full -z-40"></div>
        <Navbar/>
        {children}
    </main>
  );
}