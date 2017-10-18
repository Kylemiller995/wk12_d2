var initialize = function(container, coords, zoom) {
  var mapDiv = document.getElementById('main-map')
  var center = {lat: 55.946899, lng: -3.202449};
  var marker = {lat: 55.885399, lng: -3.197988};
  var marker1 = {lat: 25.885399, lng: -1.197988};
  mainMap = new MapWrapper(mapDiv, center, 5);
  mainMap.addMarker(center)
  mainMap.addMarker(marker)
  // mainMap.addMarker(marker1)
  mainMap.addClickEvent()
  var bounceButton = document.querySelector('#button-bounce-markers');
  bounceButton.addEventListener('click', mainMap.bounceMarkers);
  var teleporter = document.querySelector('#teleporter');
  console.log(teleporter)
  teleporter.addEventListener('click', mainMap.handleTeleport)
  var selfTeleporter = document.querySelector('#self-teleport')
  selfTeleporter.addEventListener('click', mainMap.handleSelfTeleport)
}


window.addEventListener('load', initialize);
