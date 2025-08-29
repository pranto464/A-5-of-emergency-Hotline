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

function addHeart() {
  heartCount = heartCount + 1
  document.getElementById("heartCount").textContent = heartCount
  document.getElementById("mobileHeartCount").textContent = heartCount

  // Make the clicked heart stay red (robust for all browsers)
  var e = window.event || null
  if (e && e.target) {
    e.target.classList.add("liked")
  }
}

function copyNumber(number) {
  var textArea = document.createElement("textarea")
  textArea.value = number
  document.body.appendChild(textArea)
  textArea.select()
  document.execCommand("copy")
  document.body.removeChild(textArea)

  alert("Number " + number + " copied!")

  copyCount = copyCount + 1
  document.getElementById("copyCount").textContent = copyCount
  document.getElementById("mobileCopyCount").textContent = copyCount
}