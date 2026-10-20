
import { useGSAP } from "@gsap/react"
import { gsap } from "gsap"
import { useRef } from "react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const images = [{ main: "1", vig: "5" }, { main: "2", vig: "7" }, { main: "3", vig: "8" }]

export default function Gallery() {
    const ref = useRef(null)

    useGSAP(() => {
        gsap.utils.toArray(".gallery-item", ref.current).forEach((item) => {
            gsap.fromTo(
                item.querySelectorAll("img"),   // main + vignette of THIS item only
                { scale: 1.3 },
                {
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: item,
                        start: "top 80%",       // 20% of the item is in view
                        end: "bottom bottom",   // item fully in view
                        scrub: 0.5,
                        invalidateOnRefresh: true,
                    },
                }
            )
        })
    }, { scope: ref })

    return (
        <div ref={ref} className="w-full h-fit bg-white p-2 md:p-8 pt-20">

            <div className="top-text w-full flex items-center border-b border-gray-400 pb-4 mb-8">
                <h2 className="text-black text-4xl">Gallery</h2>
            </div>

            {images.map((imgC) => (
                <div
                    key={imgC.main}
                    style={{ clipPath: "polygon(0 0, 0 100%, 100% 100%, 100% 0)" }}
                    className="gallery-item h-fit w-full relative flex flex-col items-center overflow-hidden"
                >
                    <div className="w-full h-fit relative overflow-hidden">
                        <img
                            className="w-full h-[50vh] md:h-[90vh] object-cover"
                            src={`/ass-${imgC.main}.webp`}
                            alt=""
                        />
                    </div>

                    <div
                        style={{ clipPath: "polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)" }}
                        className="h-[40vw] md:h-[20vw] w-[60vw] md:w-[35vw] overflow-hidden fixed top-[calc(50%-15vw)] md:top-[calc(50%-10vw)]"
                    >
                        <img
                            className="w-full h-full object-cover"
                            src={`/ass-${imgC.vig}.webp`}
                            alt=""
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}