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
import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "./icon-180x180.png";

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
              style={{ fontSize: "20px" }}
            >
              Engineering 4.0{" "}
              <span style={{ fontWeight: "100" }}>| UWindsor</span>{" "}
              <img
                src={image}
                style={{ maxHeight: "45px", maxWidth: "45px" }}
                alt="logo"
              />
            </HeaderName>
            <HeaderNavigation aria-label="Upcoming Events">
              <HeaderMenuItem
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/events")} 
                isCurrentPage={ (location.pathname === '/events') ? true : false }>
                Events
              </HeaderMenuItem>
              <HeaderMenuItem
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/buddy")} 
                isCurrentPage={(location.pathname === '/buddy') ? true : false }>
                Buddy Program 🌟
              </HeaderMenuItem>
            </HeaderNavigation>
            <SideNav
              aria-label="Side navigation"
              expanded={isSideNavExpanded}
              isPersistent={false}>
              <SideNavItems>
                <HeaderSideNavItems>
                  <HeaderMenuItem
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/events")}
                    isCurrentPage={ (location.pathname === '/events') ? true : false }>
                    Events
                  </HeaderMenuItem>
                  <HeaderMenuItem
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/buddy")}
                    isCurrentPage={(location.pathname === '/buddy') ? true : false }>
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
