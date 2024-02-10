import React from "react";

type ModalEditTodoProps = {
  id: string;
  todo: Todolist;
  updateTodoFunc: (id: number, newTodo: string) => void;
};

function ModalEditTodo({ id, todo, updateTodoFunc }: ModalEditTodoProps) {
  const [newTodo, setNewTodo] = React.useState<string>(todo.todo);

  return (
    <React.Fragment>
      <input type="checkbox" id={`checkbox${id}`} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box rounded-md text-white bg-zinc-900">
          <h3 className="text-lg font-bold ">Ubah Todo</h3>
          <form
            className="flex flex-col"
            method="dialog"
            onSubmit={(e) => {
              e.preventDefault();
              const dialog = document.getElementById(`checkbox${id}`) as HTMLInputElement;
              if (dialog !== null) {
                dialog.checked = false;
              }
              newTodo.trim() == "" && setNewTodo(todo.todo);
              updateTodoFunc(todo.id, newTodo);
            }}
          >
            <input
              type="text"
              value={newTodo}
              onChange={(e) => {
                setNewTodo(e.target.value);
              }}
              className="w-full my-4 outline-none bg-transparent border-b"
              placeholder={todo.todo}
            />
            <div className="flex gap-2 justify-end items-center">
              <label
                htmlFor={`checkbox${id}`}
                className="bg-white cursor-pointer flex text-black text-sm px-4 py-1 rounded-md"
              >
                Batal
              </label>
              <button
                type="submit"
                className="bg-white flex text-black text-sm px-4 py-1 rounded-md"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor={`checkbox${id}`}></label>
      </div>
    </React.Fragment>
  );
}

export default ModalEditTodo;
