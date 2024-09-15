import { useState, useEffect } from "react"
import { data } from "../../Data/data"
import ItemList from "./itemList"


const ItemListCointainer = () =>{
    const  [items, setProduct]= useState([])

    const getData = ()=>{
        return new Promise((res, rej)=>{
          setTimeout(()=>{
                res(data)
            }, 2000)
        })
    }

    useEffect(()=>{
      getData()
       .then(resp => setProduct(resp))   
    }, [])
    
    
    return(
         <>
         <section className="sectionContainer">
            <ItemList items={items} />        
      
      
        </section>
         </>
    )
}
export default ItemListCointainer