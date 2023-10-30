<template>
    <VitePwaManifest />
    <div>
        <h1>GeoLocation Sample</h1>
        <div>Latlng:{{ latlng }}</div>
        <div>
          <button @click="() => reset()">リセット</button>
          <button @click="() => exe()">現在地</button>
          <ClientOnly>
            <div
              v-if="$pwa?.offlineReady || $pwa?.needRefresh"
              class="pwa-toast"
              role="alert"
            >
              <div class="message">
                <span v-if="$pwa.offlineReady">
                  App ready to work offline
                </span>
                <span v-else>
                  New content available, click on reload button to update.
                </span>
              </div>
              <button
                v-if="$pwa.needRefresh"
                @click="$pwa.updateServiceWorker()"
              >
                Reload
              </button>
              <button @click="$pwa.cancelPrompt()">
                Close
              </button>
            </div>
            <div
              v-if="$pwa?.showInstallPrompt && !$pwa?.offlineReady && !$pwa?.needRefresh"
              class="pwa-toast"
              role="alert"
            >
              <div class="message">
                <span>
                  Install PWA
                </span>
              </div>
              <button @click="$pwa.install()">
                Install
              </button>
              <button @click="$pwa.cancelInstall()">
                Cancel
              </button>
            </div>
          </ClientOnly>
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