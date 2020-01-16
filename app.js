let arr = [];
for (let i = 0; i <= 256; i++) {
    arr[i] = i;
}
console.log(arr);

function binSer(arr, item) {
    let low = 0;
    let high = arr.length - 1;
    let iter = 0;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (mid === item) {
            iter++;
            return mid + " iter " + iter;
        } else if (mid < item) {
            iter++;
            low = mid + 1;
        } else if (mid > item) {
            iter++;
            high = mid - 1;
        }
    }
    return null;
}
console.log(binSer(arr, 32))