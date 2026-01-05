import { motion } from "framer-motion";

interface FloatingShapeProps {
  type: "circle" | "square" | "dots";
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  size?: string;
  delay?: number;
  rotation?: number;
  opacity?: number;
  mobileHidden?: boolean;
  mobileSize?: string;
  mobileOpacity?: number;
  dots?: Array<{
    size: string;
    opacity: number;
    top?: string;
    left?: string;
  }>;
}

export function FloatingShape({
  type,
  position,
  size = "180px",
  delay = 0.5,
  rotation = 0,
  opacity = 0.08,
  mobileHidden = false,
  mobileSize,
  mobileOpacity,
  dots = [],
}: FloatingShapeProps) {
  const positionStyles = Object.entries(position).reduce((acc, [key, value]) => {
    acc[key as 'top' | 'right' | 'bottom' | 'left'] = value;
    return acc;
  }, {} as Record<string, string>);

  if (type === "dots") {
    return (
      <motion.div
        className={`absolute pointer-events-none ${mobileHidden ? "hidden md:block" : ""}`}
        style={positionStyles}
        aria-hidden="true"
        role="presentation"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
      >
        <div className="relative">
          {dots.map((dot, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-[#2463eb]"
              style={{
                width: dot.size,
                height: dot.size,
                opacity: dot.opacity,
                top: dot.top,
                left: dot.left,
              }}
            />
          ))}
        </div>
      </motion.div>
    );
  }

  const shapeClass = type === "circle" ? "rounded-full" : "rounded-lg";

  return (
    <>
      {/* Desktop version */}
      <motion.div
        className="hidden md:block absolute pointer-events-none"
        style={{ ...positionStyles, width: size, height: size }}
        aria-hidden="true"
        role="presentation"
        initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: rotation }}
        transition={{ duration: 1.2, ease: "easeOut", delay }}
      >
        <div
          className={`w-full h-full ${shapeClass} bg-[#2463eb]`}
          style={{ opacity }}
        />
      </motion.div>

      {/* Mobile version - only if not hidden */}
      {!mobileHidden && (
        <motion.div
          className="block md:hidden absolute pointer-events-none"
          style={{
            ...positionStyles,
            width: mobileSize || `calc(${size} * 0.6)`,
            height: mobileSize || `calc(${size} * 0.6)`,
          }}
          aria-hidden="true"
          role="presentation"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay }}
        >
          <div
            className={`w-full h-full ${shapeClass} bg-[#2463eb]`}
            style={{ opacity: mobileOpacity || opacity * 1.3 }}
          />
        </motion.div>
      )}
    </>
  );
}
