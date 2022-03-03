/**
 * Purpose:
 * 
 * Constrained identity functions allow us to not explicitly annotate our variable while still getting to enforce the values.
 */

/**
 * Explanation:
 * 
 * So we create the object, get the best type that TypeScript can offer us (which includes the narrow keys and wide values).
 * Then we pass it to a function which accepts wide keys and narrow values.
 * TypeScript combines that to give us a Record with a key and value which are both narrow!
 */

/**
 * Example Below:
 */
type OperationFn = (left: number, right: number) => number
const createOperations = <OperationsType extends Record<string, OperationFn>>(
  operations: OperationsType,
) => operations
const operations = createOperations({
  '+': (left, right) => left + right,
  '-': (left, right) => left - right,
  '*': (left, right) => left * right,
  '/': (left, right) => left / right,
})
type CalculatorProps = {
  left: number
  operator: keyof typeof operations
  right: number
}

// compile error because of this
operations['**'](1, 2)