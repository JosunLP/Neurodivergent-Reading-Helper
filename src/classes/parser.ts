export class Parser {

	public static parse(input: string): string {
		const words = input.split(" ");
		const formattedWords = words.map(Parser.formatWord);
		return formattedWords.join(" ");
	}

	private static formatWord(word: string): string {
		const letters = word.split("");
		
		const firstThird = Math.floor(letters.length / 3);
		for (let i = 0; i < firstThird; i++) {
			letters[i] = `<b>${letters[i]}</b>`;
		}

		return letters.join("");
	}

}