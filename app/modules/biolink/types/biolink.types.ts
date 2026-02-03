export interface BioLinkItem {
  label: string;
  url: string;
}

export interface BioLinkData {
  username: string;
  name: string;
  bio: string;
  template: "minimal";
  links: BioLinkItem[];
}
