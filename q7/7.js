var array1 = [1,2,3,4,5];
var array2 = ['a', 'b', 'c', 'd', 'e'];

var result = array1.reduce(function(arr, v, i)
 {
    return arr.concat(v, array2[i]); 
  }, []);
console .log(result);