
const form = document.getElementById('form');



function enviarMensagem(){
    const nomeValue = document.getElementById('nome').value
    const emailValue = document.getElementById('email').value
    const msgValue = document.getElementById('msg').value
    var mensagem = {
        nome: nomeValue,
        email: emailValue,
        mensagem: msgValue
    }
    console.log(mensagem)
    console.log('nome ' + document.getElementById(  ).value)
    console.log('email ' + document.getElementById('#email').value)
}



form.addEventListener('submit', (event) => {
    event.preventDefault();

    
    enviarMensagem();
    
})
