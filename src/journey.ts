/** Six fixture titles. Not mutable data and not an asset id. */
export type Milestone = {
  step: number;
  title: string;
  status: "complete" | "in-progress" | "pending";
  date: string;
};

export type StaticJourney = {
  fromChain: false;
  assetId: null;
  milestones: readonly Milestone[];
};

export function staticJourney(): StaticJourney {
  return {
    fromChain: false,
    assetId: null,
    milestones: [
      { step: 1, title: "Design Finalized", status: "complete", date: "2026-05-12" },
      { step: 2, title: "Production Started", status: "complete", date: "2026-05-28" },
      { step: 3, title: "Quality Check Passed", status: "complete", date: "2026-06-10" },
      { step: 4, title: "Shipped from Factory", status: "in-progress", date: "2026-06-15" },
      { step: 5, title: "Arrived at Hub", status: "pending", date: "" },
      { step: 6, title: "Delivered to Owner", status: "pending", date: "" },
    ],
  };
}
