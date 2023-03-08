import { Parser } from "./classes/parser";

/**
 * App
 */
class App {

    constructor() {
        this.main();
        console.log("NRH - App started");
    }
    
    private main() {
        const paragraphs = document.querySelectorAll("p");
        paragraphs.forEach((p) => {
            p.innerHTML = Parser.parse(p.innerHTML);
        });
    }
}

new App();