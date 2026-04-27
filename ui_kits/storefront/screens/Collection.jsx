/* global React, ProductCard, PRODUCTS, Icon */
const { useState } = React;

const Collection = ({ navigate }) => {
  const [filter, setFilter] = useState('all');
  const filters = ['all', 'rival', 'glow', 'aura', 'essentials'];
  return (
    <section className="section">
      <div className="section-head">
        <div>
          <div className="eyebrow">Shop · {PRODUCTS.length} styles</div>
          <h2 className="section-title">All</h2>
        </div>
      </div>
      <div className="filter-bar">
        <div className="filter-group">
          {filters.map(f => (
            <button key={f} className={`filter-pill ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
        <button className="sort-select">
          Sort: Newest <Icon name="chevron-d" size={12}/>
        </button>
      </div>
      <div className="product-grid">
        {PRODUCTS
          .filter(p => filter === 'all' || p.line.toLowerCase() === filter)
          .map((p, i) => (
            <ProductCard key={i} product={p} onClick={() => navigate('product', p)} />
          ))}
      </div>
    </section>
  );
};

window.Collection = Collection;
