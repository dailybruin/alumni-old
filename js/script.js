$(document).ready(function() {
    $('select').material_select();

	var $dropdown = $("#yearpicker");

	$('select').on('contentChanged', function() {
	    $(this).material_select();
  	});



    for (i = new Date().getFullYear(); i > 1900; i--)
	{
		// console.log("Adding year " + i);
		// $('#yearpicker').append($('<option />').val(i).html(i));
	}
  });