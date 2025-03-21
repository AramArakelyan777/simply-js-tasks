// names list for random names
const names = [
    "Sarah",
    "Joseph",
    "Lucy",
    "Jane",
    "Mohammad",
    "Gabriela",
    "Chomik",
    "Emiliano",
    "Simon",
    "Joel",
    "Krle",
]

function Person(name, age) {
    this.name = name
    this.age = age
    this.intervalId = setInterval(() => {
        this.age++
    }, 1000)
}

const people = [
    new Person("Vahagn", 22),
    new Person("Armen", 34),
    new Person("Shrek", 24),
    new Person("Abraham", 31),
]

function checkForty() {
    for (let i = people.length - 1; i >= 0; i--) {
        if (people[i].age >= 40) {
            console.log(`${people[i].name} died not at a very good old age.`)
            clearInterval(people[i].intervalId)
            people.splice(i, 1)
        }
    }
}

function addPerson() {
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomAge = Math.floor(Math.random() * 50) + 1

    people.push(new Person(randomName, randomAge))
}

function showPeople() {
    console.clear()
    people.forEach((person) => console.log(`${person.name}, age ${person.age}`))
}

// entry point of the app
export function task1() {
    setInterval(checkForty, 1000)
    setInterval(addPerson, 2000)
    setInterval(showPeople, 1500)
}
