// normal function

function add (num:number, num2:number) {
    return num + num2;
}
const addArrow = (num:number, num2:number) => {
    return num + num2
}

const arr = [33, 444, 23]

const newArray = arr.map((a: number) => a * a)

add(23, 35)