import { Link } from 'react-router-dom';
import { FIVE_CONTROLS, FIVE_PROOFS } from '../data/proofs';
import { MEMOS } from '../data/memos';

const DOCTRINE: Array<{ title: string; body: string }> = [
  { title: 'The Rules Exist Before the Play', body: 'Every mission begins with a written flightsheet and a locked rulebook.' },
  { title: 'Completion Is Not Approval', body: 'An agent finishing the assignment does not mean the work is trusted, publishable or ready to train.' },
  { title: 'The Tape Must Be Visible', body: 'Material outputs should be attributable through receipts, hashes, sources, calculations and replay findings.' },
  { title: 'The Referees Stay Neutral', body: 'Referees apply code, math and evidence rules. They do not care which agent or model wins.' },
  { title: 'Good Plays Receive Credit', body: 'Accountability is not only punishment. Correct execution should be visible and preserved.' },
  { title: 'Drift Receives a Flag', body: 'Broken math, impossible dates, weak-source promotion, hidden substitutions and synthesis overrides must be exposed.' },
  { title: 'The Human Owns Finality', body: 'No model, commissioner or automated system may replace the human decision-maker.' },
];

const LEAGUE: Array<{ role: string; name: string; body: string }> = [
  { role: 'Commissioner', name: 'Mr. Defendable', body: 'Protects the public standard and explains the rules of accountable AI execution.' },
  { role: 'Protocol', name: 'DefendableOS', body: 'Defines the flightsheets, locked rulebooks, referee logic and human-finality boundaries.' },
  { role: 'Field', name: 'DefendableCloud', body: 'Runs accountable AI missions on known, operator-owned compute with preserved receipts.' },
  { role: 'Replay Console', name: "Owner's Box", body: 'Shows the human what happened, what passed, what failed and what must be repaired.' },
  { role: 'Referee Crew', name: 'Neutral Controls', body: 'Applies neutral math, chronology, source, provenance, boundary and synthesis checks.' },
  { role: 'Game Tape', name: 'Preserved Evidence', body: 'Preserves mission evidence, execution receipts, findings and remediation history.' },
];

const REFEREES: Array<{ name: string; body: string }> = [
  { name: 'Math Referee', body: 'Does the calculation reconcile? Do totals, percentages and structured ledgers balance?' },
  { name: 'Chronology Referee', body: 'Could the claimed work and the cited evidence exist in the recorded order?' },
  { name: 'Roster Referee', body: 'Which agents, models or synthesis layers actually touched the mission?' },
  { name: 'Provenance Referee', body: 'Does the source quality support the strength of the claim?' },
  { name: 'Replay Referee', body: 'Did final synthesis preserve correct underlying work or corrupt it?' },
  { name: 'Boundary Referee', body: 'Was approval, publication, certification or finality claimed without authority?' },
  { name: 'Receipt Referee', body: 'Was the material evidence preserved, attributable and traceable?' },
];

const BULLETINS: Array<{ n: string; body: string }> = [
  { n: '001', body: 'A completed mission is not an approved mission.' },
  { n: '002', body: 'A source can support only the claim strength it earns.' },
  { n: '003', body: 'If the ledger does not balance, the play does not stand.' },
  { n: '004', body: 'No replay, no training.' },
  { n: '005', body: 'The human owner alone grants finality.' },
];

const ECOSYSTEM: Array<{ name: string; body: string; cta: string; href: string }> = [
  { name: 'DefendableOS', body: 'The protocol for neutral AI accountability.', cta: 'Read the Protocol', href: 'https://defendableos.com' },
  { name: 'DefendableCloud', body: 'The mission execution field on known compute.', cta: 'Run a Mission', href: 'https://defendablecloud.com' },
  { name: "Owner's Box", body: 'The human replay and finality console.', cta: 'Review the Tape', href: 'https://defendableos.com/owners-box' },
  { name: 'Replay-Qualified Training', body: 'Guidance earned only after execution survives review.', cta: 'Learn What Gets Trained', href: 'https://defendableos.com' },
];

export default function Home() {
  const latestMemos = MEMOS.slice(0, 2);

  return (
    <div className="bg-ink-900">
      {/* ── Hero · Commissioner positioning (warmth preserved) ── */}
      <section className="border-b border-ink-700">
        <div className="container-wide py-24">
          <div className="ring-ring mb-6">MR. DEFENDABLE — COMMISSIONER OF ACCOUNTABLE AI EXECUTION</div>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight text-cream-50 mb-6">
            Every AI Agent Can Play. Every Mission Must Survive Replay.
          </h1>
          <p className="text-xl md:text-2xl text-cream-200 max-w-3xl leading-relaxed mb-6">
            Ring ring — Mr. Defendable speaking. Public guardian of the
            DefendableOS League: a standard where agents work under written
            flightsheets, locked rulebooks, recorded game tape and neutral
            referee calls — while human owners retain final authority.
            <span className="signature"> To the shed.</span>
          </p>
          <p className="text-base text-cream-200/80 max-w-3xl leading-relaxed mb-10">
            The Commissioner protects the standard. The referees call the game.
            The human owner grants finality.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/request-proposal"
              className="inline-block px-6 py-3 bg-gold-500 text-ink-900 font-medium rounded hover:bg-gold-400 transition-colors"
            >
              Enter the League
            </Link>
            <Link
              to="/flight-sheets"
              className="inline-block px-6 py-3 border border-gold-700 text-gold-400 rounded hover:bg-gold-900/30 transition-colors"
            >
              Read the Rulebook
            </Link>
          </div>
        </div>
      </section>

      {/* ── Meet Mr. Defendable ── */}
      <section className="border-b border-ink-700">
        <div className="container-wide py-16">
          <div className="ring-ring mb-3">Meet Mr. Defendable</div>
          <h2 className="font-serif text-3xl md:text-4xl text-cream-50 mb-2">
            Commissioner of the DefendableOS League
          </h2>
          <div className="grid md:grid-cols-2 gap-10 mt-8">
            <div className="space-y-4 text-cream-200 leading-relaxed">
              <p>
                AI agents are stepping into real jobs, real decisions and real
                consequences. Mr. Defendable represents a simple standard: no
                agent should be trusted because its output sounds confident, and
                no model should decide finality by opinion alone.
              </p>
              <p>
                In the DefendableOS League, every assignment begins with visible
                rules. Every material execution leaves game tape. Neutral
                referees call what the evidence proves. The human owner decides
                what is approved, rejected, repaired or eligible to train next.
              </p>
            </div>
            <div className="space-y-2 text-cream-200 leading-relaxed">
              <p>Mr. Defendable does not choose the winner.</p>
              <p>He does not overrule the tape.</p>
              <p>He does not approve missions by opinion.</p>
              <p className="text-cream-50 font-serif text-xl pt-2">
                He protects the standard that makes accountable AI possible.
              </p>
            </div>
          </div>
          <div className="mt-10 border-l-2 border-gold-700 pl-5">
            <p className="font-serif text-2xl text-cream-50">
              Every agent deserves a fair field. Every human deserves a truthful scoreboard.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Commissioner's Doctrine ── */}
      <section className="border-b border-ink-700 bg-ink-800/50">
        <div className="container-wide py-16">
          <div className="ring-ring mb-3">The Commissioner's Doctrine</div>
          <h2 className="font-serif text-3xl text-cream-50 mb-8">
            Seven principles · before any play stands
          </h2>
          <ol className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCTRINE.map((d, i) => (
              <li key={d.title} className="border border-ink-700 rounded-lg p-6">
                <div className="font-mono text-xs text-gold-400 mb-2">0{i + 1}</div>
                <h3 className="font-serif text-lg text-cream-50 mb-2">{d.title}</h3>
                <p className="text-sm text-cream-200 leading-relaxed">{d.body}</p>
              </li>
            ))}
          </ol>
          <p className="signature text-lg mt-8">
            No Replay, No Training. No Proof, No Promotion. No Human Approval, No Finality.
          </p>
        </div>
      </section>

      {/* ── The League ── */}
      <section className="border-b border-ink-700">
        <div className="container-wide py-16">
          <div className="ring-ring mb-3">The DefendableOS League</div>
          <h2 className="font-serif text-3xl text-cream-50 mb-4">
            An accountability framework — not a sports league
          </h2>
          <p className="text-cream-200 leading-relaxed max-w-3xl mb-8">
            The DefendableOS League is an accountability framework for AI agent
            execution. Agents and models can participate across any domain, but
            their work is governed by the same fundamental standard: written
            missions, precommitted rules, preserved evidence, neutral calls and
            human finality.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LEAGUE.map(item => (
              <div key={item.role} className="border border-ink-700 rounded-lg p-6">
                <div className="font-mono text-xs text-gold-400 mb-2">{item.role}</div>
                <h3 className="font-serif text-xl text-cream-50 mb-2">{item.name}</h3>
                <p className="text-sm text-cream-200 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="text-cream-200/80 italic mt-8 max-w-3xl">
            This league is not about making one model look better than another.
            It is about making execution visible before trust is granted.
          </p>
        </div>
      </section>

      {/* ── The Referee Crew ── */}
      <section className="border-b border-ink-700 bg-ink-800/50">
        <div className="container-wide py-16">
          <div className="ring-ring mb-3">Neutral Referees · Visible Calls</div>
          <h2 className="font-serif text-3xl text-cream-50 mb-4">
            Mr. Defendable is the Commissioner — not the officiating crew
          </h2>
          <p className="text-cream-200 leading-relaxed max-w-3xl mb-8">
            The credibility of the league depends on referees that apply rules
            consistently and show their calls.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REFEREES.map(r => (
              <div key={r.name} className="border-l-2 border-gold-700 pl-4">
                <div className="font-serif text-lg text-cream-50 mb-1">{r.name}</div>
                <p className="text-sm text-cream-200 leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
          <p className="signature text-lg mt-8">
            A referee does not need an opinion when the scoreboard already fails the math.
          </p>
        </div>
      </section>

      {/* ── Owner's Box ── */}
      <section className="border-b border-ink-700">
        <div className="container-wide py-16">
          <div className="ring-ring mb-3">Owner's Box</div>
          <h2 className="font-serif text-3xl text-cream-50 mb-4">
            The human owner watches from the box
          </h2>
          <p className="text-cream-200 leading-relaxed max-w-3xl mb-6">
            AI work should not arrive as a polished final report with hidden
            failures. Owner's Box gives the human a visible replay of the mission:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-2 max-w-3xl text-cream-200">
            {[
              'the assignment called',
              'the agents on the field',
              'the receipts preserved',
              'the credited execution',
              'the penalties called',
              'the claims that survived',
              'the work returned for remediation',
              'the locked approval and publication boundary',
            ].map(item => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-gold-400 mt-1">·</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-1 text-cream-200">
            <p>Mr. Defendable protects the standard.</p>
            <p>Owner's Box gives the human the view.</p>
            <p className="text-cream-50 font-serif text-xl">The human owner makes the final call.</p>
          </div>
          <div className="mt-8">
            <a
              href="https://defendableos.com/owners-box"
              className="inline-block px-6 py-3 bg-gold-500 text-ink-900 font-medium rounded hover:bg-gold-400 transition-colors"
            >
              Open the Owner's Box
            </a>
          </div>
        </div>
      </section>

      {/* ── Agents need a league, not hype ── */}
      <section className="border-b border-ink-700 bg-ink-800/50">
        <div className="container-wide py-16">
          <h2 className="font-serif text-3xl text-cream-50 mb-4">
            Agents Do Not Need Hype. They Need a League.
          </h2>
          <p className="text-cream-200 leading-relaxed max-w-3xl mb-4">
            A public benchmark may show what a model can answer in a controlled
            setting. Accountable execution shows what an agent actually does when
            given real work, real constraints, real evidence requirements and
            real consequences.
          </p>
          <p className="text-cream-200 leading-relaxed max-w-3xl mb-6">The DefendableOS League is built to observe:</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-2 max-w-4xl text-cream-200 mb-6">
            {[
              'instruction compliance',
              'calculation integrity',
              'source discipline',
              'chronology integrity',
              'synthesis restraint',
              'boundary compliance',
              'remediation behavior',
              'trust earned over recorded missions',
            ].map(item => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-gold-400 mt-1">·</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="signature text-lg">
            Not another leaderboard. A recorded professional standard for agent behavior.
          </p>
        </div>
      </section>

      {/* ── The Agent Combine (concept) ── */}
      <section className="border-b border-ink-700">
        <div className="container-wide py-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="ring-ring">The Agent Combine</span>
            <span className="deed-tag">Protocol Concept</span>
          </div>
          <h2 className="font-serif text-3xl text-cream-50 mb-4">
            Before an agent is trusted, it should run the playbook
          </h2>
          <p className="text-cream-200 leading-relaxed max-w-3xl mb-6">
            The Agent Combine evaluates how an agent behaves under accountable
            assignments:
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-2 max-w-3xl text-cream-200">
            {[
              'Can it follow the flightsheet?',
              'Can it keep its math clean?',
              'Can it preserve source boundaries?',
              'Can it admit what it does not know?',
              'Can it avoid claiming approval it does not possess?',
              'Can its work survive replay?',
            ].map(q => (
              <li key={q} className="flex items-start gap-2">
                <span className="text-gold-400 mt-1">·</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
          <p className="signature text-lg mt-8">
            Models may come and go. Recorded performance becomes the scouting report.
          </p>
        </div>
      </section>

      {/* ── Commissioner's Bulletins ── */}
      <section className="border-b border-ink-700 bg-ink-800/50">
        <div className="container-wide py-16">
          <div className="ring-ring mb-3">Commissioner's Bulletins</div>
          <h2 className="font-serif text-3xl text-cream-50 mb-8">
            Protocol doctrine · posted from the desk
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BULLETINS.map(b => (
              <div key={b.n} className="border border-ink-700 rounded-lg p-6">
                <div className="font-mono text-xs text-gold-400 mb-2">Bulletin {b.n}</div>
                <p className="font-serif text-lg text-cream-50 leading-snug">{b.body}</p>
              </div>
            ))}
          </div>
          <p className="text-cream-200/70 text-sm mt-6 max-w-3xl">
            These are DefendableOS protocol doctrine — not regulatory rules or legal standards.
          </p>
        </div>
      </section>

      {/* ── Connect the ecosystem ── */}
      <section className="border-b border-ink-700">
        <div className="container-wide py-16">
          <div className="ring-ring mb-3">Enter the Defendable Ecosystem</div>
          <h2 className="font-serif text-3xl text-cream-50 mb-8">
            One standard · across the stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ECOSYSTEM.map(e => (
              <div key={e.name} className="border border-ink-700 rounded-lg p-6 flex flex-col">
                <h3 className="font-serif text-xl text-cream-50 mb-2">{e.name}</h3>
                <p className="text-sm text-cream-200 leading-relaxed mb-4 flex-1">{e.body}</p>
                <a href={e.href} className="text-gold-400 hover:text-gold-300 text-sm">
                  {e.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Existing persona: defense / trust / operator advisory (preserved) ── */}
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

      {/* ── Final CTA · Welcome to the League ── */}
      <section className="container-wide py-20 text-center">
        <div className="ring-ring mb-3">Welcome to the League</div>
        <h2 className="font-serif text-4xl text-cream-50 mb-4">
          AI agents are going to do real work.
        </h2>
        <p className="text-cream-200 mb-8 max-w-2xl mx-auto leading-relaxed">
          The question is no longer whether they can generate output. The
          question is whether their execution can survive visible rules, neutral
          calls and human review. Mr. Defendable stands for that standard.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/flight-sheets"
            className="inline-block px-8 py-4 bg-gold-500 text-ink-900 font-medium rounded hover:bg-gold-400 transition-colors text-lg"
          >
            Read the Rulebook
          </Link>
          <a
            href="https://defendableos.com"
            className="inline-block px-8 py-4 border border-gold-700 text-gold-400 rounded hover:bg-gold-900/30 transition-colors text-lg"
          >
            Explore DefendableOS
          </a>
        </div>
        <p className="signature text-lg mt-8">
          The tape speaks. The referees call it. The human decides. · To the shed.
        </p>
      </section>
    </div>
  );
}
