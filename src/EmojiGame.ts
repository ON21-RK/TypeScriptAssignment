import { Question } from "./question"

export class EmojiGame {
    private inProgress = false
    private currentQuestionIndex = 0

    private questions: Question[] = [
        new Question("👨 👨 👦", "Two and a half Men"),
        new Question("👨 💡 🧷 💣", "Mac Gyver"),
        new Question("👪 👽 🐈 🏠",	"Alf"),
        /*
        new Question("👨 👨 👦", "Two And A Half Men"),
        new Question("🕵 👩 📂 🔦 👽", "Akte X"),
        new Question("👩 👩 🌆 🍰 💵", "Two Broke Girls"),
        new Question("🗻 🚢 💑", "Titanic"),
        new Question("👳 🐯 🚣", "Life of Pi"),
        new Question("👽 👧 🚲 🌑", "E.T. "),
        new Question("👸 👩 👩 👩 🥂 💖 🌆", "Sex And The City"),
        new Question("🤫 🐑 🐑", "Das Schweigen der Lämmer"),
        new Question("🏊 🏊 🏖 👙", "Baywatch"),
        new Question("👨 🔫 🌴 🏖",	"Magnum"),
        new Question("🌎 🐵 🐵 🐵", "Planet der Affen"),
        new Question("👦 🏠 🎄 👨 👨 👮", "Kevin allein zu Haus"),
        new Question("👂 🔨", "Hör mal, wer da hämmert"),
        new Question("👉 👌 🌆", "Sex and the City"),
        new Question("👨 👨 👨 👨 🔬 ⚗ 📐💥", "The Big Bang Theory"),
        new Question("👦🏻 👓 ⚡️", "Harry Potter"),
        new Question("🔫 🍸 👙 🤵🏻‍♂️", "James Bond"),
        new Question("🚀 ✨ 💁🏻‍♀️ 🌍", "Gravity"),
        new Question("🏴‍☠️ ⚓️ 💰 ☠️",	"Fluch der Karibik"),
        new Question("🏡 🎈 🎈", "Oben"),
        new Question("👦🏻 🏭 🍫", "Charlie und die Schokoladenfabrik"),
        new Question("🧙‍♀️ 📖",	"Die kleine Hexe"),
        new Question("👩🏼‍🦰 🏠 🐒 🐴", "Pipi Langstrumpf"),
        new Question("🔎 🐠", "Findet Nemo"),
        new Question("❄️ ☃️ 👸🏻", "Die Eiskönigin"),
        new Question("1️⃣ 🦄", "Das letzte Einhorn"),
        new Question("🍎 👸🏻", "Schneewittchen"),
        new Question("👦🏻 👧🏻 🌂 👜",	"Mary Poppins"),
        new Question("🐭 🚗",	"Stuart Little"),
        new Question("👧🏼 🐱 🎩 🐇 ❤️ ♣️",	"Alice im Wunderland"),
        new Question("🏎 🏎 🏎 🏁", "Cars"),
        new Question("👦🏼 🕵️‍♂️ 🕵️ 🕵️‍♀️", "Emil und die Detektive"),
        new Question("✈️ 🏫 👨‍🏫", "Das fliegende Klassenzimmer"),
        new Question("👧🏻 👦🏼 👦🏼 👴🏼 🏔", "Heidi"),
        new Question("🤖 🚀 🌱",	"Wall-E"),
        new Question("👦🏿 🧔🏻‍♂️ 🚂", "Jim Knopf"),
        new Question("🧜🏼‍♀️ 🤴🏼",	"Arielle die Meerjungfrau"),
        new Question("👹 👗 👠", "Der Teufel trägt Prada"),
        new Question("🇺🇸 🥧", "American Pie"),
        new Question("🎈 🤡", "ES"),
        new Question("🐈 🙋🏻‍♀️", "Catwoman"),
        new Question("🐺 🏦 💰 🍾", "The Wolf of Wallstreet"),
        new Question("🐀 🍝", "Ratatouille"),
        new Question("🚫 👂 🐇", "KeinOhrHasen"),
        new Question("5️⃣0️⃣0️⃣ ☀️",	"500 Days of Summer"),
        new Question("🐺 🕺🏼", "Der mit dem Wolf tanzt"),
        new Question("🧔🏻‍♂️ 💍 🌋", "Herr der Ringe"),
        new Question("🐴 🐴 🤫", "Der Pferdeflüsterer"),
        new Question("👻 🚫", "Ghostbusters"),
        new Question("🎼 ☠️", "Spiel mir das Lied vom Tod"),
        new Question("⚔️ 🥥", "Ritter der Kokosnuss"),
        new Question("1️⃣0️⃣0️⃣1️⃣0️⃣0️⃣1️⃣0️⃣", "Matrix"),
        new Question("😱 🎬", "Scary Movie"),
        new Question("🧽 ⭐️ 🐟 🐡 🍔 🐌", "Spongebob Schwammkopf"),
        new Question("👸🏻 👑 ☠️ 🔥 ❄️", "Game of Thrones"),
        new Question("⚗️ 💰 🔫 👨🏻 👮🏼‍♂️ 🧪","Breaking Bad"),
        new Question("👩‍❤️‍👨 💉 🏥 👩‍⚕️ 🧑‍⚕️", "Grey’s Anatomy"),
        */
    ]

    public start() {
        this.inProgress = true
    }

    public getCurrentQuestion(): Question {
        return this.questions[this.currentQuestionIndex]
    }

    public guess(input: string) {
        this.questions[this.currentQuestionIndex].guess(input)
        this.next()
    }

    public next() {
        this.currentQuestionIndex++
        if (this.currentQuestionIndex >= this.questions.length) {
            this.inProgress = false
        }
    }

    public isInProgress() {
        const body = document.querySelector('body')!
        body.classList.remove('start')
        body.classList.add('quiz')
        return this.inProgress
    }

    public score(): number {
        // Reduce reduces an array to a single value
        return this.questions.reduce((accumulator, currentValue) => {
            accumulator = currentValue.isCorrect() ? accumulator + 1 : accumulator
            return accumulator
        }, 0)
    }
}