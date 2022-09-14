import {faker} from "@faker-js/faker";

export interface IBodyItemsConstants {
    level: number,
    partners: IPartner[]
}

export interface IPartner {
    name: string
    icon: string
}

export const PARTNERS: IBodyItemsConstants[] = Array(12).fill(null).map(_ => ({
    level: Math.round(Math.random() * 1000),
    partners: Array(Math.round(Math.random() * 15)).fill(null).map(_ => ({
        name: faker.name.firstName(),
        icon: faker.image.avatar(),
    }))
}))