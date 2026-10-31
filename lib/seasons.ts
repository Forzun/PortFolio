export type SeasonKey = "default" | "halloween" | "christmas" | "diwali";

type SeasonRoll = {
  key: SeasonKey;
  start: string;
  end: string;
};

const SEASONS: SeasonRoll[] = [
  {
    key: "halloween",
    start: "10-20",
    end: "11-02",
  },
  {
    key: "christmas",
    start: "12-15",
    end: "01-05",
  },
];

function isWithin(value: string, start: string, end: string) {
  if (start <= end) {
    return value >= start && value <= end;
  }

  return value >= start || value <= end;
}

export function getSession(date = new Date()): SeasonKey {
  const value = `${String(date.getMonth() + 1).padStart(2, "0")}-${String(
    date.getDate(),
  ).padStart(2, "0")}`;

  const active = SEASONS.find(({ start, end }) => isWithin(value, start, end));

  return active?.key || "default";
}
