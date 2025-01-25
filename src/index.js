// importando o expresss para construir o backend
const express = require('express');
// Chamada da função express para criação do app
const app = express();
// implantando banco de dados



const path = require('path');
// criação da porta
const PORT = 3000;

app.use(express.static("public"))
//Habilitar o uso do req.body na nossa aplicação
// server.use(express.urlencoded({ extended:true}))

// verbos utilizados no backend:
// GET = Pegar alguma coisa

app.get('/',(req,res)=>{
    // return res.render("index.html", {title:"home"})
    res.sendFile(path.join(__dirname, 'views', 'login.html'));
   
})


// POST = enviar alguma coisa
// DELETE = deletar alguma coisa
// PUT OU PATCH = atualizar, editar ou alterar alguma coisa
app.listen(PORT, ()=>{
console.log(`App online na porta ${PORT}`)


})

