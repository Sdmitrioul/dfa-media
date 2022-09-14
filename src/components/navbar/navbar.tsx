import {FC, useContext} from "react";
import {INavbarContext, NavbarContext} from "./navbar.context";
import {NavbarItem} from "./navbar-item";
import {NAVBAR_ITEMS} from "./navbar.constants";
import {Icon} from "../../ui/icon";

export const Navbar: FC = () => {
    const { isOpened } = useContext<INavbarContext>(NavbarContext)

    if (!isOpened) {
        return null
    }

    return(
        <div className="flex flex-row sm:flex-col overflow-auto">
            {NAVBAR_ITEMS.map(item => {
                return(
                    <NavbarItem name={item.name} key={item.name}>
                        <Icon name={item.iconName} />
                        <span className="ml-5">
                            {item.name}
                        </span>
                    </NavbarItem>
                )
            })}
        </div>
    )
}