import React from "react"
import '../../assets/rpgui/rpgui.css'
import "../../styles/Header.css";
import avatarGui from "../../assets/img/avatar_gui.png"
import avatarPuro from "../../assets/img/avatar_sem_gui.png"


//CHAR, SKILLS, QUESTS, MESSAGE ME

export default () => {
    return (
    
    <header class="rpgui-container framed">
    
        {/* <p>LOGO</p>
        <p>MENU</p> */}
        {/* <img src={avatarGui} alt="" id="avatarGui" /> */}
        {/* Top Navigation Menu */}

        <div id="logo">
            <p class>GAMEFOLIO</p>
        </div>
        
        <nav class="navbar navbar-light
        ">
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">GAMEFOLIO</h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}


{/* <header class="inner rpgui-container framed">

</header> */}

{/* <div id="gui_alternativa"><img src={avatarPuro} alt="" /></div>

<button class="rpgui-button"><p>BIO</p></button>
<button class="rpgui-button"><p>SKILLS</p></button>
<button class="rpgui-button"><p>QUESTS</p></button>
<button class="rpgui-button"><p>INVITE TO PARTY</p></button> */}
