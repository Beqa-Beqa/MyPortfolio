// Define animation variants
export const pageVariants = {
  initial: {
    opacity: 0,
    x: "-100vw", // Start off-screen to the left
  },
  animate: {
    opacity: 1,
    x: 0, // Slide in to the center
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },

  exit: {
    opacity: 0,
    x: "100vw", // Slide out to the right
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};