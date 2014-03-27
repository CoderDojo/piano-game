var keyPressed = false;

function MusicKey(audioId, noteId, selectedCss) {
		
		this.clickNote = clickNote;
		this.getCurrentNote = getCurrentNote;

		var audioId = audioId;
		var imageId = imageId;
		var selectedCss = selectedCss;
		var audio = new Audio();
		var note = $("#"+noteId);
		
		note.click(function() {
			keyPress();
		});
		
		function clickNote() {
			note.click();
		}
		
		function getCurrentNote() {
			return note;
		}
		
		function keyPress() {
			if(!keyPressed) {
				keyPressed = true;
				note.addClass(selectedCss);
				playAudio();
				keyPressed = false;
				setTimeout(resetKey, 400);
			}
		}
		
		function resetKey() {
			note.removeClass(selectedCss);
		}
		
		function playAudio() {
			audio = $("#" + audioId)[0];
			audio.pause();
			audio.currentTime=0;
			audio.play();			
		}
}
