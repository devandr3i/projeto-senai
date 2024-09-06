const titulo = document.querySelector('.titulo')
const imagemPerfil = document.querySelector('.imagem-perfil')
const loginPerfil = document.querySelector('.login-perfil')
const segPerfil = document.querySelector('.seg-perfil')
const repos = document.querySelector('.repos')
const bioPerfil = document.querySelector('.bio-perfil')
const localPerfil = document.querySelector('.localidade-perfil')

const getInfos = async () =>{
    const response = await fetch('https://api.github.com/users/devandr3i')
    const data = await response.json()

    if(data){
        titulo.innerHTML = data.name
        repos.innerHTML = `Repositórios: ${data.public_repos}`
        imagemPerfil.setAttribute('src' ,data.avatar_url)
        bioPerfil.innerHTML = data.bio
        segPerfil.innerHTML = `Seguidores: ${data.followers} <br/> seguindo: ${data.following} `
        localPerfil.innerHTML = `Localização: ${data.location}`
        loginPerfil.innerHTML = data.login
    }else if(!data){
        titulo.innerHTML = 'Andrei Felipe'
        repos.innerHTML = `Repositórios: 1`
        imagemPerfil.setAttribute('src' ,data.avatar_url)
        bioPerfil.innerHTML = 'Cursando Técnico em Desenvolvimento de Sistemas pelo Senai.'
        segPerfil.innerHTML = `Seguidores: 1 <br/> seguindo: 0 `
        localPerfil.innerHTML = `Localização: Santa Rita/PB`
        loginPerfil.innerHTML = 'devandr3i'
    }
    console.log(data)
}


getInfos()
//titulo.innerHTML = 'Não é mais Andrei Felipe'
// o get ira buscar algo, ja o set ira atribuir esse algo.