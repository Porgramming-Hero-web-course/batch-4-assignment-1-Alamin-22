{
  // Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

  const countWordOccurrences = (
    sentence: string,
    CountableWord: string
  ): number => {
    const ArrOfWord: Array<string> = sentence
      .trim()
      .toLocaleLowerCase()
      .split(/\s+/); // split by space

    let countedWord: number = 0;
    for (const word of ArrOfWord) {
      if (word === CountableWord.toLowerCase()) {
        countedWord++;
      }
    }
    return countedWord;
  };

  const res1 = countWordOccurrences(
    "Currently I am working On my first assignment of Level 2 course I have to practice more and more These assignment are soo much important So I have to focus on the Assignment",
    "assignment"
  );

  console.log({ res1 });
}
