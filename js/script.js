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
function callService(serviceName, serviceNumber) {
  if (coinCount < 20) {
    alert("Not enough coins! You need 20 coins to call.")
    return
  }

  alert("Calling " + serviceName + " at " + serviceNumber)

  coinCount = coinCount - 20
  document.getElementById("coinCount").textContent = coinCount
  document.getElementById("mobileCoinCount").textContent = coinCount

  var now = new Date()
  var hours = now.getHours()
  var minutes = now.getMinutes()
  var seconds = now.getSeconds()
  var ampm = hours >= 12 ? "PM" : "AM"

  hours = hours % 12
  hours = hours ? hours : 12
  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds

  var timeString = hours + ":" + minutes + ":" + seconds + " " + ampm

  var historyItem = {
    name: serviceName,
    number: serviceNumber,
    time: timeString,
  }

  callHistory.unshift(historyItem)
  showHistory()
}

function getDotColor() {
  var colors = ["#e74c3c", "#3498db", "#f39c12", "#27ae60", "#e91e63", "#9b59b6"]
  var randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
}

function showHistory() {
  var historyContainer = document.getElementById("historyList")

  if (callHistory.length === 0) {
    historyContainer.innerHTML = '<div class="no-history">No calls made yet</div>'
    return
  }

  var historyHTML = ""
  for (var i = 0; i < callHistory.length; i++) {
    var item = callHistory[i]
    var dotColor = getDotColor()
    historyHTML += '<div class="history-item">'
    historyHTML += '<div class="history-dot" style="background-color: ' + dotColor + '"></div>'
    historyHTML += '<div class="history-content">'
    historyHTML += '<div class="history-service-name">' + item.name + "</div>"
    historyHTML += '<div class="history-service-number">' + item.number + "</div>"
    historyHTML += '<div class="history-time">' + item.time + "</div>"
    historyHTML += "</div>"
    historyHTML += "</div>"
  }

  historyContainer.innerHTML = historyHTML
}

function clearHistory() {
  if (callHistory.length === 0) {
    alert("History is already empty!")
    return
  }

  var sure = confirm("Clear all history?")
  if (sure) {
    callHistory = []
    heartCount = 0
    coinCount = 100
    copyCount = 0

    document.getElementById("heartCount").innerHTML = "0"
    document.getElementById("coinCount").innerHTML = "100"
    document.getElementById("copyCount").innerHTML = "0"
    document.getElementById("mobileHeartCount").innerHTML = "0"
    document.getElementById("mobileCoinCount").innerHTML = "100"
    document.getElementById("mobileCopyCount").innerHTML = "0"

    var heartIcons = document.querySelectorAll(".heart-icon")
    for (var i = 0; i < heartIcons.length; i++) {
      heartIcons[i].classList.remove("liked")
      heartIcons[i].style.color = ""
    }

    showHistory()
    alert("History cleared and all counters reset!")
  }
}

document.addEventListener("click", (event) => {
  var dropdown = document.getElementById("mobileDropdown")
  var hamburger = document.querySelector(".hamburger-menu")

  if (dropdown && hamburger) {
    if (!hamburger.contains(event.target) && !dropdown.contains(event.target)) {
      dropdown.style.display = "none"
    }
  }
})

window.onload = () => {
  showHistory()
}
