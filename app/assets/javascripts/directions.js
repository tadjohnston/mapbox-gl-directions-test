define([
  'mapbox-gl'
], function(mapboxgl) {

  this.loadDirections = function(map) {
    require(['mapbox-gl-directions'], (function(_this) {
      var directions = _this.addDirections(map);
      directions.setDestination([34.0522,-118.2436]);
    })(this));
  };

  this.addDirections = function(map) {
    var directions = new mapboxgl.Directions({
      container: 'directions',
      interactive: false
    });

    map.addControl(directions);

    return directions;
  };
});
