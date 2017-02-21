var myLatLng = {lat: 40.7661, lng: -111.8907};
var map;
function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
           zoom: 19,
          center: myLatLng});

var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Express Burger: 145 Main St, Salt Lake City, UT 84111'
});
// var service = new google.maps.places.PlacesService(map);
//  var service = new google.maps.places.PlacesService(map);
//     service.nearbySearch({
//         location: pyrmont,
//         radius: 500,
//         type: ['restaurant']
//     }, callback);    
// var src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCUPaBbHyIq4-6qtVaK82Y2dhJrkatbyIU&callback=initMap";
}

