const locationButton = document.querySelector(".btn_location");
console.log(locationButton);

locationButton.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(function(position) {
    console.log (position.coords.latitude, position.coords.longitude);
    // title.innerHTML =  `${position.coords.latitude} and ${position.coords.longitude}`;
    const currentLocation = {
      longitude: position.coords.longitude,
      latitude: position.coords.latitude
    };

    // console.log(currentLocation);
    renderLocationOnGoogleMap(
      currentLocation.latitude,
      currentLocation.longitude
    );
  });
});

function renderLocationOnGoogleMap(lat, lng) {
  const mapDiv = document.querySelector("#map");
  const map = new google.maps.Map(mapDiv, {
    center: { lat, lng },
    zoom: 12
  });

  console.log(map);
}