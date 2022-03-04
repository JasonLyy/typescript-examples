type MyExclude<T, U> = T extends U ? never : T;

type NoA = Exclude<"a" | "b" | "c", "a">; // expects: "a" | "b"
