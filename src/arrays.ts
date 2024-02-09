export function sum(num1: number, num2: number): number {
  return num1 + num2;
}

export const startZeroes = (arr:number[]):number[] => {
  const newArr:number[]  = [];
  let count = 0;
  for (let i=0; i < arr.length; i ++) {
    if (arr[i] == 0)  {
      newArr[count] = 0;
      count++;
    }
  }

  for (let i =0; i < arr.length; i ++) {
    if (arr[i] != 0) {
      newArr[count] = arr[i];
      count++;
    }
  }
  
  return newArr;

}


