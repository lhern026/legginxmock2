/* global React, Nav, Footer, CartDrawer, Home, Collection, Product, Account, About */
const { useState } = React;

const App = () => {
  const [screen, setScreen] = useState('home');
  const [activeProduct, setActiveProduct] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [lines, setLines] = useState([
    { id:'rival-leg-M-Navy', name:'Rival Leggings', img:'../../assets/product/rival-leggings-navy.jpg', size:'M', color:'Navy', price:29, qty:1 },
  ]);

  const navigate = (s, ctx) => {
    setScreen(s);
    if (s === 'product' && ctx) setActiveProduct(ctx);
    window.scrollTo(0, 0);
  };

  const addToCart = (p, size, color) => {
    const id = `${p.id}-${size}-${color}`;
    setLines(prev => {
      const ex = prev.find(l => l.id === id);
      if (ex) return prev.map(l => l.id === id ? { ...l, qty: l.qty + 1 } : l);
      return [...prev, { id, name: p.name, img: p.img, size, color, price: p.price, qty: 1 }];
    });
    setCartOpen(true);
  };

  const cartCount = lines.reduce((s, l) => s + l.qty, 0);

  return (
    <div className="app">
      <Nav current={screen} navigate={navigate} cartCount={cartCount} openCart={() => setCartOpen(true)} />
      <main className="page">
        {screen === 'home' && <Home navigate={navigate} addToCart={addToCart} />}
        {screen === 'collection' && <Collection navigate={navigate} />}
        {screen === 'product' && <Product product={activeProduct} addToCart={addToCart} />}
        {screen === 'account' && <Account />}
        {screen === 'about' && <About />}
      </main>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} lines={lines} setLines={setLines} />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
