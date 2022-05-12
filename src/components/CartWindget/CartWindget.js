const CartWindget = (props) => {
    console.log(props.carrito)
    return(
        
        <div>
            <ion-icon name="cart-outline"></ion-icon>
            <p>{props.carrito}</p>
        </div>
        

    )
}

export default CartWindget