import React from "react";
import { Wrapper } from "./FeatuerMenu.style";
import {
  IoFastFoodOutline,
  IoCalculator,
  IoPeopleCircleOutline,
  IoNewspaperSharp,
  IoCreate,
  IoCameraSharp,
  IoFlagOutline,
} from "react-icons/io5";

const LeftMenu = () => {
  const menuItems = [
    {
      name: "Create Post",
      icon: <IoNewspaperSharp />,
      link: "/",
    },

    {
      name: "Calories Calculator ",
      icon: <IoCalculator />,
      link: "/",
    },
    {
      name: "Food Calories",
      icon: <IoFastFoodOutline />,
      link: "/",
    },
    {
      name: "Note",
      icon: <IoCreate />,
      link: "/",
    },
    {
      name: "Friends",
      icon: <IoPeopleCircleOutline />,
      link: "/",
    },
    {
      name: "Groups",
      icon: <IoFlagOutline />,
      link: "/",
    },
    {
      name: "Story",
      icon: <IoCameraSharp />,
      link: "/",
    },
  ];
  return (
    <Wrapper>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> {item.icon}
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default LeftMenu;
