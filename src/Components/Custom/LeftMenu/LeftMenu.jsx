import React from "react";
import { Link } from "react-router-dom";
import { Wrapper } from "./LeftMenu.style";
import Search from "../Search/Search";

import {
  IoIosPerson,
  IoMdSettings,
  IoIosHome,
  IoIosLogOut,
  IoMdFitness,
  IoMdTime,
} from "react-icons/io";

import { IoAnalyticsSharp } from "react-icons/io5";

const LeftMenu = ({ search }) => {
  const menuItems = [
    {
      name: "Home",
      icon: <IoIosHome />,
      link: "/",
    },
    {
      name: "Profile",
      icon: <IoIosPerson />,
      link: "/",
    },
    {
      name: "Exercise",
      icon: <IoMdFitness />,
      link: "/",
    },
    {
      name: "Work Map",
      icon: <IoMdTime />,
      link: "/",
    },
    {
      name: "Analytics",
      icon: <IoAnalyticsSharp />,
      link: "/",
    },

    {
      name: "Setting",
      icon: <IoMdSettings />,
      link: "/",
    },
    {
      name: "Logout",
      icon: <IoIosLogOut />,
      link: "/",
    },
  ];
  return (
    <Wrapper>
      {search && <Search />}
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>
              <span>{item.name}</span> {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </Wrapper>
  );
};

export default LeftMenu;
