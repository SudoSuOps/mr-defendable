import { useState } from 'react';
import { VOCAB_CATEGORIES, VOCAB_TERMS } from '../data/vocabulary';

export default function DefendAPedia() {
  const [filter, setFilter] = useState<string>('All');

  const filtered = filter === 'All'
    ? VOCAB_TERMS
    : VOCAB_TERMS.filter(t => t.category === filter);

  return (
    <div className="container-wide">
      <div className="ring-ring mb-3">Defend-A-Pedia</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">The Language Constitution</h1>
      <p className="text-cream-200 text-lg max-w-3xl mb-4 leading-relaxed">
        Operator vocabulary. Deeded · hashed · anchored on Hedera. The
        canonical record of how Mr. Defendable speaks · why the words matter ·
        and how each term resolves to a real artifact.
      </p>
      <p className="text-cream-200 max-w-3xl mb-12 leading-relaxed">
        Full canon: <span className="font-mono text-gold-400">defendapedia.eth</span> ·{' '}
        <a href="https://github.com/SudoSuOps/defend-A-pedia--vocabulary" className="text-gold-400 hover:text-gold-300">
          github.com/SudoSuOps/defend-A-pedia--vocabulary
        </a>
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setFilter('All')}
          className={`px-3 py-1 text-sm rounded border transition-colors ${
            filter === 'All'
              ? 'border-gold-500 text-gold-400 bg-gold-900/30'
              : 'border-ink-600 text-cream-200 hover:border-gold-700'
          }`}
        >
          All ({VOCAB_TERMS.length})
        </button>
        {VOCAB_CATEGORIES.map(cat => {
          const count = VOCAB_TERMS.filter(t => t.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1 text-sm rounded border transition-colors ${
                filter === cat
                  ? 'border-gold-500 text-gold-400 bg-gold-900/30'
                  : 'border-ink-600 text-cream-200 hover:border-gold-700'
              }`}
            >
              {cat} ({count})
            </button>
          );
        })}
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(term => (
          <div
            key={term.slug}
            className="border border-ink-700 rounded p-5 hover:border-gold-700 transition-colors"
          >
            <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
              <h3 className="font-serif text-xl text-cream-50">{term.term}</h3>
              <span className="font-mono text-xs text-gold-400 uppercase tracking-wider">
                {term.category}
              </span>
            </div>
            <p className="text-cream-200 text-sm leading-relaxed">{term.one_liner}</p>
            <div className="mt-3 font-mono text-xs text-ink-500">
              DDEED-DOV-VOCAB-{term.slug}-v1
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-ink-500 text-sm">
        Showing {filtered.length} of {VOCAB_TERMS.length} public-tier terms.
        The full 62+ canon lives on defendapedia.eth.
      </div>

      <div className="signature text-center mt-16 text-lg">To the shed.</div>
    </div>
  );
}
