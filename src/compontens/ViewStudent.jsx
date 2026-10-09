import React, { useContext, useEffect } from "react";
import { StudentContexdata } from "../contex/StudnetContext";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ViewStudent = () => {
  const { data, setdata } = useContext(StudentContexdata);
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  const student = data.find((e) => String(e.id) === id);

  useEffect(() => {
    if (student) reset(student);
  }, [student, reset]);

  const updateData = (formData) => {
    const updated = data.map((e) =>
      String(e.id) === id ? { ...e, ...formData } : e,
    );
    setdata(updated);
    localStorage.setItem("StudentInfo", JSON.stringify(updated));
    toast.success("Student updated");
    navigate("/students");
  };

  if (!student) return <h1>Student not found</h1>;

  return (
    <form
      onSubmit={handleSubmit(updateData)}
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
        Update
      </button>
    </form>
  );
};

export default ViewStudent;
