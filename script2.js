let grandTotal = 0;

function addItem() {
  const item = document.getElementById("item").value.trim();
  const quantity = parseInt(document.getElementById("quantity").value);
  const price = parseFloat(document.getElementById("price").value);

  if (!item || isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
    alert("Please enter valid item, quantity, and price!");
    return;
  }

  const total = quantity * price;
  grandTotal += total;

  const table = document.getElementById("billTable");
  const row = table.insertRow();
  row.insertCell(0).textContent = item;
  row.insertCell(1).textContent = quantity;
  row.insertCell(2).textContent = `₹${price.toFixed(2)}`;
  row.insertCell(3).textContent = `₹${total.toFixed(2)}`;

  document.getElementById("grandTotal").textContent = `Grand Total: ₹${grandTotal.toFixed(2)}`;

  document.getElementById("item").value = "";
  document.getElementById("quantity").value = "";
  document.getElementById("price").value = "";
}
