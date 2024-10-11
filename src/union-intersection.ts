type NoobDeveloper = {
    name: string,
}
type JuniorDeveloper = {
    name: string,
    expertise: string,
    experience: number,
}

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Rupali',
}
console.log(newDeveloper)