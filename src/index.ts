import { wait } from "./util";
import { rand, randomCity } from "./random";
import { simulate } from "./autopilot";

const init = async () => {
  const map = new google.maps.Map(document.getElementById("root"), {
    center: new google.maps.LatLng(0, 0),
    zoom: 2,
    mapTypeControl: false,
    panControl: false,
    zoomControl: true,
    streetViewControl: false,
    scaleControl: false,
    styles: [
      {
        elementType: "geometry",
        stylers: [{ visibility: "off" }],
      },
    ],
  });

  if (window.location.search.includes("autopilot")) {
    await wait(rand(1000, 5000));
    await simulate(map, randomCity());
  }
};

google.maps.event.addDomListener(window, "load", init);
