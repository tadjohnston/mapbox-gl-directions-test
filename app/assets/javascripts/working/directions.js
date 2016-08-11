define([
  'mapbox-gl-directions'
], function() {

  this.loadDirections = function() {
    return new mapboxgl.Directions({
      container: 'directions',
      interactive: false
    });
  };
});
