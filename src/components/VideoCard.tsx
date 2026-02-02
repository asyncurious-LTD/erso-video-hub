import { Video } from "@/types/video";
import { MoreVertical, Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface VideoCardProps {
  video: Video;
  showActions?: boolean;
  onEdit?: (video: Video) => void;
  onDelete?: (video: Video) => void;
}

export const VideoCard = ({
  video,
  showActions,
  onEdit,
  onDelete,
}: VideoCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-xl bg-muted">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <span className="absolute bottom-2 right-2 rounded bg-black/80 px-1.5 py-0.5 text-xs font-medium text-white">
          {video.duration}
        </span>
      </div>
      <div className="mt-3 flex gap-3">
        <div className="flex-1">
          <h3 className="line-clamp-2 text-sm font-medium text-foreground group-hover:text-primary">
            {video.title}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">{video.channel}</p>
          <p className="text-xs text-muted-foreground">
            {video.views} • {video.uploadedAt}
          </p>
        </div>
        {showActions && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 shrink-0 opacity-0 group-hover:opacity-100"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-card">
              <DropdownMenuItem
                onClick={() => onEdit?.(video)}
                className="gap-2"
              >
                <Pencil className="h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDelete?.(video)}
                className="gap-2 text-destructive focus:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};
