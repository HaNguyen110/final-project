import type { Image } from "./CommonTypes";

export type NavigationType = {
  image: Image;
};

export type Items = {
  subTitle: string;
  description: string;
  src: string;
  alt: string;
};

export type ServerType = {
  image: Image;
};

export type LatestType = {
  title: string;
  src: string;
  alt: string;
  items: Items[];
};

export type HomeBody = {
  NavigationType;
  ServerType;
  LatestType;
};
