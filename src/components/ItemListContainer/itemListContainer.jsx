import { getProducts } from "../../firebase/db"
import { useState, useEffect } from "react"

const ItemListContainer = () =>{
     const [itemList ,setItemList]= useState([])
    
     useEffect(()=>{
        getProducts(setItemList)
     },[])
    
    return (
        <>
        <h1>{itemList.map(res => res.name)}</h1>
        </>
    )
}
export default ItemListContainer