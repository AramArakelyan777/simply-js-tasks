class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }

    append(value) {
        let newNode = new Node(value)

        if (!this.head) {
            this.head = newNode
            return
        }

        let current = this.head

        while (current.next) {
            current = current.next
        }
        current.next = newNode
    }

    printList() {
        let current = this.head,
            result = ""

        while (current) {
            result += current.value + " --> "
            current = current.next
        }

        console.log(result + "null")
    }

    delete(value) {
        if (!this.head) {
            console.log("The list is empty.")
            return
        }

        if (this.head.value === value) {
            this.head = this.head.next
            return
        }

        let prev = null,
            current = this.head

        while (current && current.value !== value) {
            prev = current
            current = current.next
        }

        if (!current) {
            console.log("Value is not found.")
            return
        }

        prev.next = current.next
    }
}

function listToNumber(head) {
    let num = 0,
        numeral = 1

    while (head) {
        num += head.value * numeral
        numeral *= 10
        head = head.next
    }

    return num
}

function numberToList(num) {
    if (!num) {
        const list = new LinkedList()
        list.append(0)
        return list
    }

    let digitNodes = new Node(0),
        current = digitNodes

    while (num) {
        let digit = num % 10
        current.next = new Node(digit)
        current = current.next
        num = Math.floor(num / 10)
    }

    const list = new LinkedList()
    list.head = digitNodes.next
    return list
}

function addTwoLists(l1, l2) {
    return numberToList(listToNumber(l1.head) + listToNumber(l2.head))
}

export function sumOfElements() {
    const l1 = new LinkedList()
    const l2 = new LinkedList()

    l1.append(2)
    l1.append(4)
    l1.append(3)

    l2.append(5)
    l2.append(6)
    l2.append(4)

    addTwoLists(l1, l2).printList()
}
