import { Quote as QuoteIcon } from "lucide-react";
import { MultilingualQuote } from "../ui/quote";

export default function Quote() {
  return (
    <div className="shadow-section-inset flex flex-col items-center pt-5">
      <QuoteIcon className="size-8 text-neutral-300 dark:text-neutral-700" />
      <MultilingualQuote
        authorName="Nigami, Takeru"
        defaultLanguage="en"
        quotes={[
          {
            id: "en",
            label: "EN",
            text: "Committing your life to that distance becomes the goal.",
          },
          {
            id: "ja",
            label: "JP",
            text: "その距離に人生を賭けることが、目標になる。",
          },
          {
            id: "hi",
            label: "HI",
            text: "उस दूरी के लिए अपना जीवन समर्पित करना ही लक्ष्य बन जाता है।",
          },
        ]}
      />
    </div>
  );
}
