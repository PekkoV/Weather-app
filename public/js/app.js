console.log("Client side js loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const headerTxt = document.querySelector(".headerTxt");
const infoTxt = document.querySelector(".infoTxt");

weatherForm.addEventListener("submit", e => {
  e.preventDefault();

  headerTxt.textContent = "";
  infoTxt.textContent = "";

  const location = search.value;
  fetch(`http://localhost:5000/weather?address=${location}`).then(res => {
    res.json().then(data => {
      if (data.error) {
        headerTxt.textContent = "Hmmm..";
        infoTxt.textContent = data.error;
      } else {
        headerTxt.textContent = data.location;
        infoTxt.textContent = data.forecast;
      }
    });
  });
});
