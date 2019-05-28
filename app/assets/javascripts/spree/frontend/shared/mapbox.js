import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoiamFkYXp6YW0iLCJhIjoiY2p3N3V0emJ5MG9mNTRibzRvZWtwbjEycyJ9.tNZ2WFYkQpfxWiZM044i7Q';
const map = new mapboxgl.Map({
  container: 'mapbox',
  style: 'mapbox://styles/mapbox/streets-v11'
});
