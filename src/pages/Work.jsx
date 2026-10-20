
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)


const CORNER_CLIP = "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)"
const HIDDEN = "inset(100% 0% 0% 0%)" // height 0, sitting at the bottom


export default function Work() {
    const ref = useRef(null)

    useGSAP(() => {
        const wraps = gsap.utils.toArray(".clip-wrap", ref.current);
        const imgs = gsap.utils.toArray("img", ref.current)

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                start: "top 50%",
                end: "top top", 
                scrub: 2,
                ease: 'none', 
                invalidateOnRefresh: true,
            },
        })

        tl.fromTo( 
            wraps,
            { clipPath: HIDDEN },
            { clipPath: "inset(0% 0% 0% 0%)", ease: "none", stagger: 0.25 }
        )

        tl.fromTo(
            imgs,
            { scale: 1.5 },
            { scale: 1, duration: 2, ease: "none" } // "none" because scrub already smooths it
        )
        }, { scope: ref });

    return (
        <div ref={ref} className="w-full h-fit bg-white p-2 md:p-8 pt-20">

            <div className="top-text w-full flex items-center border-b border-gray-400 pb-4">
                <h2 className="text-black text-4xl">A Selection of our work</h2>
            </div>

            <div className="media w-full h-[90vh] flex flex-col md:flex-row gap-4 mt-8">

                <div className="clip-wrap w-full md:w-1/2 h-[90vh] overflow-hidden" style={{ clipPath: HIDDEN }}>
                    <img
                        style={{ clipPath: CORNER_CLIP }}
                        className="w-full h-full object-cover"
                        src="/ass-5.webp"
                        alt=""
                    />
                </div>

                <div className="w-full md:w-1/2 h-fit flex gap-2 sticky top-56">
                    <div className="clip-wrap w-1/2 h-56 overflow-hidden" style={{ clipPath: HIDDEN }}>
                        <img
                            style={{ clipPath: CORNER_CLIP }}
                            className="w-full h-full object-cover"
                            src="/ass-6.webp"
                            alt=""
                        />
                    </div>
                    <div className="clip-wrap w-1/2 h-56 outline-hidden" style={{ clipPath: HIDDEN }}>
                        <img
                            style={{ clipPath: CORNER_CLIP }}
                            className="w-full h-full object-cover"
                            src="/ass-7.webp"
                            alt=""
                        />
                    </div>
                </div>

            </div>

        </div>
    )
}