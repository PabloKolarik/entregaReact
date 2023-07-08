import { useContext } from "react";
import { CartContext } from "../../context/CartContext";




const CartItem = ({  price, quantity }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="carrito">
            <div id="carrito__productos" className="carrito__prod">
                
                <div className="carrito__prod--cant">
                    <small>Cantidad</small>
                    <p>{quantity}</p>
                </div>
                <div className="carrito__prod--precio">
                    <small>Precio</small>
                    <p>${price}</p>
                </div>
                <div className="carrito__prod--subtotal">
                    <small>Subtotal</small>
                    <p>${price * quantity}</p>
                </div>
                <button
                    className="carrito__prod--eliminar"
                    onClick={() => removeItem(id)}
                >X</button>
            </div>
        </div>
    )
}

export default CartItem;
