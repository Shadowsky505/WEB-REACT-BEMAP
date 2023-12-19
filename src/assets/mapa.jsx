let map, heatmap;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: { lat: -16.392984, lng: -71.532005 },
    mapTypeId: "satellite",
  });
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: [],
    map: map,
  });

  setInterval(obtenerDatosYActualizarHeatmap, 100);
}

const obtenerDatosYActualizarHeatmap = async () => {
  try {
    const response = await fetch('http://vpn.bemap.one/datos');
    const data = await response.json();

    const ultimosDatos = data.slice(-50);  

    console.log('Datos obtenidos de la API:', ultimosDatos);

    const puntos = ultimosDatos.map(dato => ({
      location: new google.maps.LatLng(parseFloat(dato.latitud), parseFloat(dato.longitud)),
      weight: parseFloat(dato.nivelContaminacion),
    }));

    heatmap.setData(puntos);
  } catch (error) {
    console.error('Error al obtener datos:', error);
  }
};

window.initMap = initMap;
