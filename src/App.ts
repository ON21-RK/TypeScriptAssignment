import "./PlayButton"
import "./GameView"
import "./Game"
import Store from './lib/Store'
import "./EmojiGame"

class App extends HTMLElement {
    private gameInProgress = false
    constructor() {
        super()
        this.render()
    }

    connectedCallback() {
        document.addEventListener("game-started", () => {
           this.gameInProgress = true
           console.log("game started")
           this.render()
        })

        document.addEventListener("game-stopped", () => {
            this.gameInProgress = false
             console.log("game started")
            this.render()
         })
    }
    
    /* make a function that renders html to shadow dom */
    render() {
        this.innerHTML = `
        <div>
            ${this.gameInProgress ? '<game-view></game-view>' : '<play-button></play-button>'} 
        </div>
       `
    }   
}

customElements.define('app-root', App)