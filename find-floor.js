function findFloor(arr, val) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let floor = -1

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
        let middleVal = arr[middleIdx];

        if (middleVal < val) {
            floor = middleVal
            leftIdx = middleIdx + 1;
        } else if (middleVal >= val) {
            rightIdx = middleIdx - 1;
        }
    }
    return floor;
}

module.exports = findFloor