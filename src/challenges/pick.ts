//github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.md
type MyPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

export default {};
