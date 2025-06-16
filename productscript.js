// --- Wishlist utility functions ---
function getWishlist() {
  return JSON.parse(localStorage.getItem('wishlist') || '[]');
}
function setWishlist(arr) {
  localStorage.setItem('wishlist', JSON.stringify(arr));
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
function isWishlisted(productId) {
  return getWishlist().includes(productId);
}

// --- Cart utility functions ---
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
    return false;
  }

  if (found) {
    found.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  setCart(cart);
  updateCartCountDisplay && updateCartCountDisplay();
  return true;
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

// --- Toast utility ---
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

// --- Utility to get productId from URL ---
function getProductIdFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('id'), 10);
}

// --- Render product details ---
function renderProductDetail(product) {
  document.getElementById('productTitle').textContent = product.title || "";
  document.getElementById('productPrice').textContent = `₹${product.currentPrice.toLocaleString()}`;
  document.getElementById('productMRP').textContent = product.originalPrice
    ? `MRP: ₹${product.originalPrice.toLocaleString()}`
    : "";

  const mainImg = document.getElementById('mainProductImage');
  const thumbnailsRow = document.getElementById('thumbnailsRow');
  let images = product.images && product.images.length ? product.images : [product.image];
  mainImg.src = images[0];
  mainImg.alt = product.title;

  thumbnailsRow.innerHTML = '';
  images.forEach((img, idx) => {
    const tn = document.createElement('img');
    tn.src = img;
    tn.alt = product.title + ' image ' + (idx + 1);
    if (idx === 0) tn.classList.add('selected');
    tn.addEventListener('click', () => {
      mainImg.src = img;
      thumbnailsRow.querySelectorAll('img').forEach(i => i.classList.remove('selected'));
      tn.classList.add('selected');
    });
    thumbnailsRow.appendChild(tn);
  });

  document.getElementById('productDescription').textContent = product.description || '';

  let specsText = '';
  if (product.weight) specsText += `Weight (Gms): ${product.weight}\n`;
  if (product.size) specsText += `Size (LxW)(inch): ${product.size}\n`;
  if (product.material) specsText += `Material: ${product.material}\n`;
  if (product.plating) specsText += `Plating: ${product.plating}\n`;
  if (product.color) specsText += `Color: ${product.color}\n`;
  if (product.salesPackage) specsText += `Sales Package: ${product.salesPackage}\n`;
  if (product.productCode) specsText += `Product Code: ${product.productCode}\n`;
  document.getElementById('productSpecs').textContent = specsText.trim();

  const careUl = document.getElementById('productCare');
  careUl.innerHTML = '';
  (product.careInstructions || []).forEach(instr => {
    const li = document.createElement('li');
    li.textContent = instr;
    careUl.appendChild(li);
  });

  renderFrequentlyBought(product.frequentlyBought || []);
}

// --- Render Frequently Bought Together ---
function renderFrequentlyBought(fbtArr) {
  const fbtRow = document.getElementById('fbtRow');
  const fbtNames = document.getElementById('fbtNames');
  const fbtMRP = document.getElementById('fbtMRP');
  const fbtTotal = document.getElementById('fbtTotal');

  if (!fbtArr || !fbtArr.length) {
    fbtRow.innerHTML = '<span>No suggestions.</span>';
    fbtNames.innerHTML = '';
    fbtMRP.textContent = '';
    fbtTotal.textContent = '';
    return;
  }

  fbtRow.innerHTML = '';
  fbtArr.forEach((prod, idx) => {
    if (idx > 0) {
      const plus = document.createElement('span');
      plus.className = 'fbt-plus';
      plus.textContent = '+';
      fbtRow.appendChild(plus);
    }
    const card = document.createElement('div');
    card.className = 'fbt-prod-card';
    card.innerHTML = `<img src="${prod.image}" alt="${prod.title}">`;
    fbtRow.appendChild(card);
  });

  let totalOld = 0, totalNew = 0;
  fbtNames.innerHTML = '';
  fbtArr.forEach(prod => {
    totalOld += prod.mrp || 0;
    totalNew += prod.price || 0;
    fbtNames.innerHTML += `<span><span class="fbt-oldprice">₹${prod.mrp?.toLocaleString() || ''}</span><span style="color:#cb7d6c; font-weight:600">₹${prod.price?.toLocaleString() || ''}</span> ${prod.title}</span>`;
  });
  fbtMRP.textContent = `₹${totalOld.toLocaleString()}`;
  fbtTotal.textContent = `₹${totalNew.toLocaleString()}`;
}

// --- DOMContentLoaded Main Logic ---
document.addEventListener("DOMContentLoaded", function () {
  const id = getProductIdFromUrl();
  const product = products.find(p => p.id === id);
  if (!product) {
    document.body.innerHTML = "<h2 style='margin:80px auto;text-align:center'>Product Not Found</h2>";
    return;
  }
  renderProductDetail(product);

  // --- Wishlist Button Logic ---
  const wishBtn = document.querySelector('.wish-btn');
  const wishIcon = wishBtn.querySelector('.icon-heart');
  function updateWishIcon() {
    if (isWishlisted(product.id)) {
      wishIcon.textContent = '\u2665'; // filled heart
      wishIcon.style.color = '#cb7d6c';
    } else {
      wishIcon.textContent = '\u2661'; // outline heart
      wishIcon.style.color = '';
    }
  }
  updateWishIcon();
  wishBtn.addEventListener('click', function() {
    if (isWishlisted(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
    updateWishIcon();
  });

  // --- Add to Cart Button Logic ---
  const addToCartBtn = document.querySelector('.add-to-cart-btn');
  if (addToCartBtn) {
    addToCartBtn.addEventListener('click', function() {
      addToCart(product.id, 1);
      updateCartCountDisplay();
      addToCartBtn.textContent = "ADDED!";
      setTimeout(() => addToCartBtn.textContent = "ADD TO CART", 1000);
    });
  }

  // --- Delivery logic ---
  function calculateDelivery(input) {
    let result = document.createElement('div');
    result.className = 'delivery-result';
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(today.getDate() + 3);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const deliveryStr = deliveryDate.toLocaleDateString('en-IN', options);
    result.style.color = '#298f47';
    result.textContent = `Delivery by ${deliveryStr}`;
    const existingResult = input.parentElement.parentElement.querySelector('.delivery-result');
    if (existingResult) { existingResult.remove(); }
    const postalRow = input.parentElement;
    postalRow.after(result);
  }
  document.querySelector('.check-btn').addEventListener('click', function() {
    const input = document.querySelector('.postal-input');
    if (input.value.trim()) { calculateDelivery(input); }
  });
  document.querySelector('.postal-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && this.value.trim()) { calculateDelivery(this); }
  });

  // --- Buy It Now Button Logic ---
  document.querySelectorAll('.buy-now-btn').forEach(btn => {
    btn.addEventListener('click', function(event) {
      event.preventDefault();
      // Get productId from button, or fallback to URL
      let productId = parseInt(this.getAttribute('data-product-id'));
      if (isNaN(productId)) {
        productId = getProductIdFromUrl();
      }
      if (isNaN(productId)) {
        alert("Product ID not found.");
        return;
      }
      // Add to cart with stock check, then redirect
      const product = products.find(p => p.id === productId);
      if (!product) {
        alert("Product not found!");
        return;
      }
      let cart = getCart();
      const found = cart.find(item => item.id === productId);
      if (found) {
        if (found.qty < product.stock) {
          found.qty += 1;
        } else {
          showToast(`Only ${product.stock} in stock`);
          window.location.href = "cart.html";
          return;
        }
      } else {
        cart.push({ id: productId, qty: 1 });
      }
      setCart(cart);
      updateCartCountDisplay && updateCartCountDisplay();
      window.location.href = "cart.html";
    });
  });

  // --- Update cart count in navbar on page load ---
  updateCartCountDisplay();
});