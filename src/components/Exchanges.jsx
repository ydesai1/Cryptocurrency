import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import React from "react";
import { tokens } from "../theme";
import Header from "./Header";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Exchanges = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { data, iseFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.coins;
  console.log(globalStats);
  const mockDataTeam = [
    {
      id: 1,
      name: "Jon Snow",
      email: "jonsnow@gmail.com",
      age: 35,
      phone: "(665)121-5454",
      access: "admin",
    },
    {
      id: 2,
      name: "Cersei Lannister",
      email: "cerseilannister@gmail.com",
      age: 42,
      phone: "(421)314-2288",
      access: "manager",
    },
  ];
  console.log(mockDataTeam);
  const columns = [
    { field: "marketCap", headerName: "Exchanges", flex: 0.5 },
    { field: "24hVolume", headerName: "24h Trade Volume" },
    {
      field: "name",
      headerName: "Markets",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "change",
      headerName: "Change",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
  ];
  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={globalStats}
          getRowId={(row) => row.rank}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Exchanges;
