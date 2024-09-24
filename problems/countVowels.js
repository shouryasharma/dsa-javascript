function vowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;

  str.split("").forEach((element) => (vowels.has(element) ? count++ : null));

  return count;
}

console.log(vowels("abcde"));
