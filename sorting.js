// let arr = [7, 4, 5, 2];
// console.log(arr);
// function bubleSort(arr) {
//   for (let k = 0; k < arr.length - 1; k++) {
//     for (let i = 0; i < arr.length - k - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//       }
//     }
//   }
//   console.log(arr);
// }
// // function selectionSort(arr) {
// //   let temp;
// //   for (let k = 0; k < arr.length - 1; k++) {
// //     let min = k;

// //     for (let i = k + 1; i < arr.length; i++) {
// //       if (arr[i] < arr[min]) {
// //         min = i;
// //       }
// //     }
// //     temp = arr[min];
// //     arr[min] = arr[k];
// //     arr[k] = temp;
// //   }
// //   console.log(arr);
// // }
// function insertionSort(arr) {
//   for (let k = 1; k < arr.length; k++) {
//     let min = k;

//     for (let i = 0; i < k; i++) {
//       if (arr[i] > arr[k]) {
//         min = i;
//       }
//       temp = arr[min];
//       arr[min] = arr[k];
//       arr[k] = temp;
//     }
//   }

//   console.log(arr);
// }

// // selectionSort(arr);
// // bubleSort(arr);
// insertionSort(arr)
// const _mergeArrays = (a, b) => {
//     const c = []

//     while (a.length && b.length) {
//       c.push(a[0] > b[0] ? b.shift() : a.shift())
//     }

//     //if we still have values, let's add them at the end of `c`
//     while (a.length) {
//       c.push(a.shift())
//     }
//     while (b.length) {
//       c.push(b.shift())
//     }

//     return c
//   }

//   const mergeSort = (a) => {
//     if (a.length < 2) return a
//     const middle = Math.floor(a.length / 2)
//     const a_l = a.slice(0, middle)
//     const a_r = a.slice(middle, a.length)
//     const sorted_l = mergeSort(a_l)
//     const sorted_r = mergeSort(a_r)
//     return _mergeArrays(sorted_l, sorted_r)
//   }
