/* global React, Icon, Button */
const { useState } = React;

const Product = ({ product, addToCart }) => {
  const [size, setSize] = useState('M');
  const [colorIdx, setColorIdx] = useState(0);
  const sizes = ['XS', 'S', 'M', 'L', 'XL'];
  const colors = [
    { name: 'Navy',     hex: '#2C3E5C', img: '../../assets/product/rival-leggings-navy.jpg' },
    { name: 'Peach',    hex: '#E89A82', img: '../../assets/product/rival-leggings-peach.jpg' },
    { name: 'Jade',     hex: '#7AA68B', img: '../../assets/product/rival-leggings-jade.jpg' },
    { name: 'Pearl',    hex: '#E8E4DD', img: '../../assets/product/rival-leggings-pearl.jpg' },
    { name: 'Shadow',   hex: '#4A4A4A', img: '../../assets/product/rival-leggings-shadow.jpg' },
    { name: 'Rose',     hex: '#C8909A', img: '../../assets/product/rival-leggings-rose.jpg' },
  ];
  const p = product || { id:'rival-leg', name:'Rival Leggings', line:'RIVAL', price:29 };
  const activeColor = colors[colorIdx];

  return (
    <section className="pdp">
      <div className="pdp-gallery">
        <div className="product-image-wrap"><img className="product-image-real" src={activeColor.img}/></div>
        <div className="product-image-wrap"><img className="product-image-real" src={colors[(colorIdx+1)%colors.length].img}/></div>
        <div className="product-image-wrap"><img className="product-image-real" src={colors[(colorIdx+2)%colors.length].img}/></div>
        <div className="product-image-wrap"><img className="product-image-real" src={colors[(colorIdx+3)%colors.length].img}/></div>
      </div>
      <div className="pdp-info">
        <div className="eyebrow">{p.line || 'RIVAL'} · High-rise · 7/8 length</div>
        <h1 className="pdp-title">{p.name}</h1>
        <div className="pdp-price">${p.price.toFixed(2)}</div>
        <p className="pdp-desc">
          Buttery-soft seamless compression. High-rise waistband that stays put. Squat-proof at every angle, breathable through every set.
        </p>

        <div className="pdp-section">
          <div className="pdp-section-label">Color · {activeColor.name}</div>
          <div className="color-group">
            {colors.map((c, i) => (
              <button key={c.name} className={`color-swatch ${colorIdx === i ? 'active' : ''}`}
                style={{background:c.hex}} onClick={() => setColorIdx(i)} aria-label={c.name}/>
            ))}
          </div>
        </div>

        <div className="pdp-section">
          <div className="pdp-section-label">Size · {size}</div>
          <div className="size-group">
            {sizes.map(s => (
              <button key={s} className={`size ${size === s ? 'active' : ''} ${s === 'XL' ? 'disabled' : ''}`}
                onClick={() => s !== 'XL' && setSize(s)}>{s}</button>
            ))}
          </div>
        </div>

        <Button variant="primary" size="lg" block onClick={() => addToCart({...p, img: activeColor.img}, size, activeColor.name)}>
          Add to bag — ${p.price.toFixed(2)}
        </Button>

        <div className="specs">
          <span>Inseam</span><span>26"</span>
          <span>Rise</span><span>High · 11"</span>
          <span>Fabric</span><span>Nylon 78 / Spandex 22</span>
          <span>Wash</span><span>Cold · Hang dry</span>
          <span>Shipping</span><span>Free · All orders</span>
          <span>SKU</span><span>LX-RIV-001</span>
        </div>
      </div>
    </section>
  );
};

window.Product = Product;
