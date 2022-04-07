import "./myModule"
class PlayButton extends HTMLElement {
    private button?: HTMLElement
    constructor() {
        super()
    }
    connectedCallback() {
        this.button = document.createElement("div")
        this.button.id = "playButton"
        this.button.textContent = "Play Game"
        this.button.addEventListener('click', this.startGame)

        const hello = document.createElement("hello-world")

        //this.append(this.button)
        this.append(hello)
    }
    disConnectedCallback() {
        this.button?.removeEventListener('click', this.startGame)
    }
    public startGame() {
       alert("Game Started...")
    }
}
customElements.define("play-button", PlayButton)