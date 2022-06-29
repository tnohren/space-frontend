export interface User {
    username: string,
    email: string
}

export interface UserAttribute {
    name: string,
    value: string
}

export interface Space {
    spaceID: string,
    name: string,
    location: string,
    imgUrl?: string
}