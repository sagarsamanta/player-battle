import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import classes from "./Player.module.css";
import TopBar from "../TopBar/TopBar";
import ReportCard from "../card/ReportCard";
import cross from "../../asset/cross.png";
import down from "../../asset/down.png";
import up from "../../asset/up.png";
import { Button, IconButton, Tooltip } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Switch from "@mui/material/Switch";
const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
    headerAlign: "center",
    align: "center",
  },

  {
    field: "firstName",
    headerAlign: "center",
    align: "center",
    headerName: "First name",
    width: 150,
  },
  {
    field: "lastName",
    headerAlign: "center",
    align: "center",
    headerName: "Last name",
    width: 150,
  },

  {
    field: "age",
    headerAlign: "center",
    align: "center",
    headerName: "Age",
    type: "number",
    width: 110,
  },
  {
    field: "2",
    headerAlign: "center",
    align: "center",
    headerName: "STATUS",
    sortable: false,
    filterable: false,
    disableExport: true,
    width: 150,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Tooltip title="Change Status">
            <Switch
              checked={true}
              // onChange={() => setLoading(!loading)}
              name="loading"
              color="primary"
            />
          </Tooltip>
        </div>
      );
    },
  },

  {
    field: "1",
    headerAlign: "center",
    align: "center",
    headerName: "ACTIONS",
    sortable: false,
    filterable: false,
    disableExport: true,
    width: 150,
    renderCell: (cellValues) => {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <IconButton
            aria-label="view"
            style={{ outline: "none" }}
            onClick={(event) => {
              // handleViewCustomer(cellValues.row);
            }}
          >
            <Tooltip title="View">
              <VisibilityIcon color="success" />
            </Tooltip>
          </IconButton>
          <IconButton
            aria-label="view"
            style={{ outline: "none" }}
            onClick={(event) => {
              // handleViewCustomer(cellValues.row);
            }}
          >
            <Tooltip title="Ban">
              <BlockIcon color="error" />
            </Tooltip>
          </IconButton>
        </div>
      );
    },
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

export default function Player() {
  const [selectedPlayers, setSelectedPlayers] = useState([]);
  const handleCheckboxSelection = (id) => {
    console.log(id)
    setSelectedPlayers(id)
  };
  return (
    <>
      <TopBar title={"Our Player's"} />
      <div style={{ display: "flex", gap: "15px", marginTop: "1rem" }}>
        <ReportCard title="ACTIVE PLAYERS" imgUrl={up} count={20} />
        <ReportCard title="In-ACTIVE PLAYERS" imgUrl={cross} count={10} />
        <ReportCard title="BAN PLAYERS" imgUrl={down} count={3} />
        <ReportCard title="NEW PLAYERS" imgUrl={cross} count={2} />
      </div>
      {selectedPlayers.length > 0 && (
        <div className={classes.banBtn}>
          <Tooltip title="Ban Player's">
            <Button
              variant="outlined"
              color="error"
              startIcon={<BlockIcon color="error" />}
            >
              BAN
            </Button>
          </Tooltip>
        </div>
      )}

      <div className={classes.wrapper}>
        <Box sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            getRowId={(row) => row.id}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
            rowsPerPageOptions={[2, 5, 10, 20, 50, 100]}
            pagination
            onSelectionModelChange={handleCheckboxSelection}
          />
        </Box>
      </div>
    </>
  );
}
