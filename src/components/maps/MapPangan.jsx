import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapPangan.css";
import { ModalContent } from "./ModalContent"; 
import { BarBpn } from "../statistik/BarsBpn";
import { RowBpn } from "../statistik/RowBpn";
import { GridBpn } from "../statistik/GridBpn";
import axios from "axios";

export const MapPangan = ({ countries }) => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContentVisible, setModalContentVisible] = useState(false);
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const [prediksiData,setPrediksiData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/prediksi-lstm');
        setPrediksiData(response.data);
        // console.log(setPrediksiData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedProvince) {
      const filtered = prediksiData.filter(data => data.Provinsi === selectedProvince);
      setFilteredData(filtered);
      console.log("Filtered Data for Province:", selectedProvince, filtered);
    }
  }, [selectedProvince, prediksiData]);
  
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

  // console.log("daftar negara baris ke 61" + {countries})

  // const provinceCapitals = countries.Features.map(feature => {
  //   // Flattening the coordinates array to find a central point
  //   const coordinates = feature.geometry.coordinates.flat(Infinity);
  //   const capitalCoordinates = coordinates.length > 0 ? coordinates[0] : [0, 0];
  //   return {
  //     name: feature.properties.Propinsi,
  //     coordinates: [capitalCoordinates[1], capitalCoordinates[0]]
  //   };
  // });

  const openModal = (title, content) => {
    setModalContent({ title, content });
    setModalContentVisible(true);
  };
  
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
      <div className="flex gap-5 px-5 pt-2 text-3xl">
        <button
          className="bg-green_three px-5 py-2 text-white rounded hover:text-yellow hover:bg-red-600"
          onClick={() => openModal("Laporan", 
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, porro ipsa consequatur eum rem hic exercitationem illum, qui fugiat esse voluptatem, ad cumque quisquam beatae dolorem voluptate laborum aut earum!
          </div>)}
        >
          Laporan
        </button>
        <button
          className="bg-green_three px-5 py-2 text-white rounded hover:text-yellow hover:bg-red-600"
          onClick={() => openModal("Ket Indikator", <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus magnam quos eaque. Incidunt, voluptate est. Officia impedit, voluptate aliquam accusamus, velit sint at commodi porro quisquam harum qui omnis neque!
          </div>)}
        >
          Ket Indikator
        </button>
        <button
          className="bg-green_three px-5 py-2 text-white rounded hover:text-yellow hover:bg-red-600"
          onClick={() => openModal("Tabel Data", <GridBpn></GridBpn>)}
        >
          Tabel Data
        </button>
        <button
          className="bg-green_three px-5 py-2 text-white rounded hover:text-yellow hover:bg-red-600"
          onClick={() => openModal("Panduan", <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, veniam consequuntur! Cumque eum iste rem odio voluptatibus quia blanditiis ex aut quae amet? Odio veritatis consectetur asperiores officia quis explicabo.</div>)}
        >
          Panduan
        </button>
      </div>
      <ModalContent
        isVisible={modalContentVisible}
        onClose={() => setModalContentVisible(false)}
        title={modalContent.title}
        content={modalContent.content}
      />

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
                <BarBpn dataset={filteredData}></BarBpn>
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
