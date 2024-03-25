function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let firstZeroIdx = -1;

    while (leftIdx <= rightIdx) {
        // find the middle value
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal === 1) {
            // middleVal is 1, look at the right half
            leftIdx = middleIdx + 1;
        } else {
            // middleVal is 0, look at the left half
            firstZeroIdx = middleIdx;
            rightIdx = middleIdx - 1;
        }
    }

    // if there is no 0, return 0
    if (firstZeroIdx === -1) return 0

    // Otherwise, subtract the index of the first zero from the total length of the array
    return arr.length - firstZeroIdx;
}

module.exports = countZeroes