import { createContext,useContext } from "react";

const CartContext = createContext({
    cartItems : [
        {

        }
    ],

    count : 0,
    addToCart : (item) => {},

})

export const CartProvider = CartContext.Provider;

export const useProduct = () => {
    return useContext(CartContext);
}