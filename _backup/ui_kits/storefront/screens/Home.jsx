/* global React, ProductCard, PRODUCTS, Button, Icon */

const Home = ({ navigate, addToCart }) => (
  <>
    <section className="hero hero-real">
      <img className="hero-img" src="../../assets/product/rival-leggings-navy.jpg" alt=""/>
      <div className="hero-content">
        <div>
          <div className="hero-eyebrow">RIVAL · SS26</div>
          <h1 className="hero-headline">RUN.<br/>LIFT.<br/>REPEAT.</h1>
        </div>
        <div className="hero-meta">
          <span>FREE SHIPPING ALL ORDERS</span>
          <span>$24 — $29</span>
          <button className="btn btn-secondary hero-cta" onClick={() => navigate('collection')}>
            Shop Rival
          </button>
        </div>
      </div>
    </section>

    <section className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow">Bestsellers</div>
          <h2 className="section-title">Rival</h2>
        </div>
        <a className="btn btn-ghost" onClick={() => navigate('collection')}>View all <Icon name="arrow-r" size={14}/></a>
      </div>
      <div className="product-grid">
        {PRODUCTS.slice(0, 4).map(p => (
          <ProductCard key={p.id} product={p} onClick={() => navigate('product', p)} />
        ))}
      </div>
    </section>

    <section className="news-band">
      <h2>BUILT<br/>FOR THE<br/>LONG RUN.</h2>
      <p style={{maxWidth:480, margin:'0 auto 32px', fontSize:15, color:'var(--stone-300)', lineHeight:1.6}}>
        Free shipping on every order. New colorways added monthly.
      </p>
      <form className="news-form" onSubmit={e => e.preventDefault()}>
        <input type="email" placeholder="Email address"/>
        <button type="submit">Subscribe →</button>
      </form>
    </section>

    <section className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow">Shop the line</div>
          <h2 className="section-title" style={{fontSize:'clamp(40px, 5vw, 64px)'}}>Glow · Aura · Essentials</h2>
        </div>
      </div>
      <div className="product-grid cols-3">
        <div className="product line-tile" onClick={() => navigate('collection')}>
          <div className="product-image-wrap"><img className="product-image-real" src="../../assets/product/glow-leggings-onyx.jpg"/></div>
          <div className="line-tile-name">GLOW</div>
        </div>
        <div className="product line-tile" onClick={() => navigate('collection')}>
          <div className="product-image-wrap"><img className="product-image-real" src="../../assets/product/aura-bra-black.png" style={{objectFit:'contain', background:'var(--stone-50)', padding:24}}/></div>
          <div className="line-tile-name">AURA</div>
        </div>
        <div className="product line-tile" onClick={() => navigate('collection')}>
          <div className="product-image-wrap"><img className="product-image-real" src="../../assets/product/essentials-halter-black.png" style={{objectFit:'contain', background:'var(--stone-50)', padding:24}}/></div>
          <div className="line-tile-name">ESSENTIALS</div>
        </div>
      </div>
    </section>
  </>
);

window.Home = Home;
