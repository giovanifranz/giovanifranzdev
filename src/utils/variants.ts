export const variantX = {
  hidden: {
    opacity: 0,
    x: "100vw",
    y: "0",
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: "tween",
      duration: 1.2,
    },
  },
};

export const variantY = {
  hidden: {
    opacity: 0,
    y: "100vh",
    x: "0",
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type: "tween",
      duration: 1.2,
    },
    
  },
};
