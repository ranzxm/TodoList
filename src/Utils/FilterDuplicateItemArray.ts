export function filterDuplicateArrayItem(cookie: User | undefined) {
  if (cookie !== undefined) {
    const todo: Todolist[] = cookie.todolist;
    const arrayList: string[] = [];
    todo.map((item) => {
      arrayList.push(item.createdAt);
    });
    return [...new Set(arrayList)];
  }
}
