import React, { useState } from 'react';
import { MapContainer, GeoJSON, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./MapPangan.css"

export const MapPangan = ({ countries }) => {
  const [selectedProvince, setSelectedProvince] = useState(null);

  const mapStyle = {
    fillColor: "green",
    weight: 1,
    color: "yellow",
    fillOpacity: 1,
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      mouseover: (e) => highlightFeature(e),
      mouseout: (e) => resetHighlight(e),
      click: () => handleFeatureClick(feature),
    });

    // Bind a tooltip to each feature
    layer.bindTooltip(feature.properties.Propinsi, {
      permanent: false,
      direction: "top",
      className: "custom-tooltip"
    });
  };

  // Function to highlight feature on hover
  const highlightFeature = (e) => {
    const layer = e.target;
    layer.setStyle({
      weight: 5,
      color: '#666',
      dashArray: '',
      fillOpacity: 0.7
    });
  };

  // Function to reset highlight when not hovered
  const resetHighlight = (e) => {
    const layer = e.target;
    layer.setStyle({
      weight: 2,
      color: 'red',
      fillOpacity: 1,
    });
  };

  // Function to handle feature click and show modal
  const handleFeatureClick = (feature) => {
    setSelectedProvince(feature.properties.Propinsi);
  };

  return (
    <div className='mt-10'>
      <div>
        <h1 className='text-center text-4xl font-bold text-green_three mb-10'>Pangan Indonesia</h1>
      </div>
      <MapContainer style={{ height: "90vh" }} zoom={5} center={[-2.5, 118]}>
        <GeoJSON data={countries} style={mapStyle} onEachFeature={onEachFeature}></GeoJSON>
      </MapContainer>
      {selectedProvince && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-5 rounded-lg shadow-lg">
            <button className="absolute top-0 right-0 mt-2 mr-2" onClick={() => setSelectedProvince(null)}>
              <span className="text-gray-600 hover:text-gray-900 text-2xl">&times;</span>
            </button>
            <h2 className="text-xl font-bold mb-4">{selectedProvince}</h2>
            <p>Informasi lebih lanjut tentang {selectedProvince}.</p>
          </div>
        </div>
      )}
    </div>
  );
};
