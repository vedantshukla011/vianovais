import { useEffect, useState } from "react";
import { X, Mail, MessageCircle, ArrowRight } from "lucide-react";

const STORAGE_KEY = "automate_popup_dismissed_v1";

export const AutomatePopup = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => setOpen(true), 1500);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch {}
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl bg-background border border-border shadow-2xl overflow-hidden">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-colors z-10"
        >
          <X className="w-5 h-5 text-foreground/70" />
        </button>

        <div className="bg-gradient-to-br from-primary to-secondary p-6 text-primary-foreground">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider bg-white/15 backdrop-blur px-3 py-1 rounded-full mb-3">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            New · Automation Suite
          </div>
          <h3 className="text-2xl font-bold leading-tight">
            Automate Your Outreach
          </h3>
          <p className="text-sm mt-2 text-primary-foreground/90">
            Now send bulk emails and WhatsApp messages at scale — pay once, use forever.
          </p>
        </div>

        <div className="p-6 space-y-3">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border">
            <div className="w-10 h-10 rounded-lg bg-[hsl(142,71%,45%)]/10 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-[hsl(142,71%,45%)]" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">WA Blaster</div>
              <div className="text-xs text-muted-foreground">Bulk WhatsApp automation</div>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 border border-border">
            <div className="w-10 h-10 rounded-lg bg-[hsl(220,90%,60%)]/10 flex items-center justify-center">
              <Mail className="w-5 h-5 text-[hsl(220,90%,60%)]" />
            </div>
            <div className="flex-1">
              <div className="font-semibold text-sm">Mail Blaster</div>
              <div className="text-xs text-muted-foreground">SMTP bulk email sender</div>
            </div>
          </div>

          <a
            href="/automate/"
            onClick={close}
            className="mt-2 w-full inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-3 rounded-lg transition-colors shadow-lg"
          >
            Explore Blaster Suite
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={close}
            className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors py-1"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
};
