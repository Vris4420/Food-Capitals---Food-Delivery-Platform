import './AppDownload.css'
import { assets } from "../../assets/assets";

export function AppDownload(){
    return(
        <div className="app-download" id='app-download'>
            <p>
                For Better Experience Download <br/> 
                Food Capitals App
            </p>
            <div className="app-download-platforms">
                <img src={assets.playStore} alt='PlayStoreImg'/>
                <img src={assets.appStore} alt='AppStoreImg'/>
            </div>
        </div>
    )
}