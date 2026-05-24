type Assignment = {
  title: string;
  principal: string;
  asset_class: string;
  scope: string;
  status: string;
  ddeed: string;
  started: string;
  target_close: string;
};

const ASSIGNMENTS: Assignment[] = [
  {
    title: 'DefendableOS Disposition',
    principal: '[confidential during process]',
    asset_class: 'AI defense protocol · trust operating system',
    scope: 'Exclusive listing + 1031 upleg advisory · per 05/06/10',
    status: 'Pitching arc complete · execution arc begun · LOU pending',
    ddeed: 'DDEED-AWARD-DOS-001-v1 (anchor pending)',
    started: '2026-05-24',
    target_close: '2027-05-24 (12-mo exclusive)',
  },
];

export default function Assignments() {
  return (
    <div className="container-wide">
      <div className="ring-ring mb-3">Assignments</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">Active & Completed</h1>
      <p className="text-cream-200 text-lg max-w-3xl mb-12 leading-relaxed">
        Track record. Each engagement deeded · anchored · publicly verifiable.
        Principals anonymized during active processes. Books-and-records grade.
      </p>

      <div className="space-y-6">
        {ASSIGNMENTS.map((a, i) => (
          <div key={i} className="border border-gold-800 bg-gold-900/10 rounded-lg p-6">
            <div className="flex items-baseline justify-between mb-3 flex-wrap gap-2">
              <h3 className="font-serif text-2xl text-cream-50">{a.title}</h3>
              <span className="font-mono text-xs text-gold-300 uppercase tracking-wider">
                Active
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <Field label="Principal" value={a.principal} />
              <Field label="Asset class" value={a.asset_class} />
              <Field label="Scope" value={a.scope} />
              <Field label="Status" value={a.status} />
              <Field label="Started" value={a.started} />
              <Field label="Target close" value={a.target_close} />
            </div>

            <div className="pt-4 border-t border-ink-700">
              <span className="deed-tag">{a.ddeed}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-sm text-ink-500">
        Active assignment count: <span className="text-gold-400 font-mono">{ASSIGNMENTS.length}</span> ·
        Completed assignment count: <span className="text-gold-400 font-mono">0</span> (this is day 1)
      </div>

      <div className="signature text-center mt-16 text-lg">To the shed.</div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-gold-400 font-mono uppercase tracking-wider mb-1">{label}</div>
      <div className="text-cream-200 text-sm">{value}</div>
    </div>
  );
}
