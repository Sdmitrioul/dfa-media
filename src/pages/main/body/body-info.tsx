import {FC} from "react";
import {PARTNERS} from "./body-items.constants";
import {BodyItems} from "./body-items";

export const BodyInfo: FC = () => {
    return(
        <div
            className="grid gap-8 grid-cols-my px-20 py-20 flex-1 rounded-t-[50px] bg-blue-current border border-x-black border-t-black shadow-main"
        >
            {PARTNERS.map(partner =>  <BodyItems person={partner} />)}
        </div>
    )
}