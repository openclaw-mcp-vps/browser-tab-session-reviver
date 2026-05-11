export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
      {/* Hero */}
      <section className="max-w-2xl w-full text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Browser Session Recovery
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Restore Every Lost Tab<br />
          <span className="text-[#58a6ff]">from a Single Screenshot</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8">
          Browser crashed and wiped your session? Upload a screenshot of the crash or your tab bar.
          Our OCR engine extracts every URL and our extension restores them all — instantly.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Get Access — $9/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] uppercase tracking-widest mb-3 font-semibold">How it works</p>
          <ol className="space-y-2 text-sm text-[#c9d1d9]">
            <li><span className="text-[#58a6ff] font-bold">1.</span> Upload your browser crash or tab-bar screenshot</li>
            <li><span className="text-[#58a6ff] font-bold">2.</span> OCR extracts every URL visible in the image</li>
            <li><span className="text-[#58a6ff] font-bold">3.</span> Review the list, then click Restore — our extension reopens all tabs</li>
          </ol>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$9</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-sm text-[#c9d1d9] space-y-2 mb-8 text-left">
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Unlimited screenshot uploads</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> OCR-powered URL extraction</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> One-click browser extension restore</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Session history &amp; export</li>
            <li className="flex items-center gap-2"><span className="text-[#58a6ff]">✓</span> Chrome &amp; Firefox support</li>
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Recovering Tabs
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What kinds of screenshots does it support?</h3>
            <p className="text-[#8b949e] text-sm">Any screenshot showing browser tabs or a crash dialog — Chrome, Firefox, Edge, and Safari are all supported. The OCR engine reads URLs from tab titles, address bars, and crash recovery screens.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does the browser extension work?</h3>
            <p className="text-[#8b949e] text-sm">After extraction, you get a list of URLs. Click "Restore Session" and the lightweight extension (Chrome &amp; Firefox) opens all tabs in a new window — no copy-pasting required.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my data private?</h3>
            <p className="text-[#8b949e] text-sm">Screenshots are processed and immediately deleted. We never store your URLs or browsing data beyond your active session. Your privacy is non-negotiable.</p>
          </div>
        </div>
      </section>

      <footer className="mt-20 text-[#8b949e] text-xs text-center">
        &copy; {new Date().getFullYear()} Tab Session Reviver. All rights reserved.
      </footer>
    </main>
  )
}
