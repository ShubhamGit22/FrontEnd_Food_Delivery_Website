import React, { useContext} from 'react';
import "./FoodItem.css"
import { contentFiles } from '../../contentFiles/contentFiles';
import { StoreContext } from '../context/StoreContext';

const FoodItem = ({id, name, description, price, image}) => {

    const {addToCart, removeFromCart, cartItems, setCartItems} = useContext(StoreContext)

    return (
        <div className='food-item'>
            <div className="food-item-img-container">
                <img src={image} className='food-item-image' alt="" />
                {
                    ! cartItems[id] ? <img src={contentFiles.add_icon_white} className='add' onClick={()=>addToCart(id)}/>
                    : 
                        <div className="food-item-counter">
                                <img src={contentFiles.remove_icon_red} onClick={()=> removeFromCart(id)}/>
                                    <p>{cartItems[id]}</p>
                                <img src={contentFiles.add_icon_green} onClick={()=>addToCart(id)}/>
                        </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                    <img src={contentFiles.rating_starts} alt="" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>

            </div>
        </div>
    );
}

export default FoodItem;
