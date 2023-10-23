import { useState } from "react";
import { Icon, Modal, ModalContent, NavItem, NavItemGroup, SiteHeader } from "@tesla/design-system-react";
import { iconMenu } from '@tesla/design-system-icons';
import { isMobileOnly, isTablet, withOrientationChange } from 'react-device-detect';

function Header(props) {

    const { isLandscape, isPortrait } = props;

    const logo = new URL('../images/favicon.png', import.meta.url).href
    const isTabletLandscapeUp = !isMobileOnly || !isTablet || (isTablet && isLandscape)


    const [open, setOpen] = useState(false);
    const [isDesktop, setIsDesktop] = useState(isTabletLandscapeUp);

    window.addEventListener('resize', () => {
        setOpen(false);
        setIsDesktop(isTabletLandscapeUp);
    });

    const navItems = [
        <NavItem animated href="/travel" key="item-1" highlighted={window.location.pathname==='/travel'}>
            Travel
        </NavItem>,
        <NavItem animated href="/leisure" key="item-2" highlighted={window.location.pathname==='/leisure'}>
            Leisure
        </NavItem>,
        <NavItem animated href="/profession" key="item-3" highlighted={window.location.pathname==='/profession'}>
            Profession
        </NavItem>,
    ];

    return (
        <div>
            <SiteHeader animated fadeIn style={{alignItems:'center', height:'4vh', width:'100%'}}>
                <a href="/"><img src={logo} alt="Logo" height={50}/></a>
                {isDesktop && (
                    <NavItemGroup align="center">{navItems}</NavItemGroup>
                )}
                {!isDesktop && (
                    <NavItem animated onClick={() => setOpen(true)} style={{cursor:'pointer'}}>
                        <Icon data={iconMenu}/>
                    </NavItem>
                )}
            </SiteHeader>
            {!isDesktop && (
                <Modal
                    className="tds-site-header-modal tds-modal--sheet-small tds-scrim--white"
                    onClose={() => setOpen(false)}
                    open={open}
                    variant="sheet-right"
                >
                    <ModalContent>
                        <NavItemGroup layout="vertical">
                            {/* <NavItem animated href="/">Home</NavItem> */}
                            {navItems}
                            {/* <NavItem animated href="/contact">Contact</NavItem> */}
                        </NavItemGroup>
                    </ModalContent>
                </Modal>
            )}
        </div>
    )
}

export default withOrientationChange(Header)
