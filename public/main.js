// assign variable to JSON (let json = "JSON_DATA")
// parse the JSON data (let cars = JSON.parse(json))
// Add them as DOM elements by looping through? document.getElementByID('test').innerHTML = cars.ford

var chevrolet = ["ILX", "Integra", "MDX", "NSX", "RDX", "RLX", "RSX", "TLX", "TSX", "ZDX"]
var chrysler = ["ILX", "Integra", "MDX", "NSX", "RDX", "RLX", "RSX", "TLX", "TSX", "ZDX"]
var dodge = ["ILX", "Integra", "MDX", "NSX", "RDX", "RLX", "RSX", "TLX", "TSX", "ZDX"]
var fiat = ["ILX", "Integra", "MDX", "NSX", "RDX", "RLX", "RSX", "TLX", "TSX", "ZDX"]
var ford = ["Fiesta", "Mustang", "F150", "F250", "F350", "F450", "F550"]
var gmc
var honda
var hyundai
var infiniti
var jaguar
var jeep
var kia
var landRover
var lexus
var lincoln
var mazda
var mercedesBenz
var mini
var mitsubishi
var nissan
var porsche
var scion
var saab
var subaru
var suzuki
var tesla
var toyota
var volkswagen = ["test|Testing", "moose|Mustang", "eff|F150", "eff|F250", "effff|F350", "F450", "F550"]
var volvo = ["test|Testing", "moose|Mustang", "eff|F150", "eff|F250", "effff|F350", "F450", "F550"]

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
  models = document.getElementById("models")

const getCar = () => {
  fetch('cars.json')
    .then((res) => res.json())
    .then((data) => {
      switch (make.value) {
        case "":
          models.innerHTML = ""
          models.innerHTML +=
            `<option value="">All Models</option>`;
          break;
        case "acura":
          models.innerHTML = ""
          for (var i = 0; i < data.acura.length; i++) {
            models.innerHTML +=
              `<option value="${data.acura[i].toLowerCase()}">${data.acura[i]}</option>`;
          }
          break;
        case "alfa romeo":
          models.innerHTML = ""
          for (var i = 0; i < data.alfaRomeo.length; i++) {
            models.innerHTML +=
              `<option value="${data.alfaRomeo[i].toLowerCase()}">${data.alfaRomeo[i]}</option>`;
          }
          break;
        case "aston martin":
          models.innerHTML = ""
          for (var i = 0; i < data.astonMartin.length; i++) {
            models.innerHTML +=
              `<option value="${data.astonMartin[i].toLowerCase()}">${data.astonMartin[i]}</option>`;
          }
          break;
        case "audi":
          models.innerHTML = ""
          for (var i = 0; i < data.audi.length; i++) {
            models.innerHTML +=
              `<option value="${data.audi[i].toLowerCase()}">${data.audi[i]}</option>`;
          }
          break;
        case "bentley":
          models.innerHTML = ""
          for (var i = 0; i < data.bentley.length; i++) {
            models.innerHTML +=
              `<option value="${data.bentley[i].toLowerCase()}">${data.bentley[i]}</option>`;
          }
          break;
        case "bmw":
          models.innerHTML = ""
          for (var i = 0; i < data.bmw.length; i++) {
            models.innerHTML +=
              `<option value="${data.bmw[i].toLowerCase()}">${data.bmw[i]}</option>`;
          }
          break;
        case "buick":
          models.innerHTML = ""
          for (var i = 0; i < data.buick.length; i++) {
            models.innerHTML +=
              `<option value="${data.buick[i].toLowerCase()}">${data.buick[i]}</option>`;
          }
          break;
        case "cadillac":
          models.innerHTML = ""
          for (var i = 0; i < data.cadillac.length; i++) {
            models.innerHTML +=
              `<option value="${data.cadillac[i].toLowerCase()}">${data.cadillac[i]}</option>`;
          }
          break;
      }
    })
};

make.addEventListener("change", getCar)


// Get the modal
const background = document.getElementById('background'),
  close = document.querySelector('.close')

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === background) {
    background.style.display = "none";
  }
}

// Login event listener (nav bar)


document.getElementById('modal1').addEventListener('click',
  function () {
    background.style.display = 'flex';
  });

close.addEventListener('click',
  function () {
    background.style.display = "none";
  });

// Signup event listener (nav bar)

document.getElementById('modal2').addEventListener('click',
  function () {
    background.style.display = 'flex';
  });

close.addEventListener('click',
  function () {
    background.style.display = "none";
  });

// Signup event listener (bottom of page)

document.getElementById('modal3').addEventListener('click',
  function () {
    background.style.display = 'flex';
  });

close.addEventListener('click',
  function () {
    background.style.display = "none";
  });

// change color of the modal depending on which is active
// login tab
function loginTab() {
  document.querySelector('#login-tab').classList.remove("active");
  document.querySelector('.modal-login').style.borderTop = "#2EBD71 4px solid";
  document.querySelector('.signup-content').style.display = "none";
  document.querySelector('.modal-content').style.height = "76%";
  document.querySelector('#signup-tab').classList.add("active");
  document.querySelector('.modal-signup').style.borderTop = "none"
  document.querySelector('.login-content').style.display = "block";
};

//signup tab
function signupTab() {
  document.querySelector('#signup-tab').classList.remove("active");
  document.querySelector('.modal-signup').style.borderTop = "#2EBD71 4px solid";
  document.querySelector('.login-content').style.display = "none";
  document.querySelector('.modal-content').style.height = "86%";
  document.querySelector('#login-tab').classList.add("active");
  document.querySelector('.modal-login').style.borderTop = "none"
  document.querySelector('.signup-content').style.display = "block";
};



const signUpForm = document.querySelector('#signup-form');

signUpForm.addEventListener('submit', e => {
  // prevent form submit
  e.preventDefault();

  // need to access your api
  const email = signUpForm.querySelector('#email-signup').value,
    password = signUpForm.querySelector('#password-signup').value,
    confirm = signUpForm.querySelector('#confirm').value;

  const url = 'http://localhost:3000';

  fetch(`${url}/auth/register`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
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

const carSearch = document.getElementById('search-form');
carSearch.addEventListener('submit', e => {

  localStorage.setItem('make', make.value)
  localStorage.setItem('model', models.value)
})