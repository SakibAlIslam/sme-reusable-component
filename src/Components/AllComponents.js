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
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import Skeleton from "@mui/material/Skeleton";
import axios from "axios";

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
// function createData(po, name, orderQty, receiveQty, warehouse, remainingQty) {
//   return { po, name, orderQty, receiveQty, warehouse, remainingQty };
// }

export default function AllComponents() {
  const [rows, setRows] = useState([]);
  const [loop, setLoop] = useState([]);
  const [pageSize, setPageSize] = useState(15);
  const [loading, setLoading] = useState(false);
  console.log("rows: ", rows);

  const getItemOffers = async (setLoading, setter) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
      setter(res?.data);
      setLoading(false);
    } catch (error) {
      setter("");
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoop([pageSize])
    getItemOffers(setLoading, setRows);
  }, []);

  const headers = [
    {
      headerName: "Id",
      fieldName: "sl",
      style: { width: "100px", marginLeft: "0px" },
    },
    { headerName: "Title", fieldName: "title" },
    { headerName: "User Id", fieldName: "userId" },
    { headerName: "Completed", fieldName: "completed" },
  ];

  return (
    <div>
      <h1 style={{ color: "black" }}>All Components</h1>
      {/* text field */}
      <>
        <h5>Input field</h5>
        <Input label={"Enter a Input"} placeholder={"Enter a Value"} />
      </>
      {/* table */}
      <>
        <h5 className="mt-5">Table</h5>
        <Wrapper>
          <TableHeader>
            <TableName>
              <NameHeading>ItemList</NameHeading>
            </TableName>
            <div className="row">
              <div className="col-lg-3">
                <Input placeholder="Enter a challan no" />
              </div>
              <div className="col-lg-3">
                <Input placeholder="Enter a challan no" />
              </div>
              <div className="col-lg-3">
                <Input placeholder="Enter a challan no" />
              </div>
              {/* Checkbox */}
              <FormGroup className="col-lg-3">
                <FormControlLabel
                  sx={{
                    "& .MuiTypography-root": {
                      fontSize: 14,
                      letterSpacing: 0.2,
                    },
                  }}
                  control={<Checkbox defaultChecked />}
                  label="Recive All"
                />
              </FormGroup>
            </div>
          </TableHeader>
          <TableContainer sx={{ maxHeight: 530 }} component={Paper}>
            <Table
              stickyHeader
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  {headers.map((th, index) => (
                    <TableCell align="left" style={th?.style} key={index}>
                      {th?.headerName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {loading && (
                <>
                {loop?.map((th, index) =>(
                  <TableRow>
                  {headers?.map((th, index) => (
                    <TableCell>
                    <Skeleton animation="wave" />
                  </TableCell>
                  ))}
                </TableRow>       
                ))}
                </>
              )}
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.po}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row" sx={tableCell}>
                      {row.id}
                    </TableCell>
                    <TableCell align="left" sx={tableCell}>
                      {row.title}
                    </TableCell>
                    <TableCell align="left" sx={tableCell}>
                      {row.userId}
                    </TableCell>
                    <TableCell align="left" sx={tableCell}>
                      {row.completed ? "Completed" : 'Rejected'}
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
