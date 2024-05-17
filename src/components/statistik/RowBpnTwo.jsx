import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export const RowBpnTwo = () => {
  const getSize = () => {
    if (window.innerWidth >= 1024) {
      // lg breakpoint and above
      return { width: 600, height: 400 };
    }
    // default size for smaller screens
    return { width: 390, height: 300 };
  };

  const [size, setSize] = React.useState(getSize());

  React.useEffect(() => {
    const handleResize = () => {
      setSize(getSize());
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ width: size.width, height: size.height }}>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
            area: true,
          },
        ]}
        width={size.width}
        height={size.height}
      />
    </div>
  );
};
