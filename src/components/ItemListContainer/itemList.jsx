// Un componente que itera sobre un array y por cada elemento con la propiedad lo muestra por pantalla
import ItemCard from "./ItemCard"
const ItemList = ({items})=>{
    return(
    <>
      {items.map(product => <ItemCard product={product}  key={product.id}/>)}
    </> 
    )
 
  
}
export default ItemList 