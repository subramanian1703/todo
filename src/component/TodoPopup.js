import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AddDeveloper,
  EditDeveloper,
  RemoveDeveloper,
} from "../../redux/createSlice";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Settings() {
  const [modal, setModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  console.log(selectedIndex, "111");
  const [developer, setDeveloper] = useState({
    name: "",
    iPAddress: "",
    read: false,
    write: false,
  });

  const dispatch = useDispatch();
  const selector = useSelector((state: any) => state.developers);

  const handleAdd = () => {
    dispatch(
      AddDeveloper({
        ...developer,
      })
    );
    setModal(false);
    setDeveloper({
      name: "",
      iPAddress: "",
      read: false,
      write: false,
    });
  };

  const handleChange = (e: any) => {
    const { id, value, checked } = e.target;
    setDeveloper((prev) => ({
      ...prev,
      [id]: id === "read" ? checked : id === "write" ? checked : value,
    }));
  };

  const handleEdit = (developer: any, index: number) => {
    setSelectedIndex(index === 0 ? "0" : index);
    setModal(true);
    setDeveloper({
      ...developer,
    });
  };

  const handleSetUpdate = () => {
    dispatch(EditDeveloper({ selectedIndex: +selectedIndex, developer }));
    setModal(false);
    setDeveloper({
      name: "",
      iPAddress: "",
      read: false,
      write: false,
    });
    setSelectedIndex(null);
  };

  return (
    <>
      <div className="w-full flex justify-end">
        <button
          className="h-10 px-8 bg-base-dark-2 text-base-bright-1 mr-4 rounded"
          onClick={() => setModal(true)}
        >
          Add
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr className="border border-t-0 border-r-0 border-l-0 border-b-2">
            <th className="lg:w-1/4 px-4 sm:px-2 w-1/6">
              <div className="flex items-center justify-between">
                <p className="text-headings-level-4-thin whitespace-nowrap">
                  Name
                </p>
              </div>
            </th>
            <th className="lg:w-1/4 px-4 sm:px-2 w-1/">
              <div className=" flex items-center justify-between">
                <p className=" text-headings-level-4-thin  whitespace-nowrap">
                  IP Address
                </p>
              </div>
            </th>
            <th className="lg:w-1/4 px-4 sm:px-2 w-1/">
              <div className=" flex items-center justify-between">
                <p className=" text-headings-level-4-thin  whitespace-nowrap">
                  Read
                </p>
              </div>
            </th>
            <th className="w-1/3 px-4">
              <div className="flex items-center justify-between">
                <p className="text-headings-level-4-thin whitespace-nowrap">
                  Write
                </p>
              </div>
            </th>
            <th className="w-1/4 px-4">
              <div className="flex items-center justify-between">
                <p className="text-headings-level-4-thin whitespace-nowrap">
                  Actions
                </p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {selector.developers.map((data: any, index: number) => (
            <tr
              key={data?.id}
              className="border border-t-0 border-r-0 border-l-0 border-b-1 border-base-mid-bright"
            >
              <td className="py-4 px-2">{data.name}</td>
              <td className="py-4">{data.iPAddress}</td>
              <td className="py-4">{data.read}</td>
              <td className="py-4">{data.write}</td>
              <div className="flex">
                <button
                  className="h-10 px-4 bg-base-dark-2 text-base-bright-1 mx-3 rounded"
                  onClick={() => handleEdit(data, index)}
                >
                  Edit
                </button>
                <button
                  className="h-10 px-4 bg-base-dark-2 text-base-bright-1 mx-4 rounded"
                  onClick={() => dispatch(RemoveDeveloper(data?.id))}
                >
                  delete
                </button>
              </div>
            </tr>
          ))}
        </tbody>
      </table>
      {modal ? (
        <section className="fixed top-0 left-0 right-0 bottom-0 h-screen w-screen bg-black/20 flex items-center justify-center z-40">
          <div className="p-16 w-2/5 mx-auto bg-base-bright-1 flex justify-center  flex-col rounded delay-500">
            <div className="flex justify-end">
              <FontAwesomeIcon
                icon={faXmark}
                className="h-7"
                onClick={() => setModal(false)}
              />
            </div>
            <h1 className="text-2xl font-bold mb-3 mx-auto">
              Create Developer
            </h1>
            <input
              id="name"
              className="w-full p-3 border mb-8 rounded"
              type="text"
              placeholder="Developer name"
              value={developer.name}
              onChange={handleChange}
            />
            <input
              id="iPAddress"
              className="w-full p-3 border mb-8 rounded"
              type="text"
              placeholder="IP Address"
              value={developer.iPAddress}
              onChange={handleChange}
            />
            <span className="text-xl font-bold mb-3">Permission</span>
            <div>
              <input
                id="read"
                type="checkbox"
                checked={developer.read}
                onChange={handleChange}
              />
              <span className="text-lg ml-2">Read</span>
              <input
                id="write"
                className="ml-5"
                type="checkbox"
                checked={developer.write}
                onChange={handleChange}
              />
              <span className="text-lg ml-2">Write</span>
            </div>
            {selectedIndex ? (
              <button
                className="h-10 p-4 bg-base-dark-2 text-base-bright-1 rounded"
                onClick={handleSetUpdate}
              >
                Update
              </button>
            ) : (
              <button
                className="h-10 p-4 bg-base-dark-2 text-base-bright-1 rounded"
                onClick={handleAdd}
              >
                Submit
              </button>
            )}
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default Settings;
