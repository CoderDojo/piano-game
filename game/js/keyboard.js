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
	
	function load(mouseClick) {
		mapElement(new MusicKey('audioC','keyC','keySelected','a', mouseClick),'C','a');
		mapElement(new MusicKey('audioD','keyD', 'keySelected','s', mouseClick),'D','s');
		mapElement(new MusicKey('audioE','keyE','keySelected','d', mouseClick),'E','d');
		mapElement(new MusicKey('audioF','keyF','keySelected','f', mouseClick),'F','f');
		mapElement(new MusicKey('audioG','keyG','keySelected','g', mouseClick),'G','g');
		mapElement(new MusicKey('audioA','keyA','keySelected','h', mouseClick),'A','h');
		mapElement(new MusicKey('audioB','keyB','keySelected','j', mouseClick),'B','j');
		mapElement(new MusicKey('audioC5','keyC1','keySelected','k', mouseClick),'C1','k');
		mapElement(new MusicKey('audioD5','keyD1','keySelected','l', mouseClick),'D1','l');
		mapElement(new MusicKey('audioE5','keyE1','keySelected',';', mouseClick),'E1',';');
		mapElement(new MusicKey('audioF5','keyF1','keySelected','\'', mouseClick),'F1','\'');
		
		mapElement(new MusicKey('audioCsharp','sharpC','sharpSelected','q', mouseClick),'C#','q');
		mapElement(new MusicKey('audioDsharp','sharpD','sharpSelected','w', mouseClick),'D#','w');
		mapElement(new MusicKey('audioFsharp','sharpF','sharpSelected','e', mouseClick),'F#','e');
		mapElement(new MusicKey('audioGsharp','sharpG','sharpSelected','r', mouseClick),'G#','r');
		mapElement(new MusicKey('audioAsharp','sharpA','sharpSelected','i', mouseClick),'A#','i');
		mapElement(new MusicKey('audioC5sharp','sharpC1','sharpSelected','o', mouseClick),'C1#','o');
		mapElement(new MusicKey('audioD5sharp','sharpD1','sharpSelected','p', mouseClick),'D1#','p');
	}

	function mapElement(musicKey, note, keyboardCharacter) {
		noteMap[note] = musicKey;
		keyboardMap[keyboardCharacter] = musicKey;
		noteKeyboardMap[note] = keyboardCharacter;
	}
}
