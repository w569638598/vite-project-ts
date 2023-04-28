import { defineStore } from 'pinia'

// useStore 可以是 useUser、useCart 之类的任何东西
// 第一个参数是应用程序中 store 的唯一 id



export const useDragStore = defineStore('drag', {
    state: () => ({
        dragEl: {} as hasIndexFormItem,
        formList: [] as hasIndexFormItem[],
        currentClickItem: {

        } as formItem
    }),
    getters: {
        funform(){
            console.log(this.formList);
        }
    },
    actions: {
        setDrag(v: hasIndexFormItem) {
            this.dragEl = v
        },
        pushFormList(v: hasIndexFormItem) {
            this.formList.push(v)
        },
        setFormList(v:hasIndexFormItem){
            this.formList.splice(this.formList.findIndex(e => e.id == v.id), 1, v)
        },
        delFormList(v: formItem){
            this.formList.splice(this.formList.findIndex(e => e.id == v.id), 1)
        },
        setCurrentClickItem(v: formItem){
            this.currentClickItem = v
        }
    }
})