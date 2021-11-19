import React from "react";
import '../../assets/rpgui/rpgui.css';
import './Projetos.css'

//import do conteúdo dos cards dos projetos
import { projetosTodos } from "./Cards";


export default () => {
  
  const card = projetosTodos.map(({carouselStatus, avatar, titulo, subtitulo, descricao, webpage, repo}) => (
    <div className={carouselStatus}>
      <a href={webpage} target="_blank">
        <img className="card-avatar" src={avatar} alt="" />
      </a>
      <h5>{titulo}</h5>
      <div id="card-descricao">
        <p>{subtitulo}</p>
        <p>{descricao}</p>
      </div>
        {/* <a href={repo} target="_blank">Repo</a> */}
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