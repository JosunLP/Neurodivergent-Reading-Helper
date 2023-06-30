import { Parser } from "./classes/parser";

/**
 * App
 */
class App {

    constructor() {
        this.main();
        console.log("NRH - App started");
    }
    
    private async main() {
        while(true) {
            const paragraphs = document.querySelectorAll("p");
            const h1s = document.querySelectorAll("h1");
            const h2s = document.querySelectorAll("h2");
            const h3s = document.querySelectorAll("h3");
            const h4s = document.querySelectorAll("h4");
            const h5s = document.querySelectorAll("h5");
            const h6s = document.querySelectorAll("h6");
            
            const allElements = [
                ...paragraphs,
                ...h1s,
                ...h2s,
                ...h3s,
                ...h4s,
                ...h5s,
                ...h6s
            ];

            allElements.forEach((p) => {
                p.innerHTML = Parser.parse(p.innerHTML);
            });

            await this.sleep(1000);
        }
    }

    private sleep(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

new App();