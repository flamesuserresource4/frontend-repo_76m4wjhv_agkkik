import React from 'react';

export default function Footer() {
  return (
    <footer id="about" className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-semibold text-slate-900">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500 text-white font-bold">F</span>
            FundRise
          </div>
          <p className="mt-3 text-slate-600 text-sm">
            A modern fundraising platform to power medical, education, environment and community-led initiatives.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-slate-900" href="#">About</a></li>
            <li><a className="hover:text-slate-900" href="#">Contact</a></li>
            <li><a className="hover:text-slate-900" href="#">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li><a className="hover:text-slate-900" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-slate-900" href="#">Terms of Service</a></li>
            <li><a className="hover:text-slate-900" href="#">Refund Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-slate-900">Get updates</h4>
          <form className="mt-3 flex gap-2">
            <input type="email" required placeholder="Your email" className="flex-1 px-3 py-2.5 rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500" />
            <button className="px-4 py-2.5 rounded-md bg-sky-600 text-white hover:bg-sky-700">Subscribe</button>
          </form>
          <p className="mt-2 text-xs text-slate-500">We care about your data. Unsubscribe at any time.</p>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} FundRise. All rights reserved.
      </div>
    </footer>
  );
}
