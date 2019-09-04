// Listen to the make ID depending on the option, display the model data

function chooseModel() {
  var x = document.getElementById("makes").value;
  if (x === "volvo") {
    document.getElementById("models").innerHTML = 
    '<div class="model-wrapper"> <i class="fas fa-car"></i> <select name="models" id="models" class="model"> <option value="all" selected>All Models</option> <option value="all" selected>Hello</option> <option value="all" selected>This</option><option value="all" selected>testing</option> <option value="all" selected>All Models</option> </select> </div>'
  }
  else {document.getElementById("models").innerHTML = ""}

  console.log(x);
}

// Get the modal
var background = document.getElementById('background');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == background) {
        background.style.display = "none";
    }
}

// login event listener

document.getElementById('modal1').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = "none";
});

// signup event listener

document.getElementById('modal2').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click',
function() {
  document.querySelector('.bg-modal').style.display = "none";
});

// change color of the modal depending on which is active

document.querySelector('#login-tab').addEventListener('click',
function() {
  document.querySelector('#signup-tab').classList.add("active");
});

document.querySelector('#login-tab').addEventListener('click',
function() {
  document.getElementsByClassName('tab-headline').style.color("#00FF00");
});