import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Heart, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 text-emerald-700 px-3 py-1 text-sm font-medium">
            <Heart className="h-4 w-4" /> Trusted by individuals, communities & NGOs
          </div>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900">
            Empower Change, <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-emerald-500">One Fundraiser</span> at a Time
          </h1>
          <p className="mt-5 text-lg text-slate-600 max-w-xl">
            Start a campaign in minutes and rally support for medical needs, education, environment, disaster relief, and more.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition shadow-sm">
              <Rocket className="h-5 w-5" /> Start a Fundraiser
            </button>
            <button className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md border border-sky-500 text-sky-600 hover:bg-sky-50 transition">
              Donate Now <ArrowRight className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 text-center">
            <Stat number="25k+" label="Active donors" />
            <Stat number="$12M+" label="Raised so far" />
            <Stat number="4.8/5" label="Average rating" />
          </div>
        </div>

        <div className="relative h-[420px] sm:h-[520px] md:h-[560px]">
          <div className="absolute inset-0 rounded-3xl ring-1 ring-slate-200/60 shadow-[0_20px_60px_-15px_rgba(2,132,199,0.25)] overflow-hidden bg-white/30 backdrop-blur">
            <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="absolute -bottom-8 -left-10 h-48 w-48 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -top-8 -right-10 h-48 w-48 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <div className="text-2xl font-bold text-slate-900">{number}</div>
      <div className="text-sm text-slate-500">{label}</div>
    </div>
  );
}
