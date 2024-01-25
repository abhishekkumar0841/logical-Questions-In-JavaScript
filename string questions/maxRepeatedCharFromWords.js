function maxRepeatedCharFromWords(str) {
  let wordsArr = str.split(" ");
  let mostRepeatedCharWord = "";
  let numOfRepeatedChar = 0;

  for (let i = 0; i < wordsArr.length; i++) {
    let charCounter = {};
    for (let j = 0; j < wordsArr[i].length; j++) {
      if (charCounter[wordsArr[i][j]]) {
        charCounter[wordsArr[i][j]]++;
      } else {
        charCounter[wordsArr[i][j]] = 1;
      }
    }

    let currWordMaxCharCount = Math.max(...Object.values(charCounter), 0);

    if (currWordMaxCharCount > numOfRepeatedChar) {
      numOfRepeatedChar = currWordMaxCharCount;
      mostRepeatedCharWord = wordsArr[i];
    }
  }

  return mostRepeatedCharWord;
}

console.log(maxRepeatedCharFromWords("hello good morrrning balloon"));
