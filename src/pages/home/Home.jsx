import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "./Hero/Hero";
import About from "./About/About";

function Home(){
    return(
        <div>
            <Header/>

            <Hero/>
            <About/>

            <Footer/>
        </div>
    )
}

export default Home;