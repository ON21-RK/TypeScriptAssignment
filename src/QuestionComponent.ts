export class QuestionComponent extends HTMLElement {
    private guessButton!: HTMLButtonElement

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
        return this.getAttribute('question-text') || ""
    }

    render() {
        this.innerHTML = `
        <div>
            <h3 id="question-text">${this.questionText}</h3>
            <div>
                <input type="text" id="guess-input" placeholder="Deine Antwort:" /><br>
                <button id="guess-button">Absenden</button>
            </div>
        </div>
        `
    }
}

customElements.define('question-component', QuestionComponent)