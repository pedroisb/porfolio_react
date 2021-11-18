import React from "react";
import { Component } from 'react';
import '../../assets/rpgui/rpgui.css';
import './Quests.css'

//Importando imagens a serem utilizadas como avatar dos projetos realizados
import logoPet from '../../assets/avatar-projetos/petinder-icon.png'

// const logoPet =


export default class Projetos extends Component {
    constructor() {
        super();
        this.state = [
            { avatar: {logoPet}, 
            titulo: "PeTinder", 
            subtitulo: "Projeto da disciplina Front-End I, do curso CTD",
            descricao: "A proposta da equipe foi criar um site para promover a adoção de animais em situação de abandono",
            webpage:"https://projetofinalfrontend.github.io/projetoFinal/",
            repo:"https://github.com/projetoFinalFrontEnd/projetoFinal"},
            { avatar: "", titulo: "", descricao: ""},
            { avatar: "", titulo: "", descricao: ""}
        ]
    }

    // avatar: "", //URL(String)
    // titulo: "", //String
    // descricao: "" //String

    render () {
        return(
            <section id='quests' className="rpgui-container framed-grey">
                <h1>PROJETOS</h1>
                <hr />
                <div>
                    <img className="card-avatar" src={logoPet} alt="" />
                    <h5>{this.state[0].titulo}</h5>
                    <p>{this.state[0].subtitulo}</p>
                    <p>{this.state[0].descricao}</p>
                    <a href={this.state[0].webpage} target="_blank">Site</a>
                    <a href={this.state[0].repo}target="_blank">Repo</a>
                </div>
            </section>
        )
    }
}



//BOOTSTRAP CAROUSEL
{/* <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}







//FAZER UMA LISTA COM OS DIVERSOS PROJETOS E RENDERIZÁ-LOS COM MAP()


// export default class MyToDoList extends React.Component {
//   constructor(props) {
//     super(props);
//     // Change code below this line
//     this.state = {
//       userInput: "",
//       toDoList: []
//     }
//     // Change code above this line
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleSubmit() {
//     const itemsArray = this.state.userInput.split(',');
//     this.setState({
//       toDoList: itemsArray
//     });
//   }
//   handleChange(e) {
//     this.setState({
//       userInput: e.target.value
//     });
//   }
//   render() {
//     const items = this.state.toDoList.map(el => <li>{el}</li>)
//     return (
//       <div>
//         <textarea
//           onChange={this.handleChange}
//           value={this.state.userInput}
//           style={textAreaStyles}
//           placeholder='Separate Items With Commas'
//         />
//         <br />
//         <button onClick={this.handleSubmit}>Create List</button>
//         <h1>My "To Do" List:</h1>
//         <ul>{items}</ul>
//       </div>
//     );
//   }
// }