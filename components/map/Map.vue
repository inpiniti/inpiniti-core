<template>
  <div class="flex flex-col bg-white rounded-xl p-4 gap-4">
    <div>map</div>
    <div
      class="w-full h-96 border-2 rounded-xl overflow-hidden map"
      id="map"
    ></div>
  </div>
</template>
<script setup lang="ts">
import L from "leaflet";
import "leaflet-mouse-position";
import "leaflet-mouse-position/src/L.Control.MousePosition.css";
import "leaflet-draw";
import "leaflet-draw/dist/leaflet.draw.css";

onMounted(() => {
  const MAP_BOX_BASE_MAP_URL =
    "https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token=";
  const MAP_BOX_TOKEN =
    "pk.eyJ1IjoiZWNvbWFyaW5lIiwiYSI6ImNrM3dwaTNxdjAzeGkza28yaDFkMXY3MHUifQ.g_cC66s0HmnCIuT1B0ZagA";
  const baseMapTiles = L.tileLayer(MAP_BOX_BASE_MAP_URL + MAP_BOX_TOKEN, {
    SRS: "EPSG:3857",
    maxZoom: 15,
    tileSize: 512,
    zoomOffset: -1,
    attribution: "© OpenStreetMap",
  });
  const mapSetting = {
    center: [35.1098, 129.0621],
    zoomlevel: 3,
    basemap: "osm",
    mapStyle: "normal",
    refreshPeriod: 1,
  };
  const map = L.map("map", {
    minZoom: 2,
    maxZoom: 20,
    maxBounds: L.latLngBounds([-90, -250], [90, 550]),
    worldCopyJump: false,
    layers: [baseMapTiles],
  }).addLayer(toRaw(baseMapTiles));

  map.setView(mapSetting.center, mapSetting.zoomlevel);

  const osm = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap",
  });
});
</script>
