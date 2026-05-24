import { Link, useParams } from 'react-router-dom';
import { getMemoBySlug } from '../data/memos';

// Minimal markdown-to-HTML conversion for the memo body.
// Supports: # h1, ## h2, **bold**, *italic*, paragraphs.
function renderMarkdown(md: string): string {
  let out = md;

  // Headings
  out = out.replace(/^## (.*$)/gm, '<h2 class="font-serif text-2xl text-cream-50 mt-12 mb-4">$1</h2>');
  out = out.replace(/^# (.*$)/gm, '<h1 class="font-serif text-4xl text-cream-50 mt-12 mb-4">$1</h1>');

  // Bold and italic (run italic AFTER bold to avoid swallowing the **)
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong class="text-cream-50">$1</strong>');
  out = out.replace(/(^|[^*])\*([^*]+)\*/g, '$1<em class="signature">$2</em>');

  // Wrap remaining lines into paragraphs (skip lines already containing block tags)
  const lines = out.split('\n');
  const paras: string[] = [];
  let buffer: string[] = [];

  const flush = () => {
    if (buffer.length) {
      paras.push(`<p class="text-cream-200 leading-relaxed mb-4">${buffer.join(' ')}</p>`);
      buffer = [];
    }
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flush();
      continue;
    }
    if (/^<(h1|h2|h3)/.test(trimmed)) {
      flush();
      paras.push(trimmed);
      continue;
    }
    buffer.push(trimmed);
  }
  flush();

  return paras.join('\n');
}

export default function FromTheDeskPost() {
  const { slug } = useParams<{ slug: string }>();
  const memo = getMemoBySlug(slug);

  if (!memo) {
    return (
      <div className="container-narrow">
        <p className="text-cream-200">Memo not found.</p>
        <Link to="/from-the-desk" className="text-gold-400">← Back to From the Desk</Link>
      </div>
    );
  }

  const html = renderMarkdown(memo.body);

  return (
    <article className="container-reading">
      <Link to="/from-the-desk" className="text-gold-400 text-sm">← All issues</Link>

      <header className="mt-6 mb-12">
        <div className="ring-ring mb-3">Issue {memo.issue} · {memo.date}</div>
        <h1 className="font-serif text-5xl text-cream-50 mb-4">{memo.title}</h1>
        <span className="deed-tag">{memo.ddeed}</span>
      </header>

      <div
        className="prose-mr-d"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      <footer className="mt-16 pt-8 border-t border-ink-700">
        <p className="signature text-lg mb-2">— Mr. Defendable</p>
        <p className="text-ink-500 text-sm">{memo.date}</p>
        <div className="mt-6 text-xs text-ink-500 font-mono">
          DDEED-anchored on Hedera HCS topic 0.0.10291838 · streetledger.eth/media/post/{memo.slug}/
        </div>
      </footer>
    </article>
  );
}
