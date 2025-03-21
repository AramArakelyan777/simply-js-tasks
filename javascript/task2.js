import { faker } from "@faker-js/faker"

const numberOfGladiators = Math.floor(Math.random() * 15) + 15

function Gladiator() {
    this.name = faker.person.fullName()
    this.health = Math.floor(Math.random() * 21) + 80
    this.power = Math.floor(Math.random() * 4) + 2
    this.speed = Math.floor(Math.random() * 5) + 1
}

function caesarsDecision() {
    return Math.random() >= 0.5
}

const gladiators = []
for (let i = 0; i < numberOfGladiators; i++) {
    gladiators.push(new Gladiator())
}

export function task2() {}
