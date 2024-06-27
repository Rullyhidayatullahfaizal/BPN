import * as React from 'react';
import Stack from '@mui/material/Stack';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';


function TickParamsSelector({

}) {
  return (
    <Stack direction="column" justifyContent="space-between" sx={{ width: '100%' }}>
      
    </Stack>
  );
}


const valueFormatter = (value) => `Rp ${value}`;

const chartSetting = {
  yAxis: [
    {
      label: '',
    },
  ],
  series: [{ dataKey: 'Prediksi_Harga', label: 'Hasil Prediksi Random Forest ', valueFormatter }],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

export const BarBpnTwo = ({dataset}) => {
  const [tickPlacement, setTickPlacement] = React.useState('middle');
  const [tickLabelPlacement, setTickLabelPlacement] = React.useState('middle');
  

  return (
    <div style={{ width: '100%' }}>
      <TickParamsSelector
        tickPlacement={tickPlacement}
        tickLabelPlacement={tickLabelPlacement}
        setTickPlacement={setTickPlacement}
        setTickLabelPlacement={setTickLabelPlacement}
      />
      <BarChart
        dataset={dataset}
        xAxis={[
          { scaleType: 'band', dataKey: 'Tanggal', tickPlacement, tickLabelPlacement },
        ]}
        {...chartSetting}
      />
    </div>
  );
}







