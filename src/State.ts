export class State {
    private state: {[key: string]: unknown} = {}

    public getValue(key: string): unknown {
        return this.state[key] ?? null
    }

    public setValue(key: string, value: unknown): void {
        this.state[key] = value
    }
}