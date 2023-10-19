// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Define the animation
const text = document.querySelector(".text");

gsap.to(text, {
    opacity: 1,
    duration: 1, // Adjust the duration as needed
    scrollTrigger: {
        trigger: text,
        start: "-550  centre", // Scroll trigger point set to three times the viewport height
        end: "center center",
        scrub: true,
        toggleActions: "play reverse play reverse",
    }
});
