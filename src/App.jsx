import React from "react";
import AllRoutes from "./MainRoutes/AllRoutes";
import Navbar from "./compontens/Navbar";

const App = () => {
  return (
    <div className="w-screen h-screen bg-[#8AD6D1]">
      <Navbar />
      <AllRoutes />
    </div>
  );
};

export default App;
