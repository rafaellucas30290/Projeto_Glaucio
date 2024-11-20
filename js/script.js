
const form_admin = document.getElementById('form_admin');
const form_contato = document.getElementById('form_Contato')


function enviarMensagem(){
    const nomeValue = document.getElementById('nome')
    const emailValue = document.getElementById('email')
    const msgValue = document.getElementById('msg')
    var mensagem = {
        nome: nomeValue.value,
        email: emailValue.value,
        mensagem: msgValue.value
    }
    console.log(mensagem)
    
}




document.addEventListener('DOMContentLoaded', () => {
    const form_contato = document.getElementById('form_contato'); 
    const form_admin = document.getElementById('form_admin');
   
    if (form_contato) { // checar existencia do form contato
        form_contato.addEventListener('submit', (event) => {
            event.preventDefault();
            enviarMensagem();
            inserirMensagem();
        });
    } else {
        console.error("Element with ID 'form_contato' not found.");
    }
    if (form_admin) { // checar existencia do form admin
        form_admin.addEventListener('submit', (event) => {
            event.preventDefault();
            
            var objLoginSenha = {
                email: document.getElementById('emailadmin').value,
                senha: document.getElementById('senha').value
            }
            
            console.log(objLoginSenha);
            
            validarUsuario(objLoginSenha);
        });
    } else {
        console.error("Element with ID 'form_admin' not found.");
    }

    
});

