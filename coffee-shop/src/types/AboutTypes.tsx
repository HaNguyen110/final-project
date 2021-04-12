import type { ImageType } from "./CommonTypes";

export type InfoType = {
  title: string;
  text: string;
  comment: string;
  images: ImageType[];
};

export type OurMissionType = {};

export type Mission = {
  InfoType;
  OurMissionType;
};

export type AboutType = Mission[];
