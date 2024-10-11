import ItemListContainer from "../ItemListContainer/ItemListContainer"
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
  } from "react-router-dom"

import Cartwidget from "./CartWidget/CartWidget"


const Navbar = () => {
 
return(
      <>
      <BrowserRouter>
       <nav>
         <ul style={
            {display:"flex",justifyContent:"space-between", gap:"20px"}
         }>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/celulares">Celulares</Link></li>
            <li><Link to="/notebook">Notebook</Link></li>
            <li><Link to="/tablet">Tablet</Link></li>
         </ul>
       </nav>
       <Cartwidget></Cartwidget>
       <Routes>
         <Route path="/" element={<ItemListContainer/>}></Route>
         <Route path="/notebook" element={<ItemListContainer/>}></Route>
         <Route path="celulares" element={<ItemListContainer/>}></Route>
         <Route path="/tablet" element={<ItemListContainer/>}></Route>
       </Routes>
     

      </BrowserRouter>
      </>
) 
  
}
export default Navbar 