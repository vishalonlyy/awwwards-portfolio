import { useRef } from "react";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
import { AnimatedTextLines } from "../components/AnimatedTextLines";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  const text = `We build with purpose at IdeaHatch Labs —
clean, scalable, and production-ready from day one.`;
  const aboutText = `IdeaHatch Labs is a future-first development studio fusing creativity with code to deliver real-world impact. We go beyond MVPs — architecting scalable platforms, viral tools, and tech ecosystems that don’t just launch, but last. Whether it's an AI-native product, a tokenized economy, or a responsive web platform, our builds are fast, secure, and battle-tested — designed to evolve with your users and your mission. We’re not freelancers. We’re your technical co-founders — fully invested in bringing your vision to life.`;
  const imgRef = useRef(null);
  useGSAP(() => {
    gsap.to("#about", {
      scale: 0.95,
      scrollTrigger: {
        trigger: "#about",
        start: "bottom 80%",
        end: "bottom 20%",
        scrub: true,
        markers: false,
      },
      ease: "power1.inOut",
    });

    gsap.set(imgRef.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.to(imgRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      ease: "power4.out",
      scrollTrigger: { trigger: imgRef.current },
    });
  });
  return (
    <section id="about" className="min-h-screen bg-black rounded-b-4xl">
      <AnimatedHeaderSection
        subTitle={"We don’t just imagine the future — at IdeaHatch Labs, we build it."}
        title={"About US"}
        text={text}
        textColor={"text-white"}
        withScrollTrigger={true}
      />
      <div className="flex flex-col items-center justify-between gap-16 px-10 pb-16 text-xl font-light tracking-wide lg:flex-row md:text-2xl lg:text-3xl text-white/60">
        <video
          ref={imgRef}
          src="video.mp4"
          className="w-xl rounded-3xl"
          autoPlay
          loop
          muted
          playsInline
        />
        <AnimatedTextLines text={aboutText} className={"w-full"} />
      </div>
    </section>
  );
};

export default About;
