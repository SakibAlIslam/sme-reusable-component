import React, { useEffect, useState } from "react";
import Input from "./Input";
import axios from "axios";
import ITable from "./ITable";

// function createData(po, name, orderQty, receiveQty, warehouse, remainingQty) {
//   return { po, name, orderQty, receiveQty, warehouse, remainingQty };
// }

export default function AllComponents() {
  const [rows, setRows] = useState([]);
  const [pageSize, ] = useState(15);
  const [loading, setLoading] = useState(false);


  const getItemOffers = async (setLoading, setter) => {
    setLoading(true);
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`);
      const data = res?.data?.map(item => ({
        ...item,
        sl: item?.id,
        title: item?.title,
        userId: item?.userId,
        completed: item?.completed ? "true" : "false"
      }))
      setter(data);
      setLoading(false);
    } catch (error) {
      setter("");
      setLoading(false);
    }
  };

  useEffect(() => {
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
        <ITable headers = {headers} rowData={rows} pageSize={pageSize} loading={loading}/>

      </>
    </div>
  );
}
