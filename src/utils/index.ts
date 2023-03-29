class User {

    constructor() {

    }
    sayName(name: string) {
        console.log(name)
    }
}

const u = new User()


class Staff extends User {
    salary: number
    readonly gender: "男" | "女"
    constructor(public name: string, public age: number, public post: string, salary: number, gender: "男" | "女" = '男') {
        super()
        this.salary = salary
        this.gender = gender
    }
}

const a = new Staff('王力', 12, '12', 12)
a.sayName('23')
export { User, Staff}

function take<T>(arr: T[], n:number): T[]{
    // if(n >= arr.length) return arr;
    // const newArr: T[] = [];
    // for(let i = 0;i < n;i++){
    //     newArr.push(arr[i])
    // }
    //  return newArr
    return arr.splice(0, n)
}

take([1,2,3, '2'], 2)
take<number|string>([1,2,3, '2'], 2)