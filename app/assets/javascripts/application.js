// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require bootstrap

import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFkYXp6YW0iLCJhIjoiY2p3N3V0emJ5MG9mNTRibzRvZWtwbjEycyJ9.tNZ2WFYkQpfxWiZM044i7Q';
const map = new mapboxgl.Map({
  container: 'mapbox',
  style: 'mapbox://styles/mapbox/streets-v11'
});
