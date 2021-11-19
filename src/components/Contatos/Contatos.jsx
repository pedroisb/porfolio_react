import React from "react";
import './Contatos.css'
import { medias } from "./SocialMedia";


export const Contatos = () => {
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