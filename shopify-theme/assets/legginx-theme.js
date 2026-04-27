/* =========================================================
   Legginx Shopify Theme — Core JavaScript
   Cart drawer, variant selectors, mobile nav, AJAX cart
   ========================================================= */
(function () {
  'use strict';

  /* ---------- Cart Drawer ---------- */
  const cartDrawer = document.getElementById('cart-drawer');
  const cartScrim = document.getElementById('cart-scrim');
  const cartToggle = document.getElementById('cart-toggle');
  const cartClose = document.getElementById('cart-close');

  function openCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.add('open');
    cartDrawer.setAttribute('aria-hidden', 'false');
    cartScrim.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeCart() {
    if (!cartDrawer) return;
    cartDrawer.classList.remove('open');
    cartDrawer.setAttribute('aria-hidden', 'true');
    cartScrim.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (cartToggle) cartToggle.addEventListener('click', openCart);
  if (cartClose) cartClose.addEventListener('click', closeCart);
  if (cartScrim) cartScrim.addEventListener('click', closeCart);

  /* ---------- AJAX Cart ---------- */
  function updateCartDrawer() {
    fetch('/?sections=cart-drawer')
      .then(function (r) { return r.json(); })
      .then(function (data) {
        var html = data['cart-drawer'];
        if (!html) return;
        var temp = document.createElement('div');
        temp.innerHTML = html;
        var newBody = temp.querySelector('.drawer-body');
        var newFoot = temp.querySelector('.drawer-foot');
        var newCount = temp.querySelector('#drawer-count');
        var body = document.querySelector('.drawer-body');
        var foot = document.querySelector('.drawer-foot');
        var count = document.getElementById('drawer-count');
        var headerCount = document.getElementById('cart-count');
        if (body && newBody) body.innerHTML = newBody.innerHTML;
        if (foot && newFoot) {
          foot.innerHTML = newFoot.innerHTML;
        } else if (!newFoot && foot) {
          foot.remove();
        }
        if (count && newCount) count.textContent = newCount.textContent;
        if (headerCount && newCount) {
          var c = parseInt(newCount.textContent, 10);
          headerCount.textContent = c;
          headerCount.style.display = c > 0 ? '' : 'none';
        }
        bindQtyButtons();
      });
  }

  function changeQty(key, delta) {
    fetch('/cart/change.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: key, quantity: delta })
    })
      .then(function () { updateCartDrawer(); });
  }

  function bindQtyButtons() {
    document.querySelectorAll('[data-qty-change]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.getAttribute('data-qty-change');
        var delta = parseInt(btn.getAttribute('data-delta'), 10);
        var numEl = btn.parentElement.querySelector('.qty-num');
        var current = parseInt(numEl.textContent, 10);
        var newQty = Math.max(0, current + delta);
        changeQty(key, newQty);
      });
    });
  }
  bindQtyButtons();

  /* ---------- Product Form (AJAX Add to Cart) ---------- */
  var productForm = document.querySelector('[data-product-form]');
  if (productForm) {
    productForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var formData = new FormData(productForm);
      fetch('/cart/add.js', {
        method: 'POST',
        body: formData
      })
        .then(function (r) { return r.json(); })
        .then(function () {
          updateCartDrawer();
          openCart();
        });
    });
  }

  /* ---------- Variant Selector ---------- */
  var productJson = document.getElementById('product-json');
  if (productJson) {
    var product = JSON.parse(productJson.textContent);
    var selectedOptions = {};

    // Init selected options from current variant
    if (product.variants && product.variants.length > 0) {
      var firstAvailable = product.variants.find(function (v) { return v.available; }) || product.variants[0];
      product.options.forEach(function (optName, idx) {
        selectedOptions[optName] = firstAvailable.options[idx];
      });
    }

    document.querySelectorAll('[data-option-name]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var optName = btn.getAttribute('data-option-name');
        var optValue = btn.getAttribute('data-option-value');
        selectedOptions[optName] = optValue;

        // Update active states
        btn.parentElement.querySelectorAll('[data-option-name="' + optName + '"]').forEach(function (b) {
          b.classList.remove('active');
        });
        btn.classList.add('active');

        // Update label
        var labelEl = document.getElementById('selected-' + optName.toLowerCase().replace(/ /g, '-'));
        if (labelEl) labelEl.textContent = optValue;

        // Find matching variant
        var match = product.variants.find(function (v) {
          return product.options.every(function (optN, idx) {
            return v.options[idx] === selectedOptions[optN];
          });
        });

        if (match) {
          document.getElementById('variant-id').value = match.id;
          var priceEl = document.getElementById('pdp-price-current');
          var compareEl = document.getElementById('pdp-compare-price');
          var addBtn = document.getElementById('add-to-cart');

          if (priceEl) priceEl.textContent = Shopify.formatMoney(match.price);
          if (compareEl) {
            if (match.compare_at_price && match.compare_at_price > match.price) {
              compareEl.textContent = Shopify.formatMoney(match.compare_at_price);
              compareEl.style.display = '';
            } else {
              compareEl.style.display = 'none';
            }
          }
          if (addBtn) {
            addBtn.disabled = !match.available;
            addBtn.textContent = match.available
              ? 'Add to bag — ' + Shopify.formatMoney(match.price)
              : 'Sold out';
          }

          // Update URL
          var url = new URL(window.location);
          url.searchParams.set('variant', match.id);
          window.history.replaceState({}, '', url);
        }
      });
    });
  }

  /* ---------- Mobile Nav ---------- */
  var mobileToggle = document.getElementById('mobile-menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  var mobileClose = document.getElementById('mobile-nav-close');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', function () {
      mobileNav.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }
  if (mobileClose && mobileNav) {
    mobileClose.addEventListener('click', function () {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  /* ---------- Custom Sort Dropdown ---------- */
  var sortTrigger = document.getElementById('sort-trigger');
  var sortDropdown = document.getElementById('sort-dropdown');
  if (sortTrigger && sortDropdown) {
    sortTrigger.addEventListener('click', function (e) {
      e.stopPropagation();
      sortDropdown.classList.toggle('open');
    });
    document.addEventListener('click', function () {
      sortDropdown.classList.remove('open');
    });
  }

  /* ---------- Shopify.formatMoney fallback ---------- */
  if (typeof Shopify === 'undefined') window.Shopify = {};
  if (!Shopify.formatMoney) {
    Shopify.formatMoney = function (cents) {
      return '$' + (cents / 100).toFixed(2);
    };
  }
})();
