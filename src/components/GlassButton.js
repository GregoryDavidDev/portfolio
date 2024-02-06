import {animated, useSpring} from "@react-spring/web";

function GlassButton({callback, text, delay}) {
    const springs = useSpring({
        from: { y: 100*delay, opacity: 0 },
        to: { y: 0, opacity: 1 },
        delay: delay
    })

    return <animated.div style={{...springs}}>
        <button className="button-primary" onClick={callback}>
            {text}
        </button>
    </animated.div>
}

export default GlassButton;