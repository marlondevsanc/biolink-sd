import { AnimationType } from "../animations/animationRegistry";

export interface BioLinkItem {
  label: string;
  url: string;
}

export interface BioLinkData {
  username: string;
  name: string;
  animation?: AnimationType;
  bio: string;
  avatar?: string;
  template: "minimal";
  theme: BioLinkTheme;
  links: BioLinkItem[];
}

export interface BioLinkTheme {
  colors: {
    background: string;
    foreground: string;
    muted: string;
    accent: string;
    border: string;
  };
  typography: {
    fontFamily: string;
    nameWeight?: number;
  };
  avatar: {
    size: number; // px
    borderColor: string;
    shadow: string;
  };
  buttons: {
    radius: string;
    borderWidth: string;
    hoverBg: string;
    hoverFg: string;
  }

}


