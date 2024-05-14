import React, { useState } from "react";
import { MapContainer, GeoJSON, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapPangan.css";
import { BarBpn } from "../statistik/BarsBpn";
import { RowBpn } from "../statistik/RowBpn";

export const MapPangan = ({ countries }) => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  
  const mapStyle = {
    fillColor: "green",
    weight: 2,
    color: "yellow",
    fillOpacity: 1,
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: (e) => highlightFeature(e),
      mouseout: (e) => resetHighlight(e),
      click: () => {
        setSelectedProvince(feature.properties.Propinsi);
        setModalVisible(true);
      },
    });

    layer.bindTooltip(feature.properties.Propinsi, {
      permanent: false,
      direction: "top",
    });

    // layer.bindTooltip(feature.properties.Propinsi, {
    //   permanent: true,
    //   direction: "center",
    //   className: "province-label", // Add a custom class for styling
    // });
  };

  const highlightFeature = (e) => {
    const layer = e.target;
    layer.setStyle({
      weight: 5,
      color: "#666",
      dashArray: "",
      fillOpacity: 0.7,
    });
  };

  const resetHighlight = (e) => {
    const layer = e.target;
    layer.setStyle(mapStyle); // Use original style defined in mapStyle
  };

  console.log(countries)

  // const provinceCapitals = countries.Features.map(feature => {
  //   // Flattening the coordinates array to find a central point
  //   const coordinates = feature.geometry.coordinates.flat(Infinity);
  //   const capitalCoordinates = coordinates.length > 0 ? coordinates[0] : [0, 0];
  //   return {
  //     name: feature.properties.Propinsi,
  //     coordinates: [capitalCoordinates[1], capitalCoordinates[0]]
  //   };
  // });
  
  return (
    <>
      <MapContainer style={{ height: "90vh" }} zoom={5} center={[-2.5, 118]}>
        <GeoJSON
          data={countries}
          style={mapStyle}
          onEachFeature={onEachFeature}
        ></GeoJSON>
        {/* {provinceCapitals.map((province, idx) => (
          <Marker key={idx} position={province.coordinates}>
            <Popup>{properties.Propinsi}</Popup>
          </Marker>
        ))} */}
      </MapContainer>

      {modalVisible && (
        <div
          id="static-modal"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]"
        >
          <div className="relative p-4 w-full max-w-2xl max-h-full">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex justify-between items-center p-4 md:p-5 border-b rounded-t bg-green_two dark:border-gray-600">
                <div className="flex-1 flex justify-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    STATISTIK {selectedProvince}
                  </h3>
                </div>
                <button
                  type="button"
                  className="text-yellow bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={() => setModalVisible(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-2 space-y-0">
                <BarBpn></BarBpn>
                <RowBpn></RowBpn>
              </div>
              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-white focus:outline-none bg-green_three rounded-lg border border-gray-200 hover:bg-green_one hover:text-red-500 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  onClick={() => setModalVisible(false)}
                >
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
