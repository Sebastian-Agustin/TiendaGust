const Cart = ({img ,nombre, precio})=>{
    return(
        <>
         <div>
            <div className="contenedorImgDeCarts">
                <img src={img} alt="imagen" />
            </div>
            <div className="contenedorPrecio">
                <p>{nombre}</p>
                <p>{precio}</p>
            </div>
         </div>
        </>
    )
}

export default Cart