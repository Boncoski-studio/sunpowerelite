import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { scrollToSection } from "@/lib/utils";

const ChatSupportBubble = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  const handleClick = () => {
    scrollToSection("contact");
  };

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip */}
      {isTooltipVisible && (
        <div className="bg-card rounded-lg shadow-xl border border-border p-4 max-w-[200px] animate-fade-in">
          <button
            onClick={() => setIsDismissed(true)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-muted rounded-full flex items-center justify-center hover:bg-muted-foreground/20 transition-colors"
            aria-label="Dismiss"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-sm text-foreground font-medium mb-1">
            Need help?
          </p>
          <p className="text-xs text-muted-foreground">
            Click to get a free quote from our solar experts!
          </p>
        </div>
      )}

      {/* Chat Bubble Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsTooltipVisible(true)}
        onMouseLeave={() => setIsTooltipVisible(false)}
        className="w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-105"
        aria-label="Chat with Support"
      >
        <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
};

export default ChatSupportBubble;
