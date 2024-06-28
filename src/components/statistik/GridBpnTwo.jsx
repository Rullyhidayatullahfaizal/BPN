import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "Index", 
    headerName: "Index", 
    width: 150 
  },
  { 
    field: "Provinsi", 
    headerName: "Provinsi", 
    width: 150 
  },
  {
    field: "Prediksi_Harga",
    headerName: "Prediksi Harga",
    width: 150,
    editable: true,
  },
  {
    field: "Harga_Sebenarnya",
    headerName: "Harga Sebenarnya",
    width: 150,
    editable: true,
  },
  {
    field: "Tanggal",
    headerName: "Tanggal",
    width: 150,
    editable: true,
  },
];

export const GridBpnTwo = ({ rows = [] }) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => `${row.Provinsi}-${row.Tanggal}-${row.Index}`}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};
