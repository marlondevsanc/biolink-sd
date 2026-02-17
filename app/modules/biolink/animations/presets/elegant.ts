export const elegantPreset = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,    
        delayChildren: 0.25,       
      },
    },
  },

  item: {
    hidden: {
      opacity: 0,
      y: 40,                      
      scale: 0.94,                
      filter: "blur(4px)",      
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.75,           
        ease: [0.16, 1, 0.3, 1],  
      },
    },
  },
};
