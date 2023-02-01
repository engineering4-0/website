import {
    Header as CarbonHeader,
    HeaderContainer,
    HeaderName,
    SkipToContent,
} from '@carbon/react';
import { Link } from 'react-router-dom'

const Header = () => {


    return (
        <div style={{ marginBottom: "6em" }}>
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <CarbonHeader aria-label="Carbon Tutorial">
                        <SkipToContent />
                        {/* <HeaderMenuButton
                            aria-label="Open menu"
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        /> */}
                        <HeaderName element={Link} to="/" prefix="" style={{ fontSize: "20px" }}>
                            Engineering 4.0| UWindsor
                        </HeaderName>
                        {/* <HeaderNavigation aria-label="Carbon Tutorial"> */}
                            {/* <HeaderMenuItem
                                isCurrentPage={location.pathname === '/register'}
                                element={Link}
                                to="/register"
                            >
                                Register
                            </HeaderMenuItem> */}
                            {/* <HeaderMenuItem
                                isCurrentPage={location.pathname === '/about'}
                                element={Link}
                                to="/about"
                            >
                                About
                            </HeaderMenuItem>
                        </HeaderNavigation> */}
                        {/* <SideNav
                            aria-label="Side navigation"
                            isPersistent={false}
                            expanded={isSideNavExpanded}
                        >
                            <SideNavItems>
                                <HeaderSideNavItems>
                                    <HeaderMenuItem element={Link} to="/register">Register</HeaderMenuItem>
                                    <HeaderMenuItem element={Link} to="/about">About</HeaderMenuItem>
                                </HeaderSideNavItems>
                            </SideNavItems>
                        </SideNav> */}
                    </CarbonHeader>
                )}
            />
        </div>
    )
}

export default Header;