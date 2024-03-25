function findRotationCount(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if (middleIdx > 0 && arr[middleIdx] < arr[middleIdx - 1]) {
            return middleIdx;
        }

        if (arr[middleIdx] <= arr[rightIdx]) {
            rightIdx = middleIdx - 1
        } else {
            leftIdx = middleIdx + 1
        }
    }

    return leftIdx
}

module.exports = findRotationCount