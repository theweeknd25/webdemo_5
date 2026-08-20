/* Deccan House page: an offset, customer-first Pune home journey using editorial imagery, drafting lines, and quiet conversion moments. */
import { ArrowRight, Menu, MessageCircle, Phone, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { siteConfig } from "@/lib/siteConfig";

const scrollToId = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNeed, setSelectedNeed] = useState("Family residence");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 36);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAndScroll = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollToId(id), 0);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  };

  return (
    <div className="deccan-shell">
      <header className={`nav ${scrolled ? "is-scrolled" : ""} ${menuOpen ? "is-open" : ""}`}>
        <div className="site-pad nav-inner">
          <a className="brand" href="#home" aria-label={`${siteConfig.brand} home`} onClick={() => closeAndScroll("home")}>
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-name">Agastya <small>Elite Estate</small></span>
          </a>
          <nav className="nav-links" aria-label="Primary navigation">
            <a href="#homes" onClick={() => closeAndScroll("homes")}>Homes</a>
            <a href="#pune" onClick={() => closeAndScroll("pune")}>Pune</a>
            <a href="#approach" onClick={() => closeAndScroll("approach")}>Approach</a>
            <a href="#conversation" onClick={() => closeAndScroll("conversation")}>Contact</a>
          </nav>
          <button className="nav-cta" onClick={() => closeAndScroll("conversation")}>Start a conversation</button>
          <button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero" aria-labelledby="hero-title">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">{siteConfig.hero.eyebrow}</span>
              <h1 id="hero-title" className="display-type">{siteConfig.hero.title.split("\n").map((line) => <span key={line}>{line}<br /></span>)}</h1>
              <p className="hero-description">{siteConfig.hero.description}</p>
              <div className="hero-actions">
                <button className="action" onClick={() => scrollToId("homes")}>Explore homes <ArrowRight size={15} /></button>
                <button className="text-link" onClick={() => scrollToId("conversation")}>Start a conversation <ArrowRight className="link-arrow" size={15} /></button>
              </div>
            </div>
            <div className="hero-image">
              <img src={siteConfig.hero.image} alt="Modern Pune residence surrounded by greenery" fetchPriority="high" />
              <span className="hero-image-caption">A considered Pune address</span>
            </div>
          </div>
          <div className="hero-footer"><span className="tiny-rule" /> {siteConfig.rera} · Pune</div>
        </section>

        <section className="intro site-pad" aria-labelledby="approach-title">
          <div className="intro-content">
            <div><span className="eyebrow">The Agastya approach</span></div>
            <div>
              <h2 id="approach-title" className="display-type">Property search should feel less complicated.</h2>
              <div className="intro-side">
                <p>We listen first, then help you discover suitable homes, compare options and arrive at a site visit with more confidence.</p>
                <div className="stats" aria-label="Agastya Elite Estate experience">
                  <div className="stat"><strong>25+</strong><span>Projects to explore</span></div>
                  <div className="stat"><strong>Pune</strong><span>Local perspective</span></div>
                  <div className="stat"><strong>RERA</strong><span>Registered partner</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="homes" className="projects site-pad" aria-labelledby="homes-title">
          <div className="section-head">
            <div>
              <span className="eyebrow">Selected addresses</span>
              <h2 id="homes-title" className="display-type">Homes worth seeing in person.</h2>
            </div>
            <p>Each shortlist begins with your reality—your commute, your family, your timing—not a generic feed.</p>
          </div>
          <div>
            {siteConfig.projects.map((project, index) => (
              <article className={`project-showcase ${index % 2 ? "is-reversed" : ""}`} key={project.id}>
                <div className="project-media"><img src={project.image} alt={`${project.name}, ${project.location}`} loading="lazy" /></div>
                <div className="project-info">
                  <div className="project-no">{project.number}</div>
                  <span className="project-pin">Pune site edit</span>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p className="project-location">{project.location}</p>
                  <div className="project-meta"><span>{project.configuration}</span><span>{project.price}</span></div>
                  <p>{project.description}</p>
                  <button className="text-link" onClick={() => scrollToId("conversation")}>Ask about this address <ArrowRight className="link-arrow" size={15} /></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="seek site-pad" aria-labelledby="seek-title">
          <div>
            <span className="eyebrow">A useful place to begin</span>
            <h2 id="seek-title" className="display-type">What do you want home to do for you?</h2>
          </div>
          <div className="need-list" aria-label="Property search intentions">
            {siteConfig.needs.map((need, index) => (
              <button className={`need ${need === selectedNeed ? "is-active" : ""}`} key={need} onClick={() => { setSelectedNeed(need); scrollToId("conversation"); }}>
                <span className="need-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="need-title">{need}</span>
                <ArrowRight className="need-icon" size={19} />
              </button>
            ))}
          </div>
        </section>

        <section id="pune" className="place" aria-labelledby="pune-title">
          <div className="place-content">
            <span className="eyebrow" style={{ color: "#e6a389" }}>Life in Pune</span>
            <h2 id="pune-title" className="display-type">From established neighbourhoods to emerging addresses.</h2>
            <p className="place-copy">A good location is more than a map pin. It is the school run, the work commute, the Saturday coffee and what life feels like after the handover.</p>
            <div className="area-list">
              {siteConfig.areas.map((area) => <button key={area} onClick={() => { setSelectedNeed(`${area} home`); scrollToId("conversation"); }}>{area}</button>)}
            </div>
          </div>
          <p className="place-insight">Local knowledge that helps you look beyond a brochure and closer at the neighbourhood you will actually live in.</p>
        </section>

        <section id="approach" className="guidance" aria-labelledby="guidance-title">
          <div className="guidance-image">
  <img
    src={`${import.meta.env.BASE_URL}assets/images/fif_and_six.webp`}
    alt="Warm, modern apartment living room"
    loading="lazy"
  />
</div>
          <div className="guidance-copy">
            <span className="eyebrow" style={{ color: "#e6a389" }}>How we guide</span>
            <h2 id="guidance-title" className="display-type">Good property advice starts with listening.</h2>
            <div className="guidance-list">
              {["Understand your household and commute", "Shortlist relevant options", "Compare what is actually included", "Coordinate site visits around your week", "Support the buying decision"].map((item, index) => <div className="guidance-step" key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="process site-pad" aria-labelledby="process-title">
          <div className="process-top">
            <div><span className="eyebrow">The buying experience</span><h2 id="process-title" className="display-type">A simpler way forward.</h2></div>
            <p>One sensible sequence, guided by your requirement and paced around your real decision.</p>
          </div>
          <div className="steps">
            {[{ title: "Tell us", copy: "Share what must work for your next home." }, { title: "Curate", copy: "We focus the search on relevant options." }, { title: "Visit", copy: "See shortlisted addresses on your schedule." }, { title: "Decide", copy: "Compare clearly before you move ahead." }].map((step, index) => <div className="step" key={step.title}><span className="step-no">{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.copy}</p></div>)}
          </div>
        </section>

        <section className="trust" aria-labelledby="trust-title">
          <div className="trust-copy">
            <span className="eyebrow">Verified perspective</span>
            <h2 id="trust-title" className="display-type">Trust, by design.</h2>
            <p>MahaRERA registration and thoughtful property guidance belong in every conversation. Your decision deserves context, time and direct answers.</p>
          </div>
          <div className="trust-panel">
            <span className="label">Registration status</span>
            <strong className="value">MahaRERA Registered Channel Partner</strong>
            <button className="text-link" onClick={() => scrollToId("conversation")}>Request verification details <ArrowRight className="link-arrow" size={15} /></button>
            <p className="fine">Formal registration number and project documents should be verified directly during your consultation.</p>
          </div>
        </section>

        <section className="faq site-pad" aria-labelledby="faq-title">
          <div className="faq-title"><div><span className="eyebrow">Good questions</span><h2 id="faq-title" className="display-type">Clarity makes a better visit.</h2></div><p>Here is how we make the first conversation easier. If your question is not here, ask us directly.</p></div>
          <div className="faq-list">
            {siteConfig.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}
          </div>
        </section>

        <section className="closing" aria-labelledby="closing-title">
          <div className="closing-content"><span className="eyebrow" style={{ color: "#e6a389" }}>Take the first step</span><h2 id="closing-title" className="display-type">Your next address could start here.</h2><button className="action" onClick={() => scrollToId("conversation")}>Start a conversation <ArrowRight size={15} /></button><a className="text-link" href="https://wa.me/" target="_blank" rel="noreferrer">WhatsApp us <ArrowRight className="link-arrow" size={15} /></a></div>
        </section>

        <section id="conversation" className="conversation site-pad" aria-labelledby="conversation-title">
          <div className="conversation-copy"><span className="eyebrow">Conversation, not pressure</span><h2 id="conversation-title" className="display-type">Tell us what you are looking for.</h2><p>Share the shape of your requirement and we will help you explore suitable options across Pune.</p><div className="contact-links"><a className="contact-link" href="https://wa.me/" target="_blank" rel="noreferrer"><small>WhatsApp</small>Start a conversation</a><a className="contact-link" href={`mailto:${siteConfig.email}`}><small>Email</small>{siteConfig.email}</a><span className="contact-link"><small>Availability</small>By appointment · Pune</span></div></div>
          <form className="form" onSubmit={handleSubmit}>
            <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" required placeholder="Name" /></div>
            <div className="field"><label htmlFor="phone">Phone number</label><input id="phone" name="phone" type="tel" required inputMode="tel" placeholder="+91" /></div>
            <div className="field"><label htmlFor="location">Preferred location</label><input id="location" name="location" placeholder={selectedNeed.includes("home") ? "e.g. Baner, Kharadi" : selectedNeed} /></div>
            <div className="field"><label htmlFor="budget">Budget range</label><select id="budget" name="budget" defaultValue=""><option value="" disabled>Select a range</option><option>Up to ₹75 Lakh</option><option>₹75 Lakh – ₹1 Cr</option><option>₹1 Cr – ₹1.5 Cr</option><option>₹1.5 Cr+</option></select></div>
            <div className="field"><label htmlFor="type">Property type</label><select id="type" name="type" defaultValue=""><option value="" disabled>Select type</option><option>Apartment</option><option>Villa / Row house</option><option>Commercial</option><option>Investment</option></select></div>
            <div className="field"><label htmlFor="configuration">Configuration</label><select id="configuration" name="configuration" defaultValue=""><option value="" disabled>Select configuration</option><option>1 BHK</option><option>2 BHK</option><option>3 BHK</option><option>4 BHK+</option><option>Open to options</option></select></div>
            <div className="field full"><label htmlFor="message">A little more context</label><textarea id="message" name="message" placeholder="Timeline, must-haves, or a project you already have in mind." /></div>
            <p className="form-note">Preview form only. Connect this form to your approved enquiry workflow before publishing.</p>
            {submitted && <p className="form-feedback" role="status">Thank you. Your preview enquiry has been noted—connect the form to your workflow for live submissions.</p>}
            <button className="action" type="submit">Request a consultation <ArrowRight size={15} /></button>
          </form>
        </section>
      </main>

      <footer className="footer site-pad"><span className="footer-brand">Agastya Elite Estate</span><span className="footer-note">Pune Property Advisory · {siteConfig.rera} · Registration and project information to be verified before proceeding.</span></footer>
      <div className="float-actions" aria-label="Quick contact"><a className="float-action" href="https://wa.me/" target="_blank" rel="noreferrer" aria-label="Open WhatsApp"><MessageCircle /></a><a className="float-action" href="#conversation" onClick={() => scrollToId("conversation")} aria-label="Request a call"><Phone /></a></div>
    </div>
  );
}
