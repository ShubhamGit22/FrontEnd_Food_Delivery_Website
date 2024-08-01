import { createContext, useState } from "react";
import { food_list } from "../../contentFiles/contentFiles";

export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({})

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){                                                                                                                       
            setCartItems((prev)=> ({...prev, [itemId]: 1}))
        }
        else{
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId] + 1}))
        }
    }   
                                                        
    const removeFromCart = (itemId) => {
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId] - 1}))
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(let item in cartItems){
            // console.log(item)
            if(cartItems[item] > 0){
                const itemInfo = food_list.find((product)=> product._id === item)
                totalAmount += itemInfo.price * cartItems[item]
            }
        }
        return totalAmount
    }


    const ContextValue = {
            food_list,
            cartItems,
            setCartItems,
            addToCart,
            removeFromCart,
            getTotalCartAmount
    }
   
    
    return(
        <StoreContext.Provider value={ContextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;