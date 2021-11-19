import React from "react";
import './Sobre.css'
import avatar from '../../assets/img/avatar-pedro/avatar_bigode.png'

export default () => {
    return (
        <section id="sobre" className="rpgui-container framed-grey">
            <h1>SOBRE</h1>
            <div id="intro">
                <img id="avatar" src={avatar} alt="" />
                <div>
                    <p>Nome: Pedro Ivo S Brito</p>
                    <p>Idade: 32 anos</p>
                    <p>Trivia: Pai de 3 gatas, gamer e fonte de memes</p>
                </div>
            </div>
            <hr />
            <div id="descricao">
                <p>Sou apaixonado por inovação e tecnologia e escolhi deixar a área jurídica para mergulhar de cabeça na vida de dev</p>
                <p>Sou estudante-bolsista no curso CTD e tenho como meta desenvolver meu conhecimento e habildiades como Web Dev Front-End</p>
            </div>
        </section>
    )
}