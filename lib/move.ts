const moveRegex = /(\d)?([CSF])?([a-h][1-8])(?:([<>+-])([1-8]+))?/g;

class Move {
    public file: string;
    public rank: number;
    public stone: string = "F";
    public direction: string = "";
    public placedPieces: string[] = [];
    constructor(ptn: string) {
        let parsed = ptn.match(moveRegex);
        if(!parsed) throw new Error("Invalid PTN string (failed to parse)");
        if(!parsed[3]) throw new Error("Invalid PTN string (missing rank and file)");
        let fileAndRank = parsed[3].split("");
        this.rank = Number(fileAndRank[1]);
        this.file = fileAndRank[0];
        if(!this.rank) throw new Error("Invalid PTN string (invalid rank)");
        if(parsed[2]) {
            this.stone = parsed[2];
        }
        if(parsed[4]) {
            this.direction = parsed[4];
            if(!parsed[5]) throw new Error("Invalid PTN string (direction but no placed pieces)");
            if(!parsed[1]) throw new Error("Invalid PTN string (no pieces picked up)");
            this.placedPieces = parsed[5].split("");
            let count = 0;
            for(let num of this.placedPieces) {
                count += Number(num);
            }
            if(count !== Number(parsed[1])) throw new Error("Invalid PTN string (picked up != placed)");
        }
    }

    static fromPtn(ptn: string): Move {
        return new Move(ptn);
    }

    public toObject(): object {
        return {
            file: this.file,
            rank: this.rank,
            stone: this.stone,
            direction: this.direction,
            placedPieces: this.placedPieces
        }
    }
}

export = Move;
