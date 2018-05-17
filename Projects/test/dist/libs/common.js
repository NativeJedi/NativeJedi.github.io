$(function() {
	$.jstree.defaults.core.themes.icons = false;

	$('#tree').jstree();

	$('#tree').on('ready.jstree', function() {
		$(this).jstree("open_all");          
	});

});