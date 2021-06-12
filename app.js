const months = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const countDay = document.querySelector('.count.day');
const countHour = document.querySelector('.count.hour');
const countMinutes = document.querySelector('.count.min');
const countSeconds = document.querySelector('.count.sec');

function calculate() {
  let date = new Date();
  let currentYear = date.getFullYear();
  let currentDays = date.getDate();
  let currentMonth = date.getMonth() + 1;
  let currentSecond = date.getSeconds();
  let currentHour = date.getHours();
  let currentMinute = date.getMinutes();

  let birthDays = 6;
  let birthMonth = 12;
  let birthSecond = 0;
  let birthMinute = 0;
  let birthHour = 0;
  let birthYear;
  if (currentMonth >= 12 && currentDays >= 6) {
    birthYear = currentYear + 1;
  } else {
    birthYear = currentYear;
  }
  let remainingDays;
  let remainingHours;
  let remainingMinutes;
  let remainingSeconds;
  let remainingMonth;

  if (currentMonth >= birthMonth) {
    remainingMonth = 12 - currentMonth + birthMonth;
  } else {
    remainingMonth = birthMonth - currentMonth;
  }

  if (birthDays <= currentDays) {
    remainingDays = months[currentMonth] - currentDays + birthDays;

    remainingMonth--;
  } else {
    remainingDays = birthDays - currentDays;
  }
  if (
    currentYear == birthYear &&
    (birthMonth >= currentMonth ||
      (birthMonth == currentMonth && birthDays >= currentDays))
  ) {
    for (let i = 0; i < months.length; i++) {
      if (i > currentMonth && i < birthMonth) {
        remainingDays += months[i];
      }
    }
  } else if (
    currentYear < birthYear &&
    (birthMonth < currentMonth ||
      (birthMonth === currentMonth && birthDays <= currentDays))
  ) {
    for (let i = 0; i < months.length; i++) {
      if ((i > currentMonth && i <= 12) || (i >= 1 && i < birthMonth)) {
        remainingDays += months[i];
      }
    }
  }

  if (birthHour <= currentHour) {
    remainingHours = 24 - currentHour + birthHour;
    remainingDays--;
  } else {
    remainingHours = birthHour - currentHour;
  }
  if (birthMinute <= currentMinute) {
    remainingMinutes = 60 - currentMinute + birthMinute;
    remainingHours--;
  } else {
    remainingMinutes = birthMinute - currentMinute;
  }
  if (birthSecond <= currentSecond) {
    remainingSeconds = 60 - currentSecond;
    remainingMinutes--;
  } else {
    remainingSeconds = birthSecond - currentSecond;
  }

  countDay.innerHTML = remainingDays;
  countMinutes.innerHTML = remainingMinutes;
  countHour.innerHTML = remainingHours;
  countSeconds.innerHTML = remainingSeconds;
}
setInterval(() => {
  calculate();
}, 1000);
