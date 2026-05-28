"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

type RevealProps = {
  delay?: number;
  className?: string;
  children: ReactNode;
};

export function Reveal({ delay = 0, className, children }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    if (rect.bottom <= 0) {
      setForceVisible(true);
    }
  }, []);

  const visible = forceVisible || inView;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={
        forceVisible
          ? { duration: 0 }
          : { duration: 0.5, ease: "easeOut", delay }
      }
    >
      {children}
    </motion.div>
  );
}
