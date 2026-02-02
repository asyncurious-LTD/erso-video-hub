import { Video } from "@/types/video";
import { VideoCard } from "./VideoCard";

interface VideoGridProps {
  videos: Video[];
  showActions?: boolean;
  onEdit?: (video: Video) => void;
  onDelete?: (video: Video) => void;
}

export const VideoGrid = ({
  videos,
  showActions,
  onEdit,
  onDelete,
}: VideoGridProps) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {videos.map((video) => (
        <VideoCard
          key={video.id}
          video={video}
          showActions={showActions}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};
