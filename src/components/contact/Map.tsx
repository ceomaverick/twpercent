"use client";

import Script from "next/script";

const Map = () => {
  const mapStyles = [
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{ saturation: 36 }, { color: "#000000" }, { lightness: 40 }],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }],
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [{ visibility: "off" }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#000000" }, { lightness: 20 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#000000" }, { lightness: 17 }, { weight: 1.2 }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { lightness: 20 }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { lightness: 21 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#000000" }, { lightness: 17 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#000000" }, { lightness: 29 }, { weight: 0.2 }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { lightness: 18 }],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { lightness: 16 }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { lightness: 19 }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#000000" }, { lightness: 17 }],
    },
  ];

  return (
    <>
      <div id="map-canvas" className="w-full h-[250px] md:h-[450px] bg-[#eee]"></div>
      <Script
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDU2UPfsoDWro-yvd58dfmnE9fBsgCO0S8"
        strategy="afterInteractive"
        onLoad={() => {
          // @ts-ignore
          const google = window.google;
          if (google && google.maps) {
            const mapOptions = {
              center: { lat: 19.019295, lng: 73.101328 },
              zoom: 15,
              scrollwheel: false,
              styles: mapStyles,
            };
            const mapElement = document.getElementById("map-canvas");
            if (mapElement) {
              const map = new google.maps.Map(mapElement, mapOptions);
              const pinImage = "/img/svg/pin.svg";
              const latLng = new google.maps.LatLng(19.019295, 73.101328);
              new google.maps.Marker({
                position: latLng,
                map: map,
                icon: pinImage,
              });
            }
          }
        }}
      />
    </>
  );
};

export default Map;
