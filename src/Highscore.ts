class HighscoreButton extends HTMLElement {
    private button?: HTMLButtonElement
    private body?: HTMLBodyElement

    private highscoreHandler: (event: UIEvent) => void

    constructor() {
        super()
        this.render()
        this.highscoreHandler = this.highscore.bind(this)
    }

    connectedCallback() {
        this.body = document.querySelector('body')!
        this.body.classList.add('highscore')
        this.button = this.querySelector('#highscore-button')!
        this.button.addEventListener('click', this.highscoreHandler)
    }

    disconnectedCallback() {
        this.button?.removeEventListener('click', this.highscoreHandler)
    }
    
    startGame(event: UIEvent) {
        const gameStartedEvent = new CustomEvent('highscore-started', {})
        document.dispatchEvent(gameStartedEvent)
    }

    render() {
       this.innerHTML = `
       <body class="highscore"> 
       <div class="container">  
           <div id="headlineContainer">
               <h1>Deine Highscores</h1>
               <p>Hier findest du deine besten Ergebnisse: </br>
           </div>
           <div class="rank"> 
               <h3>1. Platz: </h3>
               <p>Du hast XX von XX Titeln richtig erraten</p>
           </div>
           <div class="rank">
               <h3>2. Platz: </h3>
               <p>Du hast XX von XX Titeln richtig erraten</p>
           </div>
           <div  class="rank">
               <h3>3. Platz: </h3>
               <p>Du hast XX von XX Titeln richtig erraten</p>
           </div>
           <div class="rank">
               <h3>4. Platz: </h3>
               <p>Du hast XX von XX Titeln richtig erraten</p>
           </div>
           <div class="rank">
               <h3>5. Platz: </h3>
               <p>Du hast XX von XX Titeln richtig erraten</p>
           </div>
           <div class="rank">
               <h3>6. Platz: </h3>
               <p>Du hast XX von XX Titeln richtig erraten</p>
           </div>
       </div>
   </body>
       `
    }   
}

customElements.define('highscore-button', HighscoreButton)