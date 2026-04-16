"use client";

import { useEffect, useState } from "react";
import IntroLoading from "./IntroLoading";

export default function IntroGate({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => window.clearTimeout(timer);
  }, []);

  if (loading) {
    return <IntroLoading />;
  }

  return children;
}
