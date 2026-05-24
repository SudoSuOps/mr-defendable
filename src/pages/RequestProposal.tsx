import { useState } from 'react';

export default function RequestProposal() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="container-narrow text-center py-16">
        <div className="ring-ring mb-3">Intake received</div>
        <h1 className="font-serif text-4xl text-cream-50 mb-4">Standing by.</h1>
        <p className="text-cream-200 max-w-xl mx-auto mb-6">
          Mr. Defendable reviews intake within 24 hours and either makes the
          dial or passes cleanly with referrals. PASS doctrine applies.
        </p>
        <p className="signature">To the shed.</p>
      </div>
    );
  }

  return (
    <div className="container-narrow">
      <div className="ring-ring mb-3">Request a Proposal</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">Make the dial.</h1>
      <p className="text-cream-200 text-lg max-w-2xl mb-4 leading-relaxed">
        Principal-direct contact. Not a chat widget · not a generic contact
        form. Bring the math. Specific qualification questions. PASS doctrine
        applied at intake.
      </p>
      <p className="text-ink-500 text-sm mb-12">
        24-hour response SLA. We either engage or refer cleanly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6 mb-16">
        <Field name="principal" label="Who is the principal contact" placeholder="Name + role" />
        <Field name="entity" label="What is the asset or engagement" placeholder="1–2 sentences" textarea />
        <Field name="timeline" label="What is the timeline pressure" placeholder="Days · weeks · months" />
        <Field name="budget" label="What is the budget reality" placeholder="Range or band" />
        <Field name="trigger" label="What is the trigger event" placeholder="Incident · regulatory · M&A · etc." />
        <Field name="channel" label="How did you find Mr. Defendable" placeholder="Channel · referrer · podcast · etc." />

        <button
          type="submit"
          className="px-6 py-3 bg-gold-500 text-ink-900 font-medium rounded hover:bg-gold-400 transition-colors"
        >
          Submit · standing by
        </button>
      </form>

      <div className="border-t border-ink-700 pt-8 text-sm text-ink-500">
        <p className="mb-2">
          Direct email: <span className="font-mono text-gold-400">build@defendableos.com</span>
        </p>
        <p>
          All intake routed through Resend → Proton inbox. Confidentiality maintained throughout.
        </p>
      </div>
    </div>
  );
}

function Field({
  name,
  label,
  placeholder,
  textarea,
}: {
  name: string;
  label: string;
  placeholder?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-cream-200 text-sm mb-2">{label}</span>
      {textarea ? (
        <textarea
          name={name}
          placeholder={placeholder}
          rows={3}
          required
          className="w-full px-4 py-3 bg-ink-800 border border-ink-600 rounded text-cream-100 placeholder:text-ink-500 focus:border-gold-500 focus:outline-none transition-colors"
        />
      ) : (
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          required
          className="w-full px-4 py-3 bg-ink-800 border border-ink-600 rounded text-cream-100 placeholder:text-ink-500 focus:border-gold-500 focus:outline-none transition-colors"
        />
      )}
    </label>
  );
}
