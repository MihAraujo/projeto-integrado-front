'use strict'

const getAlunos = async (curso) => {
    const url = `http://localhost:8080/alunoscursos/${curso}`

    const response = await fetch(url)
    const listaAlunos = await response.json()
    return listaAlunos
}

export{
    getAlunos
}