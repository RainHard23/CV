import React, {useCallback} from 'react';
import style from './Main.module.scss'
import styleContainer from './../common/styles/Container.module.css'
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import { Tilt } from 'react-tilt'


const options = {
    name: "Link Triangles",
    fullScreen: {
        enable: false
    },
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
            },
        },
        color: {
            value: "#fff",
            animation: {
                enable: true,
                speed: 20,
                sync: true,
            },
        },
        shape: {
            type: "circle",
        },
        opacity: {
            value: 0.5,
        },
        size: {
            value: {
                min: 1,
                max: 3,
            },
        },
        links: {
            enable: true,
            distance: 150,
            color: "#fff",

            width: 1,
        },
        move: {
            enable: true,
            speed: 3,
        },
    }
}

const defaultOptions = {
    reverse:        false,  // reverse the tilt direction
    max:            35,     // max tilt rotation (degrees)
    perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed:          1000,   // Speed of the enter/exit transition
    transition:     true,   // Set a transition on enter/exit.
    axis:           null,   // What axis should be disabled. Can be X or Y.
    reset:          true,    // If the tilt effect has to be reset on exit.
    easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}

const Main = () => {
    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    const particlesInit = useCallback(async engine => {
        console.log(engine);

        await loadFull(engine);
    }, []);
    return (
        <div id='home' className={style.mainBlock}>

            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <Particles id="tsparticles" options={options} init={particlesInit} loaded={particlesLoaded}
                           className={style.particles}/>
                <Fade top>
                    <div className={style.text}>
                        <span className={style.prevTitle}>Hi There</span>
                        <h1>I am
                            <span>Stanislav Semenenco</span>
                        </h1>
                        {/*<p className={style.subTitle}>Frontend Developer.</p>*/}
                        <ReactTypingEffect
                            className={style.subTitle}
                            text={["Frontend Developer."]}
                        />
                    </div>
                    <Tilt options={defaultOptions}>
                        <div className={style.image}>
                            <div className={style.photo}></div>
                        </div>
                    </Tilt>

                </Fade>
            </div>
        </div>

    );
};

export default Main;