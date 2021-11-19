import React from "react"
import '../../assets/rpgui/rpgui.css'
import './MenuBurger.css';

export default () => {
    return (
    
        <nav className="navbar navbar-light">
            {/* BTN TOGGLER */}
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            {/* MENU OFFCANVAS */}
            <nav className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar">
                
                <div className="offcanvas-header">
                    
                {/* navbar-toggler */}
                    <button type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <h5 id="burger-title">GAMEFOLIO</h5>
                <hr /> 
                
                <div id="offcanvas-btns">

                    {/* RESOLVER PROBLEMA-01: CLICK - TEM QUE FECHAR O NAVBAR APPÓS REDIRECIONAR 
                    <<<RESOLVIDO>>> Adicionada propriedade do bootstrap: data-bs-dismiss="offcanvas" */}

                    {/* RESOLVER PROBLEMA-02: CLICK - BUTTON TEM QUE SER CLICÁVEL POR INTEIRO, IDENTIFICÁ-LO COM O LINK 
                    <<<RESOLVIDO>>> BASTA FAZER ADEQUAÇÕES NECESSÁRIAS NO CSS*/}

                    {/* RESOLVER PROBLEMA-03: SOBREPOSIÇÃO - AO CLICAR, REDIRECIONA PARA SOBRE, MAS ELE CORTA A PARTE DE CIMA. PROVAVELMENTE PELO POSITION FIXED DO HEADER 
                    SUGESTÃO: GAP ENTRE ELEMENTOS = HEIGHT DO HEADER E READEQUAR MARGIN-TOP CONTEÚDO DE BANNER*/}
                    
                    <a href="#sobre">
                        <button type="button" data-bs-dismiss="offcanvas" className="rpgui-button" id="burger-btn">SOBRE</button>
                    </a>
                    <a href="#projetos">
                        <button type="button" data-bs-dismiss="offcanvas" className="rpgui-button navlink-active" id="burger-btn">PROJETOS</button>
                    </a>
                    <a href="#contatos">
                        <button type="button" data-bs-dismiss="offcanvas" className="rpgui-button navlink-active" id="burger-btn">CONTATO</button>
                    </a>
                </div>
            </nav>
        </nav>
    )
}

{/* NÃO FAZ PARTE DO MVP - IMPLEMENTAR FUTURAMENTE:
 <button className="rpgui-button" id="burger-btn"><a href="#">SKILLS</a></button> */}