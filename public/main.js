/*  1**    if (make.value === "acura") {
    document.getElementById("models").innerHTML = "" // clears the select box
    for(var i = 0; i < acura.length; i++) { // i is the index of the array
    document.getElementById("models").innerHTML += //finds the model HTML
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`; //adds each option
    }
  }
    
  2**   else if (make.value === "volkswagen") {
    models.innerHTML = ""
    for(let option in volkswagen) {
    let values = volkswagen[option].split("|");
    models.innerHTML +=
    `<option value="${values[0]}">${values[1]}</option>`; 
    }
  }

  3** 
  else if (make.value === "alfa romeo") {
    models.innerHTML = ""
    for(var i = 0; i < data.alfaRomeo.length; i++) {
    models.innerHTML +=
    `<option value="${data.alfaRomeo[i].toLowerCase()}">${data.alfaRomeo[i]}</option>`;
    }
  }

  ^previous way of doing the select model function
*/

// Listen to the make ID depending on the option, display the model data
const make = document.getElementById("makes"),
  models = document.getElementById("models"),
  zip = document.querySelector("#zip");

const getCar = () => {
  fetch("cars.json")
    .then(res => res.json())
    .then(data => {
      switch (make.value) {
        case "":
          models.innerHTML = "";
          models.innerHTML += `<option value="">All Models</option>`;
          break;
        case "acura":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.acura.length; i++) {
            models.innerHTML += `<option value="${data.acura[
              i
            ].toLowerCase()}">${data.acura[i]}</option>`;
          }
          break;
        case "alfa romeo":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.alfaRomeo.length; i++) {
            models.innerHTML += `<option value="${data.alfaRomeo[
              i
            ].toLowerCase()}">${data.alfaRomeo[i]}</option>`;
          }
          break;
        case "aston martin":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.astonMartin.length; i++) {
            models.innerHTML += `<option value="${data.astonMartin[
              i
            ].toLowerCase()}">${data.astonMartin[i]}</option>`;
          }
          break;
        case "audi":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.audi.length; i++) {
            models.innerHTML += `<option value="${data.audi[
              i
            ].toLowerCase()}">${data.audi[i]}</option>`;
          }
          break;
        case "bentley":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.bentley.length; i++) {
            models.innerHTML += `<option value="${data.bentley[
              i
            ].toLowerCase()}">${data.bentley[i]}</option>`;
          }
          break;
        case "bmw":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.bmw.length; i++) {
            models.innerHTML += `<option value="${data.bmw[i].toLowerCase()}">${
              data.bmw[i]
            }</option>`;
          }
          break;
        case "buick":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.buick.length; i++) {
            models.innerHTML += `<option value="${data.buick[
              i
            ].toLowerCase()}">${data.buick[i]}</option>`;
          }
          break;
        case "cadillac":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.cadillac.length; i++) {
            models.innerHTML += `<option value="${data.cadillac[
              i
            ].toLowerCase()}">${data.cadillac[i]}</option>`;
          }
          break;
        case "chevrolet":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.chevrolet.length; i++) {
            models.innerHTML += `<option value="${data.chevrolet[
              i
            ].toLowerCase()}">${data.chevrolet[i]}</option>`;
          }
          break;
        case "chrysler":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.chrysler.length; i++) {
            models.innerHTML += `<option value="${data.chrysler[
              i
            ].toLowerCase()}">${data.chrysler[i]}</option>`;
          }
          break;
        case "dodge":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.dodge.length; i++) {
            models.innerHTML += `<option value="${data.dodge[
              i
            ].toLowerCase()}">${data.dodge[i]}</option>`;
          }
          break;
        case "fiat":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.fiat.length; i++) {
            models.innerHTML += `<option value="${data.fiat[
              i
            ].toLowerCase()}">${data.fiat[i]}</option>`;
          }
          break;
        case "ford":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.ford.length; i++) {
            models.innerHTML += `<option value="${data.ford[
              i
            ].toLowerCase()}">${data.ford[i]}</option>`;
          }
          break;
        case "gmc":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.gmc.length; i++) {
            models.innerHTML += `<option value="${data.gmc[i].toLowerCase()}">${
              data.gmc[i]
            }</option>`;
          }
          break;
        case "honda":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.honda.length; i++) {
            models.innerHTML += `<option value="${data.honda[
              i
            ].toLowerCase()}">${data.honda[i]}</option>`;
          }
          break;
        case "hyundai":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.hyundai.length; i++) {
            models.innerHTML += `<option value="${data.hyundai[
              i
            ].toLowerCase()}">${data.hyundai[i]}</option>`;
          }
          break;
        case "infiniti":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.infiniti.length; i++) {
            models.innerHTML += `<option value="${data.infiniti[
              i
            ].toLowerCase()}">${data.infiniti[i]}</option>`;
          }
          break;
        case "jaguar":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.jaguar.length; i++) {
            models.innerHTML += `<option value="${data.jaguar[
              i
            ].toLowerCase()}">${data.jaguar[i]}</option>`;
          }
          break;
        case "jeep":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.jeep.length; i++) {
            models.innerHTML += `<option value="${data.jeep[
              i
            ].toLowerCase()}">${data.jeep[i]}</option>`;
          }
          break;
        case "kia":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.kia.length; i++) {
            models.innerHTML += `<option value="${data.kia[i].toLowerCase()}">${
              data.kia[i]
            }</option>`;
          }
          break;
        case "land rover":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.landRover.length; i++) {
            models.innerHTML += `<option value="${data.landRover[
              i
            ].toLowerCase()}">${data.landRover[i]}</option>`;
          }
          break;
        case "lexus":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.lexus.length; i++) {
            models.innerHTML += `<option value="${data.lexus[
              i
            ].toLowerCase()}">${data.lexus[i]}</option>`;
          }
          break;
        case "lincoln":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.lincoln.length; i++) {
            models.innerHTML += `<option value="${data.lincoln[
              i
            ].toLowerCase()}">${data.lincoln[i]}</option>`;
          }
          break;
        case "mazda":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.mazda.length; i++) {
            models.innerHTML += `<option value="${data.mazda[
              i
            ].toLowerCase()}">${data.mazda[i]}</option>`;
          }
          break;
        case "mercedes benz":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.mercedesBenz.length; i++) {
            models.innerHTML += `<option value="${data.mercedesBenz[
              i
            ].toLowerCase()}">${data.mercedesBenz[i]}</option>`;
          }
          break;
        case "mini":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.mini.length; i++) {
            models.innerHTML += `<option value="${data.mini[
              i
            ].toLowerCase()}">${data.mini[i]}</option>`;
          }
          break;
        case "mitsubishi":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.mitsubishi.length; i++) {
            models.innerHTML += `<option value="${data.mitsubishi[
              i
            ].toLowerCase()}">${data.mitsubishi[i]}</option>`;
          }
          break;
        case "nissan":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.nissan.length; i++) {
            models.innerHTML += `<option value="${data.nissan[
              i
            ].toLowerCase()}">${data.nissan[i]}</option>`;
          }
          break;
        case "porsche":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.porsche.length; i++) {
            models.innerHTML += `<option value="${data.porsche[
              i
            ].toLowerCase()}">${data.porsche[i]}</option>`;
          }
          break;
        case "saab":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.saab.length; i++) {
            models.innerHTML += `<option value="${data.saab[
              i
            ].toLowerCase()}">${data.saab[i]}</option>`;
          }
          break;
        case "scion":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.scion.length; i++) {
            models.innerHTML += `<option value="${data.scion[
              i
            ].toLowerCase()}">${data.scion[i]}</option>`;
          }
          break;
        case "subaru":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.subaru.length; i++) {
            models.innerHTML += `<option value="${data.subaru[
              i
            ].toLowerCase()}">${data.subaru[i]}</option>`;
          }
          break;
        case "tesla":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.tesla.length; i++) {
            models.innerHTML += `<option value="${data.tesla[
              i
            ].toLowerCase()}">${data.tesla[i]}</option>`;
          }
          break;
        case "toyota":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.toyota.length; i++) {
            models.innerHTML += `<option value="${data.toyota[
              i
            ].toLowerCase()}">${data.toyota[i]}</option>`;
          }
          break;
        case "volkswagen":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.volkswagen.length; i++) {
            models.innerHTML += `<option value="${data.volkswagen[
              i
            ].toLowerCase()}">${data.volkswagen[i]}</option>`;
          }
          break;
        case "volvo":
          models.innerHTML = "";
          models.innerHTML = `<option value="">All Models</option>`;
          for (var i = 0; i < data.volvo.length; i++) {
            models.innerHTML += `<option value="${data.volvo[
              i
            ].toLowerCase()}">${data.volvo[i]}</option>`;
          }
          break;
      }
    });
};

// Call function on input change
make.addEventListener("change", getCar);

// Get the modal
const background = document.getElementById("background"),
  close = document.querySelector(".close");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === background) {
    background.style.display = "none";
  }
};

// Login event listener (nav bar)

document.getElementById("modal1").addEventListener("click", function () {
  background.style.display = "flex";
});

close.addEventListener("click", function () {
  background.style.display = "none";
});

// Signup event listener (nav bar)

document.getElementById("modal2").addEventListener("click", function () {
  background.style.display = "flex";
});

close.addEventListener("click", function () {
  background.style.display = "none";
});

// Signup event listener (bottom of page)

document.getElementById("modal3").addEventListener("click", function () {
  background.style.display = "flex";
});

close.addEventListener("click", function () {
  background.style.display = "none";
});

// change color of the modal depending on which is active
// login tab
function loginTab() {
  document.querySelector("#login-tab").classList.remove("active");
  document.querySelector(".modal-login").style.borderTop = "#087DD2 4px solid";
  document.querySelector(".signup-content").style.display = "none";
  document.querySelector(".modal-content").style.height = "76%";
  document.querySelector("#signup-tab").classList.add("active");
  document.querySelector(".modal-signup").style.borderTop = "none";
  document.querySelector(".login-content").style.display = "block";
}

//signup tab
function signupTab() {
  document.querySelector("#signup-tab").classList.remove("active");
  document.querySelector(".modal-signup").style.borderTop = "#087DD2 4px solid";
  document.querySelector(".login-content").style.display = "none";
  document.querySelector(".modal-content").style.height = "86%";
  document.querySelector("#login-tab").classList.add("active");
  document.querySelector(".modal-login").style.borderTop = "none";
  document.querySelector(".signup-content").style.display = "block";
}

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", e => {
  // prevent form submit
  e.preventDefault();

  // need to access your api
  const email = signUpForm.querySelector("#email-signup").value,
    password = signUpForm.querySelector("#password-signup").value,
    confirm = signUpForm.querySelector("#confirm").value;

  const url = "http://localhost:3000";

  fetch(`${url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password,
        confirmPass: confirm
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
});

const carSearch = document.getElementById("search-form");
carSearch.addEventListener("submit", e => {
  sessionStorage.setItem("zip", zip.value);
  sessionStorage.setItem("make", make.value);
  sessionStorage.setItem("model", models.value);
});


// Zip Code Validation
const searchBtn = document.querySelector('#searchBtn'),
  zipError = document.querySelector('#zipError'),
  checkZip = () =>

  {
    const zipApiUrl = `https://api.zippopotam.us/us/${zip.value}`
    console.log(zipApiUrl)
    fetch(zipApiUrl).then(res => {
      if (res.status != 200) {
        isError = true
        throw Error(res.statusText)
      } else {
        isError = false
        return res.json()
      }
    }).then(data => {
      console.log(data)
    })
  }

let isError;


zip.addEventListener('input', (e) => {
  console.log("hello")
  if (zip.value.length === 5) {
    checkZip();
  }
});

searchBtn.addEventListener('click', (e) => {
  if (zip.value.length < 5) {
    e.preventDefault()
    zipError.innerHTML = `Please input a valid zip code`
    zipError.classList.remove('hidden');
    console.log(zip.value)

  } else if (isError === true) {
    e.preventDefault()
    zipError.innerHTML = `Please input a valid zip code`
    zipError.classList.remove('hidden');
    console.log("error!")
  }
});


const hamburger = document.querySelector('.container')
const hamburgerLinks = document.querySelector('.hamburger-links')
hamburger.addEventListener('click', e => {
  hamburger.classList.toggle("change");
  hamburgerLinks.classList.toggle("hidden");
})