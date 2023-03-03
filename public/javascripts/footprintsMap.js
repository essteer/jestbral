mapboxgl.accessToken = mapboxToken;
// const bounds = [
//   [113.535, 21.85], // Southwest coordinates
//   [114.85, 22.85], // Northeast coordinates
// ];

const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/essteer/clerx9p4b000701o57iopevvc", // style URL
  center: [114.136253, 22.356514], // starting position [lng, lat]
  zoom: 9, // starting zoom
  // maxBounds: bounds,
});
