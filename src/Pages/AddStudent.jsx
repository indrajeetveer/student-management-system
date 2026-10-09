import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { StudentContexdata } from "../contex/StudnetContext";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

export const AddStudent = () => {
  const { data, setdata } = useContext(StudentContexdata);
  const { register, handleSubmit, reset } = useForm();
  const naviage = useNavigate();

  const SubmitData = (studentData) => {
    studentData.id = nanoid();
    const copydata = [...data, studentData];
    setdata(copydata);
    localStorage.setItem("StudentInfo", JSON.stringify(copydata));
    reset();
    naviage("/students");
  };

  return (
    <form
      onSubmit={handleSubmit(SubmitData)}
      className="border-1 mx-40 flex flex-col  mt-30 p-5 rounded-xl "
    >
      <label className="font-semibold text-xl pb-1">Name</label>
      <input
        {...register("name")}
        className="block   p-2 py-2 bg-white rounded"
        type="text"
        placeholder="Enter the name "
      />

      <br />

      <label className="font-semibold text-xl pb-1">Email</label>
      <input
        {...register("email")}
        className="block  p-2 py-2 bg-white rounded"
        type="email"
        placeholder="Enter the Email"
      />

      <br />
      <label className="font-semibold text-xl pb-1">Phone</label>
      <input
        {...register("phone")}
        className="block  p-2 py-2 bg-white rounded"
        type="tel"
        placeholder="Enter phone"
      />

      <div className="flex items-center justify-center gap-10 mt-2">
        <div>
          <label className="font-semibold text-xl">Age</label>
          <input
            {...register("age")}
            className="block px-48 py-2 mt-2 bg-white rounded "
            type="number"
            placeholder="Enter age"
          />
        </div>

        <div>
          <label className="font-semibold text-xl ">Coures</label>
          <input
            {...register("course")}
            className="block  px-48 py-2 mt-2 bg-white rounded"
            type="text"
            placeholder="Enter Course"
          />
        </div>
      </div>

      <button
        type="submit"
        className="flex mt-3 flex-col bg-[#FF8C52] p-2 font-semibold rounded"
      >
        Add Student
      </button>
    </form>
  );
};
