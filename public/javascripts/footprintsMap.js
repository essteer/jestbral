mapboxgl.accessToken = mapboxToken;

const map = new mapboxgl.Map({
  container: "map", // container ID
  // style: "mapbox://styles/essteer/clerx9p4b000701o57iopevvc", // admin0
  style: "mapbox://styles/essteer/clf4u98nm008k01qaif4rt0il", // admin1
  center: [114.136253, 22.356514], // starting position [lng, lat]
  zoom: 4, // starting zoom
  minZoom: 3,
});
