const input = document.getElementById('inputemail');
const button = document.getElementById('button');
const btn =  document.getElementById('button');


input.addEventListener('input', function(){ // Evento para verificar se o input está vazio e adicionar o efeito ao botão de enviar
    if(input.value.length > 0){
        btn.style.opacity = 1;
    }else{
        btn.style.opacity = 0;
    }
});

const form = document.getElementById('emailform');
const toast = document.getElementById('toast');
const toast2 = document.getElementById('toast2');

let arrayemail = []; // Array para armazenar os emails

form.addEventListener('submit', function(event){
    event.preventDefault(); // Evita que se recargue a pagina quando acionado

    const emailrecebido = document.getElementById("inputemail"); // Armazena o email digitado no input

    if(arrayemail.includes(emailrecebido.value)){ // Verifica se o email digitado já foi cadastrado
        input.value = ""; // Limpa o input
        toast.style.opacity = 1; // Mensagem de erro
        toast.style.visibility = visible; // Mensagem de erro
        setTimeout(() => toast.style.opacity = 0, 3000)
        setTimeout(() => toast.style.visibility = hidden, 3000)
        return
    }else{
        arrayemail.push(emailrecebido.value); // Adiciona o email digitado no array
        toast2.style.display = block; // Mensagem de sucesso
        setTimeout(() => toast2.style.display = none, 3000)
        console.log(arrayemail);
        input.textContent = ""; // Limpa o input
        return; // Mensagem de sucesso
    }
});    