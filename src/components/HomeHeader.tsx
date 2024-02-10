import { useEffect, useState } from "react";
import { getDate } from "../Utils/GetDate";
import { getTime } from "../Utils/GetTime";
import { FaGear } from "react-icons/fa6";
import ModalEditName from "../ui/ModalEditName";
import ModalDeleteCookie from "../ui/ModalDeleteCookie";

type HomeHeaderProps = {
  username: string | undefined;
  changeName: (newName: string) => void;
};

function HomeHeader({ username, changeName }: HomeHeaderProps) {
  const [day, setDay] = useState<string>();
  const [waktu, setWaktu] = useState<string>();

  setInterval(() => {
    setWaktu(getTime());
  }, 1);

  const date = new Date();

  const timeOfTheDay = () => {
    const time = date.getHours();
    const pagi = time >= 5 && time < 12;
    const siang = time >= 12 && time < 15;
    const sore = time >= 15 && time < 19;
    const malam = (time >= 19 && time < 24) || (time >= 0 && time < 5);

    pagi
      ? setDay("Pagi")
      : siang
      ? setDay("Siang")
      : sore
      ? setDay("Sore")
      : malam && setDay("Malam");
  };

  useEffect(() => {
    timeOfTheDay();
  }, []);

  return (
    <div className="header py-8 flex justify-between">
      <div className="left">
        <h1 className="text-2xl font-bold">
          Selamat {day}, {username}!👋
        </h1>
        <p className="text-zinc-300">{getDate()}</p>
        <p>{waktu}</p>
      </div>
      <div className="right">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="bg-white text-xs text-black p-2 rounded-full">
            <FaGear />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] mt-3 menu p-2 shadow bg-zinc-800 rounded-box w-40"
          >
            <li>
              <label htmlFor="changename__38773">
                <a>Ubah Nama</a>
              </label>
            </li>
            <li className="hover:bg-red-900 rounded-xl">
              <label htmlFor="delete___cookie_993">
                <a>Hapus Data</a>
              </label>
            </li>
            <li className="mx-4 select-none opacity-70 my-1">V.1.0.2</li>
          </ul>
        </div>
      </div>
      <ModalDeleteCookie />
      <ModalEditName changeNameFunc={changeName} />
    </div>
  );
}

export default HomeHeader;
