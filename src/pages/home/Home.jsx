import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Products from "./Products/Products";
import Differential from "./Differential/Differential";

function Home(){
    return(
        <div>
            <Header/>

            <Hero/>
            <About/>
            {/* <Products/> */}
            <Differential/>

            <Footer/>
        </div>
    )
}

export default Home;