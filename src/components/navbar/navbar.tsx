import {FC, useContext} from "react";
import {INavbarContext, NavbarContext} from "./navbar.context";

export const Navbar: FC = () => {
    const { isOpened } = useContext<INavbarContext>(NavbarContext)

    if (!isOpened) {
        return null
    }

    return(
        <div className="">Navbar</div>
    )
}