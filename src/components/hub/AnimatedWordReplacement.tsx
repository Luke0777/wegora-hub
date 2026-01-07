import { motion, useReducedMotion } from "framer-motion";
import { useState, useEffect } from "react";

interface AnimatedWordReplacementProps {
  from: string;
  to: string;
  className?: string;
}

export function AnimatedWordReplacement({ from, to, className = "" }: AnimatedWordReplacementProps) {
  const prefersReducedMotion = useReducedMotion();
  const [animationState, setAnimationState] = useState<"initial" | "strikethrough" | "strikethrough-hold" | "replacing" | "final">(
    prefersReducedMotion ? "final" : "initial"
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    // Step 1: Initial pause (400ms) - User reads "verwaltung"
    const initialTimer = setTimeout(() => {
      setAnimationState("strikethrough");
    }, 400);

    // Step 2: Strikethrough animation completes (400ms + 500ms animation)
    const strikethroughTimer = setTimeout(() => {
      setAnimationState("strikethrough-hold");
    }, 900);

    // Step 3: Hold strikethrough visible (900ms + 300ms hold)
    const holdTimer = setTimeout(() => {
      setAnimationState("replacing");
    }, 1200);

    // Step 4: Replacement completes → Final (1200ms + 400ms wipe-in)
    const replacingTimer = setTimeout(() => {
      setAnimationState("final");
    }, 1600);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(strikethroughTimer);
      clearTimeout(holdTimer);
      clearTimeout(replacingTimer);
    };
  }, [prefersReducedMotion]);

  // If user prefers reduced motion, show final state immediately
  if (prefersReducedMotion) {
    return <span className={className}>{to}</span>;
  }

  return (
    <span className={`relative inline-block ${className}`} style={{ minWidth: "fit-content" }}>
      {/* Original word with strikethrough */}
      {animationState !== "final" && (
        <motion.span
          className="relative inline-block"
          initial={{ opacity: 1 }}
          animate={{
            opacity: animationState === "replacing" ? 0 : 1,
            y: animationState === "replacing" ? 4 : 0,
          }}
          transition={{
            duration: 0.15,
            ease: "easeOut",
          }}
        >
          {from}
          {/* Strikethrough line - Wegora blue, bold, snappier */}
          {(animationState === "strikethrough" || animationState === "strikethrough-hold" || animationState === "replacing") && (
            <motion.span
              className="absolute left-0 top-1/2 w-full h-[5px] bg-weg-500 shadow-md"
              style={{
                transformOrigin: "left center",
                transform: "translateY(-50%)",
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
            />
          )}
        </motion.span>
      )}

      {/* Replacement word with wipe-in animation */}
      {(animationState === "replacing" || animationState === "final") && (
        <motion.span
          className="inline-block"
          style={{
            position: animationState === "replacing" ? "absolute" : "relative",
            left: animationState === "replacing" ? 0 : "auto",
            top: animationState === "replacing" ? 0 : "auto",
          }}
          initial={{
            clipPath: "inset(0 100% 0 0)",
            opacity: 0,
          }}
          animate={{
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
          }}
          transition={{
            clipPath: {
              duration: 0.4,
              ease: "easeInOut",
            },
            opacity: {
              duration: 0.15,
              ease: "easeOut",
            }
          }}
        >
          {to}
        </motion.span>
      )}
    </span>
  );
}
