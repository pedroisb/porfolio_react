import React from "react"
import '../../assets/rpgui/rpgui.css'
import "../../styles/Header.css";
import joystick from "../../assets/img/joystick.png"

// import avatarGui from "../../assets/img/avatar_gui.png"
// import avatarPuro from "../../assets/img/avatar_sem_gui.png"


//CHAR, SKILLS, QUESTS, MESSAGE ME

export default () => {
    return (
    
    <header className="rpgui-container framed">
    
        <div id="logo">
            <img id="logo-img" src={joystick} alt="imagem de um joystick" />
            <p id="logo-txt">GAMEFOLIO</p>
        </div>
        
        <nav className="navbar navbar-light
        ">
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">GAMEFOLIO</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
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
