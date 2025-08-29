var heartCount = 0
var coinCount = 100
var copyCount = 0
var callHistory = []

function toggleMobileMenu() {
  var dropdown = document.getElementById("mobileDropdown")
  if (!dropdown) return
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none"
  } else {
    dropdown.style.display = "block"
  }
}