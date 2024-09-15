import Botones from "./Botones"
import Carrito from "../CartWidget/carrito"


const NavBar = ()=> {


    return(
      <>
     
        <div className="contenedorDescuento" style={{display:"flex", justifyContent:"center", backgroundColor:"#facc15", color:"whitesmoke"}}>
        <p>Ahorra YA! 20% de descuento en sumplementos.Si es tu primera compra! 50%</p>
      </div>
      <section className="seccionHeader" style={{display:"flex", justifyContent:"space-between", backgroundColor:"#10b981"}}>
        
       <div className="contenedorLogo"> 
           <img src="#" alt="#" />
       </div>
     
       <nav>
        <Botones nombre='Inicio'/>
        <Botones nombre='Planificacion'/>
        <Botones nombre='Contacto'/>

      </nav>
      <div className="modalCarrito">
      <Carrito/>
      </div>
       </section>
   </> 
   )
   }
      

    export default NavBar