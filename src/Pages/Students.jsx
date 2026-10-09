import React, { useContext } from "react";
import { StudentContexdata } from "../contex/StudnetContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Students = () => {
  const { data, setdata } = useContext(StudentContexdata);
  const navigate = useNavigate();

  const moveToAddpage = () => {
    navigate("/addstudent");
  };

  const moveViewPage = (id) => {
    navigate(`/student/${id}`);
    toast.success("SingleStudentInfo.");
  };

  const deleteStudentInfo = (id) => {
    const copydata = data.filter((e) => e.id !== id);
    setdata(copydata);
    localStorage.setItem("StudentInfo", JSON.stringify(copydata));
    toast.success("Delete Student ");
  };

  const editInfo = (id) => {
    navigate(`/student/${id}`);
  };

  return (
    <div>
      <div className="flex item-center justify-between mt-20 px-50">
        <div className="text-4xl font-semibold">
          <h1>Students</h1>
          <h1>Manage all Students</h1>
        </div>

        <div>
          <button
            onClick={moveToAddpage}
            className="px-4 rounded py-1 text-xl bg-amber-500 "
          >
            +Add
          </button>
        </div>
      </div>

      {/* // display the card  */}
      <div className="flex items-center justify-center flex-wrap gap-10">
        {data.map((e, idx) => (
          <div
            key={e.id ?? idx}
            className="border-1 flex flex-col mt-10 rounded p-10"
          >
            <h1 className="text-4xl font-semibold">{e.name}</h1>
            <h2 className="text-3xl font-semibold mt-2">{e.email}</h2>

            <div className="flex gap-10 mt-2">
              <h1 className="text-2xl font-semibold">{e.course}</h1>
              <h1 className="text-2xl font-semibold">Age: {e.age}</h1>
            </div>

            <div className="flex gap-10 text-xl font-semibold mt-2">
              <button
                onClick={() => moveViewPage(e.id)}
                className="px-2 py-1 rounded bg-amber-500"
              >
                View
              </button>
              <button
                onClick={() => editInfo(e.id)}
                className="px-2 py-1 rounded bg-amber-500"
              >
                Edit
              </button>
              <button
                onClick={() => deleteStudentInfo(e.id)}
                className="px-2 py-1 rounded bg-amber-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Students;
