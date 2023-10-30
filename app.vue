<template>
  <VitePwaManifest />
  <div>
      <h1>GeoLocation Test1</h1>
      <div>Latlng:{{ latlng }}</div>
      <div>
        <button @click="() => reset()">リセット</button>
        <button @click="() => exe()">現在地</button>
        <button @click="$pwa.install()">
          Install
        </button>
        <button @click="$pwa.cancelInstall()">
          Cancel
        </button>
      </div>
  </div>
  <GoogleMap api-key="AIzaSyAvMUnjd1JxPZbshFoGjT1ue6geFnrkzhE" style="width: 100%; height: 500px" :center="latlng" :zoom="15">
  <Marker :options="{ position: latlng }" />
  </GoogleMap>
</template>

<script setup>
import { GoogleMap, Marker } from "vue3-google-map";
const { latlng, reset, exe } = geoLocation();
</script>