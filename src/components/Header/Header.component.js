import {
  Header as CarbonHeader,
  HeaderContainer,
  HeaderName,
  SkipToContent,
  HeaderNavigation,
  HeaderMenuItem,
} from "@carbon/react";
import { Link } from "react-router-dom";
import image from "./logo192.png";

const Header = () => {
  return (
    <div>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <CarbonHeader aria-label="Carbon Tutorial">
            <SkipToContent />
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
              <HeaderMenuItem href="/events">
                <span style={{ fontWeight: "700"}}>Events</span>
              </HeaderMenuItem>
            </HeaderNavigation>
          </CarbonHeader>
        )}
      />
    </div>
  );
};

export default Header;
