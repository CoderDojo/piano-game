/**
 *
 */
function Piano(game) {

	var keyBoard;

	this.createKeyBoard = createKeyBoard;
	this.setup = setup;
	this.handleKeyboardClick = handleKeyboardClick;

	function setup() {
		createKeyBoard(); //creates the keyboard
		createGame(); //creates the game = fun
	}

	function createKeyBoard() {
		keyBoard = new KeyBoard();
		keyBoard.load();
	}

	function createGame() {
		game = new Game(keyBoard);
	}

	function handleKeyboardClick(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		console.log(code);
		var keyCode = new KeyCode();
		var keyHit = keyCode.getCharacter(code);
		
		if(game.isGameRunning())
			game.handleKeyboardClick(keyHit)
		else {
			playNote(keyHit);
		}
	}

	function playNote(keyHit) {
		var musicKey = keyBoard.getMusicKeyFromKeyboard(keyHit);
		if(musicKey)
			musicKey.clickNote();
	}
}