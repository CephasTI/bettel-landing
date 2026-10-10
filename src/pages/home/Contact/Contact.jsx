import "./contact.css";
import contactTradeCardImage from "../../../assets/img/contact-trade-card-image.png";
import contactDirectCardImage from "../../../assets/img/contact-direct-card-image.png";
import WhatsappWhiteImage from "../../../assets/whatsapp-white-icon.webp";
import { useState } from "react";

function Contact() {
    const [ name, setName ] = useState("");
    const [ device, setDevice ] = useState("");
    const [ deviceWanted, setDeviceWanted ] = useState("");

    function handleSendWhatsappMessage(){
        if(name === "" || device === "" || deviceWanted === "" || phoneState === ""){
            alert("Complete todos os dados para iniciar avaliação");
        }else{
            const mensagem = `Olá! Vim pelo site da Bettel e gostaria de avaliar meu iPhone para usar como entrada.

*Nome:* ${name}
*Meu iPhone:* ${device}
*Estado do aparelho:* ${phoneState}
*Tenho interesse no:* ${deviceWanted}`;
            const mensagemCodificada =  encodeURIComponent(mensagem);

            const url = `https://wa.me/5511947361263?text=${mensagemCodificada}`;

            window.open(url, "_blank");
        }
    }

    const [ phoneState, setPhoneState ] = useState("");

    return(
        <section id="contact">
            <div className="container">
                <div className="contact-container">

                    <div className="contact-header">
                        <div className="eyebrow">ENTRE EM CONTATO</div>
                        <h1>Pronto para o próximo passo?</h1>
                        <p>Use seu aparelho como entrada ou conheça nossos modelos disponíveis.</p>
                    </div>

                    <div className="contact-options">

                        <div className="card trade">

                            <div className="form-container">

                                <div className="form-content">
                                    <div className="card-header">
                                        <div className="card-tag">
                                            <div className="icon-tag">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ffffff"><path d="M482-160q-134 0-228-93t-94-227v-7l-64 64-56-56 160-160 160 160-56 56-64-64v7q0 100 70.5 170T482-240q26 0 51-6t49-18l60 60q-38 22-78 33t-82 11Zm278-161L600-481l56-56 64 64v-7q0-100-70.5-170T478-720q-26 0-51 6t-49 18l-60-60q38-22 78-33t82-11q134 0 228 93t94 227v7l64-64 56 56-160 160Z"/></svg>
                                            </div>

                                            <div className="eyebrow">
                                                TROCA COM A BETTEL
                                            </div>
                                        </div>

                                        <div className="card-title">
                                            <h1>Avalie seu iPhone</h1>

                                            <p>Descubra quanto seu iPhone pode valer <br />como entrada para o seu póximo.</p>
                                        </div>
                                    </div>
                                    

                                    <form>
                                        <label>Seu nome</label>
                                        <input 
                                        placeholder="Digite seu nome" 
                                        value={name} 
                                        onChange={(event) => {setName(event.target.value)}} 
                                        type="text" 
                                        required/>

                                        <label>Qual iPhone você possui?</label>
                                        <input 
                                        placeholder="Ex.: iPhone 13 Pro 128GB" 
                                        value={device} 
                                        onChange={(event) => {setDevice(event.target.value)}} 
                                        type="text" 
                                        required/>

                                        <label>Qual iPhone você gostaria de pegar na troca?</label>
                                        <input 
                                        placeholder="Ex.: iPhone 15 Pro Max" 
                                        value={deviceWanted} 
                                        onChange={(event) => {setDeviceWanted(event.target.value)}} 
                                        type="text" 
                                        required/>

                                        <label>Estado do seu aparelho</label>

                                        <div className="check-mark">
                                            <ol>
                                                <li 
                                                className={ phoneState === "Exelente" ? "selected" : "" } 
                                                onClick={ () => {setPhoneState("Exelente")} }>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="M852-212 732-332l56-56 120 120-56 56ZM708-692l-56-56 120-120 56 56-120 120Zm-456 0L132-812l56-56 120 120-56 56ZM108-212l-56-56 120-120 56 56-120 120Zm246-75 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-361Z"/></svg>

                                                    Exelente
                                                </li>
                                                <li
                                                className={ phoneState === "Bom" ? "selected" : "" } 
                                                onClick={ () => {setPhoneState("Bom")} }>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="M720-144H264v-480l288-288 32 22q17 12 26 30.5t5 38.5l-1 5-38 192h264q30 0 51 21t21 51v57q0 8-1.5 14.5T906-467L786.93-187.8Q778-168 760-156t-40 12Zm-384-72h384l120-279v-57H488l49-243-201 201v378Zm0-378v378-378Zm-72-30v72H120v336h144v72H48v-480h216Z"/></svg>

                                                    Bom
                                                </li>
                                                <li
                                                className={ phoneState === "Com marcas de uso" ? "selected" : "" } 
                                                onClick={ () => {setPhoneState("Com marcas de uso")} }>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="M288-48q-29.7 0-50.85-21.15Q216-90.3 216-120v-720q0-33 19.5-52.5T288-912h384q29.7 0 50.85 21.15Q744-869.7 744-840v144q20 0 34 14t14 34v96q0 20-14 34t-34 14v384q0 29.7-21.15 50.85Q701.7-48 672-48H288Zm0-72h384v-720H288v720Zm0 0v-720 720Zm217.5-58.29q10.5-10.29 10.5-25.5t-10.29-25.71q-10.29-10.5-25.5-10.5t-25.71 10.29q-10.5 10.29-10.5 25.5t10.29 25.71q10.29 10.5 25.5 10.5t25.71-10.29Z"/></svg>

                                                    Com marcas <br />de uso
                                                </li>
                                                <li
                                                className={ phoneState === "Possui avarias" ? "selected" : "" } 
                                                onClick={ () => {setPhoneState("Possui avarias")} }>
                                                    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="m48-144 432-720 432 720H48Zm127-72h610L480-724 175-216Zm330.5-58.29q10.5-10.29 10.5-25.5t-10.29-25.71q-10.29-10.5-25.5-10.5t-25.71 10.29q-10.5 10.29-10.5 25.5t10.29 25.71q10.29 10.5 25.5 10.5t25.71-10.29ZM444-384h72v-192h-72v192Zm36-86Z"/></svg>

                                                    Possui avarias
                                                </li>
                                            </ol>
                                        </div>
                                    </form>
                                </div>

                                <img src={contactTradeCardImage} alt="Imagem do iPhone 15" />

                            </div>

                            <button onClick={() => {handleSendWhatsappMessage()}}>
                                <img src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/logo/logo-whatsapp-esz7748uz5sohs2ktm4o.png/logo-whatsapp-6mihjwai8cvcdrwckxq459.png?_a=DATAiZAAZAA0" alt="Whatsapp image"/>

                                Quero avaliar meu iPhone 
                                
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#020202"><path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z"/></svg>
                            </button>
                            <h4>
                                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="M263.72-96Q234-96 213-117.15T192-168v-384q0-29.7 21.15-50.85Q234.3-624 264-624h24v-96q0-79.68 56.23-135.84 56.22-56.16 136-56.16Q560-912 616-855.84q56 56.16 56 135.84v96h24q29.7 0 50.85 21.15Q768-581.7 768-552v384q0 29.7-21.16 50.85Q725.68-96 695.96-96H263.72Zm.28-72h432v-384H264v384Zm267-141.21q21-21.21 21-51T530.79-411q-21.21-21-51-21T429-410.79q-21 21.21-21 51T429.21-309q21.21 21 51 21T531-309.21ZM360-624h240v-96q0-50-35-85t-85-35q-50 0-85 35t-35 85v96Zm-96 456v-384 384Z"/></svg>

                                Avaliação inicial sem compromisso.
                            </h4>
                        </div>

                        <div className="card direct">
                            <div className="form-container">
                                <div className="form-content">
                                    <div className="card-header">
                                        <div className="card-tag">
                                            <div className="icon-tag">
                                                <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#ffffff"><path d="M240-80q-33 0-56.5-23.5T160-160v-480q0-33 23.5-56.5T240-720h80q0-66 47-113t113-47q66 0 113 47t47 113h80q33 0 56.5 23.5T800-640v480q0 33-23.5 56.5T720-80H240Zm0-80h480v-480h-80v80q0 17-11.5 28.5T600-520q-17 0-28.5-11.5T560-560v-80H400v80q0 17-11.5 28.5T360-520q-17 0-28.5-11.5T320-560v-80h-80v480Zm160-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720ZM240-160v-480 480Z"/></svg>
                                            </div>

                                            <div className="eyebrow">
                                                CONHEÇA NOSSOS PRODUTOS
                                            </div>
                                        </div>

                                        <div className="card-title">
                                            <h1>Ainda está procurando seu novo iPhone?</h1>

                                            <p>Fale com nossa equipe e conheça os modelos disponíveis, condições e opções de pagamento.</p>
                                        </div>
                                    </div>

                                    <button>
                                        <img src={WhatsappWhiteImage} alt="Whatsapp image"/>

                                        Conhecer Produtos 
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ffffff"><path d="M630-444H192v-72h438L429-717l51-51 288 288-288 288-51-51 201-201Z"/></svg>
                                    </button>

                                    <div className="direct-image-card">
                                        <img src={contactDirectCardImage} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="contact-footer">

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact;