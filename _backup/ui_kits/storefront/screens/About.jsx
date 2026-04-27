/* global React */

const About = () => (
  <>
    <section className="about-hero">
      <div className="eyebrow" style={{marginBottom:24}}>About</div>
      <h1 className="about-pull">
        We make the leggings we couldn't find. Cut clean.<br/>Built to last. Nothing else.
      </h1>
    </section>

    <section className="about-grid">
      <div className="about-image"><img className="product-image-real" src="../../assets/product/rival-leggings-jade.jpg"/></div>
      <div className="about-text">
        <p>Legginx makes performance basics — leggings, shorts, bras, halter tops — across four lines: <b>Rival</b>, <b>Glow</b>, <b>Aura</b>, and <b>Essentials</b>. Buttery seamless fabric, eighteen colorways in the flagship Rival line, and free shipping on every order.</p>
        <p>We don't run sales. We don't drop fast. We add colors when we feel the gap.</p>
      </div>
    </section>

    <section className="about-grid" style={{gridTemplateColumns:'1fr 1fr', alignItems:'center'}}>
      <div className="about-text">
        <div className="eyebrow">The standards</div>
        <h2 style={{fontFamily:'var(--font-display)', fontSize:64, lineHeight:0.95, textTransform:'uppercase', fontWeight:400, margin:'8px 0 16px'}}>What we'll<br/>never do.</h2>
        <p>No giant logos on the outside. No 24-hour flash sales. No throwaway garments. Free shipping on every order, full stop.</p>
        <p>If we put it on the site, we made it because it was missing. If it's still on the site a year later, it works.</p>
      </div>
      <div className="about-image"><img className="product-image-real" src="../../assets/product/glow-leggings-onyx.jpg"/></div>
    </section>
  </>
);

window.About = About;
