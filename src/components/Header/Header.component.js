import {
  Header as CarbonHeader,
  HeaderContainer,
  HeaderName,
  SkipToContent,
  HeaderNavigation,
  HeaderMenuItem,
  SideNav,
  HeaderSideNavItems,
  SideNavItems,
  HeaderMenuButton,
} from "@carbon/react";
import { Column, Button } from "@carbon/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import image from "./icon-180x180.png";
import "./Header.style.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [home, setHome] = useState(true);
  const handleClickScroll = () => {
    const element = document.getElementById("contactSection");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let p = location.pathname;
    if (p === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [location.pathname]);

  return (
    <div>
      <HeaderContainer
        className="Hello_there"
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <CarbonHeader aria-label="Carbon Tutorial" className="carbon_navbar">
            <SkipToContent />
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName
              element={Link}
              to="/"
              prefix=""
              className="nav-header"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Engineering 4.0{" "}
              <span className="nav-sub-heading">| UWindsor</span>{" "}
              <img src={image} className="header-logo" alt="logo" />
            </HeaderName>
            <HeaderNavigation
              aria-label="navigation buttons"
              className="navigateButtons"
            >
              <HeaderMenuItem
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/events")}
                isCurrentPage={location.pathname === "/events" ? true : false}
              >
                Events
              </HeaderMenuItem>
              <HeaderMenuItem
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/buddy")}
                isCurrentPage={location.pathname === "/buddy" ? true : false}
              >
                Buddy Program 🌟
              </HeaderMenuItem>
              <HeaderMenuItem>
                  <Button
                    kind="primary"
                    className="member_button"
                    onClick={
                      home
                        ? handleClickScroll
                        : () => {
                            navigate("/");
                            setTimeout(() => {
                              const contactSection =
                                document.getElementById("contactSection");
                              if (contactSection) {
                                contactSection.scrollIntoView({
                                  behavior: "smooth",
                                });
                              }
                            }, 100);
                          }
                    }
                  >
                    Become a member
                  </Button>
              </HeaderMenuItem>
            </HeaderNavigation>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}
            >
              <SideNavItems>
                <HeaderSideNavItems>
                  <HeaderMenuItem
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/events")}
                    isCurrentPage={
                      location.pathname === "/events" ? true : false
                    }
                  >
                    Events
                  </HeaderMenuItem>
                  <HeaderMenuItem
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/buddy")}
                    isCurrentPage={
                      location.pathname === "/buddy" ? true : false
                    }
                  >
                    Buddy Program 🌟
                  </HeaderMenuItem>
                  <HeaderMenuItem>
                    <Column
                      lg={5}
                      md={8}
                      sm={4}
                      style={{ marginTop: "1em", marginBottom: "1em" }}
                    >
                      <Button kind="primary" className="member_button">
                        Become a member
                      </Button>
                    </Column>
                  </HeaderMenuItem>
                </HeaderSideNavItems>
              </SideNavItems>
            </SideNav>
          </CarbonHeader>
        )}
      />
    </div>
  );
};

export default Header;
