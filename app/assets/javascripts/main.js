define([
  'mapbox-gl',
  'directions'
], function(mapboxgl,directions) {

  window.mapboxgl = mapboxgl

  mapboxgl.accessToken = 'pk.eyJ1IjoicmFkdGFkIiwiYSI6ImNpcHk5OWVlZDB4Z2lmdm0yZnRtMmg2cTUifQ.-tfDB4-E0HvPLUVRTcgCGg';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-79.4512, 43.6568],
      zoom: 13
  });

  map.on('load', function() {
    directions.loadDirections(map);
  });
})
