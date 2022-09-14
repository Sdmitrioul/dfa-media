import {FC, forwardRef, ReactElement, ReactNode} from "react";
import {icons, TIcons} from "./icons";
import clsx from "clsx";

interface IIconProps {
    id?: string
    name: TIcons
    size?: number
    stroke?: boolean
    fill?: boolean
    className?: string
    onClick?: (event: any) => void
    onMouseUp?: (event: any) => void
    onMouseDown?: (event: any) => void
}

interface IconItem {
    size: number
    viewBox: { w: number; h: number }
    stroke?: boolean
    fill?: boolean
    content: ReactElement | ReactNode
}

export const Icon: FC<IIconProps> = forwardRef<SVGSVGElement, IIconProps>((
    {   onClick,
        onMouseDown,
        onMouseUp,
        fill,
        stroke,
        name,
        id,
        className
    }, ref) => {
    const icon: IconItem = icons[name]
    return(
        <svg
            ref={ref}
            id={id}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={clsx(
                {
                    'stroke-current':
                        typeof stroke === 'boolean' ? stroke : icon.stroke,
                    'fill-current': typeof fill === 'boolean' ? fill : icon.fill,
                },
                className,
            )}
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
            onClick={onClick}
        >
            {icon.content}
        </svg>
    )
})

Icon.displayName = 'Icon'