import "./feedback.css";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "../../../assets/feedbacks/img-1.png";
import img2 from "../../../assets/feedbacks/img-2.png";
import img3 from "../../../assets/feedbacks/img-3.png";
import img4 from "../../../assets/feedbacks/img-4.png";
import img5 from "../../../assets/feedbacks/img-5.png";

function Feedback(){
    const [slidePerView, setSlidePerView] = useState(3);

    useEffect(()=>{
        
        function handleResize(){
            if(window.innerWidth < 1240){

                setSlidePerView(2);

                if(window.innerWidth < 760){
                    setSlidePerView(1);
                }

            }else{
                setSlidePerView(3);
            }
        }

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize)
        }

    }, []);

    return(
        <section id="feedback">
            <div className="container">
                <div className="feedback-container">
                    <div className="feedback-title-container">

                        <div className="eyebrow">
                            FEEDBACKS
                        </div>

                        <h1>
                            <span className="light-text">Quem compra, </span>
                            <span className="bold-text">recomenda.</span>
                        </h1>

                        <p>Clientes satisfeitos são a nossa melhor prova. Veja o que quem já comprou com a Bettel está dizendo.</p>
                    </div>

                    <div className="feedback-carousel-container">
                        <Swiper
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 10000,
                        }}
                        loop={true}
                        slidesPerView={slidePerView}
                        spaceBetween={20}
                        
                        >
                            
                            <SwiperSlide>
                                <img src={img1} alt="Feedback de clientes" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={img2} alt="Feedback de clientes" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={img3} alt="Feedback de clientes" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={img4} alt="Feedback de clientes" />
                            </SwiperSlide>

                            <SwiperSlide>
                                <img src={img5} alt="Feedback de clientes" />
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback;