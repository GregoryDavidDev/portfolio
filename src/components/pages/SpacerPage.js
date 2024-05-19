import './IntroductionPage.css'
import './Page.css'
import '../../Icons.css'
import Arrow from '../../res/icons/arrow_down.svg'

function SpacerPage() {
    return <div className="page-base page-fixed-height-small">
        <img src={Arrow} alt="Long spacing arrow"/>
    </div>
}

export default SpacerPage;