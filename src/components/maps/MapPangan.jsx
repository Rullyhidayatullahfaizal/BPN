import React, { useEffect, useState } from "react";
import { MapContainer, GeoJSON, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapPangan.css";
import { ModalContent } from "./ModalContent"; 
import { BarBpn } from "../statistik/BarsBpn";
import { RowBpn } from "../statistik/RowBpn";
import { GridBpn } from "../statistik/GridBpn";
import axios from "axios";
import { BarBpnTwo } from "../statistik/BarsBpnTwo";
import { RowBpnTwo } from "../statistik/RowBpnTwo";

export const MapPangan = ({ countries }) => {
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalContentVisible, setModalContentVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('LSTM'); // Menyimpan opsi yang dipilih
  const [modalContent, setModalContent] = useState({ title: "", content: "" });
  const [prediksiData,setPrediksiData] = useState([]);
  const [dataset, setDataset] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredDataTestingLstm, setFilteredDataTestingLstm] = useState([]);
  const [datasetRandomForest,setDatasetRandomForest] = useState([])
  const [filteredDataTestingRf, setFilteredDataTestingRf] = useState([]);
  const [dataTestingrf,setDataTestingrf] = useState([]) 
  const [filteredPrediksiRf,setFilteredPrediksiRf] = useState([])





//hasil prediksi lstm
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/prediksi-lstm');
        const cleanedData = response.data.map(item => ({
          ...item,
          Prediksi_Harga: Math.floor(parseFloat(item.Prediksi_Harga))
        })).filter(item => !isNaN(item.Prediksi_Harga));
        setPrediksiData(cleanedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);


// data testing lstm
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/testing-lstm');
      console.log(response.data)
      const cleanedData = response.data.map(item => ({
        ...item,
        Tanggal: item.Tanggal,
        Harga_Sebenarnya: Math.floor(parseInt(item.Harga_Sebenarnya)),
        Prediksi_Harga: Math.floor(parseFloat(item.Prediksi_Harga))
      })).filter(item => !isNaN(item.Harga_Sebenarnya) && !isNaN(item.Prediksi_Harga));
      setDataset(cleanedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);


// hasil prediksi random forrest
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/prediksi-rf');
      const cleanedData = response.data.map(item => ({
        ...item,
        Prediksi_Harga: Math.floor(parseFloat(item.Prediksi_Harga))
      })).filter(item => !isNaN(item.Prediksi_Harga));
      setDatasetRandomForest(cleanedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);

//hasil testing random forrest
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/testing-rf');
      console.log(response.data)
      const cleanedData = response.data.map(item => ({
        ...item,
        Tanggal: item.Tanggal,
        Harga_Sebenarnya: Math.floor(parseInt(item.Harga_Sebenarnya)),
        Prediksi_Harga: Math.floor(parseFloat(item.Prediksi_Harga))
      })).filter(item => !isNaN(item.Harga_Sebenarnya) && !isNaN(item.Prediksi_Harga));
    setDataTestingrf(cleanedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchData();
}, []);


// Filter prediksiData based on selectedProvince lstm
useEffect(() => {
  if (selectedProvince && prediksiData.length > 0) {
    const filtered = prediksiData.filter(data => data.Provinsi === selectedProvince);
    setFilteredData(filtered);
    console.log("Filtered Data for Province (prediksi lstm):", selectedProvince, filtered);
  }
}, [selectedProvince, prediksiData]);

// Filter dataset based on selectedProvince lsm testing
useEffect(() => {
  if (selectedProvince && dataset.length > 0) {
    const filtered = dataset.filter(data => data.Provinsi === selectedProvince);
    setFilteredDataTestingLstm(filtered);
    console.log("Filtered Data for Province (testing lstm):", selectedProvince, filtered);
  }
}, [selectedProvince, dataset]);


//Filter prediksiData based on selectedProvince random forrest
useEffect(() => {
  if (selectedProvince && datasetRandomForest.length > 0) {
    const filtered = datasetRandomForest.filter(data => data.Provinsi === selectedProvince);
    setFilteredDataTestingRf(filtered);
    console.log("Filtered Data for Province (prediksi lstm):", selectedProvince, filtered);
 }
}, [selectedProvince, datasetRandomForest]);

// Filter dataset based on selectedProvince random forrest testing
useEffect(() => {
  if (selectedProvince && dataTestingrf.length > 0) {
    const filtered = dataTestingrf.filter(data => data.Provinsi === selectedProvince);
    setFilteredPrediksiRf(filtered);
    console.log("Filtered Data for Province (testing lstm):", selectedProvince, filtered);
  }
}, [selectedProvince, dataTestingrf]);
  
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
            <h3 className="font-semibold mb-2">Pendahuluan</h3>
            <p>
              Laporan ini menyajikan hasil analisis data prediksi harga beras menggunakan model LSTM dan Random Forest. Tujuan dari laporan ini adalah untuk memberikan wawasan tentang tren harga beras di berbagai provinsi di Indonesia.
            </p>
          
            <h3 className="font-semibold mt-4 mb-2">Metodologi</h3>
            <p>
              Data dikumpulkan dari sumber terpercaya dan dianalisis menggunakan dua model utama: LSTM dan Random Forest. Prediksi harga beras dilakukan berdasarkan data historis dan faktor-faktor yang mempengaruhi harga.
            </p>
          
            <h3 className="font-semibold mt-4 mb-2">Hasil</h3>
            <p>
              Hasil analisis menunjukkan bahwa model LSTM memiliki tingkat akurasi yang lebih tinggi dalam memprediksi harga beras dibandingkan dengan Random Forest. Namun, kedua model memberikan wawasan yang berharga tentang tren harga beras.
            </p>
          
            <h3 className="font-semibold mt-4 mb-2">Kesimpulan</h3>
            <p>
              Analisis ini membantu dalam memahami fluktuasi harga beras dan dapat digunakan sebagai dasar untuk pengambilan keputusan terkait kebijakan pangan di Indonesia. Disarankan untuk menggunakan hasil prediksi ini dalam perencanaan strategis jangka panjang.
            </p>
          </div>
          )}
        >
          Laporan
        </button>
        <button
          className="bg-green_three px-5 py-2 text-white rounded hover:text-yellow hover:bg-red-600"
          onClick={() => openModal("Ket Indikator", 
            <div>
            <h3 className="font-semibold mb-2">Ket Indikator</h3>
            <p>
              Dalam analisis ini, beberapa indikator kunci digunakan untuk mengevaluasi dan memprediksi harga beras. Berikut penjelasan dari setiap indikator:
            </p>
          
            <ul className="list-disc ml-5 mt-2">
              <li>
                <strong>Harga Sebenarnya:</strong> Harga pasar aktual beras di setiap provinsi.
              </li>
              <li>
                <strong>Prediksi Harga:</strong> Harga beras yang diprediksi oleh model berdasarkan data historis.
              </li>
              <li>
                <strong>Tanggal:</strong> Tanggal data dicatat atau diprediksi.
              </li>
              <li>
                <strong>Provinsi:</strong> Lokasi geografis data yang dikumpulkan atau diprediksi.
              </li>
            </ul>
            <p className="mt-2">
              Indikator-indikator ini penting untuk memahami tren harga beras dan faktor-faktor yang mempengaruhinya.
            </p>
          </div>
          )}
        >
          Ket Indikator
        </button>
        {/* <button
          className="bg-green_three px-5 py-2 text-white rounded hover:text-yellow hover:bg-red-600"
          onClick={() => openModal("Tabel Data", <GridBpn></GridBpn>)}
        >
          Tabel Data
        </button> */}
        <button
          className="bg-green_three px-5 py-2 text-white rounded hover:text-yellow hover:bg-red-600"
          onClick={() => openModal("Panduan", 
            <div>
            <h3 className="font-semibold mb-2">Panduan Penggunaan Dashboard</h3>
            <p>
              Dashboard ini dirancang untuk memberikan wawasan tentang prediksi harga beras di berbagai provinsi. Berikut adalah panduan untuk menggunakan dashboard ini:
            </p>
          
            <h4 className="font-semibold mt-4">Memilih Provinsi</h4>
            <p>
              Klik pada peta untuk memilih provinsi yang ingin Anda lihat. Data terkait provinsi tersebut akan ditampilkan dalam modal.
            </p>
          
            <h4 className="font-semibold mt-4">Menampilkan Data</h4>
            <p>
              Pilih opsi "LSTM" atau "Random Forest" untuk melihat hasil prediksi berdasarkan model yang dipilih. Data akan ditampilkan dalam bentuk grafik dan tabel.
            </p>
          
            <h4 className="font-semibold mt-4">Interaksi dengan Grafik</h4>
            <p>
              Arahkan kursor pada grafik untuk melihat nilai prediksi dan harga sebenarnya pada titik waktu tertentu. Gunakan tooltip untuk informasi lebih lanjut.
            </p>
          
            
          </div>          
        )}
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
            <div>
            <select
                className="mr-0 py-2 px-2 border rounded bg-green_two font-semibold border-green_three"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="LSTM">LSTM</option>
                <option value="RandomForest">Random Forest</option>
              </select>
            </div>
            <div className="flex-1 flex justify-center items-center mr-20">
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
            {selectedOption === 'LSTM' ? (
              <>
                <BarBpn dataset={filteredData}></BarBpn>
                <RowBpn dataset={filteredDataTestingLstm}></RowBpn>
              </>
            ) : (
              <>
              <BarBpnTwo dataset={filteredDataTestingRf}></BarBpnTwo>
              <RowBpnTwo dataset={filteredPrediksiRf} />
              </>
            )}
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
