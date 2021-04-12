import type { Image } from "./CommonTypes";

export type HeroType = {
  image: Image;
};

export type InfoType = {
  title: string;
  text: string;
  comment: string;
  images: Image[];
};

export type Content = {
  title: string;
  text: string;
  comment: string;
  subComment: string;
  subText: string;
};

export type OurMissionType = {
  image: Image;
  content: Content[];
};

export type Text = {
  text: string;
};

export type FooterType = {
  title: string;
  text: Text[];
};

export type Body = {
  InfoType;
  OurMissionType;
  FooterType;
};
