import React from "react";
import '../../assets/rpgui/rpgui.css';
import './Quests.css'
import { logo } from "../Header/Header";

export default () => {
    return(
        <div id='quests' className="rpgui-container framed-grey">
            <h1>QUESTS</h1>
            {/* <div id='on-going'>
                <hr/>
                <h3>IN PROGRESS</h3>
                <div className='quest-card'>
                    <h5>Gamefolio</h5>
                    <div className='quest-card-info'>
                        <p>Um portfólio com estética gameficada</p>
                        {logo}
                    </div>
                </div>
            </div> */}

            <div id='completed'>
                <hr/>
                <h3>COMPLETED</h3>
                {/* DESTACAR 3 PROJETOS COM LINK PARA REPO E SITE (SE HOUVER)
                PETINDER
                FORMULÁRIO CARD
                FORMULÁRIO TO DO LIST
                JAVA RESTAURANTE*/}
            </div>
        </div>
    )
}

//FAZER UMA LISTA COM OS DIVERSOS PROJETOS E RENDERIZÁ-LOS COM MAP()