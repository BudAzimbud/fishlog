import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductRoute from './product'
const routes = [...ProductRoute]

export default function Router(){
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route,index)=>(
                        <Route path={route.path} key={index} element={route.element} exact />
                    ))
                }
            </Routes>
        </BrowserRouter>
    )
}