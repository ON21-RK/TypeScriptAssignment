// THIS IS A MODULE!

export const helloWorld: string = "Hello world";

class Beispiel extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = "<h1>Hello World</h1>";
  }
}

customElements.define("hello-world", Beispiel)