"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { throttle } from "@/lib/utils";

interface ScrollIndicatorProps {
  /** Accessible label for the button (default: "Zum Inhalt scrollen") */
  label?: string;
  /** Pixels to scroll down (default: window.innerHeight) */
  scrollOffset?: number;
  /** Minimum viewport height to show indicator (default: 700) */
  minHeight?: number;
  /** Scroll threshold to hide indicator (default: 100) */
  hideThreshold?: number;
  /** Additional class names */
  className?: string;
  /** Icon color class (default: "text-weg-500/70 hover:text-weg-500") */
  colorClass?: string;
}

/**
 * ScrollIndicator - Accessible scroll-down button
 *
 * A bouncing arrow that invites users to scroll down.
 * Fully accessible with keyboard support and screen reader label.
 *
 * @example
 * <ScrollIndicator />
 * <ScrollIndicator label="Mehr erfahren" colorClass="text-owner-500/70 hover:text-owner-500" />
 */
export function ScrollIndicator({
  label = "Zum Inhalt scrollen",
  scrollOffset,
  minHeight = 700,
  hideThreshold = 100,
  className,
  colorClass = "text-weg-500/70 hover:text-weg-500",
}: ScrollIndicatorProps) {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = useMemo(
    () =>
      throttle(() => {
        const hasEnoughHeight = window.innerHeight >= minHeight;
        setIsVisible(window.scrollY <= hideThreshold && hasEnoughHeight);
      }, 100),
    [minHeight, hideThreshold]
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [handleScroll]);

  const scrollDown = useCallback(() => {
    window.scrollTo({
      top: scrollOffset ?? window.innerHeight,
      behavior: "smooth",
    });
  }, [scrollOffset]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        scrollDown();
      }
    },
    [scrollDown]
  );

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          aria-label={label}
          onClick={scrollDown}
          onKeyDown={handleKeyDown}
          className={cn(
            "fixed left-1/2 -translate-x-1/2 z-20",
            "focus:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 rounded-full",
            "cursor-pointer",
            className
          )}
          style={{ bottom: "2rem" }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <CaretDown
              className={cn("w-10 h-10 transition-colors", colorClass)}
              weight="bold"
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
