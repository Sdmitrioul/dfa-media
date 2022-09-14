import {FC, useContext, useState} from "react";
import {BurgerButton} from "../burger-button";
import {INavbarContext, NavbarContext} from "../navbar";
import {HeaderModal} from "../header-modal";

export const Header: FC = () => {
    const { isOpened, toggle } = useContext<INavbarContext>(NavbarContext)
    const [modalOpened, setModalOpened] = useState<boolean>(false)
    const [firstInput, setFirstInput] = useState<string>('')
    const [secondInput, setSecondInput] = useState<string>('')

    return(
        <div
            className="py-5 px-5 text-white flex items-center"
        >
            <BurgerButton isOpened={isOpened} onClick={toggle} />
            <span className="mx-6">Мероприятия</span>
            <button
                onClick={() => setModalOpened(v => !v)}
                className="rounded-full px-4 py-1 bg-blue-current border border-black hover:opacity-70"
            >
                Open Greeting modal
            </button>
            <HeaderModal
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}
                firstInput={firstInput}
                setFirstInput={setFirstInput}
                secondInput={secondInput}
                setSecondInput={setSecondInput}
            />
        </div>
    )
}