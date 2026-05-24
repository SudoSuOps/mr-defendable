import { Link } from 'react-router-dom';

export default function BoardRoom() {
  return (
    <div className="container-narrow">
      <div className="ring-ring mb-3">Board Room</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">Institutional-Grade Artifacts</h1>
      <p className="text-cream-200 text-lg max-w-2xl mb-12 leading-relaxed">
        Board presentations · executive memos · doctrine artifacts. Public
        tier surfaces here. Confidential per-engagement materials are
        ENS-keyed and require authorization.
      </p>

      <div className="space-y-4 mb-12">
        <ArtifactRow
          title="The 10-Category Comp Set"
          blurb="DefendableOS = UNION of Observability + Compliance + Audit + Ratings + Title + CI/CD + Cybersecurity + CRE + AI Evals + Compute Markets"
          ref="04_BOARD_PROPOSAL.pdf"
        />
        <ArtifactRow
          title="Exclusive Listing Engagement"
          blurb="Disposition assignment · commission at closing · CRE-grade broker discipline · $0 out of pocket for owner unless we close"
          ref="05_EXCLUSIVE_LISTING_PROPOSAL.pdf"
        />
        <ArtifactRow
          title="Qualification Statement"
          blurb="Operator lineage doctrine · vocabulary as credential · 24 operational disciplines · 14 receipted proofs"
          ref="07_QUALIFICATION_STATEMENT.pdf"
          confidential
        />
        <ArtifactRow
          title="Go-to-Market Strategy"
          blurb="Call-for-offers process · NEVER public price · 3-round bidder qualification · highest-and-best not lowest bid"
          ref="09_GO_TO_MARKET_STRATEGY.pdf"
          confidential
        />
        <ArtifactRow
          title="1031 Upleg Strategy"
          blurb="Parallel-track replacement-property acquisition · 45/180-day clock · 5 QI partners · DST/TIC backup framework"
          ref="10_1031_UPLEG_STRATEGY.pdf"
          confidential
        />
      </div>

      <div className="p-6 border border-ink-700 rounded">
        <h3 className="font-serif text-xl text-cream-50 mb-2">Need a deeper read?</h3>
        <p className="text-cream-200 mb-3">
          The full 11-artifact listing package lives in the books-and-records repo.
          Confidential surfaces (07 · 08 · 09 · 10 · 11) are OWNER-ONLY.
        </p>
        <Link to="/flight-sheets" className="text-gold-400 hover:text-gold-300">
          See all artifacts →
        </Link>
      </div>

      <div className="signature text-center mt-16 text-lg">To the shed.</div>
    </div>
  );
}

function ArtifactRow({
  title,
  blurb,
  ref,
  confidential,
}: {
  title: string;
  blurb: string;
  ref: string;
  confidential?: boolean;
}) {
  return (
    <div className={`border rounded p-5 ${confidential ? 'border-gold-800 bg-gold-900/10' : 'border-ink-700'}`}>
      <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
        <h3 className="font-serif text-xl text-cream-50">{title}</h3>
        {confidential && (
          <span className="font-mono text-xs text-gold-300">⚠️ OWNER-ONLY</span>
        )}
      </div>
      <p className="text-cream-200 text-sm leading-relaxed mb-2">{blurb}</p>
      <span className="font-mono text-xs text-ink-500">{ref}</span>
    </div>
  );
}
