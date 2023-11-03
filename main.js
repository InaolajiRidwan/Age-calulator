var day = document.getElementById("Day");
var month = document.getElementById("month");
var year = document.getElementById("year");

var resultYear = document.getElementById("resultyear");
var resultMonth = document.getElementById("resultmonth");
var resultDay = document.getElementById("resultday");

var errorDay = document.getElementById("errorday");
var errorMonth = document.getElementById("errormonth");
var errorYear = document.getElementById("erroryear");

var systemDate = new Date();

var systemYear = systemDate.getUTCFullYear();
var systemDay = systemDate.getUTCDay();
var systemMonth = systemDate.getUTCMonth();

const clickme = () =>  {
  if (!day.value && !month.value && !year.value) {
    errorDay.innerHTML = "day must not be empty";
    errorMonth.innerHTML = "month must not be empty";
    errorYear.innerHTML = "year must not be empty";

    day.style.borderColor = "hsl(0, 100%, 67%)";
    month.style.borderColor = "hsl(0, 100%, 67%)";
    year.style.borderColor = "hsl(0, 100%, 67%)";
  } else if (!day.value && !month.value && year.value) {
    errorMonth.innerHTML = "month must not be empty";
    errorDay.innerHTML = "year must not be empty";

    day.style.borderColor = "hsl(0, 100%, 67%)";
    month.style.borderColor = "hsl(0, 100%, 67%)";
    year.style.borderColor = "hsl(0, 100%, 67%)";
  } else if (day.value && !month.value && !year.value) {
    month.style.borderColor = "hsl(0, 100%, 67%)";
    year.style.borderColor = "hsl(0, 100%, 67%)";
  } else if (!day.value && month.value && !year.value) {
    day.style.borderColor = "hsl(0, 100%, 67%)";
    year.style.borderColor = "hsl(0, 100%, 67%)";
  } else if (day.value && !month.value && year.value) {
    month.style.borderColor = "hsl(0, 100%, 67%)";
  } else if (day.value && month.value && !year.value) {
    year.style.borderColor = "hsl(0, 100%, 67%)";
  } else if (!day.value && month.value && year.value) {
    day.style.borderColor = "hsl(0, 100%, 67%)";
  } else if (day.value >= 31 || month.value >= 12) {
    errorDay.innerHTML = "the day is not between 1-31";
    errorMonth.innerHTML = "the month is not between 1-12";
    day.style.borderColor = "hsl(0, 100%, 67%)";
    month.style.borderColor = "hsl(0, 100%, 67%)";
    year.style.borderColor = "hsl(0, 100%, 67%)";
  } else if (year.value >= 2024) {
    errorDay.innerHTML = "The date is in the future ";
    errorMonth.innerHTML = "The date is in the future";
    errorYear.innerHTML = "The date is in the future";
    day.style.borderColor = "hsl(0, 100%, 67%)";
    month.style.borderColor = "hsl(0, 100%, 67%)";
    year.style.borderColor = "hsl(0, 100%, 67%)";
  } else {
    resultDay.innerHTML = day.value - systemDay;
    resultMonth.innerHTML = systemMonth - month.value;
    resultYear.innerHTML = systemYear - year.value;
  }
}
