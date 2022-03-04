//github.com/type-challenges/type-challenges/blob/master/questions/7-easy-readonly/README.md
type MyReadonly<T> = { readonly [key in keyof T]: T[key] };

interface Todo {
  title: string;
  description: string;
}

const todo: MyReadonly<Todo> = {
  title: "Hey",
  description: "foobar",
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
todo.description = "barFoo"; // Error: cannot reassign a readonly property

export default {};
