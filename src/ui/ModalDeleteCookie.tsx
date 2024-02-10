import React from "react";
import Cookies from "js-cookie";

function ModalDeleteCookie() {
  return (
    <React.Fragment>
      <input type="checkbox" id="delete___cookie_993" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle" role="dialog">
        <div className="modal-box rounded-t-xl sm:rounded-xl  text-white bg-red-700 ">
          <h1 className="font-bold mb-4">Hapus Data</h1>
          <div className="paragraph text-gray-200">
            <p>
              Anda yakin untuk menghapus data?, Seluruh data akan dihapus dari browser dan anda
              tidak dapat mengembalikan data yang telah dihapus.
            </p>
          </div>
          <div className="option mt-4 flex justify-end">
            <form
              className="flex gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                window.location.reload();
                Cookies.remove("user");
              }}
            >
              <label
                htmlFor="delete___cookie_993"
                className="bg-white text-black px-4 py-1 rounded-md cursor-pointer"
              >
                Batal
              </label>
              <button type="submit" className="bg-black text-white px-4 py-1 rounded-md">
                Ya
              </button>
            </form>
          </div>
        </div>
        <label className="modal-backdrop" htmlFor="delete___cookie_993"></label>
      </div>
    </React.Fragment>
  );
}

export default ModalDeleteCookie;
