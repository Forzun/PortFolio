"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ActivityCalendar = dynamic(
  () => import("react-activity-calendar").then((mod) => mod.ActivityCalendar),
  { ssr: false },
);

interface ContributionsData {
  date: string;
  count: number;
  level: number;
}

const explicitTheme = {
  // light: ["#f0f0f0", "#c4edde", "#7ac7c4", "#f73859", "#384259"],
  light: ["#F1F1F1", "#FFE0CC", "#FFC199", "#FF9E5C", "#FF6D00"],
  // light: [
  //   "#272729", // No activity
  //   "#663001", // Low
  //   "#994301", // Medium
  //   "#CC5701", // High
  //   "#FF7D00", // Highest — your main color
  // ],
};

export default function Github({ username }: { username?: string }) {
  const [data, setData] = useState<ContributionsData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchGithubContributions();
  }, [username]);

  const fetchGithubContributions = async () => {
    try {
      const user = "forzun";
      const response = await fetch(
        `https://github-contributions-api.jogruber.de/v4/${user}?y=last`,
      );
      const result = await response.json();

      if (Array.isArray(result.contributions)) {
        setData(result.contributions);
      } else if (result.contributions) {
        const contributionsArray = Object.values(result.contributions);
        setData(contributionsArray as ContributionsData[]);
      } else {
        setData([]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error Fetching contributions:", error);
      setLoading(true);
    }
  };

  return (
    <div className="my-5 flex justify-center overflow-hidden px-4 py-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <ActivityCalendar
        data={data}
        loading={loading}
        blockMargin={2}
        colorScheme="light"
        theme={explicitTheme}
        blockRadius={7}
      />
    </div>
  );
}
