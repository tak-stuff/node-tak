const moveRegex = /(\d)?([CSF])?([a-h][1-8])(?:([<>+-])([1-8]+))?/g;

class Move {
    private stone: string = "F";
    constructor(ptn: string) {
        let parsed = ptn.match(moveRegex);
        if(!parsed) throw new Error("Invalid PTN string");
        if(parsed[2]) {
            this.stone = parsed[2];
        }
        
    }

    static fromPtn(ptn: string): Move {
        return new Move(ptn);
    }
}

export = Move;
