const groupAnagrams = (arr) => {
  let [anagramMap, result] = [{}, []];

  for (const str of arr) {
    const sortedStr = str.split("").sort().join("");
    if (anagramMap[sortedStr]) {
      anagramMap[sortedStr].push(str);
    } else {
      anagramMap[sortedStr] = [str];
    }
  }

  for (const key in anagramMap) {
    result.push(anagramMap[key]);
  }

  return result;
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
