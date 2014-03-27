function KeyCode() {
	
	var keycodeMap = {};
	
	this.getCharacter = getCharacter;

	function getCharacter(charCode) {
		return keycodeMap[charCode];
	}

	keycodeMap["65"] = "a";
	keycodeMap["66"] = "b";
	keycodeMap["67"] = "c";
	keycodeMap["68"] = "d";
	keycodeMap["69"] = "e";
	keycodeMap["70"] = "f";
	keycodeMap["71"] = "g";
	keycodeMap["72"] = "h";
	keycodeMap["73"] = "i";
	keycodeMap["74"] = "j";
	keycodeMap["75"] = "k";
	keycodeMap["76"] = "l";
	keycodeMap["77"] = "m";
	keycodeMap["78"] = "n";
	keycodeMap["79"] = "o";
	keycodeMap["80"] = "p";
	keycodeMap["81"] = "q";
	keycodeMap["82"] = "r";
	keycodeMap["83"] = "s";
	keycodeMap["84"] = "t";
	keycodeMap["85"] = "u";
	keycodeMap["86"] = "v";
	keycodeMap["87"] = "w";
	keycodeMap["88"] = "x";
	keycodeMap["89"] = "y";
	keycodeMap["90"] = "z";
	keycodeMap["186"] = ";";
	keycodeMap["222"] = "'";
}
