let hovering = true;

const foto = $('#foto');
const svgShow = $('#svg-show');
const textSvg = $('#text-svg');

foto.hover(() => {
	if (hovering) {
		svgShow.css({
			transform: 'translateY(0%)',
			opacity: '75%',
		});
		textSvg.css({
			transform: 'translateY(0%)',
			opacity: '1',
		});
	} else {
		svgShow.css({
			opacity: '0',
			transform: 'translateY(-70%)',
		});
		textSvg.css({
			transform: 'translateY(-80%)',
			opacity: '0',
		});
	}
	hovering = !hovering;
});
