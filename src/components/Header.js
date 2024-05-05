import './Header.css'
import GlassButton from "./GlassButton";
import {ContactPopupButton} from "./ContactPopupButton";

function Header() {
    return <div className="header">
        <p className="">Grégory DAVID</p>
        <div className="hz-flex">
            <ContactPopupButton/>
        </div>
    </div>
}

export default Header;