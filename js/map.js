

// Google Map Initialization Script
function initialize() {
  var mapProp = {
    center:new google.maps.LatLng(25.7152758,89.2596813),
    zoom:16,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

