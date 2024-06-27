import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

export const RowBpnTwo = ({ dataset }) => {


  const valueFormatter = (value) => `Rp ${value}`;


  const chartSetting = {
    yAxis: [
      {
        label: '',
      },
    ],
    series: [
      { dataKey: 'Harga_Sebenarnya', label: 'Harga Sebenarnya', valueFormatter },
      { dataKey: 'Prediksi_Harga', label: 'Harga Prediksi', valueFormatter }
    ],
    height: 300,
    sx: {
      [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
        transform: 'translateX(-10px)',
      },
    },
  };

  // Pastikan dataset tidak null atau undefined sebelum digunakan
  if (!dataset || dataset.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div style={{ width: '100%' }}>
      <LineChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'Tanggal' },
        ]}
        {...chartSetting}
      />
    </div>
  );
};