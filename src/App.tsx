import { useEffect } from "react";
import { Presentational } from "./components/Presentational";
import { filterDuplicateArrayItem } from "./Utils/FilterDuplicateItemArray";
import { CookieChecker } from "./Service/CookieChecker";
import Home from "./pages/Home";
import Register from "./pages/Register";

function App() {
  const {
    addTodo,
    removeTodo,
    userCookie,
    firstStateExecute,
    newTextTodo,
    setNewTextTodo,
    checkedTask,
    updateTodo,
    changeName,
  } = Presentational();

  const dateFiltered = filterDuplicateArrayItem(userCookie)?.reverse();

  useEffect(() => {
    firstStateExecute();
  }, []);

  return (
    <>
      {CookieChecker() ? (
        <Home
          userCookie={userCookie}
          addTodo={addTodo}
          removeTodo={removeTodo}
          newTextTodo={newTextTodo}
          setNewTextTodo={setNewTextTodo}
          checkedTask={checkedTask}
          dateFiltered={dateFiltered}
          updateTodo={updateTodo}
          changeName={changeName}
        />
      ) : (
        <Register />
      )}
    </>
  );
}

export default App;
