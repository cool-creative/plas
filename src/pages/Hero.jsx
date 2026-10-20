import { useGSAP } from "@gsap/react";
import Navar from "../component/Navbar";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";


gsap.registerPlugin(ScrollTrigger)

export default function Hero({heroRef}) {

 useGSAP(() => {

  window.addEventListener("load", () => ScrollTrigger.refresh());
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  
  ScrollTrigger.config({ ignoreMobileResize: true });

  const heroCurr = heroRef.current;

  const track = heroCurr.querySelector(".track");
  const overlay = heroCurr.querySelector(".overlay");
  const disk = heroCurr.querySelectorAll(".disk");
  const headText = heroCurr.querySelectorAll(".head-text");
  const tags = gsap.utils.toArray(".tag", heroCurr);
  const imgs = gsap.utils.toArray("img", heroCurr.querySelector(".slides"));  // target slides under heroCurr

  const slides = heroCurr.querySelector(".slides");
  const vw = () => slides.clientWidth; // real visible width, no scrollbar

  const PEEK = 0.1;
  
  gsap.set(overlay, { opacity: 0.5 }); 
  gsap.set(disk, { top: '45%' }); 
  gsap.set(headText, { opacity: 1 }); 

   const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroCurr,
        pin: true,
        scrub: 0.5,
        start: "top top",
        end: () => "+=" + (track.scrollWidth - PEEK * vw()),
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });

    tl.fromTo(track,
      { x: () => vw() * (1 - PEEK) },
      { x: () => -(track.scrollWidth - vw()), ease: "none", duration: 1 },
      0
    ).to(overlay, { opacity: 0.9, ease: "none", duration: 1 }, 0)
    .fromTo(disk, {top: '-70%'}, { top: '0%', ease: "none", duration: 0.6, stagger: 0.2 }, 0)
    .to(headText, {opacity: 0.1, scale: 0.7, ease: "none", duration: 0.5}, 0)
    .fromTo(imgs, {scale: 2}, {scale: 1, duration: 0.6, ease: "none", stagger: 0.2}, 0)
    .from(tags, {y: 40, filter: 'blur(4px)', opacity: 0, duration: 0.3, ease: 'none', stagger: 0.4}, "+=-0.1") 
  },
  { scope: heroRef }
);

  return (
    <section ref={heroRef} className="hero relative h-screen w-full overflow-hidden"> 
      {/* z-0: background */}
      <div className="img absolute inset-0 z-0 pointer-events-none">
        <img style={{clipPath: 'polygon(10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%, 0% 10%)'}} className="h-full w-full object-cover" src="/ass-1.webp" alt="" />
        <div className="overlay absolute inset-0 bg-black" /> 
      </div>

      {/* z-10: hero body, stays in place */}
      <div className="content relative z-10 flex items-end h-full w-full p-8 pb-16">
        <div className="herobody h-fit w-full">
          <h1 className="head-text w-full md:max-w-5xl px-4 text-5xl md:text-8xl tracking-tight text-white font-medium italic"> 
            We are a process driven architecture and interior design studio.
          </h1>
        </div>
      </div>

      {/* z-20: slides, full height so they run UNDER the navbar */}
      <div className="slides absolute inset-0 z-20 overflow-hidden">
        <div className="track flex h-full w-fit">

          <div className="relative slide-1 h-full w-[80vw] md:w-[40vw] shrink-0 flex items-end overflow-hidden"> 
            <img className="absolute w-full h-full object-cover inset-0" src="/ass-2.webp" />
            <div className="relative bg-stone-600 h-1/3 w-full p-6 font-bold  font-serif flex items-center">  
              <span className="tag relative  text-4xl md:text-6xl text-white z-10">Housing</span>
              <div className="disk absolute inset-x-0 -top-full h-[70%] bg-stone-600 pointer-events-none "/>
            </div>
          </div>

          <div className="relative slide-1 h-full w-[80vw] md:w-[40vw] shrink-0 flex items-end overflow-hidden"> 
            <img className="absolute w-full h-full object-cover inset-0" src="/ass-3.webp" />
            <div className="relative bg-gray-800 h-1/3 w-full p-6 font-bold  font-serif flex items-center">  
              <span className="tag relative text-4xl md:text-6xl text-white z-10">Interiors</span>
              <div className="disk absolute inset-x-0 -top-full h-[70%] bg-inherit pointer-events-none "/>
            </div>
          </div>

          <div className="relative slide-1 h-full w-[80vw] md:w-[40vw] shrink-0 flex items-end overflow-hidden"> 
            <img className="absolute w-full h-full object-cover inset-0" src="/ass-4.webp" />
            <div className="relative bg-gray-600 h-1/3 w-full p-6 font-bold  font-serif flex items-center">  
              <span className="tag relative text-4xl md:text-6xl text-white z-10">Commercial</span>
              <div className="disk absolute inset-x-0 -top-full h-[70%] bg-inherit pointer-events-none "/>
            </div>
          </div>

          <div className="empty h-full w-[10vw] shrink-0 bg-white"></div>

        </div>
      </div> 


      <div className="absolute inset-x-0 top-0 z-30 p-8">
        <Navar />
      </div>
    </section>
  );
};

