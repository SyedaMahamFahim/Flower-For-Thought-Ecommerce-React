import React from "react";
import Logo from "../../components/header/Logo";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import NavMenu from "../../components/header/NavMenu";

const HeaderFive = () => {
  return (
    <div>
      <div className="home-sidebar-left" style={{
              fontSize: "15px",
              fontWeight: 800,
              
            }}>
        {/* header logo */}
        Flower for Thought
        {/* Icon group */}
        <IconGroup />
        {/* sidebar nav menu */}
        <NavMenu sidebarMenu={true} />
        <div className="sidebar-copyright">
          <p>
            ©2020{" "}
            <a
              href="https://www.fiverr.com/syedamahamfahim"
              target="_blank"
              rel="noopener noreferrer"
            >
              Flower for Thought
            </a>
            .All Rights Reserved.
          </p>
        </div>
      </div>
      <header className="header-area header-padding-1 sticky-bar header-res-padding clearfix header-hm4-none">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4" style={{
              fontSize: "15px",
              fontWeight: 800,
              
            }}>
              {/* header logo */}
              Flower for Thought
            </div>
            <div className="col-xl-10 col-lg-102 col-md-6 col-8">
              {/* Icon group */}
              <IconGroup />
            </div>
          </div>
          {/* mobile menu */}
          <MobileMenu />
        </div>
      </header>
    </div>
  );
};

export default HeaderFive;
