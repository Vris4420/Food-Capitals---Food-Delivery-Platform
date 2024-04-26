import { assets } from "../../assets/assets";
import "./Footer.css";

export function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="LogoImg"/>
            <p>Indulge your cravings, one bite at a time. Explore flavors, discover delights, and savor every moment with our culinary journey. From tantalizing tastes to mouthwatering experiences, let us bring the feast to your doorstep. Your satisfaction is our recipe for success. Order now and elevate your dining experience with every click.</p>
            <div className="footer-social-icons">
                <img src={assets.faceBookIcon} alt=""/>
                <img src={assets.XIcon} alt=""/>
                <img src={assets.InstagramIcon} alt=""/>
            </div>
        </div>

        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in Touch</h2>
            <ul>
                <li>PhoneNo: 1234567890</li>
                <li>Email Id: contact@foodCapitals.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">
      All content © Food Capitals 2024. All rights reserved.
      </p>
    </div>
  );
}
