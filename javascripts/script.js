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
}

// url = https://www.googleapis.com/plus/v1/people/{{ client id }}/activities/public/?key={{ api key }}&callback={{ callback }}
var url = https://www.googleapis.com/plus/v1/people/102721572594228637143/activities/public/?key=AIzaSyD8g0rvMpchH0tvVXHd9c79iwBEA1hB3oc; 
function render_feed( jsn, ele ){
	var out = "<ul>";
	for (var i = colection.items.length - 1; i >= 0; i--) {
		var item = colection.items[i];
		out += "<li><a href='" + item.object.url + "'>" + item.object.content + "</a></li>";
	}
	out += "</ul>";
	$("#google_plus_feed").html(out);
}


(function( ) {
        var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
        po.src = URL;
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();