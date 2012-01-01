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