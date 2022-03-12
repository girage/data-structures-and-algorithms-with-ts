const array1: Array<string> = ['a', 'b', 'c', 'x'];
const array2: Array<string> = ['z', 'y', 'i'];
const array3: Array<string> = ['z', 'y', 'x'];

const checkCommon = (arr1: Array<string>, arr2: Array<string>): Boolean => {
  let setA: Set<string> = new Set();
  let setB: Set<string> = new Set();
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
  console.log(setCommon);
  return setCommon.size > 0;
}

console.log(checkCommon(array1, array2));
console.log(checkCommon(array1, array3));