import React, { Children, createContext, useContext, useState } from "react";

export const StudentContexdata = createContext(null);

const StudnetContext = (props) => {
  const [data, setdata] = useState([]);
  console.log(data);
  return (
    <StudentContexdata.Provider value={{ data, setdata }}>
      {props.children}
    </StudentContexdata.Provider>
  );
};

export default StudnetContext;
