const cursorEffect = () => {
    const page1Content = document.querySelector("#page1-content");
    const cursor = document.querySelector("#cursor");

    page1Content.addEventListener("mousemove", (e) => {
        gsap.to(cursor, {
            x: e.x,
            y: e.y
        });
    });

    page1Content.addEventListener("mouseenter", (e) => {
        gsap.to(cursor, {
            scale: 1,
            opacity: 1
        });
    });

    page1Content.addEventListener("mouseleave", (e) => {
        gsap.to(cursor, {
            scale: 0,
            opacity: 0
        });
    });
}

cursorEffect();