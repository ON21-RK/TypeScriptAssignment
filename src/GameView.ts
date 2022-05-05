import {EmojiGame} from "./EmojiGame"
import "./HighscoreComponent"
import "./QuestionComponent"

class GameView extends HTMLElement {

    private game = new EmojiGame()
    constructor() {
        super()
        this.game.start()
        this.render()

        document.addEventListener("guess-made", (event: Event) => {
            this.game.guess((event as CustomEvent).detail)
            this.render()
        })
    }

    public isGameInProgress() {
        return this.game.isInProgress()
    }

    render() {
       const question = this.game.getCurrentQuestion() 
       this.innerHTML = `
        
       <body class ="quiz">
       <div>
            <div class="container">  
                <div id="headlineContainer">
                <h1>Emoji-Quiz</h1>
            </div>
            <div id="emojiContainer">
                <h2>Welcher Titel wird gesucht?</h2>
                <p>Setze die Emojis zusammen und gebe deine Antwort ein.</p>
                ${this.isGameInProgress() ? `
                    <question-component question-text="${question.question}"></question-component>
                ` : `<highscore-component score="${this.game.score()}"></highscore-component>`}
            </div>
        </div>
        </body>
       `
    }   
}

customElements.define('game-view', GameView)