'use strict'

import { getCursos } from "./coursesFetch.js"

let listaCursos = await getCursos()

const criarContainer = (json) => {
    const container = document.getElementById('cursos')

    const {cursos} = json

    cursos.forEach(element => {
        const div = document.createElement('div')
        div.classList.add('cursos-content')

        const img = document.createElement('img')
        img.classList.add('cursos-icones')
        img.src = element.icone

        const span = document.createElement('span')
        span.classList.add('cursos-nome')
        span.textContent = element.sigla

        div.appendChild(img)
        div.appendChild(span)
        div.id = element.sigla.toLowerCase()

        container.appendChild(div)

        div.addEventListener('click', (el) => {
            el.preventDefault()
            const curso = div.id
            localStorage.setItem('curso', curso)

            location.href = './assets/pages/student-list.html'
        })
    });
}

criarContainer(listaCursos)