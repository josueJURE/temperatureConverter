const inputs = document.querySelectorAll("input");
const celcius = document.querySelector("#celcius");
const degrees = document.querySelector("#degrees");
const farenheit = document.querySelector("#farenheit")

for(var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", function(e) {
  let data = parseInt(e.target.value)

  if(e.target.name === "celcius") {
    degrees.value = (data * 2);
    farenheit.value = (data * 2) + 1;
    return
  }

  else if(e.target.name === "degrees") {
    farenheit.value = (data * 3);
    celcius.value = (data * 3) + 1;
    return
  }

  else if (e.target.name === "farenheit") {
    celcius.value = (data * 4);
    degrees.value = (data * 4) + 1;
    return
  }
  })
}
