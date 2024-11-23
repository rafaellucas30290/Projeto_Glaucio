
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
            inserirMensagem(mensagem);
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

document.addEventListener('DOMContentLoaded', function () {
    const messagesContainer = document.getElementById('messagesContainer');

    // pega as mensagens do json
    const mensagens = obterMensagens();

    if (mensagens.length > 0) {
        mensagens.forEach(mensagem => {
            
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('message');

            messageDiv.innerHTML = `
                <p><strong>Nome:</strong> ${mensagem.nome}</p>
                <p><strong>E-mail:</strong> ${mensagem.email}</p>
                <p><strong>Mensagem:</strong> ${mensagem.mensagem}</p>
                <hr>
            `;

            
            messagesContainer.appendChild(messageDiv);
        });
    } else {
        messagesContainer.innerHTML = '<p>Nenhuma mensagem encontrada.</p>';
    }
});