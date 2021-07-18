const form = document.getElementById("form")

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Obrigada por sua inscrição!💚")
let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let data = {
    nome,
    email,
}

let convertData = JSON.stringify(data);

localStorage.setItem('lead', convertData);

let content = document.getElementById("content");


let carregando = "<p>"carregando.."</p>" 

content.innerHTML = carregando 

})