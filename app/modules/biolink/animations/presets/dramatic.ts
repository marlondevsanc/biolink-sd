export const dramaticPreset = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      scale: 0.6,
      rotate: 8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  },
};
