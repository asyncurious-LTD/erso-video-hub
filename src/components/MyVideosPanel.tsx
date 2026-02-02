import { useState } from "react";
import { Video } from "@/types/video";
import { myVideos as initialMyVideos } from "@/data/mockVideos";
import { VideoGrid } from "./VideoGrid";
import { VideoForm } from "./VideoForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface MyVideosPanelProps {
  onBack: () => void;
}

export const MyVideosPanel = ({ onBack }: MyVideosPanelProps) => {
  const [videos, setVideos] = useState<Video[]>(initialMyVideos);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [deletingVideo, setDeletingVideo] = useState<Video | null>(null);

  const handleCreate = () => {
    setEditingVideo(null);
    setIsFormOpen(true);
  };

  const handleEdit = (video: Video) => {
    setEditingVideo(video);
    setIsFormOpen(true);
  };

  const handleDelete = (video: Video) => {
    setDeletingVideo(video);
  };

  const confirmDelete = () => {
    if (deletingVideo) {
      setVideos(videos.filter((v) => v.id !== deletingVideo.id));
      setDeletingVideo(null);
    }
  };

  const handleSave = (data: { title: string; thumbnail: string }) => {
    if (editingVideo) {
      setVideos(
        videos.map((v) =>
          v.id === editingVideo.id ? { ...v, ...data } : v
        )
      );
    } else {
      const newVideo: Video = {
        id: `my-${Date.now()}`,
        title: data.title,
        thumbnail: data.thumbnail || "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=640&h=360&fit=crop",
        channel: "ERSO User",
        views: "0 views",
        uploadedAt: "Just now",
        duration: "0:00",
        isOwn: true,
      };
      setVideos([newVideo, ...videos]);
    }
    setIsFormOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={onBack}
            className="text-foreground hover:bg-secondary"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-2xl font-bold text-foreground">My Videos</h1>
        </div>
        <Button onClick={handleCreate} className="gap-2 bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4" />
          Create New
        </Button>
      </div>

      {videos.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <p className="text-lg text-muted-foreground">
            You haven't uploaded any videos yet
          </p>
          <Button onClick={handleCreate} className="mt-4 gap-2 bg-primary hover:bg-primary/90">
            <Plus className="h-4 w-4" />
            Upload your first video
          </Button>
        </div>
      ) : (
        <VideoGrid
          videos={videos}
          showActions
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="bg-card">
          <DialogHeader>
            <DialogTitle>
              {editingVideo ? "Edit Video" : "Create New Video"}
            </DialogTitle>
          </DialogHeader>
          <VideoForm
            video={editingVideo}
            onSave={handleSave}
            onCancel={() => setIsFormOpen(false)}
          />
        </DialogContent>
      </Dialog>

      <AlertDialog open={!!deletingVideo} onOpenChange={() => setDeletingVideo(null)}>
        <AlertDialogContent className="bg-card">
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Video</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete "{deletingVideo?.title}"? This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-secondary hover:bg-muted">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={confirmDelete}
              className="bg-destructive hover:bg-destructive/90"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};
