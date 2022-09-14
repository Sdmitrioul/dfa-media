import {FC, memo} from "react";
import {IBodyItemsConstants} from "./body-items.constants";
import clsx from "clsx";

interface IBodyItemsProps {
    person: IBodyItemsConstants,
}

export const BodyItems: FC<IBodyItemsProps> = memo(({ person }) => {

    return(
        <div className={
            clsx("w-[120px] h-[230px] flex flex-col p-4 border border-black shadow-card rounded-[20px] opacity-60 hover:opacity-100")}
        >
            <div className="text-white text-xs mb-6">
                <table>
                    <tr className="border-b border-b-greyOther">
                        <td>{person.level}</td>
                        <td>{person.partners.length}</td>
                    </tr>
                    <tr>
                        <td>Уровень выплат</td>
                        <td>Активных партнеров</td>
                    </tr>
                </table>
            </div>

            <div className="flex-1 overflow-y-scroll flex flex-col">
                {person.partners.map(per => (
                    <div className="flex items-center mb-[10px] last:mb-0" key={per.name}>
                        <img src={per.icon} alt="Partner icon" className="mr-1.5 h-6 w-6 rounded-full" />
                        <span className="text-grey text-xs">{per.name}</span>
                    </div>)
                )}
            </div>
        </div>
    )
})