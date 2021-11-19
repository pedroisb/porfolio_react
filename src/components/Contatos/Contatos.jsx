import React from "react";
import './Contatos.css'
import { medias } from "./SocialMedia";


export default () => {
    const mediaContato = medias.map(({icon, alt, link}) => (
        <a href={link}>
                    <img src={icon} alt={alt} />
        </a>
    ))

    return(
        <footer id="contatos" className="rpgui-container framed">
            {mediaContato}
        </footer>
    )
}