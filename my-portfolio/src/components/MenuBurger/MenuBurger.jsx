import React from "react"
import '../../assets/rpgui/rpgui.css'
import './MenuBurger.css';

export default () => {
    return (
    
        <nav className="navbar navbar-light
        ">
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
                    <button className="rpgui-button" id="burger-btn"><a href="#">SOBRE</a></button>
                    <button className="rpgui-button" id="burger-btn"><a href="#">PROJETOS</a></button>
                    <button className="rpgui-button" id="burger-btn"><a href="#">CONTATO</a></button>
                </div>
            </nav>
        </nav>
    )
}

{/* NÃO FAZ PARTE DO MVP. RECOMENDO DEIXAR PARA IMPLEMENTAR FUTURAMENTE */}
{/* <button className="rpgui-button" id="burger-btn"><a href="#">SKILLS</a></button> */}