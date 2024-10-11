import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const ItemDetailContainer = () => {
    const [detail, setDetail]= useState()
    const {id} useParams()
  
  
    useEffect(() =>{
    fetch('api')
     .then( res => res.json)
     .then( res => setDetail(res))
   }, [id])


    return ( 
         <div>{detail?.name}</div>
    )
}