// --- CART UTILITIES ---
function getCart() {
  return JSON.parse(localStorage.getItem('cart') || '[]');
}
function setCart(cart) {
  localStorage.setItem('cart', JSON.stringify(cart));
}
function addToCart(productId, qty = 1) {
  let cart = getCart();
  const found = cart.find(item => item.id === productId);
  const product = products.find(p => p.id === productId);
  if (!product) return;

  let totalQty = qty;
  if (found) {
    totalQty = found.qty + qty;
  }
  if (totalQty > product.stock) {
    showToast(`Only ${product.stock} in stock`);
    return;
  }

  if (found) {
    found.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  setCart(cart);
  updateCartCountDisplay && updateCartCountDisplay();
}
function removeFromCart(productId) {
  let cart = getCart().filter(item => item.id !== productId);
  setCart(cart);
}
function updateCartQty(productId, qty) {
  let cart = getCart();
  const found = cart.find(item => item.id === productId);
  const product = products.find(p => p.id === productId);
  if (found && product) {
    if (qty > product.stock) {
      qty = product.stock;
      showToast(`Only ${product.stock} in stock`);
    }
    found.qty = qty;
    if (qty <= 0) {
      cart = cart.filter(item => item.id !== productId);
    }
    setCart(cart);
  }
}
function getCartCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}
function updateCartCountDisplay() {
  const cartCountElem = document.querySelector('.cart-count');
  if (cartCountElem) {
    cartCountElem.textContent = getCartCount();
  }
}

// --- TOAST/ALERT FOR STOCK WARNINGS ---
function showToast(msg) {
  let toast = document.getElementById("cart-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "cart-toast";
    toast.style.position = "fixed";
    toast.style.bottom = "32px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "#b02525";
    toast.style.color = "#fff";
    toast.style.padding = "12px 28px";
    toast.style.borderRadius = "8px";
    toast.style.fontWeight = "600";
    toast.style.fontSize = "1rem";
    toast.style.zIndex = "11111";
    toast.style.boxShadow = "0 2px 10px rgba(0,0,0,0.06)";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.style.display = "block";
  clearTimeout(window.__cartToastTimer);
  window.__cartToastTimer = setTimeout(() => { toast.style.display = "none"; }, 2000);
}

// --- CART RENDERING ---
function renderCart() {
  const cart = getCart();
  const cartContainer = document.getElementById("cart-container");
  const emptyMsg = document.getElementById("empty-cart-message");
  const summary = document.getElementById("cart-summary");
  const cartTotalElem = document.getElementById("cart-total");

  // Add message area if not present
  let messageElem = document.getElementById("cart-message");
  if (!messageElem) {
    messageElem = document.createElement("div");
    messageElem.id = "cart-message";
    messageElem.style = "color:#b02525;font-weight:600;text-align:center;margin-bottom:12px;min-height:22px";
    if (cartContainer) cartContainer.parentNode.insertBefore(messageElem, cartContainer);
  }
  if (messageElem) messageElem.textContent = "";

  if (!cart.length) {
    if (cartContainer) cartContainer.innerHTML = '';
    if (summary) summary.style.display = 'none';
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (messageElem) messageElem.textContent = "";
    return;
  }
  if (emptyMsg) emptyMsg.style.display = 'none';

  let total = 0;
  let html = `<table class="cart-table">
    <thead>
      <tr>
        <th>Product</th>
        <th>Details</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Total</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
  `;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;
    const itemTotal = product.currentPrice * item.qty;
    total += itemTotal;
    html += `
      <tr>
        <td>
          <img src="${product.image}" alt="${product.title}" style="width:60px;height:60px;object-fit:cover;">
        </td>
        <td>
          <div style="font-weight:600; color:#b25e45;">${product.title}</div>
          <div style="font-size:0.94rem; color:#888;">${product.category || ""}</div>
        </td>
        <td>
          <div>₹${product.currentPrice.toLocaleString()}</div>
        </td>
        <td>
          <div class="qty-controls">
            <button class="qty-btn" data-id="${product.id}" data-action="decrease">-</button>
            <input type="number" class="qty-input" min="1" max="${product.stock}" value="${item.qty}" data-id="${product.id}">
            <button class="qty-btn" data-id="${product.id}" data-action="increase">+</button>
            <div class="stock-msg" data-id="${product.id}" style="font-size:0.85rem;color:#b02525;padding-top:2px;"></div>
          </div>
        </td>
        <td>
          ₹${itemTotal.toLocaleString()}
        </td>
        <td>
          <button class="remove-btn" data-id="${product.id}" title="Remove">&#128465;</button>
        </td>
      </tr>
    `;
  });
  html += "</tbody></table>";
  if (cartContainer) cartContainer.innerHTML = html;
  if (summary) summary.style.display = 'block';
  if (cartTotalElem) cartTotalElem.textContent = "₹" + total.toLocaleString();

  // qty button listeners
  if (cartContainer) {
    cartContainer.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = parseInt(btn.getAttribute('data-id'));
        const input = cartContainer.querySelector(`.qty-input[data-id="${id}"]`);
        const product = products.find(p => p.id === id);
        let qty = parseInt(input.value, 10) || 1;

        if (btn.getAttribute('data-action') === 'increase') {
          if (qty < product.stock) {
            qty++;
          }
        } else if (btn.getAttribute('data-action') === 'decrease') {
          qty = Math.max(1, qty - 1);
        }

        // Show message if max stock reached
        const stockMsg = cartContainer.querySelector(`.stock-msg[data-id="${id}"]`);
        if (qty >= product.stock) {
          stockMsg.textContent = `Only ${product.stock} in stock`;
        } else {
          stockMsg.textContent = '';
        }

        updateCartQty(id, qty);
        renderCart();
        updateCartCountDisplay();
      });
    });

    // qty input listeners
    cartContainer.querySelectorAll('.qty-input').forEach(input => {
      input.addEventListener('change', function () {
        const id = parseInt(input.getAttribute('data-id'));
        const product = products.find(p => p.id === id);
        let qty = parseInt(input.value, 10) || 1;
        if (qty > product.stock) {
          qty = product.stock;
          const stockMsg = cartContainer.querySelector(`.stock-msg[data-id="${id}"]`);
          stockMsg.textContent = `Only ${product.stock} in stock`;
        } else {
          const stockMsg = cartContainer.querySelector(`.stock-msg[data-id="${id}"]`);
          stockMsg.textContent = '';
        }
        qty = Math.max(1, qty);
        updateCartQty(id, qty);
        renderCart();
        updateCartCountDisplay();
      });
    });

    // remove listeners
    cartContainer.querySelectorAll('.remove-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = parseInt(btn.getAttribute('data-id'));
        removeFromCart(id);
        renderCart();
        updateCartCountDisplay();
      });
    });
  }
}

// --- ORDER SUCCESS ANIMATION & ORDER STORAGE ---
function showOrderSuccessAnimation() {
  // --- Save orders to localStorage before clearing the cart ---
  const cart = getCart();
  let orders = JSON.parse(localStorage.getItem('orders') || '[]');
  const now = new Date().toISOString();

  // For each cart item, add an order entry with date & qty
  cart.forEach(item => {
    orders.push({
      id: item.id,
      qty: item.qty,
      orderDate: now
    });
  });
  localStorage.setItem('orders', JSON.stringify(orders));

  // --- Success animation as before ---
  let prevAnim = document.getElementById('order-success-animation');
  if (prevAnim) prevAnim.remove();

  let overlay = document.createElement('div');
  overlay.id = 'order-success-animation';
  overlay.style.position = 'fixed';
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = '100vw';
  overlay.style.height = '100vh';
  overlay.style.background = 'rgba(255,255,255,0.96)';
  overlay.style.zIndex = 9999;
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.justifyContent = 'center';
  overlay.style.alignItems = 'center';
  overlay.innerHTML = `
    <div style="text-align:center;">
      <svg width="90" height="90" viewBox="0 0 90 90">
        <circle cx="45" cy="45" r="40" stroke="#4caf50" stroke-width="6" fill="none" stroke-dasharray="251.2" stroke-dashoffset="0" style="animation: circle-pop 0.6s cubic-bezier(.4,2,.8,1) both;"/>
        <polyline points="28,48 41,60 62,35" fill="none" stroke="#4caf50" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" style="stroke-dasharray:46;stroke-dashoffset:46;animation:checkmark 0.45s 0.4s cubic-bezier(.4,2,.8,1) forwards;"/>
      </svg>
      <div style="font-size:1.4rem; color:#4caf50; margin-top:24px; font-weight:600;">
        Order placed successfully!
      </div>
      <div style="margin:16px 0 0 0; color:#666; font-size:1.05rem;">
        Thank you for shopping with us.<br>Your order is being processed.
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  // Animations
  const style = document.createElement('style');
  style.innerHTML = `
  @keyframes circle-pop {
    0% { stroke-dashoffset: 251.2; }
    90% { stroke-dashoffset: 0; }
    100% { stroke-dashoffset: 0; }
  }
  @keyframes checkmark {
    to { stroke-dashoffset: 0; }
  }
  `;
  overlay.appendChild(style);

  // Remove overlay after 2.5s and clear cart
  setTimeout(() => {
    overlay.remove();
    setCart([]);
    renderCart();
    updateCartCountDisplay();
    // Optional: redirect to user page after order (uncomment if you want)
    // window.location.href = "user.html";
  }, 2500);
}

document.addEventListener('DOMContentLoaded', function () {
  renderCart();
  updateCartCountDisplay();

  const checkoutBtn = document.querySelector('.checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', function () {
      showOrderSuccessAnimation();
    });
  }
});