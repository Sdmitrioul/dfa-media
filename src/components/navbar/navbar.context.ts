import {createContext} from "react";

export interface INavbarContext {
    isOpened: boolean,
    chosen: string | null
    setChosen: (e: string | null) => void
    toggle: () => void
}

const defaultContextValue: INavbarContext = {
    isOpened: false,
    chosen: null,
    setChosen: () => {},
    toggle: () => {},
}

export const NavbarContext = createContext<INavbarContext>(defaultContextValue)