var submit = document.getElementById("submit");

submit.addEventListener("click", function (even) {
    even.preventDefault();
    var beratvalue = document.getElementById("berat").value
    var usiavalue = document.getElementById("usia").value
    var tinggivalue = document.getElementById("tinggi").value
    nameValidation(beratvalue, usiavalue, tinggivalue)
})

//Validation
function nameValidation(berat, usia, tinggi) { 
    if (berat == "" || berat == "") {
        alert("berat belum ditambahkan")
    } else {
        alert("berhasil")
        updateUI(berat, usia, tinggi)
    }
    
}
