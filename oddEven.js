/**
 
    Sample input:
    [1,3,6,8,16,17,30,39]
    Sample output:
    [false, false, true, true, true, false, true, false]


    Sample input:
    [3,4,9,15,18,19,22,26]    
    Sample output:
    [false, true, false, false, true, false, true, true]


    Dado um determinado array, construa uma função que retorne um novo array que referencie diga quais os números pares de cada posição do array.

 */

function parImpar(array) {
    const arr=[]
    for (let i=0;i<array.length;i++) {
      if (array[i]%2===0) {
        arr.push(true)
      } else {
        arr.push(false)
      }
    }
    return arr;
  }
  const array = [1,3,6,8,16,17,30,39];
  console.log(parImpar(array));




// const dat=array.map(m=>m%2==0?true:false)
//console.log(dat)

/*

1 - Fazer um loop para percorrer o array
2 - Pegar um número do array e verificar se é par
3 - 

*/


/*
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                const indexMenor = arr[j];
                arr[j] = arr[i];
                arr[i] = indexMenor;
*/



// 10 / 2 = 5 
// 4, 6, 8

// 9 / 2 = 
// 9   [2]
// 8   4
// __
// 1

// 10   [2]
// 10    5
// __
// 0

// 10 % 2 === 0
// 9 % 2 === 1

// if(10 % 2 === 0) {
//     /// entra aqui
// }