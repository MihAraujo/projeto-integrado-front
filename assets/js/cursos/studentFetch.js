'use strict'

const getAlunosMatricula = async (matricula) => {
    const url = `https://lustrous-squirrel-f9bee8.netlify.app/.netlify/functions/api/alunosmatricula/${matricula}`

    const response = await fetch(url)
    const alunosMatricula = await response.json()
    return alunosMatricula
}

const getDisciplinasMedias = async (matricula) => {
    const url = `https://lustrous-squirrel-f9bee8.netlify.app/.netlify/functions/api/disciplinasmedias/${matricula}`

    const response = await fetch(url)
    const disciplinasMedias = await response.json()
    return disciplinasMedias
}

export{
    getAlunosMatricula,
    getDisciplinasMedias
}