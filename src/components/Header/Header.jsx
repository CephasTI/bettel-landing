import "./header.css";
import logo from "../../assets/logo-header.png";
import Sidebar from "../Sidebar/Sidebar";
import { useState, useEffect } from "react";

function Header(){
    const [ opennedMenu, setOpennedMenu ] = useState(false)

    useEffect(()=>{
        if(opennedMenu){
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.overflow = "";
        }
    },[opennedMenu])
    
    return(
        <div>
            < Sidebar opennedMenu={ opennedMenu } closedMenu={ () => setOpennedMenu( false ) }/>

            <header>
            
                <div className="container">
                    <div className="navbar-container">
                        <nav className="bar">
                            <a href="#hero"> <img src={logo} alt="Logo Battel Imports" /></a>

                            <div className="menu">
                                <a className="nav-ref" href="#about">Historia</a>
                                <a className="nav-ref" href="#products">Produtos</a>
                                <a className="nav-ref" href="#warranty">Garantia</a> 
                                <a className="nav-ref" href="#questions">FAQ</a>   
                                <a className="nav-ref" href="#feedback">Feedback</a>
                                <a className="nav-ref" href="#contacts">Contato</a>

                                <a className="cta-header" target="_blank" href="https://wa.me/5511947361263?text=Olá%21%20Vim%20pelo%20site%20da%20Betel%20e%20gostaria%20de%20fazer%20uma%20encomenda.%20Poderia%20me%20ajudar%20com%20mais%20informações%3F">
                                    <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logo/logo-whatsapp-esz7748uz5sohs2ktm4o.png/logo-whatsapp-6mihjwai8cvcdrwckxq459.png?_a=DATAiZAAZAA0" alt="Whatsapp image"/>

                                    <p>
                                        Encomendar agora
                                    </p>
                                </a>
                            </div>

                            <div className="menu-button" onClick={ () => setOpennedMenu( !opennedMenu )}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z"/></svg>
                            </div>

                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;