// The 14 receipted proofs from 07_QUALIFICATION_STATEMENT (DDEED-QUAL-DOS-001-v1)
// Each claim resolves to a verifiable source the board can check in 10 minutes.

export type Proof = {
  claim: string;
  source: string;
  link?: string;
};

export const RECEIPTED_PROOFS: Proof[] = [
  {
    claim: 'Vocabulary deeded as books-and-records · 62 DDEED-VOCAB anchored',
    source: 'github.com/SudoSuOps/defend-A-pedia--vocabulary · commit 833e8e1 · Merkle 2e3a665f...',
    link: 'https://github.com/SudoSuOps/defend-A-pedia--vocabulary',
  },
  {
    claim: '4 marketing surfaces aligned to the doctrine in one session',
    source: 'github.com/SudoSuOps/{defendable · defendable-cloud · defendable-router · defend-A-pedia--vocabulary}',
  },
  {
    claim: '8,400+ deeds historically filed across the platform',
    source: 'Swarm-Wiki dashboard · github.com/SudoSuOps/Swarm-Wiki',
  },
  {
    claim: '13+ trained custom models in production',
    source: 'SwarmCurator family · SwarmJelly · SwarmPharma · SwarmCapitalMarkets · SwarmMed · SwarmAviation',
  },
  {
    claim: '1.5M training pairs in production PostgreSQL',
    source: 'Swarm-Wiki Section 14 dashboard',
  },
  {
    claim: '4 .eth domains owned as institutional asset class',
    source: 'ENS public registry: defendapedia.eth · streetvocab.eth · streetledger.eth · streetchat.eth',
  },
  {
    claim: 'Hedera HCS topic 0.0.10291838 LIVE on mainnet',
    source: 'hashscan.io/mainnet/topic/0.0.10291838',
    link: 'https://hashscan.io/mainnet/topic/0.0.10291838',
  },
  {
    claim: 'Production fleet: 4 nodes · 160 GB VRAM · 342 GB system RAM',
    source: 'Swarm-Wiki Section 09 · swarmrails + whale + signal-edge-01 + zima-edge-1',
  },
  {
    claim: 'Stripe products live with revenue',
    source: 'swarmandbee.ai · 7 marketing pages · 40+ API endpoints',
  },
  {
    claim: '5-pass iterative proposal process completed in one session',
    source: 'git log on proposals/defendableos-website-app/',
  },
  {
    claim: '20+ memory entries codifying operator doctrine',
    source: 'dev\'s persistent memory system · ~150 KB of operator-doctrine artifacts',
  },
  {
    claim: '5-Rail architecture · doctrine-outward build order shipped',
    source: '03_BUILD_PROPOSAL.md · vocabulary v0.3.0 IS layer 1 already in the ground',
  },
  {
    claim: 'Engagement-model correction internalized (disposition vs vendor)',
    source: '05_EXCLUSIVE_LISTING_PROPOSAL.md · 06_REP_AGREEMENT.md · 07_QUALIFICATION_STATEMENT.md',
  },
  {
    claim: 'Qualification doctrine codified for future board diligence',
    source: 'memory entry · defendableos-qualification-doctrine-operator-lineage-2026-05-24',
  },
];

export const FIVE_CONTROLS = [
  'Control the STORY',
  'Control the BUYER POOL',
  'Control the CLOCK',
  'Control the 1031 PATH',
  'Protect the BOARD',
] as const;

export const FIVE_PROOFS = [
  { name: 'Origin', tag: 'Where it came from' },
  { name: 'Quality', tag: 'How good it is' },
  { name: 'Process', tag: 'How it got made' },
  { name: 'Economics', tag: 'What it costs' },
  { name: 'Trust', tag: 'Why you can verify it' },
] as const;
