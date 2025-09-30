/************************************************************************************************************************************************
 * Objetivo: API rsponsavel por criar endPoints referente estado e cidades
 * Data: 15/09/2025
 * Autor: Gustavo de Paula Silva
 * Versão: 1.0
 *                                                  
 * Observasções: instalar dependencias para criar a API
 *                  express      - npm install express --save       Instala as dependencias para criar uma API
 *                  cors         - npm install cors --save          Instala as dependencias para configurar as permissões de uma API
 *                  body-parser  - npm install body-parser --save   Instala as dependencias para receber os tipos de dados via POST o PUT
 *                               - npm i
 * 
 *                  Request     -> Recebe os dados
 *                  Response    -> Envia os dados na API
************************************************************************************************************************************************/
//import das dependencias 
const express       = require('express')
const cors          = require('cors')
const bodyParser    = require('body-parser')

//Import do arquivo de funções
const dados = require('./modulo/funcoes.js')

//defini a porta padrão da API, se for em um servidor de nuvem não temos acesso a porta em execução local podemos definir uma porta
const PORT= process.PORT || 8080

//Instacia na classe do express
const app = express()

// Configurações do CORS
app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*') //IP de Origem
    response.header('Access-Control-Allow-Methods', 'GET') // Metodos (Verbos) do protocolo HTTP
    
    app.use(cors())
    next()// Ler os proximos EndPoints
})


//EndPoints
app.get('/v1/allUsers', function(request, response){
    let users = dados.getAllUsers()
    response.json(users)
})

app.get('/v1/User/:number', function(request, response){
    let number = request.params.number
    let user = dados.getUserData(number)
    response.json(user)
})

app.get('/v1/message/', function(request, response){
    let numberUser = request.query.numberUser
    let numberContact = request.query.numberContact
    let filtered = dados.getUserMesssagesBycontacts(numberUser,numberContact)
    response.json(filtered)
})



app.get('/v1/filter/', function(request, response){
    let number = request.query.numberUser
    let word = request.query.keyWord
    let filtered = dados.filterBykeyWord(number, word)
    response.json(filtered)
})


app.listen(PORT, function(){
    console.log("teste")
})