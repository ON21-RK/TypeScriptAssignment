import { Highscore, Score } from "./score"

export class HighscoreComponent extends HTMLElement {
    private highscore: Highscore

    constructor() {
        super()
        this.render()
        this.highscore = []
        // read highscore from local storage
        const storedHighscore = localStorage.getItem('highscore')
        if (storedHighscore) {
            try {
                const result: unknown = JSON.parse(storedHighscore)
                if(Array.isArray(result)) {
                    const newScore: Score = {
                        score: this.score,
                        date: new Date()
                    }
                    this.highscore = result.concat(newScore)
                    localStorage.setItem('highscore', JSON.stringify(this.highscore))
                }
            } catch(e) {
                this.highscore = []   
                localStorage.setItem('highscore', JSON.stringify(this.highscore))
            }
        } else {
            const newScore: Score = {
                score: this.score,
                date: new Date()
            }
            this.highscore = [newScore]
            localStorage.setItem('highscore', JSON.stringify(this.highscore))
        }
    }

    get score() {
        const scoreString = this.getAttribute('score') || ""
        const parsedScore = parseInt(scoreString, 10)
        if(!Number.isNaN(parsedScore)) {
            return parsedScore
        } else {
            return 0
        }
    }

    render() {
        this.innerHTML = `
        <div id = "richtigeAntworten">Du hast ${this.score} Antworten richtig</div>
        `
    }
}

customElements.define('highscore-component', HighscoreComponent)