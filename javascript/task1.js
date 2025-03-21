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

function Person(name = "", age = 0) {
    this.name = name
    this.age = age

    setInterval(
        function () {
            this.age++
        }.bind(this),
        1000
    )

    this.logStatus = function () {
        console.log(`Person ${this.name}`)
    }
}

const people = []
people.push(
    new Person("Vahagn", 22),
    new Person("Armen", 34),
    new Person("Shrek", 24),
    new Person("Abraham", 31)
)

function checkForty(people) {
    for (const person of people) {
        if (person.age >= 40) {
            console.log(`${person.name} died at not a very good old age.`)
            people.splice(people.indexOf(person), 1)
        }
    }
}

function addPerson(people) {
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomAge = Math.floor(Math.random() * 50) + 1

    people.push(new Person(randomName, randomAge))
}

function showPeople() {
    console.clear()
    for (const person of people) {
        console.log(`${person.name}, who is ${person.age}`)
    }
}

// entry point of the app
export function main() {
    setInterval(() => checkForty(people), 1000)
    setInterval(() => addPerson(people), 2000)
    setInterval(showPeople, 1500)
}

main()
