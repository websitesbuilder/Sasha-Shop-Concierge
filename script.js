// =========================
// ORDER ID GENERATOR ONLY
// =========================
document.addEventListener("DOMContentLoaded", function () {

    // Create unique order ID
    const date = Date.now();
    const random = Math.floor(Math.random() * 1000);

    const orderId = "ORD-" + date + "-" + random;

    // Insert into hidden input
    const orderField = document.getElementById("order_id");

    if (orderField) {
        orderField.value = orderId;
    }
});
