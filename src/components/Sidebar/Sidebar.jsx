import "./Sidebar.css";

function Sidebar({ opennedMenu, closedMenu }){

    return(
        <aside>
            <div className={`background-dark ${opennedMenu ? "on" : ""}`}></div>
            <div className={`menu-sidebar ${opennedMenu ? "open" : ""}`}>
                <div className="top-sidebar">
                    <div onClick={closedMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z"/></svg>
                    </div>

                    <img src="../../../public/favicon.png" alt="Logo da Bettel" />
                </div>

                <div className="sidebar-margin">
                    <div className="main-sidebar">
                        <a href="#hero-section" onClick={closedMenu}>Inicio</a>
                        <a href="#about-section" onClick={closedMenu}>Historia</a>
                        <a href="#products" onClick={closedMenu}>Produtos</a>
                        <a href="#warranty" onClick={closedMenu}>Garantia</a> 
                        <a href="#questions" onClick={closedMenu}>FAQ</a>   
                        <a href="#feedback" onClick={closedMenu}>Feedback</a>
                        <a href="#contacts" onClick={closedMenu}>Contato</a>  
                    </div>

                    <a className="bottom-sidebar" target="_blank" href="https://wa.me/5511947361263?text=Olá%21%20Vim%20pelo%20site%20da%20Betel%20e%20gostaria%20de%20fazer%20uma%20encomenda.%20Poderia%20me%20ajudar%20com%20mais%20informações%3F">
                        <img src="../../../public/whatsapp-white-icon.webp" alt="Whatsapp image"/>

                        <p>
                            Fazer minha encomenda
                        </p>
                    </a>
                </div>

                

            </div>

        </aside>
    )
}

export default Sidebar;