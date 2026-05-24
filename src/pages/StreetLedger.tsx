export default function StreetLedger() {
  return (
    <div className="container-wide">
      <div className="ring-ring mb-3">Street Ledger</div>
      <h1 className="font-serif text-5xl text-cream-50 mb-4">Books and Records</h1>
      <p className="text-cream-200 text-lg max-w-3xl mb-12 leading-relaxed">
        The permanent audit trail. Every deed · every receipt · every verdict ·
        anchored on Hedera mainnet topic{' '}
        <span className="font-mono text-gold-400">0.0.10291838</span> · publicly
        verifiable forever.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Counter num="8,400+" label="Deeds filed historically" />
        <Counter num="62" label="DDEED-VOCAB terms anchored (v0.3.0)" />
        <Counter num="167+" label="Merkle batches in production" />
        <Counter num="1.5M" label="Training pairs in PostgreSQL" />
        <Counter num="5,200+" label="Royal Jelly tier pairs" />
        <Counter num="4" label=".eth domains in the quartet" />
      </div>

      <h2 className="font-serif text-3xl text-cream-50 mb-6">5-Layer Finality Stack</h2>
      <div className="space-y-3 mb-12">
        <LayerRow n="L1" name="PostgreSQL" desc="Live operator database · production source of truth" />
        <LayerRow n="L2" name="Merkle root" desc="Per-snapshot hash · published with every release" />
        <LayerRow n="L3" name="NAS archive" desc="Synology DS1525+ · long-term snapshots · operator custody" />
        <LayerRow n="L4" name="Hedera HCS mainnet" desc="Topic 0.0.10291838 · immutable timestamping · public" />
        <LayerRow n="L5" name="ENS" desc="streetledger.eth · streetvocab.eth · defendapedia.eth · streetchat.eth" />
      </div>

      <div className="p-6 border border-ink-700 rounded">
        <h3 className="font-serif text-xl text-cream-50 mb-2">Verify a deed</h3>
        <p className="text-cream-200 mb-4">
          Every deed includes its Hedera transaction ID. Open{' '}
          <a href="https://hashscan.io/mainnet/topic/0.0.10291838" className="text-gold-400 hover:text-gold-300 font-mono">
            hashscan.io/mainnet/topic/0.0.10291838
          </a>
          {' '}and find any anchored record by timestamp or hash.
        </p>
        <p className="text-cream-200">
          No trust required. The chain is the proof.
        </p>
      </div>

      <div className="signature text-center mt-16 text-lg">To the shed.</div>
    </div>
  );
}

function Counter({ num, label }: { num: string; label: string }) {
  return (
    <div className="border border-ink-700 rounded p-6 text-center">
      <div className="font-serif text-4xl text-gold-300 mb-2">{num}</div>
      <div className="text-sm text-cream-200">{label}</div>
    </div>
  );
}

function LayerRow({ n, name, desc }: { n: string; name: string; desc: string }) {
  return (
    <div className="flex items-baseline gap-4 border-l-2 border-gold-700 pl-4 py-2">
      <span className="font-mono text-sm text-gold-400 w-8">{n}</span>
      <span className="font-serif text-lg text-cream-50 w-40">{name}</span>
      <span className="text-cream-200">{desc}</span>
    </div>
  );
}
