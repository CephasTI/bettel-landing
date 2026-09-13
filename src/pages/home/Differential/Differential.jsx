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
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="  #ffac13"><path d="M354-120q-98 0-166-68t-68-166v-252q0-98 68-166t166-68h252q98 0 166 68t68 166v252q0 98-68 166t-166 68H354Zm85.33-203.33 240-240L632-610.67 439.33-418l-94-94L298-464.67l141.33 141.34ZM354-186.67h252q69.33 0 118.33-49t49-118.33v-252q0-69.33-49-118.33t-118.33-49H354q-69.33 0-118.33 49t-49 118.33v252q0 69.33 49 118.33t118.33 49ZM480-480Z"/></svg>
                                </div>
                                
                                <div className="differentials-right">
                                    <h2>🔐 Compra protegida por contrato</h2>

                                    <p>Na Bettel Imports, cada pedido é formalizado por contrato antes de qualquer pagamento. Você recebe todos os detalhes da compra de forma clara e documentada, garantindo mais segurança e transparência em cada etapa.</p>
                                </div>
                            </li>

                            <li className={`differentials-product ${showLi ? "showLi" : ""}`}>
                                <div className="differentials-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#ffac13"><path d="M446.67-163.67V-461l-260-150.33V-314l260 150.33Zm66.66 0 260-150.33v-298l-260 151v297.33ZM446.67-87 153.33-256q-15.66-9-24.5-24.33-8.83-15.34-8.83-33.34v-332.66q0-18 8.83-33.34 8.84-15.33 24.5-24.33l293.34-169q15.66-9 33.33-9 17.67 0 33.33 9l293.34 169q15.66 9 24.5 24.33 8.83 15.34 8.83 33.34v332.66q0 18-8.83 33.34-8.84 15.33-24.5 24.33L513.33-87q-15.66 9-33.33 9-17.67 0-33.33-9Zm196-526 93.66-54L480-815.33 386-761l256.67 148ZM480-518l95.33-55.67-257-148.33L223-667l257 149Z"/></svg>
                                </div>
                                
                                <div className="differentials-right">
                                    <h2>📦 Encontre exatamente o que procura    </h2>

                                    <p>Na Bettel Imports, você escolhe o modelo, cor, capacidade e configuração que realmente deseja. Trabalhamos com produtos oficialmente disponíveis no mercado americano para trazer mais opções e liberdade para sua escolha.</p>
                                </div>                                
                            </li>

                            <li className={`differentials-unboxing ${showLi ? "showLi" : ""}`}>
                                <div className="differentials-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#ffac13"><path d="M160-80v-443.33H80v-233.34h216q-7-11-10.17-23.33-3.16-12.33-3.16-25.33 0-47.78 33.44-81.23Q349.56-920 397.33-920q23.67 0 45.34 9.5 21.66 9.5 37.33 27.17 15.67-18 37.33-27.34Q539-920 562.67-920q47.77 0 81.22 33.44 33.44 33.45 33.44 81.23 0 13-3.33 25.16-3.33 12.17-10 23.5h216v233.34h-80V-80H160Zm368.5-759.55q-13.83 13.79-13.83 34.17 0 20.38 13.78 34.21 13.79 13.84 34.17 13.84 20.38 0 34.21-13.79 13.84-13.79 13.84-34.17 0-20.38-13.79-34.21-13.79-13.83-34.17-13.83-20.38 0-34.21 13.78Zm-179.17 34.17q0 20.38 13.79 34.21 13.79 13.84 34.17 13.84 20.38 0 34.21-13.79 13.83-13.79 13.83-34.17 0-20.38-13.78-34.21-13.79-13.83-34.17-13.83-20.38 0-34.21 13.78-13.84 13.79-13.84 34.17ZM146.67-690v100h300v-100h-300Zm300 543.33v-376.66h-224v376.66h224Zm66.66 0h224v-376.66h-224v376.66Zm300-443.33v-100h-300v100h300Z"/></svg>
                                </div>
                                
                                <div className="differentials-right">
                                    <h2>✨ Uma experiência além do produto</h2>

                                    <p>Na Bettel Imports, cuidamos de cada detalhe para que receber seu produto seja tão especial quanto escolhê-lo. Do pedido à entrega, buscamos oferecer uma experiência diferenciada e inesquecível.</p>
                                </div>                                
                            </li>

                            <li className={`differentials-service ${showLi ? "showLi" : ""}`}>
                                <div className="differentials-left">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#ffac13"><path d="M880-80.67 720.67-240h-414q-27.5 0-47.09-19.58Q240-279.17 240-306.67v-66.66h440q27.5 0 47.08-19.59 19.59-19.58 19.59-47.08v-280h66.66q27.5 0 47.09 19.58Q880-680.83 880-653.33v572.66ZM146.67-441l65.66-65.67h401v-306.66H146.67V-441ZM80-280v-533.33q0-27.5 19.58-47.09Q119.17-880 146.67-880h466.66q27.5 0 47.09 19.58Q680-840.83 680-813.33v306.66q0 27.5-19.58 47.09Q640.83-440 613.33-440H240L80-280Zm66.67-226.67v-306.66 306.66Z"/></svg>
                                </div>
                                
                                <div className="differentials-right">
                                    <h2>💬 Atendimento próximo e exclusivo</h2>

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