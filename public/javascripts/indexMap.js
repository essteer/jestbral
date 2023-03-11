mapboxgl.accessToken = mapboxToken;
const boundsCQ = [
  [106.373749, 29.460243], // Southwest coordinates
  [106.706085, 29.635938], // Northeast coordinates
];

const mapCQ = new mapboxgl.Map({
  container: "mapCQ", // container ID
  style: "mapbox://styles/essteer/clf2ms4w9000r01mtver9af08", // style URL
  center: [106.56023, 29.560624], // starting position [lng, lat]
  zoom: 11.5, // starting zoom
  maxBounds: boundsCQ,
});

const boundsHK = [
  [113.19809, 21.846939], // Southwest coordinates
  [115.016327, 22.850767], // Northeast coordinates
];

const mapHK = new mapboxgl.Map({
  container: "mapHK", // container ID
  style: "mapbox://styles/mapbox/satellite-v9", // style URL
  center: [114.183025, 22.295713], // starting position [lng, lat]
  zoom: 11.5, // starting zoom
  minZoom: 9.5,
  maxBounds: boundsHK,
});
