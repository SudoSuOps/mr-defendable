import { type ReactNode } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NAV_LINKS: Array<{ to: string; label: string }> = [
  { to: '/from-the-desk', label: 'From the Desk' },
  { to: '/flight-sheets', label: 'Flight Sheets' },
  { to: '/tribunal', label: 'Tribunal' },
  { to: '/street-ledger', label: 'Street Ledger' },
  { to: '/defend-a-pedia', label: 'Defend-A-Pedia' },
  { to: '/board-room', label: 'Board Room' },
  { to: '/assignments', label: 'Assignments' },
  { to: '/request-proposal', label: 'Request Proposal' },
];

export default function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <div className="min-h-screen flex flex-col bg-ink-900 text-cream-100">
      <header className="border-b border-ink-700">
        <div className="container-wide py-5 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="text-gold-400 font-mono uppercase tracking-widest text-xs">
              ring ring
            </span>
            <span className="font-serif text-2xl text-cream-50 group-hover:text-gold-300 transition-colors">
              Mr. Defendable
            </span>
          </Link>
          <nav className="ml-auto flex flex-wrap items-center gap-x-5 gap-y-1 text-sm">
            {NAV_LINKS.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive
                      ? 'text-gold-400'
                      : 'text-cream-200 hover:text-gold-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className={`flex-1 ${isHome ? '' : 'py-12'}`}>{children}</main>

      <footer className="border-t border-ink-700 mt-16">
        <div className="container-wide py-10 grid gap-8 md:grid-cols-3 text-sm text-cream-200">
          <div>
            <div className="font-serif text-lg text-cream-50 mb-2">Mr. Defendable</div>
            <p className="text-ink-500 leading-relaxed">
              Commissioner of Accountable AI Execution · public guardian of the
              DefendableOS League. The Commissioner protects the standard · the
              referees call the game · the human owner grants finality.
              Ring ring — Mr. Defendable speaking.
            </p>
          </div>
          <div>
            <div className="font-mono uppercase tracking-widest text-xs text-gold-400 mb-3">
              The Defense Stack
            </div>
            <ul className="space-y-1">
              <li><a href="https://defendableos.com" className="hover:text-gold-300">defendableos.com · the system</a></li>
              <li><a href="https://offensetotheshed.com" className="hover:text-gold-300">offensetotheshed.com · the doctrine</a></li>
              <li><a href="https://painintheshed.com" className="hover:text-gold-300">painintheshed.com · the podcast</a></li>
              <li className="text-gold-300">mrdefendable.com · the face</li>
            </ul>
          </div>
          <div>
            <div className="font-mono uppercase tracking-widest text-xs text-gold-400 mb-3">
              Books & Records
            </div>
            <ul className="space-y-1 font-mono text-xs">
              <li><span className="text-ink-500">defendapedia.eth</span> · vocabulary</li>
              <li><span className="text-ink-500">streetvocab.eth</span> · asset</li>
              <li><span className="text-ink-500">streetledger.eth</span> · records</li>
              <li><span className="text-ink-500">streetchat.eth</span> · intake</li>
              <li className="pt-2"><span className="text-ink-500">Hedera HCS</span> · 0.0.10291838</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ink-700">
          <div className="container-wide py-4 flex flex-wrap items-center justify-between text-xs text-ink-500">
            <span>© 2026 Swarm and Bee LLC · Mr. Defendable</span>
            <span className="signature">To the shed. 🐝</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
