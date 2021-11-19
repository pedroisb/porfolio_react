//Projetos representados como objetos, abrigados em respectivas variáveis

//Importando imagens a serem utilizadas como avatar dos projetos realizados
import logoPet from '../../assets/avatar-projetos/petinder-icon.png';
import logoMemory from '../../assets/avatar-projetos/memory-icon.png';
import logoToDo from '../../assets/avatar-projetos/to-do-icon.png'

export const projetoPetinder = {
    carouselStatus: "carousel-item active",
    avatar: logoPet, 
    titulo: "PeTinder", 
    subtitulo: "Projeto da disciplina Front-End I, do curso CTD",
    descricao: "A proposta da equipe foi criar um site para promover a adoção de animais em situação de abandono",
    webpage:"https://projetofinalfrontend.github.io/projetoFinal/",
    repo:"https://github.com/projetoFinalFrontEnd/projetoFinal"
}

export const projetoMemory = {
    carouselStatus: "carousel-item",
    avatar: logoMemory, 
    titulo: "Memory Game", 
    subtitulo: "Projeto da disciplina Front-End II, do curso CTD",
    descricao: "Fora desenvolvido pela equipe um jogo da memória com cards construídos pelo usuário a partir de um formulário",
    webpage:"https://checkpoint-01-fe-ii.github.io/form/",
    repo:"https://github.com/Checkpoint-01-FE-II/form"
}

export const projetoToDo = {
    carouselStatus: "carousel-item",
    avatar: logoToDo, 
    titulo: "To-Do List", 
    subtitulo: "Projeto da disciplina Front-End II, do curso CTD",
    descricao: "A equipe elaborou uma página com forms de cadastro e de criação de tarefas, com as validações necessárias",
    webpage:"https://projetofinalfrontend.github.io/projetoFinal",
    repo:"https://github.com/DH-Front-End-02-Checkpoint-02/Projeto-To-Do"
}