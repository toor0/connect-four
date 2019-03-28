
const WIDTH = 7;
const HEIGHT = 6;


it('make the board correctly', function() {
    // ...
    let board = []
    makeBoard();
    expect(board.length).toEqual(HEIGHT);
    expect(board[0].length).toEqual(WIDTH);
    expect(board.toEqual([[null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null]]));

  });

// it('should have different references for each row') {
//     board[0][0] = 1;
//     expect(board[0].not.toBe(board[1])); // The first and second row are not aliases of each other
// }

