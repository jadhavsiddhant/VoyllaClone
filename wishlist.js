// --- Utility functions for wishlist management ---
function getWishlist() {
  return JSON.parse(localStorage.getItem("wishlist") || "[]");
}
function setWishlist(arr) {
  localStorage.setItem("wishlist", JSON.stringify(arr));
}
function addToWishlist(productId) {
  let wishlist = getWishlist();
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    setWishlist(wishlist);
  }
}
function removeFromWishlist(productId) {
  let wishlist = getWishlist();
  wishlist = wishlist.filter(id => id !== productId);
  setWishlist(wishlist);
}

// --- Render Wishlist Table ---
function renderWishlist(products) {
  const wishlistBody = document.getElementById("wishlistBody");
  wishlistBody.innerHTML = "";

  const wishlist = getWishlist();

  if (wishlist.length === 0) {
    wishlistBody.innerHTML = `<tr>
      <td colspan="5" style="text-align:center; font-size:22px; color:#888; padding:48px 0;">
        Your wishlist is empty.
      </td>
    </tr>`;
    return;
  }

  wishlist.forEach(productId => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    wishlistBody.innerHTML += `
      <tr>
        <td><img src="${product.image}" alt="${product.title}"></td>
        <td class="wishlist-product-title">${product.title}</td>
        <td class="wishlist-price">₹ ${product.currentPrice.toLocaleString()}</td>
        <td>
          <button class="wishlist-add-btn" ${product.stock === 0 ? "disabled class='soldout'" : ""}>
            ${product.stock === 0 ? "SOLD OUT" : "ADD TO CART"}
          </button>
        </td>
        <td>
          <button class="wishlist-remove-btn" data-id="${product.id}" title="Remove">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="#cb7d6c" width="32" height="32">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </td>
      </tr>
    `;
  });

  // Attach remove handlers
  document.querySelectorAll(".wishlist-remove-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const id = parseInt(this.getAttribute("data-id"), 10);
      removeFromWishlist(id);
      renderWishlist(window.products);
    });
  });
}

// --- On page load: render wishlist table ---
document.addEventListener("DOMContentLoaded", function() {
  // Assumes 'window.products' is your global products array
  renderWishlist(window.products);
  // --- ADD BELOW in your wishlist JS, after renderWishlist definition ---

// Make sure addToCart and products are globally available
function wishlistAddToCartHandler(product) {
  // Optionally you can change qty=1 to allow for more
  let cart = JSON.parse(localStorage.getItem('cart') || '[]');
  const found = cart.find(item => item.id === product.id);
  let qtyToAdd = 1;
  let totalQty = found ? found.qty + qtyToAdd : qtyToAdd;
  if (totalQty > product.stock) {
    showWishlistToast(`Only ${product.stock} in stock`);
    return;
  }
  if (found) {
    found.qty += qtyToAdd;
  } else {
    cart.push({ id: product.id, qty: qtyToAdd });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  if (typeof updateCartCountDisplay === "function") updateCartCountDisplay();
  showWishlistToast("Added to cart!");
}

// Show a toast message (non-blocking)
function showWishlistToast(msg) {
  let toast = document.getElementById("wishlist-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "wishlist-toast";
    toast.style.position = "fixed";
    toast.style.bottom = "48px";
    toast.style.left = "50%";
    toast.style.transform = "translateX(-50%)";
    toast.style.background = "#b25e45";
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
  clearTimeout(window.__wishlistToastTimer);
  window.__wishlistToastTimer = setTimeout(() => { toast.style.display = "none"; }, 1700);
}

// --- MODIFY renderWishlist to attach add-to-cart handlers after rendering ---

function renderWishlist(products) {
  const wishlistBody = document.getElementById("wishlistBody");
  wishlistBody.innerHTML = "";

  const wishlist = getWishlist();

  if (wishlist.length === 0) {
    wishlistBody.innerHTML = `<tr>
      <td colspan="5" style="text-align:center; font-size:22px; color:#888; padding:48px 0;">
        Your wishlist is empty.
      </td>
    </tr>`;
    return;
  }

  wishlist.forEach(productId => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    wishlistBody.innerHTML += `
      <tr>
        <td><img src="${product.image}" alt="${product.title}"></td>
        <td class="wishlist-product-title">${product.title}</td>
        <td class="wishlist-price">₹ ${product.currentPrice.toLocaleString()}</td>
        <td>
          <button class="wishlist-add-btn" data-id="${product.id}" ${product.stock === 0 ? "disabled class='soldout'" : ""}>
            ${product.stock === 0 ? "SOLD OUT" : "ADD TO CART"}
          </button>
        </td>
        <td>
          <button class="wishlist-remove-btn" data-id="${product.id}" title="Remove">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
              stroke="#cb7d6c" width="32" height="32">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </td>
      </tr>
    `;
  });

  // Attach remove handlers
  document.querySelectorAll(".wishlist-remove-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const id = parseInt(this.getAttribute("data-id"), 10);
      removeFromWishlist(id);
      renderWishlist(window.products);
    });
  });

  // Attach add-to-cart handlers
  document.querySelectorAll(".wishlist-add-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      const id = parseInt(this.getAttribute("data-id"), 10);
      const product = products.find(p => p.id === id);
      if (product && product.stock > 0) {
        wishlistAddToCartHandler(product);
      }
    });
  });
}
});