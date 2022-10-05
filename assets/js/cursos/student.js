'use strict'

import { getAlunosMatricula } from "./studentFetch.js"
import { getDisciplinasMedias } from "./studentFetch.js"

const registration = localStorage.getItem('aluno')
let matriculaAlunos = await getAlunosMatricula(registration)

const criarContainer = (json) => {
    const container = document.getElementById('aluno')
    const {alunos} = (json)
    
    alunos.forEach(element => {
        const div = document.createElement('div')
        div.classList.add('aluno-content')

        const img = document.createElement('img')
        img.classList.add('aluno-img')
        img.src = element.foto

        const span = document.createElement('span')
        span.classList.add('aluno-nome')
        span.textContent = element.nome

        div.appendChild(img)
        div.appendChild(span)
        container.appendChild(div)
    });
}

criarContainer(matriculaAlunos)

const createSubjectInitials = (name) => {
    let subjectName = name;
    let subjectInitials = [];

    let splitedName = subjectName.split(' ');
    splitedName.forEach(index => {
        subjectInitials.push(index[0].toUpperCase());
    });

    return subjectInitials.join('');
}

let disciplinasMedias = await getDisciplinasMedias(registration)

const mostrarNotas = (json) => {
    const container = document.getElementById('infos-aluno')
    const {disciplinas} = (json)

    disciplinas.forEach(element => {
        const div = document.createElement('div')
        div.classList.add('score-div')

        const span = document.createElement('span')
        span.classList.add('score-span')
        span.textContent = element.media

        const progress = document.createElement('progress')
        progress.classList.add('score-progress')
        progress.max = '100'
        progress.value = element.media

        if(element.media >= 70){
            progress.classList.add('aprovado')
            span.classList.add('score-aprovado')
        } else if(element.media < 70 && element.media >= 50){
            progress.classList.add('exame')
            span.classList.add('score-exame')
        } else{
            progress.classList.add('desaprovado')
            span.classList.add('score-desaprovado')
        }

        const subjectInitials = document.createElement('span')
        subjectInitials.classList.add('subject-initials')
        subjectInitials.textContent = createSubjectInitials(element.nome)

        div.appendChild(span)
        div.appendChild(progress)
        div.appendChild(subjectInitials)

        container.appendChild(div)
    })
}

mostrarNotas(disciplinasMedias)