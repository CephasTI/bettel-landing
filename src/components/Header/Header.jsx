import "./header.css";
import logo from "../../assets/logo-header.png";

function Header(){
    return(
        <header>
            <div className="container">
                <nav className="bar">
                    <a href="#hero"> <img src={logo} alt="Logo Battel Imports" /></a>

                    <div className="menu">
                        <a className="internal-scroll" href="#why-bettel">Porque nós?</a>
                        <a className="internal-scroll"  href="#products">Produtos</a>
                        <a className="internal-scroll"  href="#secure-and-privaticity">Segurança & Privaidade</a>   
                        <a className="internal-scroll"  href="#feedback">Feedback</a>
                        <a className="internal-scroll"  href="#contacts">Contato</a>

                        <div className="cta-header">
                            <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logo/logo-whatsapp-esz7748uz5sohs2ktm4o.png/logo-whatsapp-6mihjwai8cvcdrwckxq459.png?_a=DATAiZAAZAA0" alt="Whatsapp image" />

                            <a target="_blank" href="https://wa.me/5511947361263?text=Olá!%20Vi%20o%20site%20da%20Bettel%20Imports.%20Gostaria%20de%20conhecer%20os%20produtos%20diponíveis%20no%20momento.">
                                Encomendar agora
                            </a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header;