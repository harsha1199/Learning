function LongestWord(sen) {
  let size = 0;
  const splitArray = sen.split(" ");
  splitArray.forEach((item) => {
    if (item.length > size) {
      sen = item;
      size = item.length;
    }
  });
  // code goes here
  return sen;
}

// keep this function call here
console.log(LongestWord("I am a good boy Harsha"));
