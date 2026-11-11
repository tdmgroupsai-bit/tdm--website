import { clientLogos } from "./client-logos";
import { reelIndustries, reelKey } from "./reels";

export type Stat = { value: number; prefix?: string; suffix: string; label: string };

// Each film once, even when it shows under several MediaHouse tabs.
export const filmsMade = new Set(
  reelIndustries.flatMap((industry) => industry.reels.map((reel) => reelKey(industry.id, reel))),
).size;

// Real figures only. Add a stat here as soon as a number is confirmed.
export const companyStats: Stat[] = [
  { value: 230, prefix: "₹", suffix: " Cr+", label: "In sales generated for our clients" },
  { value: 10, suffix: "+", label: "Years running ads that pay for themselves" },
  { value: clientLogos.length, suffix: "+", label: "Brands grown across industries" },
  { value: filmsMade, suffix: "+", label: "Brand films & reels produced" },
];

export const formatStat = (stat: Stat, value = stat.value) =>
  `${stat.prefix ?? ""}${Math.round(value)}${stat.suffix}`;
