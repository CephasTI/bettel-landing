        import "./about.css"
        import frontImage from "../../../assets/front-image-history.jpg"
        import backImage from "../../../assets/back-image-history.jpg"

        import { useState, useEffect, useRef } from "react";

        function About(){
            const [showImage, setShowImage] = useState(false);
            const [showHistory, setShowHistory] = useState(false);
            const imageRef = useRef(null);
            const historyRef = useRef(null);
            
            useEffect(() => {

            const myObserver = new IntersectionObserver((entries) => {

                entries.forEach((entry) => {

                    if (entry.target === imageRef.current) {
                        setShowImage(entry.isIntersecting);
                    }

                    if (entry.target === historyRef.current) {
                        setShowHistory(entry.isIntersecting);
                    }

                });

            });

            const imageAppear = imageRef.current;
            const historyAppear = historyRef.current;

            myObserver.observe(imageAppear);
            myObserver.observe(historyAppear);

            return () => {
                myObserver.disconnect();
            };

        }, []); 

            const showTernaryOperatorImage = showImage ? "show" : "" ;
            const showTernaryOperatorHistory = showHistory ? "show" : "" ;

            return(
                <section id="about" className="background-gradient-black-to-silver">
                    <div className="container">
                        <div className="container-about">
                            <div className="image-container" ref={imageRef}>
                                <img className={`back-image ${ showTernaryOperatorImage }`}  src={backImage} alt=""/>
                                <img className={`front-image ${ showTernaryOperatorImage }`} src={frontImage} alt="" />
                            </div>

                            <div className="history-container"  ref={historyRef}>
                                <h3 className={showTernaryOperatorHistory}>
                                    NOSSA HISTÓRIA
                                </h3>

                                <h1 className={showTernaryOperatorHistory}>Como nasceu a Bettel</h1>

                                <p className={showTernaryOperatorHistory}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolor quo minus eos cupiditate! Doloribus, ipsum officia deserunt quasi reiciendis praesentium dolores molestiae debitis possimus quas tempora eaque placeat dolorum!</p>

                                <p className={showTernaryOperatorHistory}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam dolor quo minus eos cupiditate!  tempora eaque placeat dolorum!</p>

                                    
                            </div>
                        </div>
                    </div>
                </section>
            )
        }

        export default About;