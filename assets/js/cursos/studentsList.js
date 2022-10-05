'use strict'

import { getAlunos } from "./studentsListFetch.js"
import { getCursos } from "./coursesFetch.js"

const curso = localStorage.getItem('curso')
const nomeCursos = await getCursos()

let titleContent = ''
const { cursos } = nomeCursos

cursos.forEach(element => {
    if(element.sigla.toLowerCase() == curso){
        titleContent = element.nome.split('-')[1].replace('Técnico em', '')
    }
});

const titleCurso = () => {
    const title = document.querySelector('.title')
    title.textContent = titleContent
}

titleCurso()

let listaAlunos = await getAlunos(curso)
const {alunos} = listaAlunos

const criarContainer = () => {
    const container = document.getElementById('alunos')
    
    
    alunos.forEach(element => {

        const div = document.createElement('div')
        div.classList.add('alunos-content')

        const img = document.createElement('img')
        img.classList.add('alunos-img')
        img.src = element.foto

        const span = document.createElement('span')
        span.classList.add('alunos-nome')
        span.textContent = element.nome

        if(element.status.toLowerCase() == "cursando"){
           div.classList.add('div-blue') 
        }else if(element.status.toLowerCase() == "finalizado"){
            div.classList.add('div-yellow')
        }

        div.appendChild(img)
        div.appendChild(span)
        div.id = element.matricula
        container.appendChild(div)

        div.addEventListener('click', (el) => {
            el.preventDefault()
            const aluno = div.id
            localStorage.setItem('aluno', aluno)

            location.href = './student.html'
        });
    });
}

criarContainer(listaAlunos)