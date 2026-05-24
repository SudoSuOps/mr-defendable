import { Link } from 'react-router-dom';
import { MEMOS } from '../data/memos';

export default function FromTheDesk() {
  return (
    <div className="container-narrow">
      <div className="ring-ring mb-3">From the Desk</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">
        Mr. Defendable's Board Notes
      </h1>
      <p className="text-cream-200 text-lg max-w-2xl mb-12 leading-relaxed">
        Operator notes · trust memos · doctrine. First-person principal
        commentary. CRE-broker cadence. Every memo deeded on Hedera.
      </p>

      <div className="space-y-8">
        {MEMOS.map(memo => (
          <Link
            key={memo.slug}
            to={`/from-the-desk/${memo.slug}`}
            className="block group border border-ink-700 rounded-lg p-6 hover:border-gold-700 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <span className="font-mono text-xs text-gold-400">Issue {memo.issue}</span>
              <span className="font-mono text-xs text-ink-500">{memo.date}</span>
            </div>
            <h2 className="font-serif text-3xl text-cream-50 mb-3 group-hover:text-gold-300 transition-colors">
              {memo.title}
            </h2>
            <p className="text-cream-200 leading-relaxed mb-4">{memo.preview}</p>
            <div className="flex items-center justify-between flex-wrap gap-2">
              <span className="deed-tag">{memo.ddeed}</span>
              <span className="text-gold-400 text-sm">Read full memo →</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="signature text-center mt-16 text-lg">To the shed.</div>
    </div>
  );
}
