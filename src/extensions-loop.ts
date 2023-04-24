/** @tsplus type A */
export interface A {
  a: ""
}

/** @tsplus getter A test */
export function test(a: A) { return { b: 3 } }


declare const a: A

const b = a.test // Property 'test' does not exist on type 'A'. until you remove "@tsplus type B"

/**
 * @tsplus type B
 */
export type B = typeof b