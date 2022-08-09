function frequencyCounter(arr1, arr2) {
  //declare two hashmaps
  let map1 = {};
  let map2 = {};

  if (arr1.length !== arr2.length) return false;

  //store the frequency of each of the elements from arr1 in map1
  for (let val of arr1) {
    map1[val] = (map1[val] || 0) + 1;
  }
  //store the frequency of each of the elements from arr2 in map2
  for (val of arr2) {
    map2[val] = (map2[val] || 0) + 1;
  }

  for (let key in map1) {
    //check if the keys correspond
    if (!(key in map2)) return false;
    // check if the respective values of the keys correspond
    if (map1[key] !== map2[key]) return false;
  }

  return true;
}

console.log(frequencyCounter(["cell"], ["lelc"]));
