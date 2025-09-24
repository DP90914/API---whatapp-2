/***************************************************************************************************************
 * Objetivo: Arquivo responsavel pela funções para criar a API de whatapp2
 * Data: 24/09/2025
 * Autor: Gustavo de Paula Silva
 * Versão: 1.2
 ***************************************************************************************************************/

// Import do arquivo 
const dados = require('./contatos.js')

//Mensagens de erro
const MESSAGE_ERROR = {status: false, statusCode: 500, development:"Gustavo de Paula Silva",}

// Retorna a lista de estados
const getAllUsers = function(){
    //Padrão do JSON que será o retorno da função
    let message = {status: true, statusCode: 200, development:"Gustavo de Paula Silva",  users: []}
    dados.contatos['whats-users'].forEach(function(item){
        message.users.push(item)
    })
    // Adiciona um elemneto existente no JSON
    console.log(message)
}
const getUserData = function(number){
    let message = {status: true, statusCode: 200, development:"Gustavo de Paula Silva",}
    
    const numberEscolhido = number
    const numberEncontrado = dados.contatos['whats-users'].find(contato => contato.number === String(numberEscolhido))

    message.contato = numberEncontrado

    console.log(message)
}
const getUserContacts = function(number){
    let message = {status: true, statusCode: 200, development:"Gustavo de Paula Silva",}

    const numberEscolhido = number
    const numberEncontrado = dados.contatos['whats-users'].find(contato => contato.number === String(numberEscolhido))

    message.contato = numberEncontrado.contacts
    delete message.contato.contacts

    console.log(message)
}
const getUserMesssages = function(number){
    let message = {status: true, statusCode: 200, development:"Gustavo de Paula Silva",}

    const numberEscolhido = number
    const numberEncontrado = dados.contatos['whats-users'].find(contato => contato.number === String(numberEscolhido))


    message.contato = numberEncontrado.contacts


    console.log(message)
}
const getUserMesssagesBycontacts = function(numberUser,numberContact){

    let message = {status: true, statusCode: 200, development:"Gustavo de Paula Silva",}

    const numberUserEscolhido = numberUser
    const numberUserEncontrado = dados.contatos['whats-users'].find(contato => contato.number === String(numberUserEscolhido))



    console.log(message)
}
// getAllUsers()
// getUserData(11987876567)
// getUserContacts(11987876567)
// getUserMesssages(11987876567)
getUserMesssagesBycontacts(11987876567, 26999999963)
