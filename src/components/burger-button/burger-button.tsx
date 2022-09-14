import {FC} from "react";
import clsx from "clsx";

interface IBurgerButtonProps {
    isOpened: boolean
    onClick?: () => void
}

export const BurgerButton: FC<IBurgerButtonProps> = ({ isOpened, onClick }) => {
    return(
        <button
            onClick={onClick}
            className="p-1 flex h-6 w-8 flex-col justify-between hover:opacity-70"
        >
            <span className={clsx("h-1 w-full rounded-full border border-white transition ease-in", isOpened  && "bg-white rotate-45 origin-[15%_50%]")} />
            <span className={clsx("h-1 w-full rounded-full border border-white transition ease-in", isOpened &&  "hidden")} />
            <span  className={clsx("h-1 w-full rounded-full border border-white transition ease-in", isOpened && "bg-white -rotate-45 origin-[15%_60%]")} />
        </button>
    )
}