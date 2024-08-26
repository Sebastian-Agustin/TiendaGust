//Componente header
import Botones from "./Botones"
import Carrito from "../carrito/carrito"

function AppHeader() {
  return (
  
    <>
    <div style={{display:"block", color:"yellow", backgroundColor:"#292524"}}> 
      <span>Busca tus mejores asesoramientos en Gust!</span></div>
    <section className="section-nav" style={{display:"flex" , justifyContent:"center", alignItems:"center"}}>
        <nav>
        <Botones botones='Inicio'/>
        <Botones botones='Productos'/>
        <Botones botones='Conctactos'/>
        </nav>
     <div>

     </div>
     <Carrito nombre='Carrito'/>
    </section>
  

    </>
   
  )
}

export default AppHeader
