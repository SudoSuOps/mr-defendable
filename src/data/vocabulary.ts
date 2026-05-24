export type VocabTerm = {
  slug: string;
  term: string;
  category: string;
  one_liner: string;
};

// Subset of the 62+ DDEED-VOCAB terms surfaced on the public face.
// Full canon lives at defendapedia.eth + github.com/SudoSuOps/defend-A-pedia--vocabulary
export const VOCAB_TERMS: VocabTerm[] = [
  { slug: 'probability-of-close', term: 'Probability of Close', category: 'CRE', one_liner: 'Operator read on whether a deal will actually close · NOT a conversion rate.' },
  { slug: 'deal-energy', term: 'Deal Energy', category: 'CRE', one_liner: 'Pre-meeting principal read · the temperature of a mandate before you walk in.' },
  { slug: 'books-and-records', term: 'Books and Records', category: 'CRE', one_liner: 'The permanent audit trail · CRE underwriting + securities law origin · NOT just audit logs.' },
  { slug: 'flight-sheet', term: 'Flight Sheet', category: 'CRE', one_liner: 'Broker pre-market analysis · NOT a pitch deck.' },
  { slug: 'class-a-5-cap', term: 'Class A 5-Cap', category: 'CRE', one_liner: 'Premium asset · highest-quality mandate · top-tier discipline applies.' },
  { slug: 'magic-funnel', term: 'MAGIC Funnel', category: 'CRE', one_liner: 'Meetings · Appraisals · Genuine interest · Ink · Close. The operator sales funnel.' },
  { slug: 'rave', term: 'RAVE', category: 'Operator', one_liner: 'Respect · Value · Appreciate Everyone. Not soft · top 1% trained to win.' },
  { slug: 'pass-doctrine', term: 'PASS Doctrine', category: 'Operator', one_liner: 'Refuse fantasy mandates. Let competitors burn the seller. Come in clean after.' },
  { slug: 'honey', term: 'Honey', category: 'Tribunal', one_liner: 'Tribunal tier · approved-with-confidence AI output.' },
  { slug: 'royal-jelly', term: 'Royal Jelly', category: 'Tribunal', one_liner: 'Tribunal apex tier · ≥0.85 score · feeds training corpus.' },
  { slug: 'jelly', term: 'Jelly', category: 'Tribunal', one_liner: 'Tribunal repair-candidate tier · SwarmFixer eligible.' },
  { slug: 'propolis', term: 'Propolis', category: 'Tribunal', one_liner: 'Tribunal walk-away tier · <0.70 · do not ship.' },
  { slug: 'validator-weight', term: 'Validator Weight', category: 'Scoring', one_liner: 'Operator-trust scoring · NOT a confidence interval.' },
  { slug: 'trust-temperature', term: 'Trust Temperature', category: 'Scoring', one_liner: 'Deal-flow risk read · low/medium/high · NOT a risk score.' },
  { slug: 'cost-to-mint', term: 'Cost to Mint', category: 'Economics', one_liner: 'What one trusted AI artifact actually costs · compute + review + validator + storage + energy + retries + repair + deed.' },
  { slug: 'jr-hack', term: 'Jr Hack', category: 'Origin', one_liner: 'Career stage · early-career operator · grinding at low net-rate.' },
  { slug: 'sr-hack', term: 'Sr Hack', category: 'Origin', one_liner: 'Split partner · senior who takes the larger commission share.' },
  { slug: 'the-6am-raise', term: 'The 6am Raise', category: 'Origin', one_liner: 'False-raise pattern · MORE HOURS sold as a RAISE · the manager-trap.' },
  { slug: 'bring-the-math', term: 'Bring the Math', category: 'Origin', one_liner: 'Operator discipline · only ask with receipts · only count with numbers.' },
  { slug: 'hunt-his-seat', term: 'Hunt His Seat', category: 'Origin', one_liner: 'The operator move · become the manager via better math · NOT promotion.' },
  { slug: 'my-math-is-better-than-his', term: 'My Math Is Better Than His', category: 'Origin', one_liner: 'The realization moment · when a jr operator sees the better-seat math.' },
  { slug: 'to-the-shed', term: 'To the Shed', category: 'Operator', one_liner: 'Deals close · no loose ends · execution discipline · the operator close-out.' },
];

export const VOCAB_CATEGORIES = ['Origin', 'CRE', 'Operator', 'Tribunal', 'Scoring', 'Economics'] as const;
