import React from 'react'
import '../../assets/rpgui/rpgui.css'
import './Banner.css'

export const Banner = () => {
    return(

        <section id='banner'>
            <div id='boas-vindas'>
                <h1>SEJA BEM-VINDE AO</h1>
                <h1>MEU GAMEFOLIO!</h1>
                <h3>CLIQUE NO ICONE DO MENU</h3>
                <h3>E SELECIONE UMA OPCAO</h3>
                <h3>OU ARRASTE PARA BAIXO</h3>
            </div>
        </section>
    )
}

/* RESERVADO PARA IMPLEMENTAÇÃO FUTURA: explicação dos btns encontrados
<div className="rpgui-container framed-grey">
    <p>BIO - Conheça mais sobre mim e minha trajetória!</p>
    <p>SKILLS - O que eu sei fazer e quão bem</p>
    <p>QUESTS - Meus projetos de destaque! Concluídos e em progresso</p>
    <p>INVITE TO PARTY - Gostaria de conversar mais? Me chama em uma das mídias listadas</p>
</div> */