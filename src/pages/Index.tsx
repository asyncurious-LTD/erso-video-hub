import { useState } from "react";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { VideoGrid } from "@/components/VideoGrid";
import { CategoryChips } from "@/components/CategoryChips";
import { MyVideosPanel } from "@/components/MyVideosPanel";
import { mockVideos } from "@/data/mockVideos";
import { cn } from "@/lib/utils";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<"home" | "my-videos">("home");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleMyVideosClick = () => {
    setActiveSection("my-videos");
  };

  const handleBackToHome = () => {
    setActiveSection("home");
  };

  const handleUploadClick = () => {
    setActiveSection("my-videos");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onMenuClick={() => setSidebarOpen(!sidebarOpen)} 
        onUploadClick={handleUploadClick}
      />
      <Sidebar
        isOpen={sidebarOpen}
        onMyVideosClick={handleMyVideosClick}
        activeSection={activeSection}
      />
      <main
        className={cn(
          "min-h-[calc(100vh-3.5rem)] p-6 transition-all duration-300",
          sidebarOpen ? "md:ml-60" : "md:ml-16"
        )}
      >
        {activeSection === "home" ? (
          <>
            <CategoryChips
              selected={selectedCategory}
              onSelect={setSelectedCategory}
            />
            <VideoGrid videos={mockVideos} />
          </>
        ) : (
          <MyVideosPanel onBack={handleBackToHome} />
        )}
      </main>
    </div>
  );
};

export default Index;
