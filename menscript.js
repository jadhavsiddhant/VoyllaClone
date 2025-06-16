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
  if (found) {
    found.qty += qty;
  } else {
    cart.push({ id: productId, qty });
  }
  setCart(cart);
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

// Use shared products array from productsData.js
function getCheckedValues(selector) {
  return Array.from(document.querySelectorAll(selector + ":checked")).map(cb => cb.value);
}

function filterProducts() {
  let filtered = products.filter(p => p.id >= 1 && p.id <= 16);

  const types = getCheckedValues(".filter-type");
  if (types.length) filtered = filtered.filter(p => types.includes(p.type));

  const looks = getCheckedValues(".filter-look");
  if (looks.length) filtered = filtered.filter(p => looks.includes(p.look));

  const priceRanges = getCheckedValues(".filter-price");
  if (priceRanges.length) {
    filtered = filtered.filter(p => {
      return priceRanges.some(r => {
        if (r === "500-999") return p.price >= 500 && p.price <= 999;
        if (r === "1000-1499") return p.price >= 1000 && p.price <= 1499;
        if (r === "1500-1999") return p.price >= 1500 && p.price <= 1999;
        if (r === "2000-above") return p.price >= 2000;
        return false;
      });
    });
  }

  const cats = getCheckedValues(".filter-category");
  if (cats.length) filtered = filtered.filter(p => cats.includes(p.category));

  return filtered;
}

function sortProducts(prods, order) {
  if (order === "highToLow") {
    return prods.slice().sort((a, b) => b.currentPrice - a.currentPrice);
  } else {
    return prods.slice().sort((a, b) => a.currentPrice - b.currentPrice);
  }
}

function renderProductsGrid(productsList, page, itemsPerPage) {
  const grid = document.getElementById("productGrid");
  grid.innerHTML = "";
  const startIdx = (page - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const visible = productsList.slice(startIdx, endIdx);

  visible.forEach(p => {
    grid.innerHTML += `
      <a class="product-card" href="product.html?id=${p.id}">
        <div class="product-image-wrapper">
          <img src="${p.image}" alt="${p.title}" class="product-image"/>
          <div class="discount-badge">- ${p.discount}%</div>
        </div>
        <div class="product-title">${p.title}</div>
        <div class="product-prices">
          <span class="original-price">₹ ${p.originalPrice.toLocaleString()}</span>
          <span class="current-price">₹ ${p.currentPrice.toLocaleString()}</span>
        </div>
        <button class="add-to-cart-btn" data-id="${p.id}" onclick="event.preventDefault();">ADD TO CART</button>
      </a>
    `;
  });

  // Attach cart logic to all add-to-cart buttons
  grid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      const id = parseInt(btn.getAttribute('data-id'), 10);
      addToCart(id, 1);
      updateCartCountDisplay();
      btn.textContent = "ADDED!";
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = "ADD TO CART";
        btn.disabled = false;
      }, 900);
    });
  });
}

function renderPagination(total, currentPage, itemsPerPage) {
  const totalPages = Math.ceil(total / itemsPerPage);
  const pag = document.getElementById("pagination");
  pag.innerHTML = "";
  if (totalPages <= 1) return;
  for (let i = 1; i <= totalPages; ++i) {
    pag.innerHTML += `<button class="${i === currentPage ? "active" : ""}" data-page="${i}">${i}</button>`;
  }
}

function updateGrid() {
  const itemsPerPage = parseInt(document.getElementById("itemsPerPage").value, 10);
  const sortBy = document.getElementById("sortBy").value;
  const filtered = filterProducts();
  const sorted = sortProducts(filtered, sortBy);
  const page = window.currentPage || 1;
  renderProductsGrid(sorted, page, itemsPerPage);
  renderPagination(sorted.length, page, itemsPerPage);
}

function setUpEventListeners() {
  document.querySelectorAll(".catalog-filters input[type=checkbox]").forEach(cb => {
    cb.addEventListener("change", () => {
      window.currentPage = 1;
      updateGrid();
    });
  });
  document.getElementById("itemsPerPage").addEventListener("change", () => {
    window.currentPage = 1;
    updateGrid();
  });
  document.getElementById("sortBy").addEventListener("change", () => {
    window.currentPage = 1;
    updateGrid();
  });
  document.getElementById("pagination").addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      window.currentPage = parseInt(e.target.dataset.page, 10);
      updateGrid();
      window.scrollTo({top: document.getElementById("productGrid").offsetTop - 60, behavior: "smooth"});
    }
  });
}

window.addEventListener("DOMContentLoaded", () => {
  window.currentPage = 1;
  setUpEventListeners();
  updateGrid();
  updateCartCountDisplay(); // ensure cart count is up to date on load
});
