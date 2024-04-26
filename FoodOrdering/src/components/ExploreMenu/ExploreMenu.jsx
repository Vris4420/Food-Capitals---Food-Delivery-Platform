import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

export function ExploreMenu({category, setCategory}){
    console.log(category)
    return(
        <div className="explore-menu" id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Delve into a Gastronomic Adventure: Discover the Rich Tapestry of Flavors in Our Expansive Menu Selection!"</p>
            <div className="explore-menu-list">
                {menu_list.map((item) => {
                    return (
                        <div onClick={() => setCategory(prev => prev === item.title ? "All" : item.title )} key={item.id} className='explore-menu-list-item'>
                            <img className={category === item.title ? "active": ""} src={item.img}/>
                            <p>{item.title}</p>
                        </div>
                    )
                })}
            </div>
            <hr/>
        </div>
    )
}