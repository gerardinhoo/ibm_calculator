let form = document.querySelector("#form");
let weight = document.querySelector(".weightNumber");
let height = document.querySelector(".heightNumber");




form.addEventListener("submit", function (e) {
    e.preventDefault();
    let convertWeight = Number(weight.value);
    let convertHeight = Number(height.value);
    let calculateIbm = convertWeight / convertHeight
    document.querySelector(".result").innerHTML = "Your IBM is: " + calculateIbm;

    console.log("Weight:" + convertWeight);
    console.log("Height" + convertHeight);
    console.log("Total " + calculateIbm);


})



