const nemo: Array<string> = ['nemo'];
const fishColony: Array<string> = ['dory', 'bruce', 'marlin', 'nemo',
  'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const largeArr: Array<string> = new Array(10000).fill('nemo');

const findNemo = (arr: Array<string>): void => {
  let t0: number = performance.now();
  for (let a of arr) {
    if (a === 'nemo') console.log('Found NENO!!');
  }
  let t1: number = performance.now();
  console.log(t1, t0, t1 - t0);
};




findNemo(largeArr);