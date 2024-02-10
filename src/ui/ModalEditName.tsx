import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

type ModalEditName = {
  changeNameFunc: (newName: string) => void;
};

function ModalEditName({ changeNameFunc }: ModalEditName) {
  const [newName, setNewName] = useState<string>("");

  return (
    <React.Fragment>
      <input type="checkbox" id="changename__38773" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle" role="dialog">
        <div className="modal-box rounded-t-xl sm:rounded-xl text-black sm:text-white bg-white sm:bg-zinc-900">
          <h1>Ubah Nama</h1>
          <label
            htmlFor="changename__38773"
            className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
          >
            <IoClose />
          </label>
          <form
            className="flex flex-col items-end"
            onSubmit={(e) => {
              e.preventDefault();
              changeNameFunc(newName);
              const dialog = document.getElementById("changename__38773");
              if (dialog !== null) {
                dialog.checked = false;
              }
              setNewName("");
            }}
          >
            <input
              type="text"
              onChange={(e) => {
                setNewName(e.target.value);
              }}
              required
              className="w-full my-4 outline-none bg-transparent border-b sm:border-b-white border-b-black"
            />
            <button
              type="submit"
              className="content-end sm:bg-white sm:text-black bg-zinc-900 text-white px-4 py-1 rounded-md sm:hover:bg-gray-300 hover:bg-zinc-700 duration-200"
            >
              Simpan
            </button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="changename__38773"></label>
      </div>
    </React.Fragment>
  );
}

export default ModalEditName;
