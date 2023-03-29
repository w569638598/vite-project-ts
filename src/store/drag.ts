import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id
interface dragObject {
    id: string,
    formItem: {
        label: string
        type: string
    }
}
export const useDragStore = defineStore('drag', {
    state: () => ({
        dragEl: {} as dragObject,
        formList: [] as dragObject[],
        currentClickId: "" as string
    }),
    actions: {
        setDrag(v: dragObject) {
            this.dragEl = v
        },
        pushFormList(v: dragObject) {
            this.formList.push(v)
        },
        setFormList(v:dragObject){
            
            this.formList.splice(this.formList.findIndex(e => e.id == v.id), 1, v)
            console.log(this.formList);
        },
        setCurrentClickId(v: string){
            
            this.currentClickId = v
        }
    }
})