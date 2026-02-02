import { Search, Bell, Upload, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface HeaderProps {
  onMenuClick: () => void;
  onUploadClick: () => void;
}

export const Header = ({ onMenuClick, onUploadClick }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center justify-between gap-4 border-b border-border bg-background px-4">
      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground hover:bg-secondary"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold text-primary">ERSO</span>
        </div>
      </div>

      <div className="flex max-w-xl flex-1 items-center justify-center">
        <div className="flex w-full max-w-md items-center">
          <Input
            placeholder="Search"
            className="rounded-l-full rounded-r-none border-r-0 bg-secondary focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button
            variant="secondary"
            className="rounded-l-none rounded-r-full border border-l-0 border-border px-6"
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground hover:bg-secondary"
          onClick={onUploadClick}
        >
          <Upload className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-foreground hover:bg-secondary"
        >
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8 cursor-pointer">
          <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
          <AvatarFallback className="bg-primary text-primary-foreground">
            U
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
