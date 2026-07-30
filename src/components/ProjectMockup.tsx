import { Project } from "@/lib/data";

export default function ProjectMockup({ type }: { type: Project["mockup"] }) {
  switch (type) {
    case "fidapp":
      return (
        <div className="mock mock-fidapp">
          <div className="mock-qr">
            <svg width="72" height="72" viewBox="0 0 60 60" aria-hidden="true">
              <rect x="6" y="6" width="14" height="14" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
              <rect x="40" y="6" width="14" height="14" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
              <rect x="6" y="40" width="14" height="14" fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth="3" />
              <rect x="10" y="10" width="6" height="6" fill="rgba(255,255,255,0.55)" />
              <rect x="44" y="10" width="6" height="6" fill="rgba(255,255,255,0.55)" />
              <rect x="10" y="44" width="6" height="6" fill="rgba(255,255,255,0.55)" />
              <rect x="28" y="6" width="4" height="4" fill="rgba(255,255,255,0.4)" />
              <rect x="34" y="14" width="4" height="4" fill="rgba(255,255,255,0.4)" />
              <rect x="24" y="24" width="4" height="4" fill="rgba(255,255,255,0.4)" />
              <rect x="30" y="30" width="4" height="4" fill="rgba(255,255,255,0.4)" />
              <rect x="40" y="28" width="4" height="4" fill="rgba(255,255,255,0.4)" />
              <rect x="24" y="40" width="4" height="4" fill="rgba(255,255,255,0.4)" />
              <rect x="46" y="40" width="4" height="4" fill="rgba(255,255,255,0.4)" />
              <rect x="34" y="46" width="4" height="4" fill="rgba(255,255,255,0.4)" />
            </svg>
          </div>
          <div className="mock-stats">
            <div className="mock-card"><span className="mock-stat-val">128</span><span className="mock-pill">VISITES CE MOIS</span></div>
            <div className="mock-card"><span className="mock-stat-val" style={{ color: "var(--teal)" }}>42</span><span className="mock-pill">POINTS FIDÉLITÉ</span></div>
          </div>
        </div>
      );
    case "erd":
      return (
        <div className="mock mock-erd">
          <div className="erd-table" style={{ top: 2, left: 4 }}>
            <div className="erd-head">Ventes</div>
            <div className="erd-row"></div><div className="erd-row"></div><div className="erd-row" style={{ width: "60%" }}></div>
          </div>
          <div className="erd-table" style={{ top: 58, left: 96 }}>
            <div className="erd-head">Stock</div>
            <div className="erd-row"></div><div className="erd-row" style={{ width: "70%" }}></div>
          </div>
          <div className="erd-table" style={{ top: 2, left: 182 }}>
            <div className="erd-head">CRM</div>
            <div className="erd-row"></div><div className="erd-row" style={{ width: "50%" }}></div>
          </div>
          <svg className="erd-lines" viewBox="0 0 260 120" aria-hidden="true">
            <line x1="70" y1="34" x2="120" y2="70" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
            <line x1="180" y1="70" x2="220" y2="34" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
          </svg>
        </div>
      );
    case "pos":
      return (
        <div className="mock mock-pos">
          <div className="mock-card">
            <div className="mock-row"><span className="mock-pill">Filtre à huile</span><span className="mock-pill">89 MAD</span></div>
            <div className="mock-row"><span className="mock-pill">Plaquettes frein</span><span className="mock-pill">240 MAD</span></div>
            <div className="mock-row"><span className="mock-pill">Batterie 60Ah</span><span className="mock-pill">620 MAD</span></div>
            <div className="mock-row total"><span className="mock-pill" style={{ color: "var(--text)", fontWeight: 600 }}>TOTAL</span><span className="mock-pill" style={{ color: "var(--amber)", fontWeight: 600 }}>949 MAD</span></div>
          </div>
          <div className="mock-btn" style={{ background: "var(--teal)", color: "var(--ink)", marginTop: 8 }}>Payer</div>
        </div>
      );
    case "video":
      return (
        <div className="mock mock-video">
          <div className="mock-video-frame"><div className="mock-avatar"></div></div>
          <div className="mock-video-controls">
            <span className="mock-ctrl"></span><span className="mock-ctrl end"></span><span className="mock-ctrl"></span>
          </div>
        </div>
      );
    case "geo":
      return (
        <div className="mock mock-geo">
          <div className="mock-row" style={{ gap: 10 }}>
            <div className="mock-pin">
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2C7.6 2 4 5.6 4 10c0 6 8 12 8 12s8-6 8-12c0-4.4-3.6-8-8-8z" fill="var(--teal)" opacity="0.85" />
                <circle cx="12" cy="10" r="3" fill="var(--ink)" />
              </svg>
            </div>
            <span className="mock-pill">Zone Chantier — Casablanca</span>
          </div>
          <div className="mock-card" style={{ marginTop: 10 }}>
            <div className="mock-row"><span className="mock-pill">Yassine B.</span><span className="mock-pill" style={{ color: "var(--teal)" }}>08:02 ✓</span></div>
            <div className="mock-row"><span className="mock-pill">Salma K.</span><span className="mock-pill" style={{ color: "var(--teal)" }}>08:11 ✓</span></div>
            <div className="mock-row"><span className="mock-pill">Karim T.</span><span className="mock-pill" style={{ color: "var(--muted-2)" }}>— absent</span></div>
          </div>
        </div>
      );
    case "table-bi":
      return (
        <div className="mock mock-table">
          <div className="mock-row mock-thead"><span className="mock-bar" style={{ width: "35%" }}></span><span className="mock-bar" style={{ width: "25%" }}></span><span className="mock-bar" style={{ width: "20%" }}></span></div>
          <div className="mock-row"><span className="mock-cell" style={{ flex: "0 0 35%" }}></span><span className="mock-cell" style={{ flex: "0 0 25%" }}></span><span className="mock-cell dot" style={{ background: "var(--teal)" }}></span></div>
          <div className="mock-row"><span className="mock-cell" style={{ flex: "0 0 35%" }}></span><span className="mock-cell" style={{ flex: "0 0 25%" }}></span><span className="mock-cell dot" style={{ background: "var(--amber)" }}></span></div>
          <div className="mock-row"><span className="mock-cell" style={{ flex: "0 0 35%" }}></span><span className="mock-cell" style={{ flex: "0 0 25%" }}></span><span className="mock-cell dot" style={{ background: "var(--teal)" }}></span></div>
        </div>
      );
    case "table-gestipro":
      return (
        <div className="mock mock-table">
          <div className="mock-tabs"><span className="mock-tab active">Restaurants</span><span className="mock-tab">Stock</span></div>
          <div className="mock-row"><span className="mock-cell" style={{ flex: "0 0 40%" }}></span><span className="mock-cell" style={{ flex: "0 0 30%" }}></span><span className="mock-cell dot" style={{ background: "var(--amber)" }}></span></div>
          <div className="mock-row"><span className="mock-cell" style={{ flex: "0 0 40%" }}></span><span className="mock-cell" style={{ flex: "0 0 30%" }}></span><span className="mock-cell dot" style={{ background: "var(--muted-2)" }}></span></div>
        </div>
      );
    default:
      return null;
  }
}
