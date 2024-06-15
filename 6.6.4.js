const board = [];
for (let i = 0; i < 3; i++) {
    const row = [];
    for (let j = 0; j < 3; j++) {
        row.push(Math.random() < 0.5 ? 'X' : 'O');
    }
    board.push(row);
    console.log(board[i].join(' '))
}