// Maps API
function myMap() {
  // Location
  const loc = document.getElementById("location");
  const latitude_element = document.getElementById("latitude");
  const longitude_element = document.getElementById("longitude");
  var mapProp = {
    center: {lat: 58.378082, lng: 26.729091},
    zoom:15,
    mapId: "ec7bffaa310812cf",
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      loc.classList.remove("hidden")
      latitude_element.innerHTML = latitude;
      longitude_element.innerHTML = longitude;
      let location = google.maps.LatLng(latitude, longitude);
      map.setCenter(location)
      // createMarker(location, map);
      console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    });
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
  /*
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
  }); */
}
/*
function createMarker(place, map) {
  //if (!place.geometry || !place.geometry.location) return;

  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: place,
  });

  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });

}*/
window.myMap = myMap;
