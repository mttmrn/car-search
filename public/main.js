// assign variable to JSON (let json = "JSON_DATA")
// parse the JSON data (let cars = JSON.parse(json))
// Add them as DOM elements by looping through? document.getElementByID('test').innerHTML = cars.ford

var acura = ["ILX", "Integra", "MDX", "NSX", "RDX", "RLX", "RSX", "TLX", "TSX", "ZDX"]
var alfaRomeo = ["164", "4C", "8C", "Giulia", "Spider", "Stelvio"]
var astonMartin = ["DB AR1 Zagato", "DB11", "DB7", "DB7 Vantage", "DB9", "Rapide", "Vanquish", "V8 Vantage", "V12 Vantage", "Vantage GT", "Virage"]
var audi = ["A3", "A4", "A5", "A6", "A7", "A8", "Allroad", "Q3", "Q5", "Q7", "Q8", "R8", "RS3", "RS5", "RS7", "S3", "S4", "S5", "S6", "S7", "S8", "SQ5", "TT", "TT RS", "TTS", "e-tron"]
var bentley = ["Arnage", "Azure", "Bentayga", "Brooklands", "Continental", "Continental Flying Spur", "Continental GT", "Continental GTC", "Continental Supersports", "Flying Spur", "Mulsanne", "R-Type", "Turbo R", "Turbo RL", "Turbo RT", "Turbo S"]
var bmw = ["2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "M2", "M3", "M4", "M5", "M6", "X1", "X2", "X3", "X4", "X5", "X6", "X7", "Z4", "i3", "i8"]
var buick = ["Cascada", "Enclave", "Encore", "Envision", "LaCrosse", "Regal", "Verano"]
var cadillac = ["ATS", "CT6", "CTS", "ELR", "Escalade", "SRX", "XT4", "XT5", "XT6", "XTS"]
var chevrolet = ["ILX", "Integra", "MDX", "NSX", "RDX", "RLX", "RSX", "TLX", "TSX", "ZDX"]
var chrysler = ["ILX", "Integra", "MDX", "NSX", "RDX", "RLX", "RSX", "TLX", "TSX", "ZDX"]
var dodge =["ILX", "Integra", "MDX", "NSX", "RDX", "RLX", "RSX", "TLX", "TSX", "ZDX"]
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

/* 
function choose2() {
var x = document.getElementById("makes").value;
if (x === "ford") {
    console.log(x)
      htmlString += '<option value="all" selected>' + item + '</option>';
      for (var item in models[key]) {
        console.log(item)
      }
  document.getElementById("models").innerHTML = htmlString;
}
}
*/


/* function choose() {
  
    console.log(document.getElementById("makes").value);
    for (var i = 0; i < cars[0].models.length; i++) {
      console.log(cars[0].models);
      var y = document.getElementById("makes").value;
      if (y === "ford") {
      document.getElementById("models").innerHTML = 
      '<option value="all" selected>Hello</option> <option value="all" selected>This</option><option value="all" selected>testing</option> <option value="all" selected>All Models</option>'
    }
  }
} */

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
  ^previous way of doing the select model function
*/

// Listen to the make ID depending on the option, display the model data
const make = document.getElementById("makes");
const models = document.getElementById("models");

function chooseModel() {

  if (make.value === "") {
    models.innerHTML = ""
    models.innerHTML +=
    `<option value="">Choose Model</option>`;
    
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }
  else if (make.value === "acura") {
    models.innerHTML = ""
    for(var i = 0; i < acura.length; i++) {
    models.innerHTML +=
    `<option value="${acura[i].toLowerCase()}">${acura[i]}</option>`;
    }
  }

}


// Get the modal
var background = document.getElementById('background');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == background) {
        background.style.display = "none";
    }
}

// Login event listener (nav bar)

document.getElementById('modal1').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = "none";
});

// Signup event listener (nav bar)

document.getElementById('modal2').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = "none";
});

// Signup event listener (bottom of page)

document.getElementById('modal3').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = "none";
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

  const apiKey = "CKaBAjmqPrITAAE8GRY59hWegIfWTg9F"
  const apiUrl = `https://marketcheck-prod.apigee.net/v1/search?api_key=${apiKey}&car_type=used&make=${make.value}&model=${models.value}`

  fetch(`${apiUrl}`, {
    method: 'GET',
    headers: {
        'Host': 'marketcheck-prod.apigee.net',
        'Content-type': 'application/json'

    },
})
.then(res => res.json())
.then(data => {
    console.log(data);
});
})
