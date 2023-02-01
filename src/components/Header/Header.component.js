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
                        <HeaderName element={Link} to="/" prefix="" style={{ fontSize: "20px" }}>
                            Engineering 4.0| UWindsor
                        </HeaderName>
                    </CarbonHeader>
                )}
            />
        </div>
    )
}

export default Header;