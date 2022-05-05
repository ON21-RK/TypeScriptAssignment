import "./GameView"
import "./EmojiGame"
import "./Playbutton"

class App extends HTMLElement {
    private gameInProgress = false
    constructor() {
        super()
        this.render()
    }

    connectedCallback() {
        document.addEventListener("game-started", () => {
           this.gameInProgress = true
           this.render()
        })

        document.addEventListener("game-stopped", () => {
            this.gameInProgress = false
            this.render()
         })
    }
    
    render() {
        this.innerHTML = `
        <div>
            ${this.gameInProgress ? '<game-view></game-view>' : '<play-button></play-button>'} 
        </div>
       `
    }   
}

customElements.define('app-root', App)