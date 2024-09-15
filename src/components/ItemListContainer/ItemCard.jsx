//Este se encarga de la vista de las carts
import style from "./item.module.css"
const ItemCard =({ product }) =>{
    return(
        <div className={style.ItemCartContainer}>
             <div >
            <div className="ImgCard">
                <img src={product.img} alt="ESTO ES UN IMG" />
            </div>
            <div className="titleCard">
                <p>{product.name}</p> 
            </div>
           
            <div className="buttonBuy">
                <button>{product.price}</button>  
            </div>
                    
        </div>
        </div>
       
    )
}
export default ItemCard