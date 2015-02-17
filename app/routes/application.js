import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.A([
      {title: "Home",  lat: -22.00103159, lng: -47.89820194, body: "Here is mah home", isInfoWindowVisible: true},
      {title: "Shop",  lat: -22.00027557, lng: -47.89845943, body: "Here is mah fav shop"},
      {title: "Foods", lat: -22.00381687, lng: -47.89592743, body: "Here is mah fav food"}
    ]);
  }
});
