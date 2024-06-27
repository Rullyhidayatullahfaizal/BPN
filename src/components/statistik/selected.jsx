import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const  SelectedBpn = ({title,setSelectedOption}) => {

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 265 }}>
        <InputLabel id="demo-simple-select-autowidth-label">{title}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleChange}
          autoWidth
          label="Age"
          defaultValue="Prediksi Lstm"
          
        >
          
          <MenuItem value="Prediksi Lstm">Prediksi Lstm</MenuItem>
          <MenuItem value="Testing Lstm">Testing Lstm</MenuItem>
          <MenuItem value="Prediksi Random Forrest">Prediksi Random Forrest</MenuItem>
          <MenuItem value="Testing Random Forrest">Testing Random Forrest</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}