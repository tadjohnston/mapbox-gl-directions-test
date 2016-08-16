define([
  'mapbox-gl',
], function(mapboxgl) {

  window.mapboxgl = mapboxgl

  mapboxgl.accessToken = 'pk.eyJ1IjoicmFkdGFkIiwiYSI6ImNpcHk5OWVlZDB4Z2lmdm0yZnRtMmg2cTUifQ.-tfDB4-E0HvPLUVRTcgCGg';
  var map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [-79.4512, 43.6568],
      zoom: 13
  });

  require(['mapbox-gl-directions'], function() {
    var directions = new mapboxgl.Directions({
      container: 'directions',
      interactive: false
    });

    map.on('load', function(e) {
      map.addControl(directions);
      directions.setDestination([-118.2436, 34.0522]);
    });
  });
})
