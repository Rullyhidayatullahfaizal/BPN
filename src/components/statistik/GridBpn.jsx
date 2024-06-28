import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
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
    field: "Tanggal",
    headerName: "Tanggal",
    width: 150,
    editable: true,
  },
];

export const GridBpn = ({ rows = [] }) => {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => `${row.Provinsi}-${row.Tanggal}`}
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
