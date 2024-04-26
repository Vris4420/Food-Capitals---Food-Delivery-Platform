import { useContext } from 'react'
import'./FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import { MenuItem } from '../MenuItem/MenuItem';

export function FoodDisplay({category}){
    const {menuItems} = useContext(StoreContext);

    return(
        <div className="food-display" id='food-display'>
            <h2>Top Dishes near you</h2>
            <div className="food-display-list">
                {menuItems.map((item) => {
                    if(category==="All" || category === item.category){
                        return <MenuItem key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} image={item.image}/>
                    }
                })}
            </div>
        </div>
    )
}