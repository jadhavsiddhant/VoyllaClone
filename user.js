// --- Utility to get orders from localStorage ---
function getOrders() {
  // Orders = [{id, qty, orderDate}]
  return JSON.parse(localStorage.getItem('orders') || '[]');
}

// --- Render Orders Table ---
function renderOrders(products) {
  const ordersBody = document.getElementById("ordersBody");
  ordersBody.innerHTML = "";

  const orders = getOrders();
  if (orders.length === 0) {
    ordersBody.innerHTML = `<tr>
      <td colspan="5" style="text-align:center; font-size:22px; color:#888; padding:48px 0;">
        No orders yet.
      </td>
    </tr>`;
    return;
  }

  orders.forEach(order => {
    const product = products.find(p => p.id === order.id);
    if (!product) return;

    // Show delivery date as "orderDate + 3 days"
    const orderDate = new Date(order.orderDate);
    const deliveryDate = new Date(orderDate.getTime() + 3 * 24 * 60 * 60 * 1000);
    const deliveryStr = deliveryDate.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    ordersBody.innerHTML += `
      <tr>
        <td><img src="${product.image}" alt="${product.title}" style="width:60px;height:60px;object-fit:cover;"></td>
        <td class="wishlist-product-title">${product.title}</td>
        <td class="wishlist-price">₹ ${product.currentPrice.toLocaleString()}</td>
        <td>${order.qty}</td>
        <td>${deliveryStr}</td>
      </tr>
    `;
  });
}

document.addEventListener("DOMContentLoaded", function() {
  renderOrders(window.products);
});