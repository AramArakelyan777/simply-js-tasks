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