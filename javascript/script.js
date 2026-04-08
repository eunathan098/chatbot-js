

const search = document.getElementById("search");

function btnSubmit(){
    if(!search.value){
        alert("Por favor, preencha o campo vazio")
    } else {
        alert(`Mensagem enviada! ${search.value}`)
    }
}