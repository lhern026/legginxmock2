/* global React, Icon */

const Footer = () => (
  <footer className="footer">
    <div className="footer-grid">
      <div className="footer-col">
        <div className="footer-brand"><img src="../../assets/logo-mark.png" alt="Legginx" style={{width:64, height:'auto'}}/></div>
        <p style={{maxWidth:280, color:'var(--fg-2)', fontSize:13, marginTop:16}}>
          Cut for 5K. Built for the rest of the day.
        </p>
      </div>
      <div className="footer-col">
        <h5>Shop</h5>
        <ul>
          <li><a>Leggings</a></li>
          <li><a>Shorts</a></li>
          <li><a>Tops</a></li>
          <li><a>Sets</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Help</h5>
        <ul>
          <li><a>Returns</a></li>
          <li><a>Sizing</a></li>
          <li><a>Care</a></li>
          <li><a>Contact</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h5>Company</h5>
        <ul>
          <li><a>About</a></li>
          <li><a>Journal</a></li>
          <li><a>Athletes</a></li>
          <li><a><span style={{display:'inline-flex',alignItems:'center',gap:6}}><Icon name="instagram" size={14}/> Instagram</span></a></li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 Legginx</span>
      <span>Privacy · Terms</span>
    </div>
  </footer>
);

window.Footer = Footer;
