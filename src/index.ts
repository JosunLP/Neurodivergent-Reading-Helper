import { Parser } from "./classes/parser";

/**
 * App
 */
class App {

    constructor() {
        this.main();
    }
    
    private main() {
        const paragraphs = document.querySelectorAll("p");
        paragraphs.forEach((p) => {
            p.innerHTML = Parser.parse(p.innerHTML);
        });
    }
}

new App();