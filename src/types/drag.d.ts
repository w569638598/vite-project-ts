declare interface drag {
    id?: string,
    formItem: {
        type: string,
        label: string,
        source?: string,
        key?: string
    }
}

declare interface user{
    id: string,
    name: string,
    age?: number 
}