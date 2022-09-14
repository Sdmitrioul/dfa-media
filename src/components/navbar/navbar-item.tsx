import {FC, PropsWithChildren, useContext} from "react";
import {INavbarContext, NavbarContext} from "./navbar.context";
import clsx from "clsx";

interface INavbarItemProps {
    name: string
}

export const NavbarItem: FC<PropsWithChildren<INavbarItemProps>> = ({ name, children }) => {
    const {chosen, setChosen} = useContext<INavbarContext>(NavbarContext)
    const currentChosen = name === chosen
    const onClick = () => setChosen(chosen === name ? null : name)

    return(
        <div
            onClick={onClick}
            className={clsx(
                "cursor-pointer px-6 py-4 text-grey flex border-l-[4px]",
                currentChosen ? "border-l-blue-bright text-white" : "border-l-blue-dark"
            )}
        >
            {children}
        </div>
    )
}