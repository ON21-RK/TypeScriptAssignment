class PlayButton extends HTMLElement {
    private button?: HTMLButtonElement

    private startGameHandler: (event: UIEvent) => void

    constructor() {
        super()
        this.render()
        this.startGameHandler = this.startGame.bind(this)
    }

    connectedCallback() {
        this.button = this.querySelector('#play-button')!
        this.button.addEventListener('click', this.startGameHandler)
    }

    disconnectedCallback() {
        this.button?.removeEventListener('click', this.startGameHandler)
    }
    
    startGame(event: UIEvent) {
        const gameStartedEvent = new CustomEvent('game-started', {})
        document.dispatchEvent(gameStartedEvent)
    }

    render() {
       this.innerHTML = `
        <button id="play-button">Play Button</button>
       `
    }   
}

customElements.define('play-button', PlayButton)