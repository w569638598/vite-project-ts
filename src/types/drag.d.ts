

declare interface formItem {
    id?: string,
    type: string,
    icon?: string,
    data: {
        defaultVal?: any,
        key?: string,
        value?: string,
        placeholder?: string,
        label?: string,
    }
}

interface hasIndexFormItem extends formItem {
    index: number
}


declare interface user {
    id: string,
    name: string,
    age?: number
}