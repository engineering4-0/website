import {
    Header as CarbonHeader,
    HeaderContainer,
    HeaderName,
    HeaderMenuButton,
    SkipToContent,
} from '@carbon/react';
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const Header = () => {
    const location = useLocation();

    return (
        <>
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <CarbonHeader aria-label="Carbon Tutorial">
                        <SkipToContent />
                        <HeaderMenuButton
                            aria-label="Open menu"
                            onClick={onClickSideNavExpand}
                            isActive={isSideNavExpanded}
                        />
                        <HeaderName element={Link} to="/" prefix="Engineering 4.0">
                             An Applied Science Club | UWindsor
                        </HeaderName>
                        {/* <HeaderNavigation aria-label="Carbon Tutorial">
                            <HeaderMenuItem
                                isCurrentPage={location.pathname === '/'}
                                element={Link}
                                to="/"
                            >
                                Register
                            </HeaderMenuItem>
                            <HeaderMenuItem
                                isCurrentPage={location.pathname === '/about'}
                                element={Link}
                                to="/about"
                            >
                                About
                            </HeaderMenuItem>
                        </HeaderNavigation>
                        <SideNav
                            aria-label="Side navigation"
                            isPersistent={false}
                            expanded={isSideNavExpanded}
                        >
                            <SideNavItems>
                                <HeaderSideNavItems>
                                    <HeaderMenuItem element={Link} to="/">Register</HeaderMenuItem>
                                    <HeaderMenuItem element={Link} to="/about">About</HeaderMenuItem>
                                </HeaderSideNavItems>
                            </SideNavItems>
                        </SideNav> */}
                    </CarbonHeader>
                )}
            />
        </>
    )
}

export default Header;