'use strict'

const getAlunosMatricula = async (matricula) => {
    const url = `http://localhost:8080/alunosmatricula/${matricula}`

    const response = await fetch(url)
    const alunosMatricula = await response.json()
    return alunosMatricula
}

const getDisciplinasMedias = async (matricula) => {
    const url = `http://localhost:8080/disciplinasmedias/${matricula}`

    const response = await fetch(url)
    const disciplinasMedias = await response.json()
    return disciplinasMedias
}

export{
    getAlunosMatricula,
    getDisciplinasMedias
}