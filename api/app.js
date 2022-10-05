//Import da biblioteca do express para criar a API
const express = require('express');

//Import da biblioteca do cors para manipular as permissões do protocolo HTTP
const cors = require('cors');

//Import da biblioteca do body-parser que irá manipular o corpo das requisições do protocolo HTTP
const bodyParser = require('body-parser');

//Import do arquivo cursos
const {getListCursos, 
       getCursos
      } = require ('./modulo/cursos.js')

//Import do arquivo alunos
const {getListAlunos, 
       getAlunosMatricula,
       getAlunosCurso,
       getAlunosAnoConclusao,
       getDisciplinasMedias,
       getAlunosStatus
      } = require ('./modulo/alunos')

//Cria um objeto chamado app que será especialista nas funções do express
const app = express();

app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', '*');

   // Permite especificar quais serão os verbos (métodos) que a API irá reconhecer
   response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

   // Estabelece que as permissões acima serão representadas pelo cors
   app.use(cors());

   next();
});

//Listdo cursos
app.get('/infoscursos', cors(), async function(request, response, next){
    let infosCursos = getCursos();
    let infosCursosJSON = {};

    if(infosCursos){
        infosCursosJSON.cursos = infosCursos;
        response.status(200);
        response.json(infosCursosJSON);
    }else{
        response.status(404)
        response.json('{message: "Nenhum item encontrado"}')
    }
});

//Listando as siglas dos cursos
app.get('/cursos', cors(), async function(request, response, next){
    let cursos = getListCursos();
    let cursosJSON = {};

    if(cursos){
        cursosJSON.cursos = cursos;
        response.status(200);
        response.json(cursosJSON);
    }else{
        response.status(404)
        response.json('{message: "Nenhum item encontrado"}')
    }
});

//Listando alunos
app.get('/listalunos', cors(), async function(request, response, next){
    let listAlunos = getListAlunos();
    let listAlunosJSON = {};

    if(listAlunos){
        listAlunosJSON.alunos = listAlunos;
        response.status(200);
        response.json(listAlunosJSON);
    }else{
        response.status(404);
        response.json('{message: "Nenhum item encontrado"}');
    }
});

//Listando os alunos pela matrícula
app.get('/alunosmatricula/:matricula', cors(), async function(request, response, next){
    let matricula = request.params.matricula
    let matriculaAlunos = getAlunosMatricula(matricula)
    let matriculaAlunosJSON = {};

    if(matriculaAlunos){
        matriculaAlunosJSON = matriculaAlunos;
        response.status(200);
        response.json(matriculaAlunosJSON);
    }else{
        response.status(404);
        response.json('{message: "Nenhum item encontrado"}');
    }
})

//Listando os alunos pelo curso
app.get('/alunoscursos/:curso', cors(), async function(request,response, next){
    let curso = request.params.curso
    let alunosCurso = getAlunosCurso(curso);
    let alunosCursoJSON = {};

    if(alunosCurso){
        alunosCursoJSON = alunosCurso;
        response.status(200);
        response.json(alunosCursoJSON);
    }else{
        response.status(404);
        response.json('{message: "Nenhum item encontrado"}');
    }
});

//Listando os alunos pelo ano de conclusão
app.get('/alunosconclusao/:anoconclusao', cors(), async function(request,response, next){

    let anoConclusao = request.params.anoconclusao;
    let alunoAnoConclusao = getAlunosAnoConclusao(anoConclusao);

    if(alunoAnoConclusao){
        response.status(200);
        response.json(alunoAnoConclusao);
    }else{
        response.status(404);
        response.json('{message: "Nenhum item encontrado"}');
    }
});

//Listando as disciplinas e suas médias pela matrícula
app.get('/disciplinasmedias/:matricula', cors(), async function(request, response, next){
    let matricula = request.params.matricula;
    let disciplinasMedias = getDisciplinasMedias(matricula);

    if(disciplinasMedias){
        response.status(200);
        response.json(disciplinasMedias);
    }else{
        response.status(404);
        response.json('{message: "Nenhum item encontrado"}');
    }
});

//Listando os alunos pelo status
app.get('/alunostatus/:status', cors(), async function(request, response, next){
    let status = request.params.status
    let alunosStatus = getAlunosStatus(status)

    if(alunosStatus){
        response.status(200);
        response.json(alunosStatus)
    }else{
        response.status(404);
        response.json('{message: "Nenhum item encontrado"}')
    }
});

app.listen(8080, function(){
    console.log('Servidor aguardando requisições')
});

