import { useState } from "react";
import { Video } from "@/types/video";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface VideoFormProps {
  video: Video | null;
  onSave: (data: { title: string; thumbnail: string }) => void;
  onCancel: () => void;
}

export const VideoForm = ({ video, onSave, onCancel }: VideoFormProps) => {
  const [title, setTitle] = useState(video?.title || "");
  const [thumbnail, setThumbnail] = useState(video?.thumbnail || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ title, thumbnail });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter video title"
          className="bg-secondary"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="thumbnail">Thumbnail URL</Label>
        <Input
          id="thumbnail"
          value={thumbnail}
          onChange={(e) => setThumbnail(e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="bg-secondary"
        />
      </div>
      {thumbnail && (
        <div className="aspect-video overflow-hidden rounded-lg bg-muted">
          <img
            src={thumbnail}
            alt="Thumbnail preview"
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex justify-end gap-3 pt-4">
        <Button
          type="button"
          variant="secondary"
          onClick={onCancel}
        >
          Cancel
        </Button>
        <Button type="submit" className="bg-primary hover:bg-primary/90">
          {video ? "Save Changes" : "Create Video"}
        </Button>
      </div>
    </form>
  );
};
