let msg = document.body.querySelector("h2#userGreeting");
const now = new Date().getHours()
console.log(now);
msg.innerHTML = now > 4 && now < 12 ? "Good Morning" : (now > 12 && now < 17 ? "Good Afternoon" : "Good Evening");