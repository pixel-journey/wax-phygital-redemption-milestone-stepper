'use client';

import React, { useState } from 'react';

export default function PhygitalMilestoneStepper() {
  const [assetId, setAssetId] = useState('1099511627776');
  const [milestones, setMilestones] = useState([
    { step: 1, title: 'Design Finalized', status: 'complete', date: '2026-05-12' },
    { step: 2, title: 'Production Started', status: 'complete', date: '2026-05-28' },
    { step: 3, title: 'Quality Check Passed', status: 'complete', date: '2026-06-10' },
    { step: 4, title: 'Shipped from Factory', status: 'in-progress', date: '2026-06-15' },
    { step: 5, title: 'Arrived at Hub', status: 'pending', date: '' },
    { step: 6, title: 'Delivered to Owner', status: 'pending', date: '' },
  ]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="font-press-start text-2xl tracking-widest text-emerald-400 mb-2">PHYGITAL REDEMPTION MILESTONE STEPPER</div>
        <div className="text-xs opacity-60 mb-8">Pixel Journey • RWA / Phygital Tracking • Parses Mutable Metadata</div>

        <div className="glassmorphic-crt pixel-border p-6 rounded-2xl mb-8">
          <div className="flex gap-3 mb-6">
            <input
              value={assetId}
              onChange={e => setAssetId(e.target.value)}
              className="flex-1 bg-black/60 border border-white/10 px-4 py-3 rounded-xl font-mono text-sm"
              placeholder="AtomicAsset ID"
            />
            <button className="px-8 py-3 bg-emerald-600 rounded-2xl text-sm">Load Asset Journey</button>
          </div>

          <div className="space-y-4">
            {milestones.map((m, i) => (
              <div key={i} className={`flex items-center gap-4 p-4 rounded-xl border ${m.status === 'complete' ? 'border-emerald-400 bg-emerald-500/5' : m.status === 'in-progress' ? 'border-amber-400 bg-amber-500/5' : 'border-white/10'}`}>
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono border ${m.status === 'complete' ? 'border-emerald-400 text-emerald-400' : m.status === 'in-progress' ? 'border-amber-400 text-amber-400' : 'border-white/30 text-white/50'}">
                  {m.step}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{m.title}</div>
                  {m.date && <div className="text-xs opacity-60">{m.date}</div>}
                </div>
                <div className={`text-xs px-3 py-1 rounded-full ${m.status === 'complete' ? 'bg-emerald-500/20 text-emerald-400' : m.status === 'in-progress' ? 'bg-amber-500/20 text-amber-400' : 'bg-white/10 text-white/50'}`}>
                  {m.status.toUpperCase()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-xs opacity-70 max-w-md">
          In production, this would parse the mutable metadata history of an AtomicAsset to dynamically build the real-world journey. Each mutation represents a verified milestone in production or shipping.
        </div>
      </div>
    </div>
  );
}
