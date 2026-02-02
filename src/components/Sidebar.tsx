import { Home, Compass, PlaySquare, Clock, ThumbsUp, Film, Flame, Music, Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  isOpen: boolean;
  onMyVideosClick: () => void;
  activeSection: "home" | "my-videos";
}

const mainMenuItems = [
  { icon: Home, label: "Home", id: "home" as const },
  { icon: Compass, label: "Explore", id: "explore" as const },
  { icon: PlaySquare, label: "My Videos", id: "my-videos" as const },
];

const libraryItems = [
  { icon: Clock, label: "Watch Later" },
  { icon: ThumbsUp, label: "Liked Videos" },
];

const exploreItems = [
  { icon: Flame, label: "Trending" },
  { icon: Music, label: "Music" },
  { icon: Film, label: "Movies" },
  { icon: Gamepad2, label: "Gaming" },
];

export const Sidebar = ({ isOpen, onMyVideosClick, activeSection }: SidebarProps) => {
  const handleItemClick = (id: string) => {
    if (id === "my-videos") {
      onMyVideosClick();
    }
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-14 z-40 h-[calc(100vh-3.5rem)] bg-background transition-all duration-300",
        isOpen ? "w-60" : "w-0 -translate-x-full md:w-16 md:translate-x-0"
      )}
    >
      <ScrollArea className="h-full scrollbar-thin">
        <div className="p-2">
          {mainMenuItems.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className={cn(
                "w-full justify-start gap-4 text-muted-foreground hover:bg-secondary hover:text-foreground",
                activeSection === item.id && "bg-secondary text-foreground",
                !isOpen && "md:justify-center md:px-2"
              )}
              onClick={() => handleItemClick(item.id)}
            >
              <item.icon className="h-5 w-5 shrink-0" />
              {isOpen && <span>{item.label}</span>}
            </Button>
          ))}

          {isOpen && (
            <>
              <div className="my-3 border-t border-border" />
              <p className="mb-2 px-3 text-sm font-medium text-muted-foreground">
                Library
              </p>
              {libraryItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start gap-4 text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span>{item.label}</span>
                </Button>
              ))}

              <div className="my-3 border-t border-border" />
              <p className="mb-2 px-3 text-sm font-medium text-muted-foreground">
                Explore
              </p>
              {exploreItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  className="w-full justify-start gap-4 text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  <span>{item.label}</span>
                </Button>
              ))}
            </>
          )}
        </div>
      </ScrollArea>
    </aside>
  );
};
