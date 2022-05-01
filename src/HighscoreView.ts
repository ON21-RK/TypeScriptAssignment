import { Highscore } from "./Score"

export class HighscoreView extends HTMLElement {
    private button?: HTMLButtonElement
    private body?: HTMLBodyElement

    private highscore: Highscore = []

    constructor() {
        super()

        // read highscore from local storage
        const storedHighscore = localStorage.getItem('highscore')
        if (storedHighscore) {
            try {
                const result = JSON.parse(storedHighscore)
                this.highscore = result
            } catch(e) {
                console.log(e)
                this.highscore = []   
            }
        }
        this.render()
    }

    connectedCallback() {
        this.body = document.querySelector('body')!
        this.body.classList.add('highscore')
        this.button = this.querySelector('#highscore-button')!
    }

    disconnectedCallback() {
    }
    
    startGame(event: UIEvent) {
        const gameStartedEvent = new CustomEvent('highscore-started', {})
        document.dispatchEvent(gameStartedEvent)
    }

    get scoreByPoints() {
        return this.highscore
            .sort((a, b) => b.score - a.score) // sort descending
            .slice(0, 5) // show only top 5
    }

    render() {
        console.log(this.highscore)
        console.log(this.scoreByPoints)
       this.innerHTML = `
       <div class="container">  
           <div id="headlineContainer">
               <h1>Deine Highscores</h1>
               <p>Hier findest du deine besten Ergebnisse: </br>
           </div>
           ${this.scoreByPoints.map((score, index) => {
               return `
                <div class="rank"> 
                    <h3>${index + 1}. Platz: </h3>
                    <p>Du hast ${score.score} Titel richtig erraten</p>
                </div>
               `
           })}
       </div>
       `
    }   
}

customElements.define('highscore-view', HighscoreView)