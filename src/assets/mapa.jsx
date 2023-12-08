let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: -16.392984, lng: -71.532005 },
    mapTypeId: "satellite",
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: getPoints(),
    map: map,
  });
}
function getPoints() {
  return [
    new google.maps.LatLng(-16.392984, -71.532005),
    new google.maps.LatLng(-16.392884, -71.532105),
    new google.maps.LatLng(-16.392784, -71.532205),

  ];
}

window.initMap = initMap;