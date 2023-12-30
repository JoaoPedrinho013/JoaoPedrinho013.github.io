// Variáveis
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

// Função para fazer uma jogada
function makeMove(cellIndex) {
    if (gameActive && board[cellIndex] === '') {
        board[cellIndex] = currentPlayer;
        document.querySelector('#board .cell:nth-child(' + (cellIndex + 1) + ')').textContent = currentPlayer;

        if (checkWin() || checkDraw()) {
            gameActive = false;
            if (checkWin()) {
                document.getElementById('status').textContent = `Jogador ${currentPlayer} venceu!`;
            } else {
                document.getElementById('status').textContent = 'Empate!';
            }
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            document.getElementById('status').textContent = `Vez do jogador ${currentPlayer}`;
            
            if (currentPlayer === 'O') {
                makeComputerMove();
            }
        }
    }
}

// Função para verificar o vencedor
function checkWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return true;
        }
    }

    return false;
}

// Função para verificar empate
function checkDraw() {
    return !board.includes('');
}

// Função para reiniciar o jogo
function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;

    document.getElementById('status').textContent = 'Vez do jogador X';
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');

    // Se a máquina for a primeira a jogar (O), faça uma jogada
    if (currentPlayer === 'O') {
        makeComputerMove();
    }
}

// Função para a máquina fazer uma jogada
function makeComputerMove() {
    // Implemente aqui a lógica da jogada da máquina
    // Por exemplo, você pode fazer a máquina escolher uma célula vazia aleatoriamente
    // ou usar um algoritmo mais avançado para tornar o jogo mais desafiador

    // Neste exemplo simples, a máquina escolherá uma célula vazia aleatoriamente
    const emptyCells = board.reduce((acc, val, index) => {
        if (val === '') {
            acc.push(index);
        }
        return acc;
    }, []);

    if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const computerMove = emptyCells[randomIndex];
        setTimeout(() => makeMove(computerMove), 1000); // Adiciona um atraso para simular a decisão da máquina
    }
}

// Event listener para reiniciar o jogo
document.getElementById('resetButton').addEventListener('click', resetBoard);
