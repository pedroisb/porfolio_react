import React from "react"
import avatarGui from "../assets/avatar_gui.png"

//CHAR, SKILLS, QUESTS, MESSAGE ME

export default () => {
    return (
        <header>
             <p>LOGO! ???</p> {/*vou incluir uma logo ou vai quebrar meu layout? */}
            <ul class="nav justify-content-center">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Active</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled">Disabled</a>
                </li>
            </ul>
        </header>
    )
}