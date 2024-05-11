// Maps API
function myMap() {
  // Location
  let latitude, longitude;
  const loc = document.getElementById("location");
  const latitude_element = document.getElementById("latitude");
  const longitude_element = document.getElementById("longitude");
  
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      loc.classList.remove("hidden")
      latitude_element.innerHTML = latitude;
      longitude_element.innerHTML = longitude;
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
  var mapProp= {
    center:new google.maps.LatLng(latitude, longitude),
    zoom:5,
    mapId: "ec7bffaa310812cf",
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  const request = {
    query: "park",
    fields: ["name", "geometry"],
  };
  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i], map);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}
function createMarker(place, map) {
  if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: place.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });

}
window.myMap = myMap;
