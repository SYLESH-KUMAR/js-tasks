function findSumOfTwo(arr, target) {
    const numMap = {};

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (numMap[complement] !== undefined) {
            return [complement, arr[i]];
        }
        numMap[arr[i]] = true;
    }

    return [];
}

const arr = [2, 4, 7, 11, 15];
const target = 11;
console.log(findSumOfTwo(arr, target));
