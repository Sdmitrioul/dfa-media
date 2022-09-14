import {FC, useCallback, useState} from "react";
import {Navbar, NavbarContext} from "../../components/navbar";
import {Header} from "../../components/header";
import {BodyInfo} from "./body/body-info";

export const MainPage: FC = () => {
    const [isOpened, setOpened] = useState<boolean>(false)
    const [chosen, setChosen] = useState<string | null>(null)
    const toggle = useCallback(() => setOpened(value => !value), [setOpened])

    return(
        <NavbarContext.Provider value={{ isOpened, toggle, chosen, setChosen }}>
            <Header />
            <div className="flex flex-1 flex-col sm:flex-row">
                <Navbar />
                <BodyInfo />
            </div>
        </NavbarContext.Provider>
    )
}