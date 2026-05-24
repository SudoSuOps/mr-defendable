export default function Tribunal() {
  return (
    <div className="container-narrow">
      <div className="ring-ring mb-3">Tribunal</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">Adjudication Transparency</h1>
      <p className="text-cream-200 text-lg max-w-2xl mb-12 leading-relaxed">
        Where AI work gets graded. Honey · Royal Jelly · Jelly · Propolis.
        Every verdict deeded · every failure surfaced · every repair logged.
      </p>

      <div className="space-y-6 mb-12">
        <div className="border-l-4 border-gold-500 pl-6 py-2">
          <div className="font-mono text-xs text-gold-400 mb-1">SCALE A + SCALE B</div>
          <h3 className="font-serif text-xl text-cream-50 mb-1">Two-judge ensemble</h3>
          <p className="text-cream-200">
            Scale A: gemma3:12b. Scale B: qwen2.5:32b. Drift ≤ 0.15 required.
            Disagreement triggers human review · NOT silent override.
          </p>
        </div>
        <div className="border-l-4 border-gold-500 pl-6 py-2">
          <div className="font-mono text-xs text-gold-400 mb-1">DETERMINISTIC PRE-CHECK</div>
          <h3 className="font-serif text-xl text-cream-50 mb-1">Rule layer can only downgrade</h3>
          <p className="text-cream-200">
            Hard-rule violations cap the verdict. Models propose · rules enforce.
            No upward surprises.
          </p>
        </div>
        <div className="border-l-4 border-gold-500 pl-6 py-2">
          <div className="font-mono text-xs text-gold-400 mb-1">12-CHECK VALIDATOR CHAIN</div>
          <h3 className="font-serif text-xl text-cream-50 mb-1">Founder voice preservation</h3>
          <p className="text-cream-200">
            V03 banned-phrase scan + required-vocabulary check + cadence
            pattern + receipt density + sign-off discipline. Commit-time block
            on drift.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        <TierCard tier="Royal Jelly" range="≥ 0.85" desc="Apex tier · feeds training corpus" />
        <TierCard tier="Honey" range="0.70 — 0.84" desc="Approved with confidence" />
        <TierCard tier="Jelly" range="repair candidate" desc="SwarmFixer eligible" />
        <TierCard tier="Propolis" range="< 0.70" desc="Walk · do not ship" />
      </div>

      <div className="p-6 border border-gold-800 bg-gold-900/10 rounded">
        <h3 className="font-serif text-xl text-cream-50 mb-2">False Honey reports</h3>
        <p className="text-cream-200 mb-4">
          Our most honest content. When the agent sounds smart but fails the
          assignment. We publish what we got wrong · not just what we got right.
        </p>
        <p className="text-gold-400 text-sm font-mono">
          Forthcoming on offensetotheshed.com/false-honey + painintheshed.com (podcast)
        </p>
      </div>

      <div className="signature text-center mt-16 text-lg">To the shed.</div>
    </div>
  );
}

function TierCard({ tier, range, desc }: { tier: string; range: string; desc: string }) {
  return (
    <div className="border border-ink-700 rounded p-4">
      <div className="font-serif text-lg text-gold-300 mb-1">{tier}</div>
      <div className="font-mono text-xs text-cream-200 mb-2">{range}</div>
      <div className="text-sm text-cream-200">{desc}</div>
    </div>
  );
}
