/* global React */

// Real Legginx products. Photos are live-store hero shots.
const PRODUCTS = [
  { id:'rival-leg',   line:'RIVAL',     name:'Rival Leggings',  price:29, colors:18, img:'../../assets/product/rival-leggings-navy.jpg' },
  { id:'rival-short', line:'RIVAL',     name:'Rival Shorts',    price:24, colors:8,  img:'../../assets/product/rival-shorts-sky.jpg' },
  { id:'glow-leg',    line:'GLOW',      name:'Glow Leggings',   price:29, colors:6,  img:'../../assets/product/glow-leggings-onyx.jpg' },
  { id:'aura-bra',    line:'AURA',      name:'Aura Bra',        price:24, colors:2,  img:'../../assets/product/aura-bra-black.png' },
  { id:'rival-peach', line:'RIVAL',     name:'Rival Leggings',  price:29, colors:18, img:'../../assets/product/rival-leggings-peach.jpg' },
  { id:'rival-jade',  line:'RIVAL',     name:'Rival Leggings',  price:29, colors:18, img:'../../assets/product/rival-leggings-jade.jpg' },
  { id:'glow-olive',  line:'GLOW',      name:'Glow Leggings',   price:29, colors:6,  img:'../../assets/product/glow-leggings-olive.jpg' },
  { id:'glow-lav',    line:'GLOW',      name:'Glow Leggings',   price:29, colors:6,  img:'../../assets/product/glow-leggings-lavender.jpg' },
  { id:'rival-pearl', line:'RIVAL',     name:'Rival Leggings',  price:29, colors:18, img:'../../assets/product/rival-leggings-pearl.jpg' },
  { id:'rival-shadow',line:'RIVAL',     name:'Rival Leggings',  price:29, colors:18, img:'../../assets/product/rival-leggings-shadow.jpg' },
  { id:'rival-rose',  line:'RIVAL',     name:'Rival Leggings',  price:29, colors:18, img:'../../assets/product/rival-leggings-rose.jpg' },
  { id:'halter',      line:'ESSENTIALS',name:'Halter Top',      price:24, colors:2,  img:'../../assets/product/essentials-halter-black.png' },
  { id:'aura-white',  line:'AURA',      name:'Aura Bra',        price:24, colors:2,  img:'../../assets/product/aura-bra-white.png' },
  { id:'rival-peach2',line:'RIVAL',     name:'Rival Shorts',    price:24, colors:8,  img:'../../assets/product/rival-shorts-peach.jpg' },
];

const ProductCard = ({ product, onClick }) => (
  <div className="product" onClick={onClick}>
    <div className="product-image-wrap">
      <img className="product-image-real" src={product.img} alt={product.name} loading="lazy"/>
    </div>
    <div className="product-line">{product.line}</div>
    <div className="product-title">{product.name}</div>
    <div className="product-meta">{product.colors} colors</div>
    <div className="product-price">${product.price.toFixed(2)}</div>
  </div>
);

window.ProductCard = ProductCard;
window.PRODUCTS = PRODUCTS;
