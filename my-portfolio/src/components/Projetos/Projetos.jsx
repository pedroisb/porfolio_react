import React from "react";
import { Component } from 'react';
import '../../assets/rpgui/rpgui.css';
import './Projetos.css'

//import do conteúdo dos cards
import { projetoPetinder } from "./Cards";
import { projetoMemory } from "./Cards";
import { projetoToDo } from "./Cards";


export default class Projetos extends Component {
    
  constructor() {
        super();
        this.state = [
            projetoPetinder,
            projetoMemory,
            projetoToDo
        ]
    }

    render () {

      const card = this.state.map(({carouselStatus, avatar, titulo, subtitulo, descricao, webpage, repo}) => (
        <div className={carouselStatus}>
          <img className="card-avatar" src={avatar} alt="" />
          <h5>{titulo}</h5>
          <div id="card-descricao">
            <p>{subtitulo}</p>
            <p>{descricao}</p>
          </div>
          <div>
            <a href={webpage} target="_blank">Site</a>
            <a href={repo}target="_blank">Repo</a>
          </div>
        </div>
      ))

        return(
            <section id='projetos' className="rpgui-container framed-grey">
                <h1>PROJETOS</h1>
                <hr />
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                  <div class="carousel-inner">
                    <img className="d-block w-100" src="" alt="" />
                      {card}
                  </div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div> 
            </section>
        )
    }
}


//TEMPLATE DO CARD COM PROJETO
{/* <div class="carousel-item active">
  <img className="card-avatar" src={logoPet} alt="" />
  <h5>{this.state[0].titulo}</h5>
  <p>{this.state[0].subtitulo}</p>
  <p>{this.state[0].descricao}</p>
  <div>
    <a href={this.state[0].webpage} target="_blank">Site</a>
    <a href={this.state[0].repo}target="_blank">Repo</a>
  </div>
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