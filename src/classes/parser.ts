export class Parser {
  private static readonly breakupCharacters = ["-", "_"];

  public static parse(input: string): string {
    const words = input.split(" ");
    const formattedWords = words.map((word) => {
      const formattedWord = this.formatWordRecursive(
        word,
        this.breakupCharacters
      );
      return Array.isArray(formattedWord)
        ? formattedWord.join("")
        : formattedWord;
    });
    return formattedWords.join(" ");
  }

  private static formatWord(word: string): string {
    if (word.includes("<")) {
      return word;
    }

    const letters = word.split("");

    if (letters.length <= 3) {
      const thirtyPercent = Math.floor((letters.length * 3) / 10);
      for (let i = 0; i < thirtyPercent; i++) {
        letters[i] = `<b>${letters[i]}</b>`;
      }
    } else if (letters.length == 4) {
      const fiftyPercent = Math.floor((letters.length * 5) / 10);
      for (let i = 0; i < fiftyPercent; i++) {
        letters[i] = `<b>${letters[i]}</b>`;
      }
    } else if (letters.length >= 5) {
      const sixtyPercent = Math.floor((letters.length * 6) / 10);
      for (let i = 0; i < sixtyPercent; i++) {
        letters[i] = `<b>${letters[i]}</b>`;
      }
    }
    return letters.join("");
  }

  private static formatWordRecursive(
    word: string,
    breakupCharacters: string[],
    words: string[] = []
  ): string[] | string {
    if (word.length === 0) {
      return words;
    }

    const breakupCharacter = breakupCharacters.find((c) => word.includes(c));
    if (breakupCharacter) {
      const [first, ...rest] = word.split(breakupCharacter);
      return this.formatWordRecursive(
        rest.join(breakupCharacter),
        breakupCharacters,
        [...words, first, breakupCharacter]
      );
    } else {
      return this.formatWord(word);
    }
  }
}
