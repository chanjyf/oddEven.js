/*
 
    Sample input:
    [1,3,6,8,16,17,30,39]
    Sample output:
    [false, false, true, true, true, false, true, false]


    Sample input:
    [3,4,9,15,18,19,22,26]    
    Sample output:
    [false, true, false, false, true, false, true, true)
 */

const array = [1,3,6,8,16,17,30,39]
function oddEven(array) {
    const arr=[]
    for (let i=0;i<array.length;i++) {
      if (array[i]%2===0) {
        arr.push(true)
      } else {
        arr.push(false)
      }
    }
    return arr
  }

  console.log(oddEven(array))

