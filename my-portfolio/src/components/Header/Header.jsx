import React from "react"
import '../../assets/rpgui/rpgui.css'
import "../../styles/Header.css";


//CHAR, SKILLS, QUESTS, MESSAGE ME

export default () => {
    return (
        <header class="inner rpgui-container framed">

            <button class="rpgui-button"><p>CHAR</p></button>
            <button class="rpgui-button"><p>SKILLS</p></button>
            <button class="rpgui-button"><p>QUESTS</p></button>
            <button class="rpgui-button"><p>INVITE TO PARTY</p></button>
            
        </header>
    )
}