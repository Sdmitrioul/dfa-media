import {TIcons} from "../../ui/icon";

export interface INavbarItem {
    name: string
    iconName: TIcons
}

export const NAVBAR_ITEMS: ReadonlyArray<INavbarItem> = [
    {name: "Дашборд", iconName: "Home"},
    {name: 'Биржа активности', iconName: "Actives"},
    {name: 'Биржа Блогеров', iconName: "Blogers"},
    {name: 'Взаимопиар', iconName: "Heart"},
    {name: 'Моя структура', iconName: "Structure"},
    {name: 'Магазин', iconName: "Magazine"},
    {name: 'Марафон', iconName: 'Marafon'},
    {name: 'Лендинги', iconName: "Notify"}
]