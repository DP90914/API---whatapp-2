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
    if(message.users){
        return message //Resultado Verdadeiro da API 200
        }else{
            return MESSAGE_ERROR //Resultado Falso da API 500
        }
}
const getUserData = function(number){
    let message = {status: true, statusCode: 200, development:"Gustavo de Paula Silva",}
    
    const numberEscolhido = number
    const numberEncontrado = dados.contatos['whats-users'].find(contato => contato.number === String(numberEscolhido))

    message.contato = numberEncontrado

    if(message.contato){
        return message //Resultado Verdadeiro da API 200
        }else{
            return MESSAGE_ERROR //Resultado Falso da API 500
        }
}
const getUserContacts = function(number){
    let message = {status: true, statusCode: 200, development:"Gustavo de Paula Silva",}

    const numberEscolhido = number
    const numberEncontrado = dados.contatos['whats-users'].find(contato => contato.number === String(numberEscolhido))

    message.contato = numberEncontrado.contacts
    delete message.contato.contacts

    if(message.contato){
        return message //Resultado Verdadeiro da API 200
        }else{
            return MESSAGE_ERROR //Resultado Falso da API 500
        }
}
const getUserMesssages = function(number){
    let message = {status: true, statusCode: 200, development:"Gustavo de Paula Silva",}

    const numberEscolhido = number
    const numberEncontrado = dados.contatos['whats-users'].find(contato => contato.number === String(numberEscolhido))


    message.contato = numberEncontrado.contacts


    if(message.contato){
        return message //Resultado Verdadeiro da API 200
        }else{
            return MESSAGE_ERROR //Resultado Falso da API 500
        }
}
const getUserMesssagesBycontacts = function(numberUser,numberContact){

    let message = {status: true, statusCode: 200, development:"Gustavo de Paula Silva", contato: []}

    const numberUserEscolhido = numberUser
    const numberUserEncontrado = dados.contatos['whats-users'].find(contato => contato.number === String(numberUserEscolhido))

    const numberContactEscolhido = numberContact

    message.contato.push(numberUserEncontrado)

    numberUserEncontrado.contacts.forEach(function(item){
        if(item.number == String(numberContactEscolhido)){
            message.contato.contact = item
        }
    })
    delete numberUserEncontrado.contacts

    if(numberUserEncontrado.contacts){
        return message //Resultado Verdadeiro da API 200
        }else{
            return MESSAGE_ERROR //Resultado Falso da API 500
        }
}
const filterBykeyWord = function(numberUser, keyWord){
    let message = {status: true, statusCode: 200, development:"Gustavo de Paula Silva", contato: []}

    const numberUserEscolhido = numberUser
    const numberUserEncontrado = dados.contatos['whats-users'].find(contato => contato.number === String(numberUserEscolhido))

    numberUserEncontrado.contacts.forEach(function(item){

        item.messages.forEach(function(item){
            if(item.content.includes(keyWord)){
                message.contato.push(item)
                console.log(message)
            }
        })

    })

    if(message.contato){
        return message //Resultado Verdadeiro da API 200
        }else{
            return MESSAGE_ERROR //Resultado Falso da API 500
        }
}

module.exports = {
    getAllUsers,
    getUserData,
    getUserContacts,
    getUserMesssages,
    getUserMesssagesBycontacts,
    filterBykeyWord
}

// getAllUsers()
// getUserData(11987876567)
// getUserContacts(11987876567)
// getUserMesssages(11987876567)
// getUserMesssagesBycontacts(11987876567, 26999999963)
// filterBykeyWord(11987876567,"Leonid")