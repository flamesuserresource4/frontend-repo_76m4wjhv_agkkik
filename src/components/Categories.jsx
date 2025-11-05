import React, { useMemo, useState } from 'react';
import { Search } from 'lucide-react';

const ALL_CATEGORIES = [
  'Medical',
  'Education',
  'NGOs',
  'Environment',
  'Animal Care',
  'Disaster Relief',
  'Personal Causes',
];

const COLORS = {
  Medical: 'from-rose-500 to-pink-500',
  Education: 'from-sky-500 to-cyan-500',
  NGOs: 'from-emerald-500 to-green-500',
  Environment: 'from-lime-500 to-emerald-500',
  'Animal Care': 'from-amber-500 to-orange-500',
  'Disaster Relief': 'from-red-500 to-orange-500',
  'Personal Causes': 'from-violet-500 to-fuchsia-500',
};

export default function Categories() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState('All');

  const visible = useMemo(() => {
    const list = active === 'All' ? ALL_CATEGORIES : ALL_CATEGORIES.filter(c => c === active);
    if (!query.trim()) return list;
    return list.filter(c => c.toLowerCase().includes(query.toLowerCase()));
  }, [active, query]);

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">Fundraiser Categories</h2>
            <p className="mt-2 text-slate-600">Browse campaigns that match your passion and make an impact.</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search categories"
                className="w-64 pl-10 pr-3 py-2.5 rounded-md border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <select
              value={active}
              onChange={(e) => setActive(e.target.value)}
              className="px-3 py-2.5 rounded-md border border-slate-200 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option>All</option>
              {ALL_CATEGORIES.map((c) => (
                <option key={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visible.map((cat) => (
            <CategoryCard key={cat} title={cat} gradient={COLORS[cat]} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ title, gradient }) {
  return (
    <button className="group text-left">
      <div className={`relative overflow-hidden rounded-xl p-6 bg-gradient-to-br ${gradient} text-white shadow-lg transition transform group-hover:-translate-y-0.5 group-hover:shadow-xl`}>
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition pointer-events-none" />
        <div className="text-lg font-semibold">{title}</div>
        <div className="mt-2 text-white/80 text-sm">Explore campaigns</div>
      </div>
    </button>
  );
}
