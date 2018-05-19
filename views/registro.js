const ipcRenderer = require('electron').ipcRenderer;


function registrar(event){
    console.log('funciona!!!');
    event.preventDefault();

    let email = document.getElementById("email").value;
    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;
    let passConf = document.getElementById("passConf").value;

    ipcRenderer.send('registro-submission', email, user, pass, passConf)

}

const paragraph = document.getElementById('response');

ipcRenderer.on('error-message', function(event, message){
    paragraph.innerHTML = message;
})

ipcRenderer.on('registro-exitoso', function(event, file){
    window.location.replace(file);
});