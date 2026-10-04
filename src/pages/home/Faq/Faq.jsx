import "./faq.css";
import { useState, useEffect, useRef } from "react";

function Faq() {
    const [ quest1, setQuest1 ] = useState(false);
    const [ quest2, setQuest2 ] = useState(false);
    const [ quest3, setQuest3 ] = useState(false);
    const [ quest4, setQuest4 ] = useState(false);
    const [ quest5, setQuest5 ] = useState(false);
    const [ quest6, setQuest6 ] = useState(false);

    const titleRef = useRef(null);
    const acordionRef = useRef(null);
    const [ showTitleRef, setShowTitleRef ] = useState(false);
    const [ showAcordionRef, setShowAcordionRef ] = useState(false);

    useEffect( () => {

        const myObserver = new IntersectionObserver( (entries) => {

            entries.forEach( (entry) => {

                if(entry.target === titleRef.current){
                    if(entry.isIntersecting === true){
                        setShowTitleRef(true);
                    }
                }

                if(entry.target === acordionRef.current){
                    if(entry.isIntersecting === true){
                        setShowAcordionRef(true);
                    }
                }

            } )

        })

        myObserver.observe(titleRef.current);
        myObserver.observe(acordionRef.current);

        return () => {
            myObserver.disconnect();
        }

    }, [] )

    return(
        <section id="faq">
            <div className="container">
                <div className="faq-container">

                    <div className="faq-title" ref={titleRef}>

                        <div className="eyebrow">
                            PERGUNTAS FREQUENTES
                        </div>

                        <h1 className={ showTitleRef ? "show" : "" }>Sua dúvida. Nossa resposta.</h1>

                        <p className={ showTitleRef ? "show" : "" }>
                            Tudo explicado de forma simples para você fazer sua escolha com segurança.
                        </p>

                    </div>

                    <div className={`accordion ${ showAcordionRef ? "show" : "" }`} ref={acordionRef} style={{ "--delay": "800ms" }} onClick={ () => { 
                        setQuest1(!quest1);
                        setQuest2(false);
                        setQuest3(false);
                        setQuest4(false);
                        setQuest5(false);
                        setQuest6(false);
                        } } >

                        <button className="accordion-header">
                            <span>Como funciona a encomenda até a entrega?</span>

                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#faf5f5"><path d="M480-353 240-593l46.67-46.67 193.33 193 193.33-193L720-593 480-353Z"/></svg>
                        </button>
                        
                        <div className={`accordion-body ${ quest1 ? 'active' : '' }`}>
                            <p>
                                Você escolhe o produto com a ajuda dos nossos especialistas e, após a assinatura do contrato, cuidamos de todo o processo para você: desde a compra e conferência do produto até a preparação de cada detalhe da sua experiência. Depois, enviamos para o seu endereço com frete segurado e atualizações em tempo real pelo WhatsApp. Também oferecemos entrega no mesmo dia em locais seguros, como shoppings, conforme disponibilidade.
                            </p>
                        </div>
                        
                    </div>

                    <div className={`accordion ${ showAcordionRef ? "show" : "" }`} style={{ "--delay": "950ms" }}onClick={ () => { 
                        setQuest1(false);
                        setQuest2(!quest2);
                        setQuest3(false);
                        setQuest4(false);
                        setQuest5(false);
                        setQuest6(false);
                        } } >

                        <button  className="accordion-header">
                            <span>Qual é o prazo de entrega?</span>
                           <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#faf5f5"><path d="M480-353 240-593l46.67-46.67 193.33 193 193.33-193L720-593 480-353Z"/></svg>
                        </button>
                        
                        <div className={`accordion-body ${ quest2 ? 'active' : '' }`}>
                            <p>
                                A maioria das encomendas são entregues em até 1 dia útil. Configuração ou produtos especificos podem levar até 3 dias úteis. E algumas ofertas contam com modelos á pronta entrega. O prazo exato é informado antes da confirmação do pedido.
                            </p>
                        </div>
                        
                    </div>

                    <div className={`accordion ${ showAcordionRef ? "show" : "" }`} style={{ "--delay": "1100ms" }}onClick={ () => { 
                        setQuest1(false);
                        setQuest2(false);
                        setQuest3(!quest3);
                        setQuest4(false);
                        setQuest5(false);
                        setQuest6(false);
                        } } >

                        <button  className="accordion-header">
                            <span>Tem garantia?</span>
                           <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#faf5f5"><path d="M480-353 240-593l46.67-46.67 193.33 193 193.33-193L720-593 480-353Z"/></svg>
                        </button>
                        
                        <div className={`accordion-body ${ quest3 ? 'active' : '' }`}>
                            <p>
                                Sim. Produtos lacrados possuem 1 ano de garantia Apple. Já os modelos Openbox (seminovos) contam com 3 meses de garantia Bettel.
                            </p>
                        </div>
                        
                    </div>

                    <div className={`accordion ${ showAcordionRef ? "show" : "" }`} style={{ "--delay": "1250ms" }}onClick={ () => { 
                        setQuest1(false);
                        setQuest2(false);
                        setQuest3(false);
                        setQuest4(!quest4);
                        setQuest5(false);
                        setQuest6(false);
                        } } >

                        <button  className="accordion-header">
                            <span>Vocês vendem produtos seminovos?</span>
                           <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#faf5f5"><path d="M480-353 240-593l46.67-46.67 193.33 193 193.33-193L720-593 480-353Z"/></svg>
                        </button>
                        
                        <div className={`accordion-body ${ quest4 ? 'active' : '' }`}>
                            <p>
                                Sim. Trabalhamos com OpenBox: Produtos que já foram abertos e podem ter pouco ou nenhum sinal de uso. Cada unidade é avaliada individualmente, tem seu estado informado antes da compra e conta com 3 meses de garantia Bettel.
                            </p>
                        </div>
                        
                    </div>

                    <div className={`accordion ${ showAcordionRef ? "show" : "" }`} style={{ "--delay": "1400ms" }}onClick={ () => { 
                        setQuest1(false);
                        setQuest2(false);
                        setQuest3(false);
                        setQuest4(false);
                        setQuest5(!quest5);
                        setQuest6(false);
                        } } >

                        <button  className="accordion-header">
                            <span>Como faço para dar o meu aprelho usado como entrada?</span>
                           <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#faf5f5"><path d="M480-353 240-593l46.67-46.67 193.33 193 193.33-193L720-593 480-353Z"/></svg>
                        </button>
                        
                        <div className={`accordion-body ${ quest5 ? 'active' : '' }`}>
                            <p>
                                Primeiro analisamos os dados do modelo, configuração e o estado de conservação do seu produto. Após a avaliação te enviamos a proposta de valor. Se aprovada, esse valor entra como desconto em sua nova encomenda.
                            </p>
                        </div>
                        
                    </div>

                    <div className={`accordion ${ showAcordionRef ? "show" : "" }`} style={{ "--delay": "1550ms" }}onClick={ () => { 
                        setQuest1(false);
                        setQuest2(false);
                        setQuest3(false);
                        setQuest4(false);
                        setQuest5(false);
                        setQuest6(!quest6);
                        } } >

                        <button  className="accordion-header">
                            <span>Quais são as formas de pagamento?</span>
                           <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#faf5f5"><path d="M480-353 240-593l46.67-46.67 193.33 193 193.33-193L720-593 480-353Z"/></svg>
                        </button>
                        
                        <div className={`accordion-body ${ quest6 ? 'active' : '' }`}>
                            <p>
                                Você pode pagar á vista no Pix, parcelar o valor total no cartão em até 12x ou combinar os dois: uma parte no Pix e o restante parcelado no cartão. Pagamentos no cartão possuem acréscimo.
                            </p>
                        </div>
                        
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Faq;