import "./hero.css";
import video from "../../../assets/background-video.mp4";

function Hero(){
    return(
        <section className="hero" id="hero-section">
            <video autoPlay muted loop playsInline src={video}/>

            <div className="container">
                <div className="container-hero">
                    <div className="title-hero">
                        <div>
                            <h1>Seu próximo</h1>
                            <h2>iPhone está aqui.</h2>
                        </div>
                        <h3>Técnologia, segurança e a melhor experiência Apple com entrega garantida em todo Brasil.</h3>
                    </div>
                    
                    <div className="button-hero">
                        <a className="cta-hero" target="_blank" href="https://wa.me/5511947361263?text=Olá%21%20Vim%20pelo%20site%20da%20Betel%20e%20gostaria%20de%20fazer%20uma%20encomenda.%20Poderia%20me%20ajudar%20com%20mais%20informações%3F">Fazer minha encomenda</a>

                        <a className="about-hero" href="#about-section">Saiba mais</a>
                    </div>
                </div>
            </div>

            
        </section>
    )
}

export default Hero;