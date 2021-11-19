import React from "react"
import '../../assets/rpgui/rpgui.css'
import './Header.css';
import joystick from "../../assets/img/logo/joystick.png"
import { MenuBurger } from "../MenuBurger/MenuBurger";


export const Header = () => {
    
    const logo = <img id="logo-img" src={joystick} alt="imagem de um joystick" />
    
    return (
    <header className="rpgui-container framed">
        <div id="logo">
            {logo}
        <p id="logo-txt">GAMEFOLIO</p>
        </div>
        <MenuBurger />
    </header>
    )
}