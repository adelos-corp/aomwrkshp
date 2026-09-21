import Link from "next/link";

const steps = [
  ["01", "Imagine", "Start with an idea."],
  ["02", "Prompt", "Give the idea direction."],
  ["03", "Design", "Turn thought into form."],
  ["04", "Build", "Make it work."],
  ["05", "Refine", "Notice. Fix. Repeat."],
  ["06", "Make", "Leave with something real."],
];

const learning = [
  ["Prompt Engineering", "Learn to communicate with AI clearly, creatively, and intentionally."],
  ["Web UI Design", "Learn the visual language behind interfaces that feel considered."],
  ["Vibe Coding", "Build working websites by collaborating with AI instead of starting from a blank file."],
];

export default function Home() {
  return (
    <main className="site">
      <nav className="nav">
        <div className="mark">THE ART OF MAKING</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#journey">Journey</a>
          <a href="#learn">Learn</a>
          <Link className="nav-login" href="/login">Login</Link>
        </div>
      </nav>

      <section className="hero">
        <div>
          <div className="kicker">AI · UI · CODE · CREATION</div>
          <h1>The Art<br />of Making.</h1>
        </div>
        <div className="hero-copy">
          <p>From imagination to interface. A hands-on workshop for turning ideas into digital experiences with AI.</p>
          <Link className="cta" href="/register">Join the workshop</Link>
        </div>
        <div className="hero-art" aria-hidden="true"><div className="orbit" /></div>
      </section>

      <section className="section" id="about">
        <div className="section-grid">
          <div className="eyebrow">01 / About</div>
          <div>
            <h2>You don't need to know everything. You need an idea.</h2>
            <p className="lead">The Art of Making introduces you to a different way of creating on the web: think first, prompt with intent, design deliberately, and build alongside AI.</p>
          </div>
        </div>
      </section>

      <section className="section" id="journey">
        <div className="section-grid">
          <div className="eyebrow">02 / Journey</div>
          <div>
            <h2>One idea. Six movements.</h2>
            <div className="journey">
              {steps.map(([num, title, copy]) => (
                <div className="step" key={num}>
                  <div className="step-num">{num}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="learn">
        <div className="section-grid">
          <div className="eyebrow">03 / Learn</div>
          <div>
            <h2>Three ways to make.</h2>
            <div className="learn-grid">
              {learning.map(([title, copy], i) => (
                <article className="learn-card" key={title}>
                  <div className="step-num">0{i + 1}</div>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section final">
        <div className="kicker">04 / Begin</div>
        <h2>You already have the idea.<br />Now make it.</h2>
        <div><Link className="cta" href="/register">Register for The Art of Making</Link></div>
      </section>

      <footer className="footer">
        <span>THE ART OF MAKING</span>
        <span>© 2026</span>
      </footer>
    </main>
  );
}