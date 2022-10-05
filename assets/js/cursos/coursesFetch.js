'use strict'

const getCursos = async () => {
    const url = `http://localhost:8080/infoscursos/`

    const response = await fetch(url)
    const listaCursos = await response.json()
    return listaCursos
}

export{
    getCursos
}