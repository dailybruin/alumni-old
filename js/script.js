$(document).ready(function() {
    $('select').material_select();

	$('select').on('contentChanged', function() {
	    $(this).material_select();
  	});

  	var $selectDropdown = 
      $("#yearpicker")
        .empty()
        .html(' ');

    for (i = new Date().getFullYear(); i > 1918; i--)
	{
		$selectDropdown.append(
	      $("<option></option>")
	        .attr("value",i)
	        .text(i)
	    );
	}

	// trigger dropdown refresh
    $selectDropdown.trigger('contentChanged');
  });