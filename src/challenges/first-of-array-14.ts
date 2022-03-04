// https://github.com/type-challenges/type-challenges/blob/master/questions/14-easy-first/README.md

type First<T extends any[]> = T extends [a: infer U, ...rest: any] ? U : never;

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];
type x = [];

type head1 = First<arr1>; // expected to be 'a'
type head2 = First<arr2>; // expected to be 3
type head3 = First<x>;