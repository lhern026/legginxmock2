/* global React, Icon */
const { useState } = React;

const CartDrawer = ({ open, onClose, lines, setLines }) => {
  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);

  const updateQty = (id, delta) => {
    setLines(prev => prev
      .map(l => l.id === id ? { ...l, qty: l.qty + delta } : l)
      .filter(l => l.qty > 0)
    );
  };

  return (
    <>
      <div className={`scrim ${open ? 'open' : ''}`} onClick={onClose} />
      <aside className={`drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
        <header className="drawer-head">
          <span className="drawer-title">Bag · {lines.length}</span>
          <button className="icon-btn" onClick={onClose} aria-label="Close"><Icon name="x"/></button>
        </header>
        <div className="drawer-body">
          {lines.length === 0 ? (
            <div className="cart-empty">
              <p style={{marginBottom:12}}>Your bag is empty.</p>
              <p style={{fontSize:12, color:'var(--fg-3)'}}>Free shipping. All orders.</p>
            </div>
          ) : lines.map(l => (
            <div className="cart-line" key={l.id}>
              <div className="cart-thumb"><img className="product-image-real" src={l.img} alt=""/></div>
              <div className="cart-info">
                <div className="name">{l.name}</div>
                <div className="meta">{l.color} · Size {l.size}</div>
                <div className="cart-qty">
                  <button className="qty-btn" onClick={() => updateQty(l.id, -1)} aria-label="Decrease"><Icon name="minus" size={12}/></button>
                  <span className="qty-num">{l.qty}</span>
                  <button className="qty-btn" onClick={() => updateQty(l.id, 1)} aria-label="Increase"><Icon name="plus" size={12}/></button>
                </div>
              </div>
              <div className="cart-line-price">${(l.price * l.qty).toFixed(2)}</div>
            </div>
          ))}
        </div>
        {lines.length > 0 && (
          <footer className="drawer-foot">
            <div className="cart-total">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p style={{fontSize:11, color:'var(--fg-2)', fontFamily:'var(--font-mono)', letterSpacing:'.12em', textTransform:'uppercase', margin:0}}>
              Free shipping · All orders
            </p>
            <button className="btn btn-primary btn-lg btn-block">Checkout</button>
          </footer>
        )}
      </aside>
    </>
  );
};

window.CartDrawer = CartDrawer;
