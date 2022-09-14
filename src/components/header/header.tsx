import {FC, useContext} from "react";
import {BurgerButton} from "../burger-button";
import {INavbarContext, NavbarContext} from "../navbar";

export const Header: FC = () => {
    const { isOpened, toggle } = useContext<INavbarContext>(NavbarContext)
    return(
        <div
            className="py-5 px-10 text-white flex items-center"
        >
            <BurgerButton isOpened={isOpened} onClick={toggle} />
            <span className="ml-6">Мероприятия</span>
        </div>
    )
}