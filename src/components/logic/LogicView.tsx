import { useMediaQuery } from "react-responsive"
import { NavBarMobile } from "../mobile/Navbar"

export function View() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div className="">
            {isDesktopOrLaptop && (
                <></>
            )}
            {isBigScreen && (
                <NavBarMobile />
            )}
            {isTabletOrMobile && (
                <NavBarMobile />
            )}
        </div>
    )
}
