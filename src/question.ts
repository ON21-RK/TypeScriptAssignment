export class Question {
    private givenAnswer = ""
    constructor(public question: string, private correctAnswer: string) {}

    public guess(input: string): boolean {
        this.givenAnswer = input
        return this.correctAnswer === this.givenAnswer
    }

    public isCorrect(): boolean {
        return this.correctAnswer === this.givenAnswer
    }
}