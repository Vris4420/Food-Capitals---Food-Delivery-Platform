import './Navbar.css'
import {assets} from '../../assets/assets'

export function Navbar(){
    return(
        <div className="navbar">
            <img className='logo' src={assets.logo} alt="" />
            <img className='profile' src={assets.profilePic} alt="" />
        </div>
    )
}