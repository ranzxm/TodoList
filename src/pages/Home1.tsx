import React from "react";

type HomePageProps = {
  addTodo: () => null | undefined;
  removeTodo: (id: number) => void;
  userCookie: User | undefined;
  newTextTodo: string;
  setNewTextTodo: React.Dispatch<React.SetStateAction<string>>;
  checkedTask: (id: number, status: boolean) => void;
  dateFiltered: string[] | undefined;
};

function Home({
  userCookie,
  newTextTodo,
  addTodo,
  removeTodo,
  setNewTextTodo,
  dateFiltered,
  checkedTask,
}: HomePageProps) {
  return (
    <React.Fragment>
      <h1>User : {userCookie?.name}</h1>
      <div className="input">
        <label htmlFor="input-todo">Todo</label>
        <input
          type="text"
          value={newTextTodo}
          onChange={(e) => {
            setNewTextTodo(e.target.value);
          }}
          className="border border-blue-300 outline-none"
          id="input-todo"
        />
        <button className="bg-blue-300" onClick={addTodo}>
          Tambah
        </button>
      </div>
      <ul>
        {dateFiltered?.map((date, index) => (
          <div key={index + 1}>
            <h1 className="text-3xl my-2 font-bold">{date}</h1>
            {userCookie?.todolist.map(
              (todo, index) =>
                date === todo.createdAt && (
                  <div key={index + 1}>
                    <li className={`${todo.status && "line-through"}`}>
                      <input
                        type="checkbox"
                        checked={todo.status}
                        onChange={() => checkedTask(todo.id, todo.status)}
                      />
                      {todo.todo}
                      <button
                        className="bg-red-500 text-white px-2 rounded ml-4"
                        onClick={() => {
                          removeTodo(todo.id);
                        }}
                      >
                        Hapus
                      </button>
                    </li>
                  </div>
                )
            )}
          </div>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default Home;
