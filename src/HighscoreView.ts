import { Highscore } from "./score"

export class HighscoreView extends HTMLElement {
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
        const body = document.querySelector('body')!
        body.classList.add('highscore')
    }

    get scoreByPoints() {
        return this.highscore
            .sort((a, b) => b.score - a.score) // sort descending
            .slice(0, 5) // show only top 5
    }

    render() {
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
           }).join("")}
           
       </div>
       <a href="/index.html" id="startseite-button">Zurück zur Startseite</a>
       `
       

    }   
}

customElements.define('highscore-view', HighscoreView)