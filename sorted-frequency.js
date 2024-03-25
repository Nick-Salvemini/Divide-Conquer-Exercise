function sortedFrequency(arr, num) {
    function findPosition(arr, num, first) {
        let leftIdx = 0;
        let rightIdx = arr.length - 1;
        let resIdx = -1

        while (leftIdx <= rightIdx) {
            let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

            if (arr[middleIdx] === num) {
                resIdx = middleIdx;
                if (first) {
                    rightIdx = middleIdx - 1;
                } else { leftIdx = middleIdx + 1 };
            } else if (arr[middleIdx] < num) {
                leftIdx = middleIdx + 1
            } else {
                rightIdx = middleIdx - 1
            }
        }
        return resIdx
    }

    const firstOccurrence = findPosition(arr, num, true)
    const lastOccurrence = findPosition(arr, num, false)

    if (firstOccurrence === -1 || lastOccurrence === -1) return -1;

    return lastOccurrence - firstOccurrence + 1;
}

module.exports = sortedFrequency