import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/home/Home";


function RouteApp(){
    return(
        <div>
            <BrowserRouter>

                <Header/>
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    

                    <Route path="*" element={ <NotFound/> }/>
                </Routes>
                <Footer/>

            </BrowserRouter>
        </div>
    )
}

export default RouteApp;