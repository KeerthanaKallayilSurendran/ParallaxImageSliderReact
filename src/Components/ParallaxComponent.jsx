import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bg from '../assets/bg.jpg'
import img1 from '../assets/image1.jpg'
import img2 from '../assets/image2.jpg'
import img3 from '../assets/image3.jpg'
import img4 from '../assets/image4.jpg'
import { useLayoutEffect, useRef } from 'react'
gsap.registerPlugin(ScrollTrigger)
function ParallaxComponent() {
    const bg1 = useRef(null)
    const img_container = useRef(null)
    const image = useRef(null)
    const text1 = useRef(null)
    const text2 = useRef(null)
    const container = useRef(null)

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            ScrollTrigger.create({
                trigger: bg1.current,
                pin: bg1.current,
                pinSpacing: false,
                start: "top top",
                endTrigger: ".last",
                end: "bottom bottom"
            })

            gsap.set(container.current, { marginTop: -container.current.offsetHeight })

            gsap.timeline({
                scrollTrigger: {
                    trigger: img_container.current,
                    pin: img_container.current,
                    scrub: 1,
                    start: "0% 0%",
                }
            })
                .to(image.current, { transform: "translateZ(2200px" }, 0)
                .to(text1.current, { y: -800 }, 0.05, "<")
                .to(text2.current, { y: -800 }, 0.08, "<")
                .fromTo(container.current, { yPercent: 100, scaleY: 2 }, { yPercent: 0, scaleY: 1 })
        })

        return () => ctx.revert()
    }, [])


    return (
        <>
            <div className="position-relative">
                <div ref={bg1} style={{ height: '100vh', width: '100vw' }} className="bg-dark position-absolute"></div>
                <section>
                    <div ref={img_container} style={{ width: '100vw', height: '100vh' }} className="perspective d-flex justify-content-center align-items-center">
                        <img ref={image} className='image' src={bg} alt="" />
                        <div className='position-absolute d-flex  flex-column justify-content-center align-items-center text-light'>
                            <h1 ref={text1} style={{ fontSize: '100px' }}><span className='text-stroke'>Outlook</span> Above</h1>
                            <p ref={text2} style={{ width: '35%', opacity: '0.5' }} className='text-center fs-5'>In wilderness is the preservation of the world</p>
                        </div>
                    </div>


                    <div ref={container} className="container p-5 d-flex flex-wrap justify-content-around align-items-center">
                        <div className="col-1 d-flex flex-column gap-5">
                            <img height={'350px'} width={'450px'} src={img1} alt="" />
                            <img height={'400px'} width={'400px'} src={img2} alt="" />
                        </div>
                        <div className="col-2 d-flex flex-column gap-5">
                            <img src={img3} alt="" height={'400px'} width={'600px'} />
                            <img src={img4} alt="" height={'400px'} width={'400px'} className='last' />
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default ParallaxComponent
