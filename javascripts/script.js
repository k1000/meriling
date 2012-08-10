/*
require: jquery
add:
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=true"></script>
*/

var Mapper = function( map_canvas, options ){
	var map_canvas = document.getElementById(map_canvas || "map_canvas");
	this.markersArray = [];
	
	this.options = {
		center: new google.maps.LatLng(28.291564, -16.53913),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	this.options = $.extend(this.options, options || {});
	this.map = new google.maps.Map(map_canvas, this.options);
	
	this.addMarker = function( m_options ) {
		var marker = new google.maps.Marker( m_options );
		marker.setMap(this.map);
		this.map.setCenter(m_options.position);
		this.markersArray.push(marker);
		return marker;
	};
	
	this.clearOverlays = function() {
		if (this.markersArray) {
			for (var i in this.markersArray) {
				this.markersArray[i].setMap(null);
			}
		}
	};

	this.setCurrentPoint = function( name ){
		this.addMarker( { position: this.options.center } );
	};

	return this;
};


/*
//https://developers.google.com/+/plugins/badge/config
window.___gcfg = {lang: 'es'};
(function() 
	{var po = document.createElement("script");
	po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
	var s = document.getElementsByTagName("script")[0];
	s.parentNode.insertBefore(po, s);
})();



// url = https://www.googleapis.com/plus/v1/people/{{ client id }}/activities/public/?key={{ api key }}&callback={{ callback }}
var google_json = "https://www.googleapis.com/plus/v1/people/102721572594228637143/activities/public/?key=AIzaSyD8g0rvMpchH0tvVXHd9c79iwBEA1hB3oc&callback=render_feed";
function render_feed( colection ){
	//var out = "<div class='google_plus_feed'><h3>"+ colection.title +"</h3><ul>";
	var out = "<ul>";
	for (var i = 0; i < colection.items.length; i++) {
		var item = colection.items[i];
		var pub = item.published.split("T")[0].split("-");
		out += "<li><a href='" + item.object.url + "'><time datetime='"+ item.published +"'>"+ pub[2]+"/"+pub[1]+"/"+pub[0]+"</time> " + item.title + "</a></li>";
	}
	out += "</ul></div>";
	$("body > header > aside").append(out);
}


(function( ) {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = google_json;
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
*/