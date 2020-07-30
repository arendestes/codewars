// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) //  returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function (arr) {
    let zeroCount = 0;
    const zeroToEnd = arr.filter(arrValue => {
        zeroCount += arrValue === 0 ? 1 : 0;
        return arrValue !== 0;
    });
    for ( let i = 0; i < zeroCount; i++ ){
        zeroToEnd.push(0);
    };
   return zeroToEnd;
  };

  result = moveZeros([false,1,0,1,2,0,1,3,"a"]);
  console.log(result);