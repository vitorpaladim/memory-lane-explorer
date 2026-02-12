import { useState, useEffect } from "react";
import { AArrowUp, AArrowDown, Contrast } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const FONT_SIZES = [100, 112, 125, 137, 150];
const STORAGE_KEY_FONT = "accessibility-font-size";
const STORAGE_KEY_CONTRAST = "accessibility-high-contrast";

const AccessibilityToolbar = () => {
  const [fontIndex, setFontIndex] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY_FONT);
    return saved ? Number(saved) : 0;
  });

  const [highContrast, setHighContrast] = useState(() => {
    return localStorage.getItem(STORAGE_KEY_CONTRAST) === "true";
  });

  useEffect(() => {
    document.documentElement.style.fontSize = `${FONT_SIZES[fontIndex]}%`;
    localStorage.setItem(STORAGE_KEY_FONT, String(fontIndex));
  }, [fontIndex]);

  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
    localStorage.setItem(STORAGE_KEY_CONTRAST, String(highContrast));
  }, [highContrast]);

  const increase = () => setFontIndex((i) => Math.min(i + 1, FONT_SIZES.length - 1));
  const decrease = () => setFontIndex((i) => Math.max(i - 1, 0));

  return (
    <TooltipProvider delayDuration={300}>
      <div className="fixed right-3 top-20 z-50 flex flex-col gap-1" role="toolbar" aria-label="Acessibilidade">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full bg-background shadow-md border-border"
              onClick={decrease}
              disabled={fontIndex === 0}
              aria-label="Diminuir fonte"
            >
              <AArrowDown className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Diminuir fonte</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="h-9 w-9 rounded-full bg-background shadow-md border-border"
              onClick={increase}
              disabled={fontIndex === FONT_SIZES.length - 1}
              aria-label="Aumentar fonte"
            >
              <AArrowUp className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Aumentar fonte</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={`h-9 w-9 rounded-full shadow-md border-border ${highContrast ? "bg-foreground text-background" : "bg-background"}`}
              onClick={() => setHighContrast(!highContrast)}
              aria-label="Alto contraste"
            >
              <Contrast className="h-4 w-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">Alto contraste</TooltipContent>
        </Tooltip>
      </div>
    </TooltipProvider>
  );
};

export default AccessibilityToolbar;
