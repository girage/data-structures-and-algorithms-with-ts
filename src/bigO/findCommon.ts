const array1: Array<string> = ['a', 'b', 'c', 'x'];
const array2: Array<string> = ['z', 'y', 'i'];
const array3: Array<string> = ['z', 'y', 'x'];

/* 
My approach 
Time complexity: O(a+b)
Space complexity: O(a+b)
*/
const checkCommon = (arr1: Array<string>, arr2: Array<string>): Boolean => {
  const setA: Set<string> = new Set();
  const setB: Set<string> = new Set();
  let setCommon: Set<string> = new Set();

  arr1.forEach((element: string): void => {
    setA.add(element);
  });
  arr2.forEach((element: string): void => {
    setB.add(element);
  });


  setA.forEach((element: string): void => {
    if (setB.has(element)) {
      setCommon.add(element);
    }
  });

  return setCommon.size > 0;
}

// console.log(checkCommon(array1, array2));
// console.log(checkCommon(array1, array3));

/* 
Best  approach 
Time complexity: O(a+b)
Space complexity: O(a)
*/

const containCommonItem = (arr1: Array<string>, arr2: Array<string>):Boolean => {
  return arr1.some((item: string) => arr2.includes(item));
}

// console.log(containCommonItem(array1, array3));