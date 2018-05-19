const ipcRenderer = require('electron').ipcRenderer;

function login(event){
    console.log('funciona login!!!');
    event.preventDefault();

    let user = document.getElementById("user").value;
    let pass = document.getElementById("pass").value;

    ipcRenderer.send('login-submission', user, pass)

}


const paragraph = document.getElementById('response');

ipcRenderer.on('error-message', function(event, message){
    paragraph.innerHTML = message;
})

ipcRenderer.on('login-exitoso', function(event, message){
    paragraph.innerHTML = message;
});