export const dynamicPreset = {
  container: {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      x: -40,
      rotate: -3,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
  },
};
