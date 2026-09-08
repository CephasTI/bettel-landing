import "./notfound.css";
import NotFoundImage from "../../assets/not-found-image.png";
import { Link } from "react-router-dom";

function NotFound(){
    return(
        <section>
            <div className="container">
                <div className="notfound-container">
                    <div className="notfound">
                        <img src={NotFoundImage} alt="404" />
                        <p>Oh não! Essa página não existe.</p>

                        <Link to="/" className="go-to-home">
                            Voltar ao inicio
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NotFound;