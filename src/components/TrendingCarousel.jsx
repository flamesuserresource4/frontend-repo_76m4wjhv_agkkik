import React, { useMemo, useRef } from 'react';

const trendingData = [
  {
    id: 1,
    title: 'Emergency Surgery for Ayaan',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop',
    goal: 15000,
    raised: 9200,
    category: 'Medical',
  },
  {
    id: 2,
    title: 'Scholarships for Girls in STEM',
    img: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
    goal: 20000,
    raised: 11400,
    category: 'Education',
  },
  {
    id: 3,
    title: 'Plant 10,000 Mangroves',
    img: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=1200&auto=format&fit=crop',
    goal: 12000,
    raised: 8200,
    category: 'Environment',
  },
  {
    id: 4,
    title: 'Shelter for Rescued Dogs',
    img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1200&auto=format&fit=crop',
    goal: 18000,
    raised: 7600,
    category: 'Animal Care',
  },
  {
    id: 5,
    title: 'Relief Kits for Flood Victims',
    img: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop',
    goal: 25000,
    raised: 16750,
    category: 'Disaster Relief',
  },
];

export default function TrendingCarousel() {
  const listRef = useRef(null);

  const items = useMemo(() => trendingData, []);

  const scrollBy = (dir) => {
    const el = listRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.9 * (dir === 'left' ? -1 : 1);
    el.scrollBy({ left: amount, behavior: 'smooth' });
  };

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Trending Campaigns</h2>
            <p className="mt-2 text-slate-600">Discover impactful stories gaining momentum right now.</p>
          </div>
          <div className="hidden sm:flex gap-3">
            <button onClick={() => scrollBy('left')} className="h-10 w-10 rounded-md border border-slate-200 hover:bg-slate-50">◀</button>
            <button onClick={() => scrollBy('right')} className="h-10 w-10 rounded-md border border-slate-200 hover:bg-slate-50">▶</button>
          </div>
        </div>

        <div ref={listRef} className="mt-6 flex gap-6 overflow-x-auto pb-3 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none]" style={{ scrollbarWidth: 'none' }}>
          {items.map((c) => (
            <CampaignCard key={c.id} campaign={c} />
          ))}
        </div>
      </div>
    </div>
  );
}

function CampaignCard({ campaign }) {
  const pct = Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
  const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    <div className="min-w-[300px] sm:min-w-[360px] snap-start">
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition">
        <div className="relative h-48">
          <img src={campaign.img} alt={campaign.title} className="h-full w-full object-cover" />
          <span className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full bg-sky-600 text-white/90 shadow">{campaign.category}</span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-slate-900 line-clamp-2">{campaign.title}</h3>
          <div className="mt-3">
            <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full" style={{ width: pct + '%' }} />
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-slate-600">
              <div>
                Raised <span className="font-semibold text-slate-900">{currency.format(campaign.raised)}</span>
              </div>
              <div className="text-slate-500">Goal {currency.format(campaign.goal)}</div>
            </div>
          </div>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 px-3 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition">Donate</button>
            <button className="flex-1 px-3 py-2 rounded-md border border-sky-500 text-sky-600 hover:bg-sky-50 transition">Share</button>
          </div>
        </div>
      </div>
    </div>
  );
}
