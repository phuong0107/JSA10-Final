//NAVBAR
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");
searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});


const countDownClock = (targetDate) => {
  const d = document;
  const daysElement = d.querySelector('.days');
  const hoursElement = d.querySelector('.hours');
  const minutesElement = d.querySelector('.minutes');
  const secondsElement = d.querySelector('.seconds');
  let countdown;

  function timer(target) {
      countdown = setInterval(() => {
          const now = new Date().getTime();
          const distance = target - now;

          if (distance <= 0) {
              clearInterval(countdown);
              return;
          }

          displayTimeLeft(distance);
      }, 1000);
  }

  function displayTimeLeft(milliseconds) {
      const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
      const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

      daysElement.textContent = days;
      hoursElement.textContent = hours < 10 ? `0${hours}` : hours;
      minutesElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
      secondsElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
  }

  const target = new Date(targetDate).getTime();
  timer(target);
}
countDownClock('June 1, 2024 00:00:00');


document.getElementById('robotForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = document.getElementById('inputText').value;
    const robotImageUrl = `https://robohash.org/${encodeURIComponent(inputText)}`;

    const robotImageContainer = document.getElementById('robotImage');
    robotImageContainer.innerHTML = `<img src="${robotImageUrl}" alt="Robot Image">`;
});