import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SelectedBpn } from './statistik/selected';
import { GridBpn } from './statistik/GridBpn';
import axios from 'axios';
import { GridBpnTwo } from './statistik/GridBpnTwo';

const ProSpan = styled('span')({
  display: 'inline-block',
  height: '1em',
  width: '1em',
  verticalAlign: 'middle',
  marginLeft: '0.3em',
  marginBottom: '0.08em',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: 'url(https://mui.com/static/x/pro.svg)',
});

function Label({ componentName, valueType, isProOnly }) {
  const content = (
    <span>
      <strong>Model</strong> Silahkan {valueType} pilih Hasil Prediksi
    </span>
  );

  if (isProOnly) {
    return (
      <Stack direction="row" spacing={0.5} component="span">
        <Tooltip title="Included on Pro package">
          <a
            href="https://mui.com/x/introduction/licensing/#pro-plan"
            aria-label="Included on Pro package"
          >
            <ProSpan />
          </a>
        </Tooltip>
        {content}
      </Stack>
    );
  }

  return content;
}

export const Dashboard = ({ title }) => {
  const [selectedOption, setSelectedOption] = useState('Prediksi Lstm');
  const [prediksiLstm,setPrediksiLstm] = useState()
  const [testingLstm,setTestingLstm] = useState()
  const [prediksiRf,setPrediksiRf] = useState()
  const [testingRf,setTestingRf] = useState()
  const [gridData, setGridData] = useState([]);


  useEffect (() => {
    const fetchData = async() => {
      try {
        //prediksi lstm
        const response = await axios.get('http://localhost:5000/prediksi-lstm');
        const cleanedData = response.data.map(item => ({
          ...item,
          Provinsi: item.Provinsi,
          Prediksi_Harga: Math.floor(parseFloat(item.Prediksi_Harga)),
          Tanggal: item.Tanggal
        })).filter(item => !isNaN(item.Prediksi_Harga));

        //testing lstm
        const testingResponse = await axios.get('http://localhost:5000/testing-lstm');
        const testingData = testingResponse.data.map(item => ({
          ...item,
          Index:item.Index,
          Provinsi: item.Provinsi,
          Harga_Sebenarnya: Math.floor(parseInt(item.Harga_Sebenarnya)),
          Prediksi_Harga: Math.floor(parseFloat(item.Prediksi_Harga)),
          Tanggal: item.Tanggal
        })).filter(item => !isNaN(item.Harga_Sebenarnya) && !isNaN(item.Prediksi_Harga));


        //prediksi random forest
        const responseRf = await axios.get('http://localhost:5000/prediksi-rf');
        const cleanedDataRf = responseRf.data.map(item => ({
          ...item,
          Provinsi: item.Provinsi,
          Prediksi_Harga: Math.floor(parseFloat(item.Prediksi_Harga)),
          Tanggal: item.Tanggal
        })).filter(item => !isNaN(item.Prediksi_Harga));

        //testing random forest
        const testingResponseRf = await axios.get('http://localhost:5000/testing-rf');
        const testingDataRf = testingResponseRf.data.map(item => ({
          ...item,
          Index:item.Index,
          Provinsi: item.Provinsi,
          Harga_Sebenarnya: Math.floor(parseInt(item.Harga_Sebenarnya)),
          Prediksi_Harga: Math.floor(parseFloat(item.Prediksi_Harga)),
          Tanggal: item.Tanggal
        })).filter(item => !isNaN(item.Harga_Sebenarnya) && !isNaN(item.Prediksi_Harga));




        setPrediksiLstm(cleanedData);
        setTestingLstm(testingData);
        setPrediksiRf(cleanedDataRf);
        setTestingRf(testingDataRf);
        
        // if (selectedOption === 'Prediksi Lstm') {
        //   setGridData(prediksiData);
        // } else if (selectedOption === 'Testing Lstm') {
        //   setGridData(testingData);
        // }
        
        setGridData(cleanedData)
      } catch (error) {
        console.error("error fetching data", error)
      }
    }
    fetchData()
  },[selectedOption]);
  
  useEffect(() => {
    if (selectedOption === 'Prediksi Lstm') {
      setGridData(prediksiLstm);
    } else if (selectedOption === 'Testing Lstm') {
      setGridData(testingLstm);
    }else if(selectedOption === 'Prediksi Random Forrest'){
      setGridData(prediksiRf)
    }else if(selectedOption === 'Testing Random Forrest'){
      setGridData(testingRf)
    }
    // Tambahkan else if untuk opsi lainnya jika ada
  }, [selectedOption, prediksiLstm, testingLstm,prediksiRf,testingRf]);

  return (
    <div className='mt-10 flex flex-col sm:flex-row items-center sm:items-start lg:items-center lg:px-32'>
      <div className='sm:w-1/2 sm:pr-4'>
        <h1 className='text-center text-2xl font-bold text-green_three sm:text-left lg:text-4xl'>Daftar Statistik Harga Beras</h1>
        <div className='mt-5 flex justify-center sm:justify-start lg:ps-2'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DemoItem label={<Label componentName="DatePicker" valueType="date" />}>
                {/* <DatePicker /> */}
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className='flex flex-col justify-center ps-4 lg:ps-0'>
        <SelectedBpn title={"algoritma"} setSelectedOption={setSelectedOption} />
        </div>
      </div>
      <div className='bg-white mt-4 sm:mt-0 border-4 border-green_two sm:w-1/2 sm:ml-4 lg:mt-10 lg:w-full'>
        {selectedOption === 'Prediksi Lstm' && <GridBpn rows={gridData} />}
        {selectedOption === 'Prediksi Random Forrest' && <GridBpn rows={gridData} />}
        {selectedOption === 'Testing Lstm' && <GridBpnTwo rows={gridData} />}
        {selectedOption === 'Testing Random Forrest' && <GridBpnTwo rows={gridData} />}
      </div>
    </div>
  );
}
