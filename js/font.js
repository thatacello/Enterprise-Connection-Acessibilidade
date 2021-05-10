function fontSize(e) {
	var element = $(".acessibilidade");
	var font = parseInt(element.css('font-size'));
	var body = $("body");
	const normalSize = parseInt(body.css("font-size"));
	
	if (e == 'a') {
		font++;
	}
	if (e == 'd'){
		font--;
	}
	if (e == 'n'){
		font = normalSize;
	}

	element.css("fontSize", font);
}