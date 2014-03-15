/*globals document, alert, device*/


function getInfo() {
    'use strict';//O que está aqui dentro é de uso somente no escopo dessa função
    
    var elemento = document.getElementById('propriedades');
    
    elemento.innerHTML = 'Dispositivo: ' + device.model + '<br>' +
                         'Versão (Cordova): ' + device.cordova + '<br>' +
                         'Plataforma: ' + device.platform + '<br>' +
                         'Versão (Dispositivo): ' + device.version + '<br>' +
                         'UUID: ' + device.uuid;
    
}

function erro() {
    'use strict';
    alert('Erro na captura dos dados');
}

document.addEventListener('deviceready', getInfo, erro);
alert('Teste');