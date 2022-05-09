import React from "react";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
  {
    title: "HOME",
    path: "/",
  },
  {
    title: "ABOUT",
    path: "/about",
  },
  {
    title: "INSTRUCTORS",
    path: "/instructors",
  },
  {
    title: "CLASSES",
    path: "/classes",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "TINY HEROES",
        path: "/tiny-heroes",
      },
      {
        title: "CHILDREN",
        path: "/children",
      },
      {
        title: "TEEN & ADULTS",
        path: "/teen-adult",
      },
      {
        title: "WEAPONS",
        path: "/weapons",
      },
      {
        title: "SPARRING",
        path: "/sparring",
      },
      {
        title: "ELITE COMPETITION",
        path: "/elite-competition",
      },
    ],
  },
  {
    title: "CLASS SCHEDULE",
    path: "/class-schedule",
  },
  {
    title: "CONTACT",
    path: "/contact",
  },
  {
    title: "NEWS",
    path: "/news",
  },
];
