import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import holiBanner from "@/assets/festival-greeting-holi.png";

export const FestivalGreetingPopup = () => {
  const [open, setOpen] = useState(true);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] p-0 border-none bg-transparent shadow-none [&>button]:hidden">
        <div className="relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute -top-3 -right-3 z-10 bg-foreground text-background rounded-full p-1.5 shadow-lg hover:opacity-80 transition-opacity"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={holiBanner}
            alt="Happy Holi from ViaNova Industrial Solutions"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
