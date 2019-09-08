// assign variable to JSON (let json = "JSON_DATA")
// parse the JSON data (let cars = JSON.parse(json))
// Add them as DOM elements by looping through? document.getElementByID('test').innerHTML = cars.ford


var ford = ["Fiesta", "Mustang", "F150", "F250", "F350", "F450", "F550"]

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

// Listen to the make ID depending on the option, display the model data

function chooseModel() {
  var x = document.getElementById("makes").value;
  if (x === "volvo") {
    console.log(models.ford);
    document.getElementById("models").innerHTML = 
    '<option value="all" selected>Hello</option> <option value="all" selected>This</option><option value="all" selected>testing</option> <option value="all" selected>All Models</option>'
  }
  else if (x === "acura") {
    document.getElementById("models").innerHTML = 
    '<div class="model-wrapper"> <i class="fas fa-car"></i> <select name="models" id="models" class="model"> <option value="all" selected>All Models</option> <option value="all" selected>Hello</option> <option value="all" selected>This</option><option value="all" selected>testing</option> <option value="all" selected>All Models</option> </select> </div>'
  }
  else if (x === "ford") {
    for(var i = 0; i < ford.length; i++) {
    document.getElementById("models").innerHTML +=
    '<option value="all" selected>' + ford[i] + '</option>'
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
