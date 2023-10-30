export function geoLocation() {
    const latlng = ref({lat:0.0, lng:0.0});
    const reset = () => {latlng.value = {lat:3.0, lng:3.0}};
    const exe = async () => {
        const pos: GeolocationPosition = await getCurrentPositionAsPromise();
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        latlng.value = {lat: lat, lng: lng};
    }

    const getCurrentPositionAsPromise = (): Promise<GeolocationPosition> => {
        const promise = new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(
            (success) => {
              resolve(success);
            },
            (error) => {
              reject(error);
            }
          );
        });
        return promise;
      };


    return {
      latlng,
      reset,
      exe,
    };
  }
  