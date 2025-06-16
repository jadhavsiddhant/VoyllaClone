// === Popup Product Rotator for IDs 81-86 ===

// Basic styling for the popup box (add this to your main CSS if you want to customize further)
const styles = `
#popup-product-box {
  position: fixed;
  right: 24px;
  bottom: 24px;
  width: 320px;
  background: #fff;
  box-shadow: 0 8px 32px rgba(0,0,0,0.20);
  border-radius: 16px;
  overflow: hidden;
  z-index: 99999;
  font-family: inherit;
  transition: box-shadow 0.3s;
  border: 1.5px solid #f1e7e7;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  animation: popin 0.5s;
}
#popup-product-box:hover {
  box-shadow: 0 16px 48px rgba(0,0,0,0.28);
}
#popup-product-img {
  width: 84px;
  height: 84px;
  object-fit: cover;
  border-radius: 14px 0 0 14px;
  flex-shrink: 0;
}
#popup-product-info {
  padding: 12px 16px;
  flex: 1 1 0%;
}
#popup-product-title {
  font-size: 1.08rem;
  font-weight: 600;
  margin-bottom: 2px;
  color: #b25e45;
  line-height: 1.15;
}
#popup-product-price {
  font-weight: 600;
  font-size: 1.1rem;
  color: #2d9f5b;
  margin-bottom: 4px;
}
#popup-product-cat {
  font-size: 0.96rem;
  color: #555;
  margin-bottom: 7px;
}
#popup-product-add {
  display: inline-block;
  background: #b25e45;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 7px 18px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 4px;
  transition: background 0.15s;
}
#popup-product-add:active {
  background: #944c38;
}
#popup-product-close {
  position: absolute;
  top: 4px; right: 10px;
  color: #999; background: none; border: none;
  font-size: 1.3rem; cursor: pointer;
  padding: 2px 7px; border-radius: 50%;
  z-index: 2;
  transition: background 0.2s;
}
#popup-product-close:hover { background: #eee; }
@keyframes popin {
  0% { opacity: 0; transform: translateY(20px) scale(0.97);}
  100% { opacity: 1; transform: translateY(0) scale(1);}
}
@media (max-width:600px) {
  #popup-product-box {
    width: 96vw;
    min-width: 0;
    right: 2vw;
    left: 2vw;
    bottom: 14px;
    border-radius: 10px;
  }
  #popup-product-img { width: 62px; height: 62px; border-radius: 8px 0 0 8px; }
  #popup-product-info { padding: 8px 12px; }
}
`;
if (!document.getElementById('popup-product-style')) {
  const styleElem = document.createElement('style');
  styleElem.id = 'popup-product-style';
  styleElem.innerHTML = styles;
  document.head.appendChild(styleElem);
}

(function() {
  // Ensure products are available globally
  if (typeof window.products === "undefined" || !Array.isArray(window.products)) return;

  // IDs to show in popup
  const ids = [81, 82, 83, 84, 85, 86];
  const prodList = ids.map(id => window.products.find(p => p.id === id)).filter(Boolean);
  if (!prodList.length) return;

  // Helper to make page URL (adjust according to your routing)
  function getProductPageUrl(id) {
    // Example: product.html?id=81 or /product/81
    return `product.html?id=${id}`;
  }

  // Show toast for add to cart
  function popupShowToast(msg) {
    let toast = document.getElementById("popup-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "popup-toast";
      toast.style.position = "fixed";
      toast.style.bottom = "90px";
      toast.style.left = "50%";
      toast.style.transform = "translateX(-50%)";
      toast.style.background = "#b25e45";
      toast.style.color = "#fff";
      toast.style.padding = "11px 20px";
      toast.style.borderRadius = "8px";
      toast.style.fontWeight = "600";
      toast.style.fontSize = "1rem";
      toast.style.zIndex = "99999";
      toast.style.boxShadow = "0 2px 10px rgba(0,0,0,0.09)";
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.style.display = "block";
    clearTimeout(window.__popupToastTimer);
    window.__popupToastTimer = setTimeout(() => { toast.style.display = "none"; }, 1600);
  }

  // Main popup rendering
  let idx = 0, intervalId = null, closed = false;

  function renderPopup() {
    if (closed) return;
    let data = prodList[idx % prodList.length];
    let box = document.getElementById("popup-product-box");
    if (!box) {
      box = document.createElement('div');
      box.id = "popup-product-box";
      document.body.appendChild(box);
    }
    box.innerHTML = `
      <button id="popup-product-close" aria-label="Close Popup">&times;</button>
      <img id="popup-product-img" src="${data.image}" alt="${data.title}">
      <div id="popup-product-info">
        <div id="popup-product-title">${data.title}</div>
        <div id="popup-product-cat">${data.category || ""}</div>
        <div id="popup-product-price">₹${data.currentPrice.toLocaleString()}</div>
        <button id="popup-product-add" type="button">Add to Cart</button>
      </div>
    `;
    // Click anywhere but Add to Cart or Close redirects to product page
    box.onclick = function(e) {
      if (
        e.target.id === "popup-product-add" ||
        e.target.id === "popup-product-close"
      ) return;
      window.location.href = getProductPageUrl(data.id);
    };
    document.getElementById('popup-product-img').onclick = function(e) {
      window.location.href = getProductPageUrl(data.id);
      e.stopPropagation();
    };

    // Add to Cart logic (use your global addToCart function if exists)
    document.getElementById('popup-product-add').onclick = function(e) {
      e.stopPropagation();
      if (typeof addToCart === "function") {
        addToCart(data.id, 1);
        popupShowToast("Added to cart!");
      } else {
        popupShowToast("Cart not available");
      }
    };
    // Close popup
    document.getElementById('popup-product-close').onclick = function(e) {
      closed = true;
      box.style.display = "none";
      e.stopPropagation();
    };
  }

  // Start rotating popup every 20 seconds
  function startPopupCycle() {
    renderPopup();
    intervalId = setInterval(() => {
      if (closed) {
        clearInterval(intervalId);
        return;
      }
      idx = (idx + 1) % prodList.length;
      renderPopup();
    }, 20000);
  }

  // Only show on large screens > 500px wide
  function responsivePopupStart() {
    if (window.innerWidth < 500) return;
    startPopupCycle();
  }

  // Wait for DOM and products
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", responsivePopupStart);
  } else {
    responsivePopupStart();
  }
})();