function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesDateElement = losAngelesElement.querySelector(".date");
  let losAngelesTimeElement = losAngelesElement.querySelector(".time");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  // Maldives
  let maldivesElement = document.querySelector("#maldives");
  let maldivesDateElement = maldivesElement.querySelector(".date");
  let maldivesTimeElement = maldivesElement.querySelector(".time");
  let maldivesTime = moment().tz("Indian/Maldives");

  maldivesDateElement.innerHTML = maldivesTime.format("MMMM Do YYYY");
  maldivesTimeElement.innerHTML = maldivesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
