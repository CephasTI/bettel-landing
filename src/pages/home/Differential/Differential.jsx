import './differential.css';
import { useRef, useState, useEffect } from 'react';

function Differential(){
    const titleRef = useRef(null);
    const liRef = useRef(null);

    const [showTitle, setShowTitle] = useState(false);
    const [showLi, setShowLi] = useState(false);

    useEffect(()=>{

        const myObserver = new IntersectionObserver((entries)=>{

            entries.forEach( (entry) => {

                if(entry.target === titleRef.current){
                    setShowTitle(entry.isIntersecting);
                }

                if(entry.target === liRef.current){
                    setShowLi(entry.isIntersecting);
                }

            })

        })

        myObserver.observe(titleRef.current);
        myObserver.observe(liRef.current);

    }, [])

    return(
        <section id="differential">
            <div className="container">
                <div className="differential-container">

                    <div className="differential-title" ref={titleRef}>
                        <div className="eyebrow">
                            NOSSOS DIFERENCIAIS
                        </div>

                        <h1 className={`${showTitle ? "showTitle" : ""}`}>Encomende com segurança</h1>

                        <p className={`${showTitle ? "showTitle" : ""}`}>Comprar na Bettel é sem surpresas: você recebe o que foi combinado, registrado em contrato e entregue com segurança.</p>
                    </div>

                    <div className="differentials" ref={liRef}>
                        <ol>
                            <li className={`differentials-contract green-border ${`${showLi ? "showLi" : ""}`}`}>
                                <div className="more-differential-tag">
                                    NOSSO MAIOR DIFERENCIAL
                                </div>

                                <div className="differentials-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#13ff33"><path d="M436.67-344 664-571.33l-47-46.34-178.33 178.34-95.34-95.34L295-486.33 436.67-344ZM480-80.67q-139.67-35-229.83-161.5Q160-368.67 160-520.67v-240l320-120 320 120v240q0 152-90.17 278.5Q619.67-115.67 480-80.67Zm0-69.33q111.33-36.33 182.33-139.67 71-103.33 71-231v-193.66L480-809.67l-253.33 95.34v193.66q0 127.67 71 231Q368.67-186.33 480-150Zm0-330Z"/></svg>
                                </div>
                                
                                <div className="differentials-right">
                                    <h2>🔐 Compra segura e protegida</h2>

                                    <p>Na Bettel Imports, cada pedido é formalizado por contrato antes de qualquer pagamento. Você recebe todos os detalhes da compra de forma clara e documentada, garantindo mais segurança e transparência em cada etapa.</p>
                                </div>
                            </li>

                            <li className={`differentials-product ${showLi ? "showLi" : ""}`}>
                                <div className="differentials-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#13ff33"><path d="M446.67-163.67V-461l-260-150.33V-314l260 150.33Zm66.66 0 260-150.33v-298l-260 151v297.33ZM446.67-87 153.33-256q-15.66-9-24.5-24.33-8.83-15.34-8.83-33.34v-332.66q0-18 8.83-33.34 8.84-15.33 24.5-24.33l293.34-169q15.66-9 33.33-9 17.67 0 33.33 9l293.34 169q15.66 9 24.5 24.33 8.83 15.34 8.83 33.34v332.66q0 18-8.83 33.34-8.84 15.33-24.5 24.33L513.33-87q-15.66 9-33.33 9-17.67 0-33.33-9Zm196-526 93.66-54L480-815.33 386-761l256.67 148ZM480-518l95.33-55.67-257-148.33L223-667l257 149Z"/></svg>
                                </div>
                                
                                <div className="differentials-right">
                                    <h2>📦 Escolha do seu jeito</h2>

                                    <p>Na Bettel Imports, você escolhe o modelo, cor, capacidade e configuração que realmente deseja. Trabalhamos com produtos oficialmente disponíveis no mercado americano para trazer mais opções e liberdade para sua escolha.</p>
                                </div>                                
                            </li>

                            <li className={`differentials-unboxing ${showLi ? "showLi" : ""}`}>
                                <div className="differentials-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#13ff33"><path d="M160-80v-443.33H80v-233.34h216q-7-11-10.17-23.33-3.16-12.33-3.16-25.33 0-47.78 33.44-81.23Q349.56-920 397.33-920q23.67 0 45.34 9.5 21.66 9.5 37.33 27.17 15.67-18 37.33-27.34Q539-920 562.67-920q47.77 0 81.22 33.44 33.44 33.45 33.44 81.23 0 13-3.33 25.16-3.33 12.17-10 23.5h216v233.34h-80V-80H160Zm368.5-759.55q-13.83 13.79-13.83 34.17 0 20.38 13.78 34.21 13.79 13.84 34.17 13.84 20.38 0 34.21-13.79 13.84-13.79 13.84-34.17 0-20.38-13.79-34.21-13.79-13.83-34.17-13.83-20.38 0-34.21 13.78Zm-179.17 34.17q0 20.38 13.79 34.21 13.79 13.84 34.17 13.84 20.38 0 34.21-13.79 13.83-13.79 13.83-34.17 0-20.38-13.78-34.21-13.79-13.83-34.17-13.83-20.38 0-34.21 13.78-13.84 13.79-13.84 34.17ZM146.67-690v100h300v-100h-300Zm300 543.33v-376.66h-224v376.66h224Zm66.66 0h224v-376.66h-224v376.66Zm300-443.33v-100h-300v100h300Z"/></svg>
                                </div>
                                
                                <div className="differentials-right">
                                    <h2>✨ Uma experiência diferenciada</h2>

                                    <p>Na Bettel Imports, cuidamos de cada detalhe para que receber seu produto seja tão especial quanto escolhê-lo. Do pedido à entrega, buscamos oferecer uma experiência diferenciada e inesquecível.</p>
                                </div>                                
                            </li>

                            <li className={`differentials-service ${showLi ? "showLi" : ""}`}>
                                <div className="differentials-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#13ff33"><path d="M481.33-40v-66.67h292V-156h-152v-304h152v-58.67Q773.33-640 688-727q-85.33-87-206.67-87-121.33 0-208 87-86.66 87-86.66 208.33V-460h152v304h-152q-27 0-46.84-19.83Q120-195.67 120-222.67v-296q0-74.49 28.5-140.42Q177-725.02 226-774.34q49-49.33 114.97-77.83t140.5-28.5q74.53 0 140.03 28.5t113.87 77.83q48.37 49.32 76.5 115.25Q840-593.16 840-518.67v412q0 27-19.83 46.84Q800.33-40 773.33-40h-292ZM186.67-222.67H272v-170.66h-85.33v170.66Zm501.33 0h85.33v-170.66H688v170.66ZM186.67-393.33H272h-85.33Zm501.33 0h85.33H688Z"/></svg>
                                </div>
                                
                                <div className="differentials-right">
                                    <h2>💬 Atendimento exclusivo</h2>

                                    <p>Na Bettel Imports, você conta com atendimento personalizado durante todo o processo. Estamos disponíveis para tirar suas dúvidas, acompanhar seu pedido e garantir que você tenha segurança para comprar.</p>
                                </div>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Differential;