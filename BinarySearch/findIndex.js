
const binarySearch = (arr, target) => {
    let left = 0; let right = arr.length ;
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1
    }
    return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9,11,13,16,19], 19));