import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound/NotFound";
import Home from "./pages/home/Home";


function RouteApp(){
    return(
        <div>
            <BrowserRouter>

                
                <Routes>
                    <Route path="/" element={ <Home/> }/>
                    

                    <Route path="*" element={ <NotFound/> }/>
                </Routes>
                

            </BrowserRouter>
        </div>
    )
}

export default RouteApp;