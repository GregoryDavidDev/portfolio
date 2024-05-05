import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import IntroductionPage from "../components/pages/IntroductionPage";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/IntroductionPage">
                <IntroductionPage/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews