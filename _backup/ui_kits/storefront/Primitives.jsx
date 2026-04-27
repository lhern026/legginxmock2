/* global React */
const { useState } = React;

// Lucide-ish stroke icons (1.5px, square caps)
const Icon = ({ name, size = 20 }) => {
  const common = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'square', strokeLinejoin: 'miter' };
  switch (name) {
    case 'search': return <svg {...common}><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>;
    case 'user': return <svg {...common}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>;
    case 'bag': return <svg {...common}><path d="M6 7h12l-1 13H7Z"/><path d="M9 7a3 3 0 0 1 6 0"/></svg>;
    case 'x': return <svg {...common}><path d="M5 5l14 14M19 5 5 19"/></svg>;
    case 'plus': return <svg {...common}><path d="M12 5v14M5 12h14"/></svg>;
    case 'minus': return <svg {...common}><path d="M5 12h14"/></svg>;
    case 'check': return <svg {...common}><path d="M5 13l4 4L19 7"/></svg>;
    case 'arrow-r': return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case 'arrow-up-r': return <svg {...common}><path d="M7 17 17 7M9 7h8v8"/></svg>;
    case 'chevron-d': return <svg {...common}><path d="M6 9l6 6 6-6"/></svg>;
    case 'instagram': return <svg {...common}><rect x="4" y="4" width="16" height="16"/><circle cx="12" cy="12" r="4"/><circle cx="17" cy="7" r="0.8" fill="currentColor"/></svg>;
    default: return null;
  }
};

const Button = ({ variant = 'primary', size, block, children, onClick, icon }) => (
  <button className={`btn btn-${variant} ${size === 'lg' ? 'btn-lg' : ''} ${block ? 'btn-block' : ''}`} onClick={onClick}>
    {children}
    {icon && <Icon name={icon} size={14} />}
  </button>
);

window.Icon = Icon;
window.Button = Button;
