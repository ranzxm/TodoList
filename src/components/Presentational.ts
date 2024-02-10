import { useState } from "react";
import Cookies from "js-cookie";
import { getTodolist } from "../Service/Todolist";
import { CookieChecker } from "../Service/CookieChecker";
import { getDate } from "../Utils/GetDate";
import { BadWordCensoring } from "../Service/BadWordCensoring";

export const Presentational = () => {
  const [userCookie, setUserCookie] = useState<User>();
  const [newTextTodo, setNewTextTodo] = useState("");

  function addTodo() {
    if (newTextTodo == "") {
      return null;
    }
    if (userCookie !== undefined) {
      const latestTodo: Todolist[] = userCookie.todolist;

      const newTodo: Todolist = {
        id: latestTodo.length + 1,
        todo: BadWordCensoring(newTextTodo),
        status: false,
        createdAt: getDate(),
      };

      latestTodo.push(newTodo);

      const newCookie: User = {
        name: userCookie?.name,
        todolist: latestTodo,
      };

      Cookies.set("user", JSON.stringify(newCookie), { expires: 999 });
      const cookie = Cookies.get("user");
      cookie !== undefined && setUserCookie(JSON.parse(cookie));
      setNewTextTodo("");
    }
  }

  function removeTodo(id: number) {
    if (userCookie !== undefined) {
      const latestTodo: Todolist[] = userCookie.todolist;
      const newTodo = latestTodo.filter((item) => item.id !== id);
      const newCookie: User = {
        name: userCookie.name,
        todolist: newTodo,
      };
      Cookies.set("user", JSON.stringify(newCookie), { expires: 999 });
      const cookie = Cookies.get("user");
      cookie !== undefined && setUserCookie(JSON.parse(cookie));
    }
  }

  function updateTodo(id: number, newTodo: string) {
    if (userCookie !== undefined) {
      const latestTodo: Todolist[] = userCookie.todolist;
      latestTodo.map((item) => {
        if (item.id == id) {
          if (newTodo.trim() == "") {
            item.todo = item.todo;
          } else {
            item.todo = BadWordCensoring(newTodo);
          }
        }
      });
      const newCookie: User = {
        name: userCookie.name,
        todolist: latestTodo,
      };
      Cookies.set("user", JSON.stringify(newCookie), { expires: 999 });
      const cookie = Cookies.get("user");
      cookie !== undefined && setUserCookie(JSON.parse(cookie));
    }
  }

  function checkedTask(id: number, status: boolean) {
    if (userCookie !== undefined) {
      const newTodo: Todolist[] = userCookie.todolist;
      newTodo.forEach((item) => {
        if (item.id == id) {
          item.status = !status;
        }
      });
      const newCookie: User = {
        name: userCookie.name,
        todolist: newTodo,
      };
      Cookies.set("user", JSON.stringify(newCookie), { expires: 999 });
      const cookie = Cookies.get("user");
      cookie !== undefined && setUserCookie(JSON.parse(cookie));
    }
  }

  function firstStateExecute() {
    if (!CookieChecker()) {
      return null;
    } else {
      setUserCookie(getTodolist());
    }
  }

  function changeName(newName: string) {
    if (userCookie !== undefined) {
      const latestTodo: Todolist[] = userCookie.todolist;
      const newCookie: User = {
        name: BadWordCensoring(newName),
        todolist: latestTodo,
      };
      Cookies.set("user", JSON.stringify(newCookie), { expires: 999 });
      const cookie = Cookies.get("user");
      cookie !== undefined && setUserCookie(JSON.parse(cookie));
    }
  }

  return {
    addTodo,
    removeTodo,
    updateTodo,
    firstStateExecute,
    userCookie,
    setNewTextTodo,
    newTextTodo,
    checkedTask,
    changeName,
  };
};
