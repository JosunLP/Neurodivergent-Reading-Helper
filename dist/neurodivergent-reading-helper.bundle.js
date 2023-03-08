// ==UserScript==
// @name         Neurodivergent Reading Helper
// @namespace    https://github.com/JosunLP/Neurodivergent-Reading-Helper#readme
// @version      1.0.0
// @description  A small tool to help you read books and articles faster and more efficiently.
// @author       Jonas Pfalzgraf <info@josunlp.de>
// @homepage     https://github.com/JosunLP/Neurodivergent-Reading-Helper#readme
// @icon64       data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAFVGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjIwMCIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249IjIwMCIKICAgZXhpZjpDb2xvclNwYWNlPSIxIgogICB0aWZmOkltYWdlV2lkdGg9IjIwMCIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMjAwIgogICB0aWZmOlJlc29sdXRpb25Vbml0PSIyIgogICB0aWZmOlhSZXNvbHV0aW9uPSI0MDAvMSIKICAgdGlmZjpZUmVzb2x1dGlvbj0iNDAwLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQ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
// @run-at       document-idle
// @supportURL https://ko-fi.com/josunlp
// @grant     GM_setValue
// @grant     GM_getValue
// @match     *://*/*
// ==/UserScript==

(()=>{"use strict";class t{static parse(t){return t.split(" ").map((t=>{const r=this.formatWordRecursive(t,this.breakupCharacters);return Array.isArray(r)?r.join(""):r})).join(" ")}static formatWord(t){if(t.includes("<"))return t;const r=t.split("");if(r.length<=3){const t=Math.floor(3*r.length/10);for(let e=0;e<t;e++)r[e]=`<b>${r[e]}</b>`}else if(4==r.length){const t=Math.floor(5*r.length/10);for(let e=0;e<t;e++)r[e]=`<b>${r[e]}</b>`}else if(r.length>=5){const t=Math.floor(6*r.length/10);for(let e=0;e<t;e++)r[e]=`<b>${r[e]}</b>`}return r.join("")}static formatWordRecursive(t,r,e=[]){if(0===t.length)return e;const s=r.find((r=>t.includes(r)));if(s){const[n,...o]=t.split(s);return this.formatWordRecursive(o.join(s),r,[...e,n,s])}return this.formatWord(t)}}t.breakupCharacters=["-","_"],new class{constructor(){this.main(),console.log("NRH - App started")}main(){document.querySelectorAll("p").forEach((r=>{r.innerHTML=t.parse(r.innerHTML)}))}}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV1cm9kaXZlcmdlbnQtcmVhZGluZy1oZWxwZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiJtQkFBTyxNQUFNQSxFQUdKQyxhQUFhQyxHQVdsQixPQVZjQSxFQUFNQyxNQUFNLEtBQ0dDLEtBQUtDLElBQ2hDLE1BQU1DLEVBQWdCQyxLQUFLQyxvQkFDekJILEVBQ0FFLEtBQUtFLG1CQUVQLE9BQU9DLE1BQU1DLFFBQVFMLEdBQ2pCQSxFQUFjTSxLQUFLLElBQ25CTixDQUFhLElBRUdNLEtBQUssSUFDN0IsQ0FFUVgsa0JBQWtCSSxHQUN4QixHQUFJQSxFQUFLUSxTQUFTLEtBQ2hCLE9BQU9SLEVBR1QsTUFBTVMsRUFBVVQsRUFBS0YsTUFBTSxJQUUzQixHQUFJVyxFQUFRQyxRQUFVLEVBQUcsQ0FDdkIsTUFBTUMsRUFBZ0JDLEtBQUtDLE1BQXdCLEVBQWpCSixFQUFRQyxPQUFjLElBQ3hELElBQUssSUFBSUksRUFBSSxFQUFHQSxFQUFJSCxFQUFlRyxJQUNqQ0wsRUFBUUssR0FBSyxNQUFNTCxFQUFRSyxRLE1BRXhCLEdBQXNCLEdBQWxCTCxFQUFRQyxPQUFhLENBQzlCLE1BQU1LLEVBQWVILEtBQUtDLE1BQXdCLEVBQWpCSixFQUFRQyxPQUFjLElBQ3ZELElBQUssSUFBSUksRUFBSSxFQUFHQSxFQUFJQyxFQUFjRCxJQUNoQ0wsRUFBUUssR0FBSyxNQUFNTCxFQUFRSyxRLE1BRXhCLEdBQUlMLEVBQVFDLFFBQVUsRUFBRyxDQUM5QixNQUFNTSxFQUFlSixLQUFLQyxNQUF3QixFQUFqQkosRUFBUUMsT0FBYyxJQUN2RCxJQUFLLElBQUlJLEVBQUksRUFBR0EsRUFBSUUsRUFBY0YsSUFDaENMLEVBQVFLLEdBQUssTUFBTUwsRUFBUUssUSxDQUcvQixPQUFPTCxFQUFRRixLQUFLLEdBQ3RCLENBRVFYLDJCQUNOSSxFQUNBSSxFQUNBYSxFQUFrQixJQUVsQixHQUFvQixJQUFoQmpCLEVBQUtVLE9BQ1AsT0FBT08sRUFHVCxNQUFNQyxFQUFtQmQsRUFBa0JlLE1BQU1DLEdBQU1wQixFQUFLUSxTQUFTWSxLQUNyRSxHQUFJRixFQUFrQixDQUNwQixNQUFPRyxLQUFVQyxHQUFRdEIsRUFBS0YsTUFBTW9CLEdBQ3BDLE9BQU9oQixLQUFLQyxvQkFDVm1CLEVBQUtmLEtBQUtXLEdBQ1ZkLEVBQ0EsSUFBSWEsRUFBT0ksRUFBT0gsRyxDQUdwQixPQUFPaEIsS0FBS3FCLFdBQVd2QixFQUUzQixFQTlEd0IsRUFBQUksa0JBQW9CLENBQUMsSUFBSyxLQ21CcEQsSUFmQSxNQUVJb0IsY0FDSXRCLEtBQUt1QixPQUNMQyxRQUFRQyxJQUFJLG9CQUNoQixDQUVRRixPQUNlRyxTQUFTQyxpQkFBaUIsS0FDbENDLFNBQVNDLElBQ2hCQSxFQUFFQyxVQUFZckMsRUFBT3NDLE1BQU1GLEVBQUVDLFVBQVUsR0FFL0MsRSIsInNvdXJjZXMiOlsid2VicGFjazovL25ldXJvZGl2ZXJnZW50LXJlYWRpbmctaGVscGVyLy4vc3JjL2NsYXNzZXMvcGFyc2VyLnRzIiwid2VicGFjazovL25ldXJvZGl2ZXJnZW50LXJlYWRpbmctaGVscGVyLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG4gIHByaXZhdGUgc3RhdGljIHJlYWRvbmx5IGJyZWFrdXBDaGFyYWN0ZXJzID0gW1wiLVwiLCBcIl9cIl07XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgcGFyc2UoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBjb25zdCB3b3JkcyA9IGlucHV0LnNwbGl0KFwiIFwiKTtcclxuICAgIGNvbnN0IGZvcm1hdHRlZFdvcmRzID0gd29yZHMubWFwKCh3b3JkKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZvcm1hdHRlZFdvcmQgPSB0aGlzLmZvcm1hdFdvcmRSZWN1cnNpdmUoXHJcbiAgICAgICAgd29yZCxcclxuICAgICAgICB0aGlzLmJyZWFrdXBDaGFyYWN0ZXJzXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KGZvcm1hdHRlZFdvcmQpXHJcbiAgICAgICAgPyBmb3JtYXR0ZWRXb3JkLmpvaW4oXCJcIilcclxuICAgICAgICA6IGZvcm1hdHRlZFdvcmQ7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiBmb3JtYXR0ZWRXb3Jkcy5qb2luKFwiIFwiKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGZvcm1hdFdvcmQod29yZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmICh3b3JkLmluY2x1ZGVzKFwiPFwiKSkge1xyXG4gICAgICByZXR1cm4gd29yZDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsZXR0ZXJzID0gd29yZC5zcGxpdChcIlwiKTtcclxuXHJcbiAgICBpZiAobGV0dGVycy5sZW5ndGggPD0gMykge1xyXG4gICAgICBjb25zdCB0aGlydHlQZXJjZW50ID0gTWF0aC5mbG9vcigobGV0dGVycy5sZW5ndGggKiAzKSAvIDEwKTtcclxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlydHlQZXJjZW50OyBpKyspIHtcclxuICAgICAgICBsZXR0ZXJzW2ldID0gYDxiPiR7bGV0dGVyc1tpXX08L2I+YDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChsZXR0ZXJzLmxlbmd0aCA9PSA0KSB7XHJcbiAgICAgIGNvbnN0IGZpZnR5UGVyY2VudCA9IE1hdGguZmxvb3IoKGxldHRlcnMubGVuZ3RoICogNSkgLyAxMCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlmdHlQZXJjZW50OyBpKyspIHtcclxuICAgICAgICBsZXR0ZXJzW2ldID0gYDxiPiR7bGV0dGVyc1tpXX08L2I+YDtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmIChsZXR0ZXJzLmxlbmd0aCA+PSA1KSB7XHJcbiAgICAgIGNvbnN0IHNpeHR5UGVyY2VudCA9IE1hdGguZmxvb3IoKGxldHRlcnMubGVuZ3RoICogNikgLyAxMCk7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l4dHlQZXJjZW50OyBpKyspIHtcclxuICAgICAgICBsZXR0ZXJzW2ldID0gYDxiPiR7bGV0dGVyc1tpXX08L2I+YDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGxldHRlcnMuam9pbihcIlwiKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc3RhdGljIGZvcm1hdFdvcmRSZWN1cnNpdmUoXHJcbiAgICB3b3JkOiBzdHJpbmcsXHJcbiAgICBicmVha3VwQ2hhcmFjdGVyczogc3RyaW5nW10sXHJcbiAgICB3b3Jkczogc3RyaW5nW10gPSBbXVxyXG4gICk6IHN0cmluZ1tdIHwgc3RyaW5nIHtcclxuICAgIGlmICh3b3JkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gd29yZHM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnJlYWt1cENoYXJhY3RlciA9IGJyZWFrdXBDaGFyYWN0ZXJzLmZpbmQoKGMpID0+IHdvcmQuaW5jbHVkZXMoYykpO1xyXG4gICAgaWYgKGJyZWFrdXBDaGFyYWN0ZXIpIHtcclxuICAgICAgY29uc3QgW2ZpcnN0LCAuLi5yZXN0XSA9IHdvcmQuc3BsaXQoYnJlYWt1cENoYXJhY3Rlcik7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm1hdFdvcmRSZWN1cnNpdmUoXHJcbiAgICAgICAgcmVzdC5qb2luKGJyZWFrdXBDaGFyYWN0ZXIpLFxyXG4gICAgICAgIGJyZWFrdXBDaGFyYWN0ZXJzLFxyXG4gICAgICAgIFsuLi53b3JkcywgZmlyc3QsIGJyZWFrdXBDaGFyYWN0ZXJdXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtYXRXb3JkKHdvcmQpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBQYXJzZXIgfSBmcm9tIFwiLi9jbGFzc2VzL3BhcnNlclwiO1xyXG5cclxuLyoqXHJcbiAqIEFwcFxyXG4gKi9cclxuY2xhc3MgQXBwIHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1haW4oKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5SSCAtIEFwcCBzdGFydGVkXCIpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIG1haW4oKSB7XHJcbiAgICAgICAgY29uc3QgcGFyYWdyYXBocyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJwXCIpO1xyXG4gICAgICAgIHBhcmFncmFwaHMuZm9yRWFjaCgocCkgPT4ge1xyXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9IFBhcnNlci5wYXJzZShwLmlubmVySFRNTCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbm5ldyBBcHAoKTsiXSwibmFtZXMiOlsiUGFyc2VyIiwic3RhdGljIiwiaW5wdXQiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJmb3JtYXR0ZWRXb3JkIiwidGhpcyIsImZvcm1hdFdvcmRSZWN1cnNpdmUiLCJicmVha3VwQ2hhcmFjdGVycyIsIkFycmF5IiwiaXNBcnJheSIsImpvaW4iLCJpbmNsdWRlcyIsImxldHRlcnMiLCJsZW5ndGgiLCJ0aGlydHlQZXJjZW50IiwiTWF0aCIsImZsb29yIiwiaSIsImZpZnR5UGVyY2VudCIsInNpeHR5UGVyY2VudCIsIndvcmRzIiwiYnJlYWt1cENoYXJhY3RlciIsImZpbmQiLCJjIiwiZmlyc3QiLCJyZXN0IiwiZm9ybWF0V29yZCIsImNvbnN0cnVjdG9yIiwibWFpbiIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicCIsImlubmVySFRNTCIsInBhcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==