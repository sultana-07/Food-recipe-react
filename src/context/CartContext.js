import { createContext,useContext } from "react";

const CartContext = createContext({
    cartItems : [
        {

        }
    ],

    recipe :[{}],

    count : 0,
    addToCart : (item) => {},
    deleteCart : (id) => {},
    addRecipe : (title,inst) => {},

})

export const CartProvider = CartContext.Provider;

export const useProduct = () => {
    return useContext(CartContext);
}