import React from "react"
import '../../assets/rpgui/rpgui.css'
import './Header.css';
import joystick from "../../assets/img/joystick.png"
import MenuBurger from "../../MenuBurger/MenuBurger";


export default () => {
    return (
    
    <header className="rpgui-container framed">
        <div id="logo">
            <img id="logo-img" src={joystick} alt="imagem de um joystick" />
            <p className="logo-txt">GAMEFOLIO</p>
        </div>
        <MenuBurger />
    </header>
    )
}