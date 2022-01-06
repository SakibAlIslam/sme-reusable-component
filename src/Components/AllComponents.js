import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import styled from "styled-components";
import Input from "./Input";

// Wrapper
const Wrapper = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
  border-radius: 4px;
  /*  */
  margin-top: 30px;
`;
const TableHeader = styled.div`
  padding: 25px 30px;
  display: flex;
  align-items: center;
`;
const TableName = styled.div`
  margin-right: 47px;
`;
const NameHeading = styled.h4`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
  color: rgba(50, 50, 50, 0.7);
`;

const tableCell = [
  {
    height: 52,
    paddingTop: 0,
    paddingBottom: 0,
    lineHeight: 0,
    paddingLeft: "23px",
  },
];
console.log(tableCell);
function createData(po, name, orderQty, receiveQty, warehouse, remainingQty) {
  return { po, name, orderQty, receiveQty, warehouse, remainingQty };
}

const rows = [
  createData(
    "POEM987",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM988",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM989",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM980",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM986",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
  createData(
    "POEM985",
    "Horlicks Health And Nutrition",
    357357,
    357357,
    357357,
    34563
  ),
];

export default function AllComponents() {
  return (
    <div>
        <h1 style={{color:"black"}}>All Components</h1>
        {/* text field */}
        <>
        <Input label={'Enter a Input'} />
        </>
      {/* table */}
      <>
        <Wrapper>
          <TableHeader>
            <TableName>
              <NameHeading>ItemList</NameHeading>
            </TableName>
            <Input placeholderTxt="Enter a challan no" />
            <Input placeholderTxt="Enter a challan no" />
            <Input placeholderTxt="Enter a challan no" />
            {/* Checkbox */}
            <FormGroup>
              <FormControlLabel
                sx={{
                  "& .MuiTypography-root": { fontSize: 14, letterSpacing: 0.2 },
                }}
                control={<Checkbox defaultChecked />}
                label="Recive All"
              />
            </FormGroup>
          </TableHeader>
          <TableContainer sx={{ maxHeight: 530 }} component={Paper}>
            <Table
              stickyHeader
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      height: 55,
                      padding: 0,
                      paddingLeft: "23px",
                      backgroundColor: "#F5F5F5",
                    }}
                  >
                    PO NO.
                  </TableCell>
                  <TableCell
                    sx={{
                      height: 55,
                      padding: 0,
                      paddingLeft: "23px",
                      backgroundColor: "#F5F5F5",
                    }}
                    align="left"
                  >
                    Name
                  </TableCell>
                  <TableCell
                    sx={{
                      height: 55,
                      padding: 0,
                      paddingLeft: "23px",
                      backgroundColor: "#F5F5F5",
                    }}
                    align="left"
                  >
                    Order QTY
                  </TableCell>
                  <TableCell
                    sx={{
                      height: 55,
                      padding: 0,
                      paddingLeft: "23px",
                      backgroundColor: "#F5F5F5",
                    }}
                    align="left"
                  >
                    Receive QTY
                  </TableCell>
                  <TableCell
                    sx={{
                      height: 55,
                      padding: 0,
                      paddingLeft: "23px",
                      backgroundColor: "#F5F5F5",
                    }}
                    align="left"
                  >
                    Warehouse
                  </TableCell>
                  <TableCell
                    sx={{
                      height: 55,
                      padding: 0,
                      paddingLeft: "23px",
                      backgroundColor: "#F5F5F5",
                    }}
                    align="left"
                  >
                    Remaining QTY
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.po}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={tableCell}>
                      {row.po}
                    </TableCell>
                    <TableCell align="left" sx={tableCell}>
                      {row.name}
                    </TableCell>
                    <TableCell align="left" sx={tableCell}>
                      {row.orderQty}
                    </TableCell>
                    <TableCell align="left" sx={tableCell}>
                      {row.receiveQty}
                    </TableCell>
                    <TableCell align="left" sx={tableCell}>
                      {row.warehouse}
                    </TableCell>
                    <TableCell align="left" sx={tableCell}>
                      {row.remainingQty}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Wrapper>
      </>
    </div>
  );
}
