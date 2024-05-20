import './Header.css'
import GlassButton from "./GlassButton";
import {ContactPopupButton} from "./ContactPopupButton";
import {Logo} from "../Logo";

function Header() {
    return <div id="header" className="header">
        <Logo/>
        <div className="hz-flex">
            <ContactPopupButton id={"main-contact-button"}/>
        </div>
    </div>
}

export default Header;