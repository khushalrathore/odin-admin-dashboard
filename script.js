let msg = document.body.querySelector("h2#userGreeting");
const now = new Date().getHours()
console.log(now);
msg.innerHTML = now > 4 && now < 12 ? "Good Morning" : (now > 12 && now < 17 ? "Good Afternoon" : "Good Evening");


function isMobileDevice() {
  return /Mobi|Android/i.test(navigator.userAgent);
}
document.addEventListener("DOMContentLoaded", function () {
  if (isMobileDevice()) {
    document.querySelector("body").innerHTML = "View on a larger Display<br>Mobile Support Coming Soon...";
    document.querySelector("body").style.background = "white";
    document.querySelector("body").style.padding = "1rem";
  }
});
