/* global React */
const { useState } = React;

const Account = () => {
  const [tab, setTab] = useState('orders');
  const orders = [
    { id:'LX-249102', date:'14 APR 2026', items:'The Core Legging × 1 · The Tempo Tee × 2', total: 184.00, status:'delivered' },
    { id:'LX-247880', date:'02 MAR 2026', items:'The Half Zip × 1', total: 110.00, status:'delivered' },
    { id:'LX-246451', date:'18 FEB 2026', items:'The Field Short × 2 · The Pace Tank × 1', total: 172.00, status:'delivered' },
    { id:'LX-251007', date:'24 APR 2026', items:'The Track Legging × 1', total: 92.00, status:'transit' },
  ];

  return (
    <section className="account">
      <aside className="account-nav">
        <div className="eyebrow" style={{marginBottom:16}}>Mara Okeke</div>
        <button className={tab === 'orders' ? 'active' : ''} onClick={() => setTab('orders')}>Orders</button>
        <button className={tab === 'address' ? 'active' : ''} onClick={() => setTab('address')}>Addresses</button>
        <button className={tab === 'profile' ? 'active' : ''} onClick={() => setTab('profile')}>Profile</button>
        <button className={tab === 'returns' ? 'active' : ''} onClick={() => setTab('returns')}>Returns</button>
        <button style={{marginTop:24, color:'var(--fg-3)'}}>Sign out</button>
      </aside>
      <div>
        <h1 className="t-h1" style={{marginBottom:32, fontSize:48, fontFamily:'var(--font-display)', textTransform:'uppercase', fontWeight:400, lineHeight:1}}>Orders</h1>
        {orders.map(o => (
          <div className="order" key={o.id}>
            <div>
              <div className="order-meta">{o.id} · {o.date}</div>
              <div className="order-items">{o.items}</div>
            </div>
            <div style={{textAlign:'right', display:'flex', flexDirection:'column', gap:8, alignItems:'flex-end'}}>
              <span className={`order-status ${o.status}`}>{o.status === 'transit' ? 'In transit' : 'Delivered'}</span>
              <div className="order-total">${o.total.toFixed(2)}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

window.Account = Account;
