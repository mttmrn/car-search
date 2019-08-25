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