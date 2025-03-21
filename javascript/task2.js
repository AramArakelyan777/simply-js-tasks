import { faker } from "@faker-js/faker"

const numberOfGladiators = Math.floor(Math.random() * 6) + 5

function Gladiator() {
    this.name = faker.person.fullName()
    this.health = Math.floor(Math.random() * 21) + 80
    this.initialHealth = this.health
    this.power = (Math.floor(Math.random() * 31) + 20) / 10
    this.initialSpeed = (Math.floor(Math.random() * 5001) + 1000) / 1000
    this.speed = this.initialSpeed
}

const gladiators = []
for (let i = 0; i < numberOfGladiators; i++) {
    gladiators.push(new Gladiator())
}

function caesarsDecision() {
    return Math.random() >= 0.5
}

function getRandomOpponent(attacker) {
    let opponents = gladiators.filter((g) => g !== attacker && g.health > 0)
    return opponents.length > 0
        ? opponents[Math.floor(Math.random() * opponents.length)]
        : null
}
