import React from 'react';
import Hero from './components/Hero.jsx';
import Categories from './components/Categories.jsx';
import TrendingCarousel from './components/TrendingCarousel.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-white font-bold">F</span>
            FundRise
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#trending" className="text-slate-600 hover:text-slate-900 transition">Trending</a>
            <a href="#categories" className="text-slate-600 hover:text-slate-900 transition">Categories</a>
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition">About</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-md border border-sky-500 text-sky-600 hover:bg-sky-50 transition">Log in</button>
            <button className="px-4 py-2 rounded-md bg-emerald-500 text-white hover:bg-emerald-600 transition">Start a Fundraiser</button>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <section id="trending">
          <TrendingCarousel />
        </section>
        <section id="categories">
          <Categories />
        </section>
      </main>

      <Footer />
    </div>
  );
}
