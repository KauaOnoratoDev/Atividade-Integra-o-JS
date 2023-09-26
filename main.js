let numberA = document.getElementById("A")
let numberB = document.getElementById("B")
const form = document.getElementById("form_document")


form.addEventListener('submit', function(e) {
    e.preventDefault()
    if (A.value < B.value){
        alert("Válido, o 2º valor é maior que o 1º")
    }
    else{
        alert("Inválido, o 2º valor é menor que o 1º")
    }
})