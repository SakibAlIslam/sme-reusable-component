
import Skeleton from "@mui/material/Skeleton";
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
import Input from "./Input";
import styled from "styled-components";
import DeleteIcon from '@mui/icons-material/Delete';

export default function ITable({headers, rows, pageSize, loading, customerHeader}) {

    const [loop, setLoop] = useState([]);

    useEffect(() => {
        setLoop(Array.apply(null, Array(pageSize)))
      }, [pageSize]);

      // Wrapper
const Wrapper = styled.div`
max-width: 1110px;
margin: 0 auto;
border: 1px solid rgba(0, 0, 0, 0.08);
box-sizing: border-box;
box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.16);
border-radius: 4px;
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

    return (
        <Wrapper>
          {customerHeader ? <TableHeader>
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
          </TableHeader> : null}
          <TableContainer sx={{ maxHeight: 530 }} component={Paper}>
            <Table
              stickyHeader
              sx={{ minWidth: 650 }}
              aria-label="simple table"
            >
              <TableHead>
                <TableRow>
                  {headers?.map((th, index) => (
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
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {headers.map((th, i)=>(
                <>
                {console.log('th:',th)}
                  {(th?.isEdit || th?.isDelete)?
                    <TableCell align="right" key={i}>
                      {th?.isDelete && 
                        <span onClick={()=>th?.editACtion(row[th?.fieldName])}>
                          <DeleteIcon />
                        </span>
                      }
                    </TableCell>:
                    <TableCell key={i}>{row[th?.fieldName]}</TableCell>
                  }
                </>
              ))}
            </TableRow>
          ))}
        </TableBody>
            </Table>
          </TableContainer>
        </Wrapper>
    )
}
