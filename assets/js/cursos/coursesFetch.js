'use strict'

const getCursos = async () => {
    const url = `https://lustrous-squirrel-f9bee8.netlify.app/.netlify/functions/api/infoscursos/`

    const response = await fetch(url)
    const listaCursos = await response.json()
    return listaCursos
}

export{
    getCursos
}