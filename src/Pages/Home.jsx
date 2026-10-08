import React from "react";
import Navbar from "../compontens/Navbar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const naviage = useNavigate();

  const viewStudent = () => {
    naviage("/students");
    toast.success("ViewStudentPage....");
  };

  const AddStudent = () => {
    naviage("/addstudent");
    toast.success("AddStudentPage.....");
  };
  return (
    <div>
      <h1 className="text-6xl text-center p-15">Student Management System</h1>
      <h2 className="text-4xl  text-center font-semibold p-5">
        Manage Your Student easily with
      </h2>
      <h2 className="text-4xl  text-center font-semibold p-2">
        a simple React CURD application
      </h2>

      <div className="flex item-center justify-center gap-7 mt-20 ">
        <button
          onClick={viewStudent}
          className="border-1 px-4 py-2 text-xl rounded font-semibold bg-[#FF8C52]"
        >
          View Student
        </button>
        <button
          onClick={AddStudent}
          className="border-1 px-4 py-2 text-xl rounded font-semibold bg-[#FF8C52]"
        >
          Add Studnet
        </button>
      </div>
    </div>
  );
};

export default Home;
