function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("los_angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM	Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let funchalElement = document.querySelector("#funchal");
  if (funchalElement) {
    let funchalDateElement = funchalElement.querySelector(".date");
    let funchalTimeElement = funchalElement.querySelector(".time");
    let funchalTime = moment().tz("funchal");

    funchalDateElement.innerHTML = funchalTime.format("MMMM	Do YYYY");
    funchalTimeElement.innerHTML = funchalTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let indiaElement = document.querySelector("#india");
  if (indiaElement) {
    let indiaDateElement = indiaElement.querySelector(".date");
    let indiaTimeElement = indiaElement.querySelector(".time");
    let indiaTime = moment().tz("funchal");

    indiaDateElement.innerHTML = indiaTime.format("MMMM	Do YYYY");
    indiaTimeElement.innerHTML = indialTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
