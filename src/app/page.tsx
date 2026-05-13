import { Navbar } from "@/components/shared/Navbar";
import { Hero } from "@/components/sections/Hero";
import { StrategicBrief } from "@/components/sections/StrategicBrief"; // Import the new component
import { ManagementDashboard } from "@/components/sections/ManagementDashboard";
import { Research } from "@/components/sections/Research";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <StrategicBrief /> {/* Much cleaner! */}
      <ManagementDashboard />
      <Research />
      <Contact />
    </main>
  );
}