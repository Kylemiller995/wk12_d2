var MapWrapper = function (map, center, zoom) {
  var container = document.getElementById('main-map');
  this.googleMap = new google.maps.Map(container, {
    center : center,
    zoom: zoom
  });
  this.markers = [];
  this.bounceMarkers = this.bounceMarkers.bind(this)
  this.handleTeleport = this.handleTeleport.bind(this);
  this.handleSelfTeleport = this.handleSelfTeleport.bind(this);
}

MapWrapper.prototype.handleTeleport = function () {
  var coords = new google.maps.LatLng(-34.397, 150.644)
  console.log(this.googleMap)
  this.container.setCenter(coords)
}


MapWrapper.prototype.addMarker = function (coords) {
  var marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })
  this.markers.push(marker)
  var infowindow = new google.maps.InfoWindow({
    content: "lat" + coords.lat + "   " + "lng" +coords.lng
  });
  marker.addListener('click', function() {
    infowindow.open(marker.map, marker)
  })
}

MapWrapper.prototype.addClickEvent = function () {
  google.maps.event.addListener(this.googleMap, 'click', function(event){
    console.log(event);
    console.log(event.latLng.lat());
    var coords = {lat: event.latLng.lat(), lng: event.latLng.lng()}
    this.addMarker(coords)
  }.bind(this))
}


MapWrapper.prototype.bounceMarkers = function () {
  this.markers.forEach(function(marker) {
    marker.setAnimation(google.maps.Animation.BOUNCE)
  })
}

MapWrapper.prototype.handleTeleport = function () {
  var coords = new google.maps.LatLng(-34.397, 150.644)
  console.log(this.googleMap)
  this.googleMap.setCenter(coords)
}


MapWrapper.prototype.handleSelfTeleport = function () {
  navigator.geolocation.getCurrentPosition(function(position) {
    var pos = {
      lat: position.coords.latitude,
      lng: position.coords.longitude
    };
    this.googleMap.setCenter(pos)
  }.bind(this))
}
