import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-narrow text-center py-16">
      <div className="ring-ring mb-3">[ring ring]</div>
      <h1 className="font-serif text-6xl text-cream-50 mb-4">No answer.</h1>
      <p className="text-cream-200 text-lg mb-8">
        That page isn't on the desk. Try the front door.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 bg-gold-500 text-ink-900 font-medium rounded hover:bg-gold-400 transition-colors"
      >
        Back to Mr. Defendable
      </Link>
      <div className="signature text-lg mt-8">To the shed.</div>
    </div>
  );
}
