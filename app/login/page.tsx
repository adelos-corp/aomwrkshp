import Link from "next/link";

export default function Login() {
  return (
    <main className="site">
      <nav className="nav" style={{ position: "static" }}>
        <div className="mark">THE ART OF MAKING</div>
        <Link className="nav-login" href="/">Back</Link>
      </nav>
      <section className="section" style={{ minHeight: "80vh" }}>
        <div className="section-grid">
          <div className="eyebrow">Workshop access</div>
          <div>
            <h2>Welcome back.</h2>
            <p className="lead">Sign in to reach your workshop space.</p>
            <form style={{ maxWidth: 460, display: "grid", gap: 14, marginTop: 36 }}>
              <input placeholder="Email" type="email" required style={{ padding: 16, borderRadius: 12, border: "1px solid var(--line)", background: "transparent" }} />
              <input placeholder="Password" type="password" required style={{ padding: 16, borderRadius: 12, border: "1px solid var(--line)", background: "transparent" }} />
              <button className="cta" style={{ border: 0, cursor: "pointer", justifyContent: "center" }}>Sign in</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}