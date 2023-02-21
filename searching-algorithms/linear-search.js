function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return i
    }
  }

  return -1
}

const result = linearSearch([4, 2, 6, 2, 67, 8, 99, 4, 7, 2, 3], 9)
console.log(result)
