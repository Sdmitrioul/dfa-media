import {createContext} from "react";

export interface INavbarContext {
    isOpened: boolean,
    toggle: () => void
}

const defaultContextValue: INavbarContext = {
    isOpened: false,
    toggle: () => {},
}

export const NavbarContext = createContext<INavbarContext>(defaultContextValue)