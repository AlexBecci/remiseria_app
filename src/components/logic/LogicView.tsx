import { useMediaQuery } from "react-responsive"
import { NavBarMobile } from "../mobile/Navbar"
import { Outlet } from "react-router-dom"

export function View() {
    const isMobile = useMediaQuery({ maxHeight: 639 })
    const isTablet = useMediaQuery({ minHeight: 640, maxHeight: 1023 })
    const isDesktop = useMediaQuery({ minHeight: 1024 })

    return (
        <div className="">
            {isDesktop && (
                <NavBarMobile />
            )}
            {isTablet && (
                <NavBarMobile />
            )}
            {isMobile && (
                <NavBarMobile />
            )}
            <main>
                <Outlet />
            </main>
        </div>
    )
}
