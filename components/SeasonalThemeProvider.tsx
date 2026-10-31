"use client";
import { useEffect } from "react";
import { getSession } from "../lib/seasons";

export default function SeasonThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const season = getSession();
    document.documentElement.dataset.season = season;
  }, []);

  return <>{children}</>;
}
