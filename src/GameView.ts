import "./PlayButton"
import {EmojiGame} from "./EmojiGame"


class GameView extends HTMLElement {

    private game: EmojiGame = new EmojiGame()

    constructor() {
        super()
        this.game.start()
        this.render()

        document.addEventListener("guess-made", (event: any) => {
            this.game.guess(event.detail)
            this.render()
        })
    }

    connectedCallback() {
        
    }

    public isGameInProgress() {
        return this.game.isInProgress()
    }



    render() {
       const question = this.game.getCurrentQuestion() 
       this.innerHTML = `
        <div>
            <h1>Game in progress</h1>
            ${this.isGameInProgress() ? `
                <question-component question-text="${question.question}"></question-component>

            ` : `<highscore-component score="${this.game.score()}"></highscore-component>`}
    
        </div>
       `
    }   
}

class HighscoreComponent extends HTMLElement {
    constructor() {
        super()
        this.render()
    }

    get score() {
        return this.getAttribute('score')
    }

    render() {
        this.innerHTML = `
        <div>Your score is ${this.score}</div>
        `
    }
}

class QuestionComponent extends HTMLElement {
    private guessButton!: HTMLButtonElement
    private guessInput!: HTMLInputElement

    constructor() {
        super()
        this.render()
    }

    connectedCallback() {
        this.guessButton = this.querySelector('#guess-button')!
        this.guessButton.addEventListener('click', this.handleGuess.bind(this))
    }

    public handleGuess() {
         // Get current value of input field
         const guessInput: HTMLInputElement = this.querySelector('#guess-input')!
         const guessEvent = new CustomEvent("guess-made", {
             detail: guessInput.value
         })

        document.dispatchEvent(guessEvent)
        guessInput.value = ""
    }

    get questionText() {
        return this.getAttribute('question-text')
    }

    render() {
        this.innerHTML = `
        <div>
            <h3 id="question-text">${this.questionText}</h3>
            <div>
                <input type="text" id="guess-input" placeholder="Your Answer" />
                <button id="guess-button">Guess</button>
            </div>
        </div>
        `
    }
}

customElements.define('question-component', QuestionComponent)
customElements.define('highscore-component', HighscoreComponent)
customElements.define('game-view', GameView)