$(document).ready(function() {
  $('#signup').hide();
  // $('#myselect').change(function () {
  //   $('.gender').hide();
  //   $('#'+$(this).val()).show();
  // })

  $('select').material_select();

	$('select').on('contentChanged', function() {
	    $(this).material_select();
  	});

	loadStates();
	loadCountries();

  var $selectDropdown =
      $("#yearpicker")
        .empty()
        .html(' ');

  for (i = new Date().getFullYear(); i > 1918; i--) {
		$selectDropdown.append(
	      $("<option></option>")
	        .attr("value",i)
	        .text(i)
	    );
	}

	// trigger dropdown refresh
  $selectDropdown.trigger('contentChanged');
});

function loadStates()
{
	var lines;

	var $statesDropdown =
      $("#statepicker")
        .empty()
        .html(' ');

	jQuery.ajax({
		url: "states.txt",
		dataType: "text",
		success: function (data) {
			lines = data.split('\n');

			for (var i = 0; i < lines.length; i++)
			{
				$statesDropdown.append(
			      $("<option></option>")
			        .attr("value",lines[i])
			        .text(lines[i])
			    );
			}

			$statesDropdown.trigger('contentChanged');
		}
	});
}

function loadCountries()
{
	var lines;

	var $countryDropdown =
      $("#countrypicker")
        .empty()
        .html(' ');

	jQuery.ajax({
		url: "countries.txt",
		dataType: "text",
		success: function (data) {
			lines = data.split('\n');

			for (var i = 0; i < lines.length; i++)
			{
				$countryDropdown.append(
			      $("<option></option>")
			        .attr("value",lines[i])
			        .text(lines[i])
			    );
			}

			$countryDropdown.trigger('contentChanged');
		}
	});
}
