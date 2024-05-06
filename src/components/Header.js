import './Header.css'
import GlassButton from "./GlassButton";
import {ContactPopupButton} from "./ContactPopupButton";

function Header() {
    return <div id="header" className="header">
        <div className="hz-flex">
            <p className="">Grégory DAVID</p>
            <p className="badge glint">Portfolio</p>
        </div>
        <div className="hz-flex">
            <ContactPopupButton/>
        </div>
    </div>
}

export default Header;