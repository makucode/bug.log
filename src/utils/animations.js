export const fadeInUp = {
    pageInitial: {
        opacity: 0,
        filter: "blur(5px)",
        transform: "scale(0.985) translateY(50px)",
    },
    pageAnimate: {
        opacity: 1,
        filter: "blur(0px)",
        transform: "scale(1) translateY(0px)",
    },
    pageExit: {
        opacity: 0,
        filter: "blur(5px)",
        transform: "scale(0.985) translateY(50px)",
    },
};

export const fadeInScale = {
    pageInitial: {
        opacity: 0,
        filter: "blur(5px)",
        transform: "scale(0.985)",
    },
    pageAnimate: {
        opacity: 1,
        filter: "blur(0px)",
        transform: "scale(1)",
    },
    pageExit: {
        opacity: 0,
        filter: "blur(5px)",
        transform: "scale(0.985)",
    },
};
export const fadeIn = {
    pageInitial: {
        opacity: 0,
        filter: "blur(5px)",
    },
    pageAnimate: {
        opacity: 1,
        filter: "blur(0px)",
    },
    pageExit: {
        opacity: 0,
        filter: "blur(5px)",
    },
};
