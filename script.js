
// -------------------------
// PACKAGE DATA
// -------------------------
const packages = {
  starter: "Starter Package - $350",
  standard: "Standard Package - $500",
  premium: "Premium Package - $700",
  vip: "VIP Concierge Package - $1000"
};

let selectedPackage = "";

// -------------------------
// SELECT PACKAGE (BUTTONS)
// -------------------------
function selectPackage(type) {

    const name = document.getElementById("customerName").value;
    const email = document.getElementById("customerEmail").value;
    const phone = document.getElementById("customerPhone").value;

    if (!name || !email || !phone) {
        alert("Please enter your name, email address, and phone number before selecting a package.");
        return;
    }

    selectedPackage = packages[type];

    if (!selectedPackage) return;

    document.getElementById("checkoutBox").style.display = "block";

    document.getElementById("selectedPackageText").innerHTML = `
        <strong>${selectedPackage}</strong><br><br>
        Name: ${name}<br>
        Email: ${email}<br>
        Phone: ${phone}
    `;
}

// -------------------------
// HANDLE DROPDOWN CHANGE
// -------------------------
document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const packageSelected = document.getElementById("package").value;
    const details = document.getElementById("details").value;

    // Make sure package is selected
    if (!packageSelected) {
        alert("Please select a package first.");
        return;
    }

    // Show checkout popup
    document.getElementById("checkoutBox").style.display = "block";

    document.getElementById("selectedPackageText").innerHTML = `
        <strong>Order Summary</strong><br><br>
        Name: ${name}<br>
        Package: ${packageSelected}<br><br>
        Please choose your payment method below.
    `;
});

// -------------------------
// PAYMENT OPTIONS
// -------------------------
function payWithPayPal() {
    window.open("https://paypal.me/YOURPAYPAL", "_blank");

    document.getElementById("messageBox").innerHTML =
        "After completing payment, please return and submit your order details if requested.";
}

function payWithCashApp() {
    window.open("https://cash.app/$YOURCASHAPP", "_blank");

    document.getElementById("messageBox").innerHTML =
        "After completing payment, please return and submit your order details if requested.";
}

// -------------------------
// EMAIL FORM (FORMSUBMIT OR EMAILJS OPTIONAL)
// -------------------------
document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const data = {
    name: document.getElementById("name").value,
    package: document.getElementById("package").value,
    details: document.getElementById("details").value,
    contact: document.getElementById("contact").value
  };

  // If using EmailJS (optional)
  if (typeof emailjs !== "undefined") {
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data)
      .then(() => {
        document.getElementById("messageBox").innerText =
          "Request sent successfully!";
      })
      .catch((err) => {
        console.log(err);
        document.getElementById("messageBox").innerText =
          "Error sending request.";
      });
  }

  this.reset();
});