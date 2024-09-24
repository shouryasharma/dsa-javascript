function binarySearch(arr, element) {
  let mid,
    start = 0,
    end = arr.length - 1;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (element == arr[mid]) return mid;
    if (element < arr[mid]) end = mid - 1;
    if (element > arr[mid]) start = mid + 1;
  }

  return -1;
}

console.log("result: " + binarySearch([1, 2, 3, 4, 5], 6));
