/* global React, Icon */

const Nav = ({ current, navigate, cartCount, openCart }) => {
  const links = [
    { id: 'collection', label: 'Shop' },
    { id: 'collection', label: 'New' },
    { id: 'collection', label: 'Bestsellers' },
    { id: 'about', label: 'Journal' },
  ];
  return (
    <nav className="nav">
      <a className="nav-brand" onClick={() => navigate('home')} aria-label="Legginx home">
        <img src="../../assets/logo-mark.png" alt="Legginx" style={{width:22, height:'auto', display:'block'}}/>
      </a>
      <div className="nav-links">
        {links.map((l, i) => (
          <a key={i} className={`nav-link ${current === l.id ? 'active' : ''}`} onClick={() => navigate(l.id)}>{l.label}</a>
        ))}
        <a className={`nav-link ${current === 'about' ? 'active' : ''}`} onClick={() => navigate('about')}>About</a>
      </div>
      <div className="nav-icons">
        <button className="icon-btn" aria-label="Search"><Icon name="search" /></button>
        <button className="icon-btn" aria-label="Account" onClick={() => navigate('account')}><Icon name="user" /></button>
        <button className="icon-btn" aria-label="Bag" onClick={openCart}>
          <Icon name="bag" />
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </button>
      </div>
    </nav>
  );
};

window.Nav = Nav;
