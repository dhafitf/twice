import { CSSProperties } from "react";
import { ChildrenProps } from "./default";

export interface OpacityTransition {
  opacity: number;
  DOMByID: string;
  time: number;
}

export interface LayoutProps extends ChildrenProps {
  title: string;
  metaDescription: string;
  metaImage?: string;
  style?: CSSProperties;
}

export interface ContainerProps extends ChildrenProps {
  className?: string;
  style?: CSSProperties;
  isLarge?: boolean;
  isSmall?: boolean;
}

export interface SectionProps extends ChildrenProps {
  title: string;
  className?: string;
  isHomePage?: boolean;
  withLoadMore?: boolean;
}

export interface NavLinkProps {
  className?: string;
  href: string;
  text: string;
}

export interface MemberItemProps {
  image: string;
  name: string;
  nickname: string;
  born?: string;
  bloodType?: string;
  instagram?: string;
}

export interface DiscographyType {
  _id: number;
  type: string;
  country: string;
  name: string;
  releaseDate: string;
  coverArt: string;
  content: string;
  tracks: string[];
  spotifyLink: string;
  video: string[];
}

export interface NewsType {
  _id: number;
  title: string;
  date: string;
  htmlContent: string;
}

export interface ContentItemProps {
  thumb: string;
  title: string;
  tag: string;
  href: string;
}
