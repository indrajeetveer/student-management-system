import React, { createContext, useEffect, useState } from "react";

export const StudentContexdata = createContext(null);

const StudnetContext = (props) => {
  const [data, setdata] = useState(() => {
    const saved = localStorage.getItem("StudentInfo");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("StudentInfo", JSON.stringify(data));
  }, [data]);

  return (
    <StudentContexdata.Provider value={{ data, setdata }}>
      {props.children}
    </StudentContexdata.Provider>
  );
};

export default StudnetContext;
