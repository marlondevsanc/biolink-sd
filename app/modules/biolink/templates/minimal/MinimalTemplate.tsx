"use client";

import { BioLinkData } from "../../types/biolink.types";
import BioHeader from "../../components/BioHeader";
import BioLinks from "../../components/BioLinks";
import BioThemeProvider from "../../components/BioThemeProvider";
import { motion } from "motion/react";
import { animationRegistry } from "../../animations/animationRegistry";

interface Props {
  data: BioLinkData;
}

export default function MinimalTemplate({ data }: Props) {
  const preset = animationRegistry[data.animation ?? "basic"];

  return (
    <BioThemeProvider theme={data.theme}>
      <motion.main
        className="mx-auto flex min-h-screen max-w-md flex-col justify-center px-8"
        variants={preset.container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={preset.item}>
          <BioHeader
            name={data.name}
            bio={data.bio}
            avatar={data.avatar}
          />
        </motion.div>

        <motion.div variants={preset.item}>
          <BioLinks links={data.links} />
        </motion.div>

        <motion.footer
          variants={preset.item}
          className="mt-10 text-center text-xs text-[var(--muted)]"
        >
          © {new Date().getFullYear()} {data.name}
        </motion.footer>
      </motion.main>
    </BioThemeProvider>
  );
}
