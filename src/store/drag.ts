import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id

export const useDragStore = defineStore('drag', {
    state: () => ({
        dragEl: {} as drag,
        formList: [] as drag[],
        currentClickItem: {
            id: '',
            formItem: {
                label: '',
                type: '',
                source: '',
                key: ''
            }
        } as drag
    }),
    actions: {
        setDrag(v: drag) {
            this.dragEl = v
        },
        pushFormList(v: drag) {
            this.formList.push(v)
        },
        setFormList(v:drag){
            this.formList.splice(this.formList.findIndex(e => e.id == v.id), 1, v)
        },
        setCurrentClickItem(v: drag){
            this.currentClickItem = v
        }
    }
})