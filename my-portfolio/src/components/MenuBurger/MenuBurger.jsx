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

                <h5 className="logo-txt">GAMEFOLIO</h5>
                
                <div id="offcanvas-body">
                    
                    <button className="rpgui-button" id="burger-btn"><a href="#">BIO</a></button>

                    {/* NÃO FAZ PARTE DO MVP. RECOMENDO DEIXAR PARA IMPLEMENTAR FUTURAMENTE */}
                    {/* <button className="rpgui-button" id="burger-btn"><a href="#">SKILLS</a></button> */}

                    <button className="rpgui-button" id="burger-btn"><a href="#">QUESTS</a></button>

                    <button className="rpgui-button" id="burger-btn"><a href="#">INVITE TO PARTY</a></button>
                </div>
            </nav>
        </nav>
    )
}