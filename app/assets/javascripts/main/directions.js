define([
  'mapbox-gl'
], function(mapboxgl) {

  this.loadDirections = function(map) {
    var _this = this;

    require(['mapbox-gl-directions'], function() {
      var directions = _this.addDirections(map);

      map.on('load', function(e) {
        directions.setDestination([-118.2436, 34.0522]);
      });
    });
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
