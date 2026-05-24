import { Link } from 'react-router-dom';
import { FIVE_CONTROLS, FIVE_PROOFS } from '../data/proofs';
import { MEMOS } from '../data/memos';

export default function Home() {
  const latestMemos = MEMOS.slice(0, 2);

  return (
    <div className="bg-ink-900">
      <section className="border-b border-ink-700">
        <div className="container-wide py-24">
          <div className="ring-ring mb-6">[ring ring]</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-cream-50 mb-6">
            Mr. Defendable speaking.
          </h1>
          <p className="text-xl md:text-2xl text-cream-200 max-w-3xl leading-relaxed mb-10">
            Trusted operator layer for AI defense · dispositions · and proof.
            Built on 30 years of CRE-grade discipline.
            <span className="signature"> To the shed.</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/request-proposal"
              className="inline-block px-6 py-3 bg-gold-500 text-ink-900 font-medium rounded hover:bg-gold-400 transition-colors"
            >
              Request a Proposal
            </Link>
            <Link
              to="/from-the-desk"
              className="inline-block px-6 py-3 border border-gold-700 text-gold-400 rounded hover:bg-gold-900/30 transition-colors"
            >
              Read From the Desk
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-700">
        <div className="container-wide py-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="ring-ring mb-2">01 · Defense</div>
              <h3 className="font-serif text-xl text-cream-50 mb-2">Disposition brokerage</h3>
              <p className="text-cream-200">
                Exclusive listing engagement · commission at closing · CRE-grade.
                Owner pays $0 out of pocket unless we close.
              </p>
            </div>
            <div>
              <div className="ring-ring mb-2">02 · Trust</div>
              <h3 className="font-serif text-xl text-cream-50 mb-2">Trust infrastructure</h3>
              <p className="text-cream-200">
                Tribunal verdicts · DDEED records · books and records anchored on
                Hedera. Every assertion resolves to a public source.
              </p>
            </div>
            <div>
              <div className="ring-ring mb-2">03 · Operator advisory</div>
              <h3 className="font-serif text-xl text-cream-50 mb-2">Principal-level mandates</h3>
              <p className="text-cream-200">
                Class A 5-cap discipline. PASS doctrine. We refuse fantasy
                mandates and bring math to every engagement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-ink-700">
        <div className="container-wide py-16">
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-serif text-3xl text-cream-50">From the Desk</h2>
            <Link to="/from-the-desk" className="text-gold-400 hover:text-gold-300 text-sm">
              All issues →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {latestMemos.map(memo => (
              <Link
                key={memo.slug}
                to={`/from-the-desk/${memo.slug}`}
                className="block group"
              >
                <div className="border border-ink-700 rounded-lg p-6 hover:border-gold-700 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs text-gold-400">Issue {memo.issue}</span>
                    <span className="font-mono text-xs text-ink-500">{memo.date}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-cream-50 mb-3 group-hover:text-gold-300 transition-colors">
                    {memo.title}
                  </h3>
                  <p className="text-cream-200 leading-relaxed mb-3">{memo.preview}</p>
                  <span className="deed-tag">{memo.ddeed}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink-700 bg-ink-800/50">
        <div className="container-wide py-16">
          <div className="ring-ring mb-3">The 5 Controls</div>
          <h2 className="font-serif text-3xl text-cream-50 mb-8">
            Operating principle · every engagement
          </h2>
          <ol className="grid md:grid-cols-5 gap-6">
            {FIVE_CONTROLS.map((control, i) => (
              <li key={control}>
                <div className="font-mono text-xs text-gold-400 mb-1">0{i + 1}</div>
                <div className="font-serif text-lg text-cream-50">{control}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-ink-700">
        <div className="container-wide py-16">
          <div className="ring-ring mb-3">The 5 Proofs</div>
          <h2 className="font-serif text-3xl text-cream-50 mb-8">
            How every claim is verified
          </h2>
          <div className="grid md:grid-cols-5 gap-6">
            {FIVE_PROOFS.map((proof, i) => (
              <div key={proof.name} className="border-l-2 border-gold-700 pl-4">
                <div className="font-mono text-xs text-gold-400 mb-1">0{i + 1}</div>
                <div className="font-serif text-lg text-cream-50 mb-1">{proof.name}</div>
                <div className="text-sm text-cream-200">{proof.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-ink-700 bg-ink-800/50">
        <div className="container-wide py-16">
          <h2 className="font-serif text-3xl text-cream-50 mb-6">
            We don't chase the claw.
          </h2>
          <p className="text-xl text-cream-200 max-w-3xl leading-relaxed mb-4">
            Offense is the jr hack lane. Faster benchmarks · louder demos · same
            broken split. There's a ceiling on that math.
          </p>
          <p className="text-xl text-cream-200 max-w-3xl leading-relaxed mb-4">
            Defense is the better seat. Trust layers compound. Hype cycles
            rotate.
          </p>
          <p className="signature text-xl">
            We take offense to the shed.
          </p>
        </div>
      </section>

      <section className="container-wide py-20 text-center">
        <div className="ring-ring mb-3">[ring ring]</div>
        <h2 className="font-serif text-4xl text-cream-50 mb-4">
          Standing by, Mr. Principal.
        </h2>
        <p className="text-cream-200 mb-8 max-w-2xl mx-auto">
          Make the dial. We work in the shed. Class A 5-cap discipline. White-glove.
        </p>
        <Link
          to="/request-proposal"
          className="inline-block px-8 py-4 bg-gold-500 text-ink-900 font-medium rounded hover:bg-gold-400 transition-colors text-lg"
        >
          Request a Proposal
        </Link>
        <div className="signature text-lg mt-8">To the shed.</div>
      </section>
    </div>
  );
}
