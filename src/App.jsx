//Componente header
import NavBar from "./components/navbar/navBar"
import ItemListCointainer from "./components/ItemListContainer/itemListContainer"
function App() {
  return (
  
    <>
    <header>
     <NavBar/>
  
    </header>
    <main>
    <ItemListCointainer nombre='HOLA GYMRATS'/>
    </main>
    </>
   
  )
}

export default App
