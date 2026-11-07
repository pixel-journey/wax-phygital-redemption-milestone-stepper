import { describe, expect, it } from "vitest";
import { staticJourney } from "./journey";

describe("staticJourney", () => {
  it("does not read an asset", () => {
    const row = staticJourney();
    expect(row.fromChain).toBe(false);
    expect(row.assetId).toBe(null);
    expect(row.milestones).toHaveLength(6);
    expect(row.milestones[3].status).toBe("in-progress");
  });
});
