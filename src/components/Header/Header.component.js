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
  HeaderGlobalAction,
  HeaderGlobalBar
} from "@carbon/react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "./icon-180x180.png";
import "./Header.style.css";
import { Information } from "@carbon/icons-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <CarbonHeader aria-label="Carbon Tutorial">
            <SkipToContent />
            <HeaderMenuButton
              aria-label={isSideNavExpanded ? 'Close menu' : 'Open menu'}
              onClick={onClickSideNavExpand}
              isActive={isSideNavExpanded}
            />
            <HeaderName
              element={Link}
              to="/"
              prefix=""
              className="nav-header"
            >
              Engineering 4.0{" "}
              <span className="nav-sub-heading">| UWindsor</span>{" "}
              <img
                src={image}
                className="header-logo"
                alt="logo"
              />
            </HeaderName>
            <HeaderNavigation aria-label="Upcoming Events">
              <HeaderMenuItem
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/events")}
                isCurrentPage={(location.pathname === '/events') ? true : false}>
                Events
              </HeaderMenuItem>
              <HeaderMenuItem
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/buddy")}
                isCurrentPage={(location.pathname === '/buddy') ? true : false}>
                Buddy Program 🌟
              </HeaderMenuItem>
            </HeaderNavigation>
            <HeaderGlobalBar>
              <HeaderGlobalAction
                aria-label="About"
                onClick={() => navigate("/about")}>
                <Information size={20} />
              </HeaderGlobalAction>
            </HeaderGlobalBar>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}>
              <SideNavItems>
                <HeaderSideNavItems>
                  <HeaderMenuItem
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/events")}
                    isCurrentPage={(location.pathname === '/events') ? true : false}>
                    Events
                  </HeaderMenuItem>
                  <HeaderMenuItem
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/buddy")}
                    isCurrentPage={(location.pathname === '/buddy') ? true : false}>
                    Buddy Program 🌟
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
