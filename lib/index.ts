export class TakGame {
    private _boardSize: number;
    constructor(state: string) {
        //ToDo: get size from passed state
        this._boardSize = 5;
    }

    get boardSize(): number {
        return this._boardSize;
    }
}