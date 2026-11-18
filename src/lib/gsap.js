import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

// Site-wide motion feel. Override per tween only when something should move differently.
gsap.defaults({ duration: 0.8, ease: "power3.out" });

export { gsap, useGSAP, ScrollTrigger };
