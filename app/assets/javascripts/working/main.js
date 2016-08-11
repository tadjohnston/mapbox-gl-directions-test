define([
  'mapbox-gl',
], function(mapboxgl) {

  window.mapboxgl = mapboxgl;

  mapboxgl.accessToken = 'pk.eyJ1IjoicmFkdGFkIiwiYSI6ImNpcHk5OWVlZDB4Z2lmdm0yZnRtMmg2cTUifQ.-tfDB4-E0HvPLUVRTcgCGg';

  require(['working/directions'], function(workingDirections) {
    var directions = workingDirections.loadDirections();

    var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-79.4512, 43.6568],
      zoom: 13
    });

    map.addControl(directions);

    map.on('load', function() {
      directions.setDestination([-118.2436, 34.0522]);
    });
  });
})
