'use client';

import React, { useState } from 'react';
import { staticJourney, type StaticJourney } from '../src/journey';

export default function PhygitalMilestoneStepper() {
  const [journey, setJourney] = useState<StaticJourney | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-2xl tracking-widest text-emerald-400 mb-2">PHYGITAL MILESTONES</div>
        <div className="text-xs opacity-60 mb-8">
          Educational reference. Six fixture titles. Not mutable data. Not an asset row.
        </div>

        <div className="p-6 rounded-2xl mb-8 border border-white/10">
          {journey === null ? (
            <button
              type="button"
              onClick={() => setJourney(staticJourney())}
              className="px-8 py-3 bg-emerald-600 rounded-2xl text-sm"
            >
              Show staticJourney()
            </button>
          ) : (
            <div className="space-y-4">
              <div className="text-xs opacity-70">fromChain {String(journey.fromChain)}. assetId {String(journey.assetId)}.</div>
              {journey.milestones.map((m) => (
                <div key={m.step} className="flex items-center gap-4 p-4 rounded-xl border border-white/10">
                  <div className="w-8 text-xs font-mono">{m.step}</div>
                  <div className="flex-1">
                    <div className="font-medium">{m.title}</div>
                    {m.date ? <div className="text-xs opacity-60">{m.date}</div> : null}
                  </div>
                  <div className="text-xs">{m.status}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="text-xs opacity-70 max-w-md">
          AtomicAssets v2 does not store a shipping status in this repo. A real mutable-data read would name an asset id. This page does not.
        </div>
      </div>
    </div>
  );
}
