function quickSort(arr) {
    if (arr.length < 2) return arr

    let pivot_index = Math.floor(Math.random() * arr.length)
    let pivot = arr[pivot_index]
    let less = [],
        greater = []

    for (let i = 0; i < arr.length; i++) {
        if (i !== pivot_index && arr[i] <= pivot) less.push(arr[i])
    }

    for (let i = 0; i < arr.length; i++) {
        if (i !== pivot_index && arr[i] > pivot) greater.push(arr[i])
    }

    return [...quickSort(less), pivot, ...quickSort(greater)]
}

function findMissing(arr) {
    let sortedArr = quickSort(arr)

    for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i + 1] - sortedArr[i] !== 1) return sortedArr[i] + 1
    }

    return "There are no missing numbers."
}

export function missingNumber() {
    console.log(findMissing([3, 1, 4, 7, 0, 2, 6]))
}
