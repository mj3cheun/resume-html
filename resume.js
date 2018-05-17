$(document).ready(function() {
	$('body').html($('body').html().replace(/\r?\n|\r|\t/g, ''));
	$('.resume-header').each(function(i, obj) {
		$(this).html($(this).html().replace(/\s/g, '&nbsp;'))
	});

	$('.resume-header').lettering();
});
