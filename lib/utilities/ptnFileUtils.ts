const commentRegex = /\[(.*?)\]/g;
const tagKeyValueRegex = /(.+?) "(.+?)"/g;
const moveRegex = /(?:\s)((\d+)\. ((?:\d)?(?:[CS])?[a-h][1-8](?:[<>+-](?:[1-8]+)?(?:\*)?)?) ((?:\d)?(?:[CS])?[a-h][1-8](?:[<>+-](?:[1-8]+)?(?:\*)?)?))/g;

export default function parsePtnFile(ptnFile: string): Object {
    let tags: { [index:string] : string } = {};
    let tag = commentRegex.exec(ptnFile);
    while (tag != null) {
        let tagKeyValue = tagKeyValueRegex.exec(tag[1]);
        if(!tagKeyValue || !tagKeyValue[1] || !tagKeyValue[2]) continue;
        tags[tagKeyValue[1]] = tagKeyValue[2];
        tag = commentRegex.exec(ptnFile);
    }
    let moves: string[] = [];
    let whiteMoves: string[] = [];
    let blackMoves: string[] = [];
    let move = moveRegex.exec(ptnFile);
    let round = 1;
    while (move != null) {
        if (round.toString() != move[2]) {
            throw new Error("Invalid PNG file (inconsistent move number indicators)")
        }
        moves.push(move[1])
        whiteMoves.push(move[3])
        blackMoves.push(move[4])
        move = moveRegex.exec(ptnFile);
        round++;
    }
    return {
        tags,
        moves,
        whiteMoves,
        blackMoves
    };
}