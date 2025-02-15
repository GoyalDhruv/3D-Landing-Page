import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { BentoCard, BentoTilt } from './TiltingEffect';


gsap.registerPlugin(ScrollTrigger);

function About() {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".about-mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
            clipPath: "polygon(10% 10%, 90% 0%, 95% 100%, 0% 90%)",
        });
    });

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to Zentry
                </p>

                <AnimatedTitle
                    title="Disc<b>o</b>ver the world's <br /> largest shared <b>a</b>dventure"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className="about-subtext">
                    <p>The Game of Games begins—your life, now an epic MMORPG</p>
                    <p className="text-gray-500">
                        Zentry unites every player from countless games and platforms, both
                        digital and physical, into a unified Play Economy
                    </p>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="about-mask-clip-path about-image !rounded-none">
                    <BentoTilt className="absolute left-0 top-0 size-full object-cover">
                        <BentoCard
                            src="img/about.webp"
                            isImage={true}
                        />
                    </BentoTilt>
                </div>
            </div>
        </div>
    )
}

export default About