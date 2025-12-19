"use client";

import { useEffect, useState } from "react";
import { ActivityCalendar } from "react-activity-calendar";

interface ContributionsData {
  date: string;
  count: number;
  level: number;
}

const data1 = [
  {
    date: "2024-06-23",
    count: 2,
    level: 1,
  },
  {
    date: "2024-08-02",
    count: 16,
    level: 4,
  },
  {
    date: "2024-11-29",
    count: 11,
    level: 3,
  },
];

const explicitTheme = {
  light: ["hsl(0, 0%, 92%)", "firebrick"],
  dark: ["#93929d6b", "#795ea3"],
};

export default function Github({ username }: { username: string }) {
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

      // Make sure we're getting an array
      if (Array.isArray(result.contributions)) {
        setData(result.contributions);
      } else if (result.contributions) {
        // If it's an object, convert to array
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
    <ActivityCalendar data={data} theme={explicitTheme} loading={loading} />
  );
}
