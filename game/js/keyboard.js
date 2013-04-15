function KeyBoard() {
		
	this.load = load;
	this.getKey = getKey;

	var noteMap = {}
	
	function getKey(note) {
		return noteMap[note];
	}
	
	function load() {
		noteMap["C"] = new MusicKey('notes/C.wav','keyC','keySelected');
		noteMap["D"] = new MusicKey('notes/D.wav','keyD','keySelected');
		noteMap["E"] = new MusicKey('notes/E.wav','keyE','keySelected');
		noteMap["F"] = new MusicKey('notes/F.wav','keyF','keySelected');
		noteMap["G"] = new MusicKey('notes/G.wav','keyG','keySelected');
		noteMap["A"] = new MusicKey('notes/A.wav','keyA','keySelected');
		noteMap["B"] = new MusicKey('notes/B.wav','keyB','keySelected');
		noteMap["C1"] = new MusicKey('notes/C1.wav','keyC1','keySelected');
		noteMap["D1"] = new MusicKey('notes/D1.wav','keyD1','keySelected');
		noteMap["E1"] = new MusicKey('notes/1.wav','keyE1','keySelected');
		noteMap["G1"] = new MusicKey('notes/G1.wav','keyE1','keySelected');
		noteMap["F1"] = new MusicKey('notes/F1.wav','keyF1','keySelected');
		
		noteMap["C#"] = new MusicKey('notes/Csharp.wav','sharpC','sharpSelected');
		noteMap["D#"] = new MusicKey('notes/Dsharp.wav','sharpD','sharpSelected');
		noteMap["F#"] = new MusicKey('notes/Fsharp.wav','sharpF','sharpSelected');
		noteMap["G#"] = new MusicKey('notes/Gsharp.wav','sharpG','sharpSelected');
		noteMap["A#"] = new MusicKey('notes/Asharp.wav','sharpA','sharpSelected');
		noteMap["C1#"] = new MusicKey('notes/Csharp.wav','sharpC1','sharpSelected');
		noteMap["D1#"] = new MusicKey('notes/Dsharp.wav','sharpD1','sharpSelected');
	}
}
