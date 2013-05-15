function KeyBoard() {
		
	this.load = load;
	this.getKey = getKey;

	var noteMap = {}
	
	function getKey(note) {
		return noteMap[note];
	}
	
	function load() {
		noteMap["C"] = new MusicKey('audioC','keyC','keySelected');
		noteMap["D"] = new MusicKey('audioD','keyD','keySelected');
		noteMap["E"] = new MusicKey('audioE','keyE','keySelected');
		noteMap["F"] = new MusicKey('audioF','keyF','keySelected');
		noteMap["G"] = new MusicKey('audioG','keyG','keySelected');
		noteMap["A"] = new MusicKey('audioA','keyA','keySelected');
		noteMap["B"] = new MusicKey('audioB','keyB','keySelected');
		noteMap["C1"] = new MusicKey('audioC5','keyC1','keySelected');
		noteMap["D1"] = new MusicKey('audioD5','keyD1','keySelected');
		noteMap["E1"] = new MusicKey('audioE5','keyE1','keySelected');
		noteMap["F1"] = new MusicKey('audioF5','keyF1','keySelected');
		
		noteMap["C#"] = new MusicKey('audioCsharp','sharpC','sharpSelected');
		noteMap["D#"] = new MusicKey('audioDsharp','sharpD','sharpSelected');
		noteMap["F#"] = new MusicKey('audioFsharp','sharpF','sharpSelected');
		noteMap["G#"] = new MusicKey('audioGsharp','sharpG','sharpSelected');
		noteMap["A#"] = new MusicKey('audioAsharp','sharpA','sharpSelected');
		noteMap["C1#"] = new MusicKey('audioC5sharp','sharpC1','sharpSelected');
		noteMap["D1#"] = new MusicKey('audioD5sharp','sharpD1','sharpSelected');
	}
}
