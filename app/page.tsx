"use client";

import { useEffect, useState } from "react";
import HomeContent from "./HomeContent";
import IntroLoading from "./IntroLoading";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <IntroLoading />;
  }

  return <HomeContent />;
}