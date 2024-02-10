import React, { useState } from "react";
import { CookieMaker } from "../Service/CookieMaker";
import { FaArrowRight } from "react-icons/fa";

function Register() {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const onSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username.trim() == "") {
      setUsername("");
      setError(true);
    } else {
      CookieMaker(username);
      window.location.reload();
    }
  };

  return (
    <React.Fragment>
      <div className="w-full h-full bg-zinc-900 text-white">
        <div className="container mx-auto w-screen h-screen">
          <div className="flex items-center justify-center w-full h-full">
            <div className="box">
              <div className="sayHello mb-5">
                <h1 className="text-4xl font-bold">Selamat Datang</h1>
                <p className="opacity-80">Kenalan dulu nih</p>
              </div>
              <form onSubmit={onSubmitForm}>
                <div className="formControl flex w-full">
                  <input
                    type="text"
                    className={`bg-transparent w-full border-b outline-none ${
                      error && "placeholder:text-red-500"
                    }`}
                    value={username}
                    placeholder={error ? "Nama tidak boleh Kosong" : "Nama kamu siapa ?"}
                    onChange={(e) => {
                      setError(false);
                      setUsername(e.target.value);
                    }}
                  />
                  <button className="bg-white flex-none text-black w-10 h-10 flex items-center justify-center rounded-full">
                    <FaArrowRight />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Register;
