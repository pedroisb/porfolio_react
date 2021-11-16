import React from "react"
import '../../assets/rpgui/rpgui.css'
import './Header.css';
import joystick from "../../assets/img/joystick.png"

// import avatarGui from "../../assets/img/avatar_gui.png"
// import avatarPuro from "../../assets/img/avatar_sem_gui.png"


//CHAR, SKILLS, QUESTS, MESSAGE ME

export default () => {
    return (
    
    <header className="rpgui-container framed">
    
        <div id="logo">
            <img id="logo-img" src={joystick} alt="imagem de um joystick" />
            <p className="logo-txt">GAMEFOLIO</p>
        </div>
        
        <nav className="navbar navbar-light
        ">
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

                    <button className="rpgui-button" id="burger-btn"><a href="#">SKILLS</a></button>

                    <button className="rpgui-button" id="burger-btn"><a href="#">QUESTS</a></button>

                    <button className="rpgui-button" id="burger-btn"><a href="#">INVITE TO PARTY</a></button>
                </div>
            </nav>
        </nav>
    </header>
    )
}


{/* <header className="inner rpgui-container framed">

</header> */}

{/* <div id="gui_alternativa"><img src={avatarPuro} alt="" /></div>

<button className="rpgui-button"><p>BIO</p></button>
<button className="rpgui-button"><p>SKILLS</p></button>
<button className="rpgui-button"><p>QUESTS</p></button>
<button className="rpgui-button"><p>INVITE TO PARTY</p></button> */}
