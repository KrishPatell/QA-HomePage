import React, { useState } from 'react';
import { CheckIcon } from './icons/CheckIcon';

const PricingTable: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[var(--color-porcelain)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12 scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-ink)] tracking-tight">Simple, transparent pricing.</h2>
            <p className="mt-4 text-lg md:text-xl text-[var(--color-slate)]">Choose the plan that fits your creative workflow.</p>
        </div>

        <div className="flex justify-center items-center gap-4 mb-12 scroll-reveal">
            <span className={`text-base font-medium transition-colors ${!isAnnual ? 'text-[var(--color-ink)]' : 'text-[var(--color-slate)]'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)} 
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-ring ${isAnnual ? 'bg-[var(--color-accent-blue)]' : 'bg-gray-300'}`}
              aria-pressed={isAnnual}
            >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${isAnnual ? 'translate-x-6' : 'translate-x-1'}`}/>
            </button>
            <span className={`text-base font-medium transition-colors ${isAnnual ? 'text-[var(--color-ink)]' : 'text-[var(--color-slate)]'}`}>Annual</span>
            <span className="text-xs font-semibold text-[var(--color-accent-bronze)] bg-[var(--color-accent-bronze)]/10 px-2 py-1 rounded-md">Save 15%</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          {/* Free Plan */}
          <div className="group bg-white p-8 rounded-2xl flex flex-col h-full border border-[var(--color-linen)] transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl scroll-reveal">
            <h3 className="text-xl font-bold text-[var(--color-ink)]">Free</h3>
            <p className="mt-2 text-4xl font-bold text-[var(--color-ink)]">$0</p>
            <p className="mt-4 text-base text-[var(--color-slate)] min-h-[3rem]">For casual creators getting started.</p>
            <ul className="mt-8 space-y-4 text-[var(--color-slate)] text-base flex-grow">
              <li className="flex items-center gap-3"><CheckIcon className="h-5 w-5 text-[var(--color-accent-blue)]" /> Up to 3 video exports</li>
              <li className="flex items-center gap-3"><CheckIcon className="h-5 w-5 text-[var(--color-accent-blue)]" /> 720p resolution</li>
              <li className="flex items-center gap-3"><CheckIcon className="h-5 w-5 text-[var(--color-accent-blue)]" /> Standard processing speed</li>
            </ul>
            <button className="mt-8 w-full bg-[var(--color-porcelain)] text-[var(--color-ink)] font-semibold py-3 rounded-lg hover:bg-[var(--color-linen)] transition-colors focus-ring text-base">Get Started</button>
          </div>
          
          {/* Pro Plan - Highlighted */}
          <div className="group relative bg-[var(--color-ink)] p-8 rounded-2xl flex flex-col h-full shadow-2xl transition-all duration-300 ease-in-out hover:scale-[1.03] scroll-reveal lg:scale-105" style={{ transitionDelay: '150ms' }}>
            <div className="absolute top-0 right-6 -mt-3 transform transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
                <div className="px-4 py-1 bg-[var(--color-accent-blue)] text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">Most Popular</div>
            </div>

            <h3 className="text-xl font-bold text-[var(--color-accent-blue)]">Pro</h3>
            <p className="mt-2 text-4xl font-bold text-white">${isAnnual ? Math.round(24 * 0.85) : 24}<span className="text-base font-medium text-gray-400">/mo</span></p>
            <p className="mt-4 text-base text-gray-300 min-h-[3rem]">For professionals and serious creators who need top quality and speed.</p>
            <ul className="mt-8 space-y-4 text-gray-300 text-base flex-grow">
              <li className="flex items-center gap-3"><CheckIcon className="h-5 w-5 text-[var(--color-accent-blue)]" /> Unlimited video exports</li>
              <li className="flex items-center gap-3"><CheckIcon className="h-5 w-5 text-[var(--color-accent-blue)]" /> Up to 4K resolution</li>
              <li className="flex items-center gap-3"><CheckIcon className="h-5 w-5 text-[var(--color-accent-blue)]" /> GPU-accelerated speed</li>
              <li className="flex items-center gap-3"><CheckIcon className="h-5 w-5 text-[var(--color-accent-blue)]" /> Batch processing</li>
              <li className="flex items-center gap-3"><CheckIcon className="h-5 w-5 text-[var(--color-accent-blue)]" /> Priority support</li>
            </ul>
            <button className="mt-8 w-full bg-[var(--color-accent-blue)] text-white font-semibold py-3 rounded-lg transition-transform duration-200 hover:scale-105 focus-ring text-base shadow-[0_4px_14px_rgba(46,107,255,0.3)] hover:shadow-[0_6px_20px_rgba(46,107,255,0.4)]">Choose Pro</button>
          </div>

          {/* Studio Plan */}
          <div className="group bg-white p-8 rounded-2xl flex flex-col h-full border border-[var(--color-linen)] transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-xl scroll-reveal" style={{ transitionDelay: '300ms' }}>
            <h3 className="text-xl font-bold text-[var(--color-ink)]">Studio</h3>
            <p className="mt-2 text-4xl font-bold text-[var(--color-ink)]">Custom</p>
            <p className="mt-4 text-base text-[var(--color-slate)] min-h-[3rem]">For teams and agencies with custom integration and security needs.</p>
            <ul className="mt-8 space-y-4 text-[var(--color-slate)] text-base flex-grow">
                <li className="flex items-center gap-3"><CheckIcon className="h-5 w-5 text-[var(--color-accent-blue)]" /> Everything in Pro, plus:</li>
              <li className="flex items-center gap-3"><CheckIcon className="h-5 w-5 text-[var(--color-accent-blue)]" /> API access & integrations</li>
              <li className="flex items-center gap-3"><CheckIcon className="h-5 w-5 text-[var(--color-accent-blue)]" /> Dedicated account manager</li>
              <li className="flex items-center gap-3"><CheckIcon className="h-5 w-5 text-[var(--color-accent-blue)]" /> Volume licensing</li>
            </ul>
            <button className="mt-8 w-full bg-[var(--color-porcelain)] text-[var(--color-ink)] font-semibold py-3 rounded-lg hover:bg-[var(--color-linen)] transition-colors focus-ring text-base">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;