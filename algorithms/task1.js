function findIndex(arr, target) {
    if (arr.length === 0) return -1

    let left = 0,
        right = arr.length - 1,
        middle,
        current

    while (left <= right) {
        middle = Math.floor((left + right) / 2)
        current = arr[middle]

        if (target === current) return middle
        else if (target < current) right = middle - 1
        else left = middle + 1
    }

    return -1
}

export function binarySearch() {
    console.log(findIndex([1, 2, 3, 4, 5], 3))
}
