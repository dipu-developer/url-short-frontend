document.addEventListener("DOMContentLoaded", function (event) {
  const showNavbar = (toggleId, navId, bodyId, headerId) => {
    const toggle = document.getElementById(toggleId),
      nav = document.getElementById(navId),
      bodypd = document.getElementById(bodyId),
      headerpd = document.getElementById(headerId);

    // Validate that all variables exist
    if (toggle && nav && bodypd && headerpd) {
      toggle.addEventListener("click", () => {
        // show navbar
        nav.classList.toggle("show");
        // change icon
        toggle.classList.toggle("bx-x");
        // add padding to body
        bodypd.classList.toggle("body-pd");
        // add padding to header
        headerpd.classList.toggle("body-pd");
      });
    }
  };

  showNavbar("header-toggle", "nav-bar", "body-pd", "header");

  /*===== LINK ACTIVE =====*/
  const linkColor = document.querySelectorAll(".nav_link");

  function colorLink() {
    if (linkColor) {
      linkColor.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
    }
  }
  linkColor.forEach((l) => l.addEventListener("click", colorLink));

  // Your code to run since DOM is loaded and ready
});
// ================================================

// ======================= Validate alphabate =========================
document.getElementById("fname").addEventListener("keypress", onlyAlphabetic);
document.getElementById("lname").addEventListener("keypress", onlyAlphabetic);
document.getElementById("city").addEventListener("keypress", onlyAlphabetic);

// ======================= Validate ZIP Number =========================

document
  .getElementById("zip")
  .addEventListener("keypress", function validatePhone(event) {
    var key = event.key;
    var inputField = event.target;
    var currentValue = inputField.value;
    var isNumeric = /^[0-9]$/.test(key); // Regular expression to match numeric characters

    if (!isNumeric || currentValue.length >= 6) {
      document.getElementById(`${this.id}-error`).innerHTML =
        "Please enter only Numerical and 6 digit.";
      document.getElementById(`${this.id}-error`).classList.add("text-danger");
    } else {
      console.log("else number");
      document.getElementById(`${this.id}-error`).innerHTML = "";
    }
  });

// ======================= Validate Phone Number =========================

document
  .getElementById("pnumber")
  .addEventListener("keypress", function validatePhone(event) {
    let key = this.value;
    let inputField = event.target;
    let currentValue = inputField.value;

    if (isNaN(key) || currentValue.length >= 10) {
      document.getElementById(`${this.id}-error`).innerHTML =
        "Please enter only Numerical and 10 digit.";
      document.getElementById(`${this.id}-error`).classList.add("text-danger");
    }
    else {
      document.getElementById(`${this.id}-error`).innerHTML = "";
    }
  });

// ======================= Validate Phone Number =========================
document
  .getElementById("account")
  .addEventListener("keypress", function validatePhone(event) {
    let key = this.value;

    if (isNaN(key)) {
      document.getElementById(`${this.id}-error`).innerHTML =
        "Please enter only Numerical.";
      document.getElementById(`${this.id}-error`).classList.add("text-danger");
    } else {
      document.getElementById(`${this.id}-error`).innerHTML = "";
    }
  });

function onlyAlphabetic(event) {
  var inputValue = event.key;
  var regex = /^[a-zA-Z]+$/; // Regular expression to match alphabetic characters
  var isValid = regex.test(inputValue);
  if (!isValid) {
    document.getElementById(`${this.id}-error`).innerHTML =
      "Please enter only alphabetic characters.";
    document.getElementById(`${this.id}-error`).classList.add("text-danger");
    event.preventDefault();
  } else {
    document.getElementById(`${this.id}-error`).innerHTML = "";
  }
}

function validateNumericInput(event) {
  var key = event.key;
  var isNumeric = /^[0-9]$/.test(key); // Regular expression to match numeric characters

  if (!isValid) {
    document.getElementById(`${this.id}-error`).innerHTML =
      "Please enter only Number.";
    document.getElementById(`${this.id}-error`).classList.add("text-danger");
    event.preventDefault();
  } else {
    document.getElementById(`${this.id}-error`).innerHTML = "";
  }
}

function validatePhone(event) {
  var key = event.key;
  var inputField = event.target;
  var currentValue = inputField.value;
  var isNumeric = /^[0-9]$/.test(key); // Regular expression to match numeric characters

  if (!isNumeric || currentValue.length >= 10) {
    document.getElementById("error").style.display = "block";
    event.preventDefault(); // Prevents the default action of the keypress event
  } else {
    document.getElementById("error").style.display = "none";
  }
}

// ============= Validate form ================

document.getElementById("detailform").addEventListener("input", function () {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let city = document.getElementById("city").value;
  let dropdownInput = document.getElementById("state").value;
  let zip = document.getElementById("zip").value;
  let phoneNo = document.getElementById("pnumber").value;
  let ifsc = document.getElementById("pnumber").value;
  let accnumber = document.getElementById("account").value;

  if (
    fname.trim() !== "" &&
    lname.trim() !== "" &&
    city.trim() !== "" &&
    ifsc.trim() !== "" &&
    phoneNo.match(/^\d{10}$/) &&
    zip.match(/^\d{6}$/) &&
    dropdownInput !== "" ||
    accnumber.match(/^\d{20}$/) 
  ) {
    document.getElementById("submitbtn").disabled = false;
  } else {
    document.getElementById("submitbtn").disabled = true;
  }
});
