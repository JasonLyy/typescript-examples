// https://github.com/type-challenges/type-challenges/blob/master/questions/11-easy-tuple-to-object/README.md

const tuple = ["1", "2", "3"] as const;

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
  // Array {
  //     [n: number]: T;
  // }

  // T[number] refers T (i.e. the value of the index signature of T[number])
  [key in T[number]]: key;
};

type result = TupleToObject<typeof tuple>; // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
