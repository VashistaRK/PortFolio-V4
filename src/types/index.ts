import React from "react";

export type Project = {
  id: number;
  image: string;
  title: string;
  link?: string;
  git?: string;
  description: string;
};

export type Experience = {
  id: number;
  company: string;
  role: string;
  description: string;
  duration: string;
  link?: string;
};

export type Skill = {
  id: number;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
};

export type Thoughts = {
  id: number;
  company: string;
  description: string;
  date: string;
  link?: string;
};

export interface SocialCardProps {
  href: string;
  label: string;
  icon: React.ReactNode;
  color: string;
}
