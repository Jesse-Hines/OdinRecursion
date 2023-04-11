function fibs(n) {
    let result = [];
    let a = 0, b = 1, temp;
  
    for (let i = 0; i < n; i++) {
      result.push(a);
      temp = a + b;
      a = b;
      b = temp;
    }
  
    return result;
  }
  
  function fibsRec(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      let result = fibsRec(n - 1);
      result.push(result[result.length - 1] + result[result.length - 2]);
      return result;
    }
  }
  
  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = Math.floor(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
  
    const sortedLeftArr = mergeSort(leftArr);
    const sortedRightArr = mergeSort(rightArr);
  
    return merge(sortedLeftArr, sortedRightArr);
  }
  
  function merge(leftArr, rightArr) {
    const resultArr = [];
  
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        resultArr.push(leftArr.shift());
      } else {
        resultArr.push(rightArr.shift());
      }
    }
  
    return resultArr.concat(leftArr, rightArr);
  }