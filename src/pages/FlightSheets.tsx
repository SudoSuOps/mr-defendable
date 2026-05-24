type Artifact = {
  num: string;
  title: string;
  blurb: string;
  status: 'shipped' | 'pending';
  confidential?: boolean;
};

const ARTIFACTS: Artifact[] = [
  { num: '00', title: 'Pre-Market Flight Sheet', blurb: 'Internal operator analysis · color on asset · buyer pool · risk flags', status: 'shipped', confidential: true },
  { num: '01', title: 'Proposal v1 (engagement)', blurb: 'CRE broker engagement math · superseded by 05', status: 'shipped' },
  { num: '02', title: 'LOU Draft v1', blurb: 'Vendor-model LOU · superseded by 06', status: 'shipped' },
  { num: '03', title: 'Build Proposal', blurb: 'Build doctrine · Language → Assignment → Receipt → Tribunal → Deed → Trust → UI', status: 'shipped' },
  { num: '04', title: 'Board Proposal', blurb: 'Comp set · 10 categories · 4 vendor risk flags · category-definition framing', status: 'shipped' },
  { num: '05', title: 'Exclusive Listing Proposal', blurb: 'DEFINITIVE engagement model · disposition · commission at closing', status: 'shipped' },
  { num: '06', title: 'Rep Agreement', blurb: 'Executable listing agreement · 11 sections · performance gates', status: 'shipped' },
  { num: '07', title: 'Qualification Statement', blurb: 'Board diligence response · operator lineage · 14 receipted proofs', status: 'shipped', confidential: true },
  { num: '08', title: 'Buyer Profile', blurb: '5 personas · 8 verticals · ~80 named target companies · MAGIC outreach', status: 'shipped', confidential: true },
  { num: '09', title: 'Go-to-Market Strategy', blurb: 'Call-for-offers · 3-round process · NEVER public price', status: 'shipped', confidential: true },
  { num: '10', title: '1031 Upleg Strategy', blurb: 'Parallel-track replacement-property · 45/180-day discipline · 5 QI partners', status: 'shipped', confidential: true },
  { num: '11', title: 'Next Steps · Kickoff', blurb: '🎉 Engagement awarded · 7 work streams · 30-day calendar · 11 DDEED anchors', status: 'shipped', confidential: true },
];

export default function FlightSheets() {
  return (
    <div className="container-wide">
      <div className="ring-ring mb-3">Flight Sheets</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">Operator Artifacts</h1>
      <p className="text-cream-200 text-lg max-w-3xl mb-12 leading-relaxed">
        Internal-grade flight sheets and listing-package artifacts. These are
        the actual artifacts we ship to principals · NOT marketing brochures.
        Confidential surfaces are watermarked · OWNER-ONLY · do not redistribute.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {ARTIFACTS.map(a => (
          <div
            key={a.num}
            className={`border rounded-lg p-5 ${
              a.confidential
                ? 'border-gold-800 bg-gold-900/10'
                : 'border-ink-700'
            }`}
          >
            <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
              <h3 className="font-serif text-xl text-cream-50">
                <span className="font-mono text-gold-400 mr-2">{a.num}</span>
                {a.title}
              </h3>
              {a.confidential && (
                <span className="font-mono text-xs text-gold-300">⚠️ OWNER-ONLY</span>
              )}
            </div>
            <p className="text-cream-200 text-sm leading-relaxed">{a.blurb}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 p-6 border border-ink-700 rounded">
        <h2 className="font-serif text-2xl text-cream-50 mb-3">Full listing package</h2>
        <p className="text-cream-200 leading-relaxed mb-3">
          11 numbered artifacts · 4 board-ready PDFs · ~50,000 words of
          operator-grade artifact production. Live in the books-and-records
          repository.
        </p>
        <a
          href="https://github.com/SudoSuOps/defend-A-pedia--vocabulary/tree/main/proposals/defendableos-website-app"
          className="text-gold-400 hover:text-gold-300 text-sm font-mono"
        >
          github.com/SudoSuOps/defend-A-pedia--vocabulary/proposals/defendableos-website-app →
        </a>
      </div>

      <div className="signature text-center mt-16 text-lg">To the shed.</div>
    </div>
  );
}
