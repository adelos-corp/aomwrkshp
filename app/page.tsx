"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  ["01", "Imagine", "Start with an idea."],
  ["02", "Prompt", "Give the idea direction."],
  ["03", "Design", "Turn thought into form."],
  ["04", "Vibe Code", "Build alongside AI."],
  ["05", "Refine", "Notice. Fix. Repeat."],
  ["06", "Make", "Leave with something real."],
];

const learning = [
  ["Prompt Engineering", "Learn to communicate with AI clearly, creatively, and intentionally."],
  ["Web UI Design", "Learn the visual language behind interfaces that feel considered."],
  ["Vibe Coding", "Turn ideas and designs into working software through AI-assisted development."],
];

export default function Home() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce) return;

      const intro = gsap.timeline({ defaults: { ease: "power4.out" } });
      intro
        .from(".nav", { y: -24, opacity: 0, duration: 0.8 })
        .from(".hero-kicker", { y: 18, opacity: 0, duration: 0.6 }, "-=.35")
        .from(".hero-title-line", { yPercent: 110, duration: 1.1, stagger: 0.08 }, "-=.35")
        .from(".hero-copy > *", { y: 28, opacity: 0, duration: 0.7, stagger: 0.12 }, "-=.65")
        .from(".hero-art", { scale: 0.92, opacity: 0, duration: 1 }, "-=.8");

      gsap.to(".orbit", { rotation: 360, duration: 24, repeat: -1, ease: "none" });

      gsap.to(".hero-art", {
        yPercent: 10, rotate: 1.5, ease: "none",
        scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true },
      });

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) => {
        gsap.from(el, {
          y: 55, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 82%", once: true },
        });
      });

      gsap.utils.toArray<HTMLElement>(".step").forEach((el, i) => {
        gsap.from(el, {
          y: 35, opacity: 0, duration: 0.7, delay: i * 0.05,
          scrollTrigger: { trigger: ".journey-track", start: "top 78%", once: true },
        });
      });

      if (window.innerWidth > 850) {
        const track = document.querySelector<HTMLElement>(".journey-track");
        const pin = document.querySelector<HTMLElement>(".journey-pin");
        if (track && pin) {
          const distance = () => Math.max(0, track.scrollWidth - pin.clientWidth);
          gsap.to(track, {
            x: () => -distance(), ease: "none",
            scrollTrigger: {
              trigger: ".journey-pin", start: "top top",
              end: () => "+=" + distance(), scrub: 1, pin: true,
              anticipatePin: 1, invalidateOnRefresh: true,
            },
          });
        }
      }
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} className="site">
      <nav className="nav">
        <div className="mark">THE ART OF MAKING</div>
        <div className="nav-links">
          <a href="#about">About</a><a href="#journey">Journey</a><a href="#learn">Learn</a>
          <Link className="nav-login" href="/login">Login</Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-heading">
          <div className="kicker hero-kicker">AI · UI · CODE · CREATION</div>
          <h1 aria-label="The Art of Making">
            <span className="hero-title-mask"><span className="hero-title-line">The Art</span></span>
            <span className="hero-title-mask"><span className="hero-title-line">of Making.</span></span>
          </h1>
        </div>
        <div className="hero-copy">
          <p>From imagination to interface. A hands-on workshop for turning ideas into digital experiences with AI.</p>
          <Link className="cta" href="/register">Join the workshop <span>↗</span></Link>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="hero-grid" /><div className="orbit" />
          <div className="hero-art-label">MAKE<br />SOMETHING<br />REAL.</div><div className="hero-index">01 / 06</div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="section-grid reveal"><div className="eyebrow">01 / About</div><div>
          <h2>You don't need to know everything. You need an idea.</h2>
          <p className="lead">The Art of Making introduces a different way of creating on the web: think first, prompt with intent, design deliberately, and build alongside AI.</p>
        </div></div>
      </section>

      <section className="journey-pin" id="journey">
        <div className="journey-header"><div className="eyebrow">02 / Journey</div><div>
          <h2>One idea.<br />Six movements.</h2><p>Scroll through the process. The workshop follows the same path your idea does.</p>
        </div></div>
        <div className="journey-viewport"><div className="journey-track">
          {steps.map(([num, title, copy], i) => <article className={"step step-" + (i + 1)} key={num}>
            <div className="step-top"><span>{num}</span><span>0{i + 1} / 06</span></div>
            <div className="step-mark">{i === 3 ? "VIBE" : num}</div><h3>{title}</h3><p>{copy}</p>
          </article>)}
        </div></div>
      </section>

      <section className="section" id="learn"><div className="section-grid reveal"><div className="eyebrow">03 / Learn</div><div>
        <h2>Three ways to make.</h2><div className="learn-grid">
          {learning.map(([title, copy], i) => <article className="learn-card" key={title}>
            <div className="step-num">0{i + 1}</div><h3>{title}</h3><p>{copy}</p><span className="card-arrow">↗</span>
          </article>)}
        </div>
      </div></div></section>

      <section className="section final reveal"><div className="kicker">04 / Begin</div>
        <h2>Don't just learn<br /><em>how it works.</em><br />Make it work.</h2>
        <div><Link className="cta" href="/register">Register for The Art of Making <span>↗</span></Link></div>
      </section>

      <footer className="footer"><span>THE ART OF MAKING</span><span>AI · UI · CODE</span><span>© 2026</span></footer>
    </main>
  );
}
