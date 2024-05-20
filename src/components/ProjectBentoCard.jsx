import './ProjectBentoCard.css'
import Default from '../res/cards/default/logo.png'
import TagElement from "./TagElement";

export function ProjectBentoCard({fill}) {
    return <div className={fill ? "bento-card bento-fill" : "bento-card"}>
        <div className="bento-card-inside">
            <p className="title">Project Name</p>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nisl magna, mollis vel pulvinar eleifend, congue sit amet lacus. Cras vel nisl a velit rhoncus volutpat in eu ipsum. Quisque ultricies massa quis diam convallis, quis tempor risus semper. Duis porttitor odio non justo feugiat luctus. Donec dignissim tristique venenatis. Praesent fringilla dapibus magna, cursus blandit mi sollicitudin ut. Duis dignissim semper nibh, vehicula lobortis lacus vulputate sit amet. Nulla accumsan magna nec lectus fermentum egestas. Nulla ultricies euismod diam, in ultrices nisi auctor vitae. Duis feugiat quam purus, maximus bibendum erat imperdiet id. Sed pulvinar mauris ac diam laoreet, nec scelerisque ligula consectetur. Sed rutrum pharetra elementum. Nullam sollicitudin commodo turpis, eu vulputate neque aliquam sed.</p>
            <img className="picture" alt="Project cover" src={Default}></img>
            <div className="footer">
                <TagElement name="project"></TagElement>
                <TagElement name="project"></TagElement>
                <TagElement name="project"></TagElement>
            </div>
        </div>
    </div>
}