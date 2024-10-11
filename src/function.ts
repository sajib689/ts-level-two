// normal function

function add (num:number, num2:number) {
    return num + num2;
}
const addArrow = (num:number, num2:number = 44) => {
    return num + num2
}

const arr = [33, 444, 23]

const newArray = arr.map((a: number) => a * a)

add(23, 35)

const arr1 = [44,45,46]
const arr2 = [47, 48, 49]

arr1.push(...arr2)

// rest parameters

const greetFriends = (friend1:string, friend2: string, friend3: string) => {
    return friend1 + " " + friend2 + " " + friend3
}
const ok = greetFriends('Good Mornings', 'Good afternoon', 'Good night')

const calculate = (num1:number, num2: number, operation:(x: number, y:number) => number ) => {
    return operation(num1 , num2)
}
const result = calculate(22, 33, (x,y) => x - y)
console.log(result)