import "./header.css";
import logo from "../../assets/logo-header.png";

function Header(){
    return(
        <header>
            <div className="container">
                <nav className="bar">
                    <a href="#hero-section"> <img src={logo} alt="Logo Battel Imports" /></a>

                    <div className="menu">
                        <a className="internal-scroll" href="#about-section">Quem somos?</a>
                        <a className="internal-scroll"  href="#products">Produtos</a>
                        <a className="internal-scroll"  href="#warranty">Garantia</a> 
                        <a className="internal-scroll"  href="#questions">Perguntas frenquentes</a>   
                        <a className="internal-scroll"  href="#feedback">Feedback</a>
                        <a className="internal-scroll"  href="#contacts">Contato</a>

                        <div className="cta-header">
                            <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logo/logo-whatsapp-esz7748uz5sohs2ktm4o.png/logo-whatsapp-6mihjwai8cvcdrwckxq459.png?_a=DATAiZAAZAA0" alt="Whatsapp image" />

                            <a target="_blank" href="https://wa.me/5511947361263?text=Olá%21%20Vim%20pelo%20site%20da%20Betel%20e%20gostaria%20de%20fazer%20uma%20encomenda.%20Poderia%20me%20ajudar%20com%20mais%20informações%3F">
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