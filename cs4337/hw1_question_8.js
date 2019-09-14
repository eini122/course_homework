// var color_input = document.getElementById("input");
// if(color_input == "red" ) alert("red");

function validateForm() {
    var color = document.forms["myForm"]["text"].value;
    if (color == "red") {
        document.body.style.backgroundColor = "red";
    }
    else if(color == "blue"){
        document.body.style.backgroundColor = "blue";
    }
    else if(color == "yellow"){
        document.body.style.backgroundColor = "yellow";
    }
    else{
        alert("Please enter a valid color. (red, yellow, blue)");
    }
    return false;
  }