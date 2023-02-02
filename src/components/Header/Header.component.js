import {
    Header as CarbonHeader,
    HeaderContainer,
    HeaderName,
    SkipToContent,
} from '@carbon/react';
import { Link } from 'react-router-dom'
import image from './logo192.png'

const Header = () => {

    return (
        <div>
            <HeaderContainer
                render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                    <CarbonHeader aria-label="Carbon Tutorial">
                        <SkipToContent />
                        <HeaderName element={Link} to="/" prefix="" style={{ fontSize: "20px" }}>
                            Engineering 4.0| UWindsor  <img src={image} style={{ maxHeight: "45px", maxWidth: "45px" }} alt='logo' />
                        </HeaderName>
                    </CarbonHeader>
                )}
            />
        </div>
    )
}

export default Header;