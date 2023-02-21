function binarySearch(arr, elem) {
  var start = 0
  var end = arr.length - 1
  var middle = Math.floor((start + end) / 2)
  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    middle = Math.floor((start + end) / 2)
  }
  if (arr[middle] === elem) {
    return middle
  }
  return -1
}

const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 8)
console.log(result)
