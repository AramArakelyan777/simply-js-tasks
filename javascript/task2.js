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

function attack(gladiator) {
    if (gladiator.health <= 0) return

    let opponent = getRandomOpponent(gladiator)
    if (!opponent) return

    opponent.health -= gladiator.power

    console.log(
        `[${gladiator.name} x${Math.round(gladiator.health)}] hits [${
            opponent.name
        } x${Math.round(opponent.health)}] with power ${gladiator.power}.`
    )

    if (opponent.health <= 0) {
        console.log(`[${opponent.name}] is dying.`)

        if (caesarsDecision()) {
            opponent.health += 50
            console.log(`[${opponent.name}] is spared.`)
        } else {
            console.log(`[${opponent.name}] is executed.`)
            gladiators.splice(gladiators.indexOf(opponent), 1)
        }
    }

    gladiator.speed =
        gladiator.initialSpeed * (gladiator.health / gladiator.initialHealth)

    if (gladiator.health > 0 && gladiator.health <= 30) {
        gladiator.speed *= 3
        console.log(`[${gladiator.name}] is furious!`)
    }

    if (gladiators.length > 1) {
        let nextAttackTime = Math.max(1000 / gladiator.speed, 200)
        setTimeout(() => attack(gladiator), nextAttackTime)
    } else {
        console.log(
            "------------------------------------------------------------"
        )
        console.log(
            `[${gladiators[0].name}] won the battle with health x${Math.round(
                gladiators[0].health
            )}.`
        )
    }
}

function fight() {
    gladiators.forEach((gladiator) => {
        let initialDelay =
            Math.max(1000 / gladiator.speed, 200) + Math.random() * 500
        setTimeout(() => attack(gladiator), initialDelay)
    })
}

export function gladiatorsTask() {
    fight()
}
