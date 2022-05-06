import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Header } from "./Header.style";
import { FaGem, FaGripfire } from "react-icons/fa";
import Search from "../../Custom/Search/Search";
import LeftMenu from "../../Custom/LeftMenu/LeftMenu";
import FeatureMenu from "../../Custom/FeatuerMenu/FeatuerMenu";

import {
  IoMdChatboxes,
  IoIosNotificationsOutline,
  IoIosMenu,
} from "react-icons/io";

const Home = () => {
  const [leftMenuStatus, setLeftMenuStatus] = useState(false);
  const [featureMenuStatus, setFeatureMenuStatus] = useState(false);
  const [Desktop, setDesktop] = useState(null);

  const leftMenuRef = useRef(null);
  const featureMenuRef = useRef(null);

  const isDesktop = () => {
    setDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    document.addEventListener("click", mainHandleClickOutside, false);
    document.addEventListener("click", featureHandleClickOutside, false);
    window.addEventListener("resize", isDesktop);
    isDesktop();

    return () => {
      document.removeEventListener("click", mainHandleClickOutside, false);
      document.removeEventListener("click", featureHandleClickOutside, false);
      window.addEventListener("resize", isDesktop);
    };
  }, []);

  const mainHandleClickOutside = (event) => {
    if (!leftMenuRef.current.contains(event.target)) {
      setLeftMenuStatus(false);
    }
  };
  const featureHandleClickOutside = (event) => {
    if (!featureMenuRef.current.contains(event.target)) {
      setFeatureMenuStatus(false);
    }
  };

  return (
    <Header>
      <div className="secOne">
        <div className="mainmenu" ref={leftMenuRef}>
          <IoIosMenu onClick={() => setLeftMenuStatus(!leftMenuStatus)} />
          {leftMenuStatus && <LeftMenu search={!Desktop} />}
        </div>
        <Link className="logo" to="/">
          Coach <FaGripfire />
        </Link>
      </div>

      {Desktop && <Search />}

      <div className="secThree">
        <div className="notification">
          <span className="counter">2</span>
          <IoIosNotificationsOutline />
        </div>
        <div className="popContainer" ref={featureMenuRef}>
          <FaGem onClick={() => setFeatureMenuStatus(!featureMenuStatus)} />
          {featureMenuStatus && <FeatureMenu />}
        </div>
        <div className="chat">
          <IoMdChatboxes />
        </div>
      </div>
    </Header>
  );
};

export default Home;
