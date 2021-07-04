import { simulate, rand, wait } from "google-maps-autopilot";

const init = async () => {
  const map = new google.maps.Map(document.getElementById("root"), {
    center: new google.maps.LatLng(0, 0),
    zoom: 2,
    mapTypeControl: false,
    panControl: false,
    zoomControl: true,
    streetViewControl: false,
    scaleControl: false,
    gestureHandling: "greedy",
    styles: [
      {
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
    ],
    mapTypeId: google.maps.MapTypeId.SATELLITE,
  });

  if (window.location.search.includes("autopilot")) {
    await wait(rand(1000, 5000));
    await simulate(map);
  }
};

google.maps.event.addDomListener(window, "load", init);
