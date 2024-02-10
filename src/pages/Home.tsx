import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import { LiaEditSolid } from "react-icons/lia";
import TestCheckbox from "../Expreriments/Checkbox";
import HomeHeader from "../components/HomeHeader";
import Modal from "../ui/ModalEditTodo";
import { getDate } from "../Utils/GetDate";

type HomePageProps = {
  addTodo: () => null | undefined;
  removeTodo: (id: number) => void;
  userCookie: User | undefined;
  newTextTodo: string;
  setNewTextTodo: React.Dispatch<React.SetStateAction<string>>;
  checkedTask: (id: number, status: boolean) => void;
  updateTodo: (id: number, newTodo: string) => void;
  dateFiltered: string[] | undefined;
  changeName: (newName: string) => void;
};

function Home({
  userCookie,
  newTextTodo,
  addTodo,
  removeTodo,
  setNewTextTodo,
  dateFiltered,
  updateTodo,
  checkedTask,
  changeName,
}: HomePageProps) {
  return (
    <React.Fragment>
      <div className="h0m3 bg-zinc-900 w-full h-full text-white">
        <div className="container mx-auto px-7 md:px-0 md:w-[60%] h-full min-h-screen">
          <HomeHeader username={userCookie?.name} changeName={changeName} />
          <div className="w-full text-sm md:text-base">
            <div className="todoForm flex gap-8 flex-col items-center">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  addTodo();
                }}
              >
                <div className="flex md:w-[350px] gap-3 bg-white text-black py-2 px-3 rounded-3xl">
                  <input
                    type="text"
                    placeholder="Mau ngapain hari ini?"
                    value={newTextTodo}
                    onChange={(e) => {
                      setNewTextTodo(e.target.value);
                    }}
                    className="w-full pl-3 bg-transparent outline-none"
                  />
                  <button className="bg-zinc-900 flex-none text-white w-10 h-10 flex items-center justify-center rounded-full">
                    <FaPlus />
                  </button>
                </div>
              </form>
              <div className="todolist w-full">
                {dateFiltered?.map((date, index) => (
                  <div key={index + 1} className="flex flex-col gap-4 w-full mb-6">
                    <div className="date font-semibold text-gray-300">
                      {date == getDate() ? "Hari Ini" : date}
                    </div>
                    {userCookie?.todolist.map(
                      (todo, index) =>
                        date === todo.createdAt && (
                          <div
                            key={index + 1}
                            className="todo flex items-center justify-between w-full bg-white text-black py-3 px-4 rounded-xl"
                          >
                            <div className="flex items-center relative ">
                              <TestCheckbox
                                id={`${todo.id}`}
                                checked={todo.status}
                                checkedFunc={checkedTask}
                                todo={todo}
                              />
                              <p className="font-semibold">{todo.todo}</p>
                            </div>
                            <div className="flex items-center gap-3">
                              <button className="hover:scale-125 duration-200">
                                <label htmlFor={`checkbox${todo.todo}`}>
                                  <LiaEditSolid className="text-xl" />
                                </label>
                              </button>
                              <button
                                onClick={() => removeTodo(todo.id)}
                                className="hover:text-red-500 hover:scale-125 duration-200"
                              >
                                <FaTrash />
                              </button>
                            </div>
                            <Modal id={`${todo.todo}`} todo={todo} updateTodoFunc={updateTodo} />
                          </div>
                        )
                    )}
                  </div>
                ))}
                {}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;
