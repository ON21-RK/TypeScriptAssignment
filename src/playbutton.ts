class PlayButton extends HTMLElement {
    private button?: HTMLButtonElement
    private body?: HTMLBodyElement

    private startGameHandler: (event: UIEvent) => void

    constructor() {
        super()
        this.render()
        this.startGameHandler = this.startGame.bind(this)
    }

    connectedCallback() {
        this.body = document.querySelector('body')!
        this.body.classList.add('start')
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
   <body class="start">

    <div class="container">  
        
        <div id="headlineContainer">
            <h1>Herzlich Willkommen!</h1>
            <p>Das Emoji-Quiz ist ganz einfach erklärt: </br>
                Klicke auf Start, sieh dir die angezeigten Emojis an und </br>
                errate, welcher Film, bzw. welche Serie dahinter steckt</p>
        </div>

        <div id="startContainer">
            <button id="play-button">Start</button>
        </div>

        <div id="highscoreContainer">
            <button id="highscore-button">Highscore</button>
        </div>
    </div>
</body>
       `
    }   
}

customElements.define('play-button', PlayButton)