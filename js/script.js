
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");
	
     
    // load streetview
	var streetInfo = $('#street').val();
	var cityInfo = $('#city').val();
	var address = streetInfo + ',' + cityInfo;
	$greeting.text('So, you want to live at ' + address + '?');

    // YOUR CODE GOES HERE!
	var streetViewUrl = 'http://maps.googleapis.com/maps/api/streetview?size=600*400&location=' + address + '';
	$body.append('<img class = "bgimg" src="' + streetViewUrl + '">');

    return false;
};

$('#form-container').submit(loadData);