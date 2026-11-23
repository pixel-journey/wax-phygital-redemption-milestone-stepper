import { describe, expect, it } from "vitest";
import { staticJourney } from "./journey";

describe("staticJourney", () => {
  it("does not read an asset", () => {
    const row = staticJourney();
    expect(row.fromChain).toBe(false);
    expect(row.assetId).toBe(null);
    expect(row.milestones).toHaveLength(6);
    expect(row.milestones[3]!.status).toBe("in-progress");
  });

  it("locks the six titles and empty pending dates", () => {
    const titles = staticJourney().milestones.map((m) => m.title);
    expect(titles).toEqual([
      "Design Finalized",
      "Production Started",
      "Quality Check Passed",
      "Shipped from Factory",
      "Arrived at Hub",
      "Delivered to Owner",
    ]);
    const last = staticJourney().milestones[5]!;
    expect(last.status).toBe("pending");
    expect(last.date).toBe("");
  });
});
