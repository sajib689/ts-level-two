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
    expertise: 'Javascript Developer',
    experience: 3,
}

type NextLevelDeveloper = JuniorDeveloper & {
    leadershipExperience: number,
}
const developer: NextLevelDeveloper = {
    name: 'Rupali Developer',
    expertise: 'TypeScript Developer',
    experience: 3,
    leadershipExperience: 4,
}
console.log(developer)