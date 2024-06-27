import React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { SelectedBpn } from './statistik/selected';
import { GridBpn } from './statistik/GridBpn';

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
      <strong>{componentName}</strong> Silahkan {valueType} pilih date
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
  return (
    <div className='mt-10 flex flex-col sm:flex-row items-center sm:items-start lg:items-center lg:px-32'>
      <div className='sm:w-1/2 sm:pr-4'>
        <h1 className='text-center text-2xl font-bold text-green_three sm:text-left lg:text-4xl'>Daftar Statistik Harga Beras</h1>
        <div className='mt-5 flex justify-center sm:justify-start lg:ps-2'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DemoItem label={<Label componentName="DatePicker" valueType="date" />}>
                <DatePicker />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className='flex flex-col justify-center ps-4 lg:ps-0'>
        <SelectedBpn title={"Beras"} />
        <SelectedBpn title={"Provinsi"} />
        </div>
      </div>
      <div className='bg-white mt-4 sm:mt-0 border-4 border-green_two sm:w-1/2 sm:ml-4 lg:mt-10 lg:w-full'>
        <GridBpn></GridBpn>
      </div>
    </div>
  );
}
