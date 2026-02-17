import { basicPreset } from "./presets/basic";
import { elegantPreset } from "./presets/elegant";
import { dynamicPreset } from "./presets/dynamic";
import { dramaticPreset } from "./presets/dramatic";

export const animationRegistry = {
  basic: basicPreset,
  elegant: elegantPreset,
  dynamic: dynamicPreset,
  dramatic: dramaticPreset,
};

export type AnimationType = keyof typeof animationRegistry;
