'use strict'

const getAlunos = async (curso) => {
    const url = `https://lustrous-squirrel-f9bee8.netlify.app/.netlify/functions/api/alunoscursos/${curso}`

    const response = await fetch(url)
    const listaAlunos = await response.json()
    return listaAlunos
}

export{
    getAlunos
}