function KeyBoard() {
		
	this.load = load;
	this.getKey = getKey;
	this.getMusicKeyFromKeyboard = getMusicKeyFromKeyboard;
	this.getNoteForKeyboard = getNoteForKeyboard;

	var noteMap = {}
	var keyboardMap = {}
	var noteKeyboardMap = {}
	
	function getKey(note) {
		return noteMap[note];
	}

	function getMusicKeyFromKeyboard(keyCode) {
		return keyboardMap[keyCode];
	}

	function getNoteForKeyboard(keyCode) {
		return noteKeyboardMap[keyCode];
	}
	
	function load() {
		mapElement(new MusicKey('audioC','keyC','keySelected'),'C','a');
		mapElement(new MusicKey('audioD','keyD','keySelected'),'D','s');
		mapElement(new MusicKey('audioE','keyE','keySelected'),'E','d');
		mapElement(new MusicKey('audioF','keyF','keySelected'),'F','f');
		mapElement(new MusicKey('audioG','keyG','keySelected'),'G','g');
		mapElement(new MusicKey('audioA','keyA','keySelected'),'A','h');
		mapElement(new MusicKey('audioB','keyB','keySelected'),'B','j');
		mapElement(new MusicKey('audioC5','keyC1','keySelected'),'C1','k');
		mapElement(new MusicKey('audioD5','keyD1','keySelected'),'D1','l');
		mapElement(new MusicKey('audioE5','keyE1','keySelected'),'E1',';');
		mapElement(new MusicKey('audioF5','keyF1','keySelected'),'F1','\'');
		
		mapElement(new MusicKey('audioCsharp','sharpC','sharpSelected'),'C#','q');
		mapElement(new MusicKey('audioDsharp','sharpD','sharpSelected'),'D#','w');
		mapElement(new MusicKey('audioFsharp','sharpF','sharpSelected'),'F#','e');
		mapElement(new MusicKey('audioGsharp','sharpG','sharpSelected'),'G#','r');
		mapElement(new MusicKey('audioAsharp','sharpA','sharpSelected'),'A#','i');
		mapElement(new MusicKey('audioC5sharp','sharpC1','sharpSelected'),'C1#','o');
		mapElement(new MusicKey('audioD5sharp','sharpD1','sharpSelected'),'D1#','p');
	}

	function mapElement(musicKey, note, keyboardCharacter) {
		noteMap[note] = musicKey;
		keyboardMap[keyboardCharacter] = musicKey;
		noteKeyboardMap[note] = keyboardCharacter;
	}
}
