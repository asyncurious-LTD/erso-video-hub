import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categories = [
  "All",
  "Music",
  "Gaming",
  "Live",
  "News",
  "Sports",
  "Learning",
  "Fashion",
  "Podcasts",
  "Comedy",
  "Cooking",
  "Technology",
];

interface CategoryChipsProps {
  selected: string;
  onSelect: (category: string) => void;
}

export const CategoryChips = ({ selected, onSelect }: CategoryChipsProps) => {
  return (
    <ScrollArea className="w-full whitespace-nowrap">
      <div className="flex gap-3 pb-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant="secondary"
            size="sm"
            className={cn(
              "shrink-0 rounded-lg",
              selected === category
                ? "bg-foreground text-background hover:bg-foreground/90"
                : "bg-secondary text-foreground hover:bg-muted"
            )}
            onClick={() => onSelect(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" className="invisible" />
    </ScrollArea>
  );
};
